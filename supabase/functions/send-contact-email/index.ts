import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ContactFormData = await req.json();
    
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Store in database
    const { error: dbError } = await supabase
      .from('contact_submissions')
      .insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Failed to store contact submission");
    }

    // Send email to admin
    const adminEmailResponse = await resend.emails.send({
      from: "Formulaire Contact <onboarding@resend.dev>",
      to: ["g.daoulas@keprea.com"],
      subject: `Nouveau message de contact - ${formData.firstName} ${formData.lastName}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.company ? `<p><strong>Société:</strong> ${formData.company}</p>` : ''}
        ${formData.subject ? `<p><strong>Sujet:</strong> ${formData.subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 10px 0;">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
        <hr>
        <p style="color: #666; font-size: 12px;">Ce message a été envoyé depuis le formulaire de contact du site Keprea.</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: "Keprea <onboarding@resend.dev>",
      to: [formData.email],
      subject: "Confirmation de réception - Keprea",
      html: `
        <h2>Merci pour votre message !</h2>
        <p>Bonjour ${formData.firstName},</p>
        <p>Nous avons bien reçu votre message et vous remercions de nous avoir contactés.</p>
        <p>Notre équipe examinera votre demande et vous répondra dans les plus brefs délais.</p>
        <hr>
        <p><strong>Récapitulatif de votre message :</strong></p>
        ${formData.subject ? `<p><strong>Sujet:</strong> ${formData.subject}</p>` : ''}
        <div style="border-left: 3px solid #ccc; padding-left: 15px; margin: 10px 0; color: #666;">
          ${formData.message.replace(/\n/g, '<br>')}
        </div>
        <p>Cordialement,<br>L'équipe Keprea</p>
      `,
    });

    console.log("Emails sent successfully:", { adminEmailResponse, userEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message envoyé avec succès" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Erreur lors de l'envoi du message" 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);