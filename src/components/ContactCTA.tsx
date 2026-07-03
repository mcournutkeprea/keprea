import GradientCTA from "./GradientCTA";

const ContactCTA = () => (
  <GradientCTA
    eyebrow="Passons à l'action"
    title="Prêt à tester nos solutions sur votre exploitation ?"
    description="Nos équipes vous accompagnent de l'essai terrain à la mise en place. Réponse garantie sous 48 heures."
    primary={{ label: "Nous contacter", to: "/contact" }}
    secondary={{ label: "Voir nos solutions", to: "/solutions" }}
  />
);

export default ContactCTA;
