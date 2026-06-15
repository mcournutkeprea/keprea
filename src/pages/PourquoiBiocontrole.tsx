import { Head } from "vite-react-ssg";
import { Link } from "react-router-dom";
import { Leaf, ShieldCheck, FlaskConical, TrendingUp, Bug, Sprout, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PourquoiBiocontrole = () => (
  <div className="min-h-screen bg-background flex flex-col">
    <Head>
      <title>Pourquoi le Biocontrôle ? | Agriculture Durable — Keprea</title>
      <meta
        name="description"
        content="Comprendre le biocontrôle : alternatives naturelles aux pesticides chimiques pour protéger vos cultures, préserver la biodiversité et respecter la réglementation."
      />
    </Head>
    <Navigation />

    <main className="flex-1 pt-20">
      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Pourquoi le Biocontrôle ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Face au retrait progressif des pesticides chimiques et aux exigences croissantes
            des filières et consommateurs, le biocontrôle s'impose comme la réponse
            agronomique et économique durable.
          </p>
        </div>
      </section>

      {/* Définition */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Qu'est-ce que le biocontrôle ?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le biocontrôle regroupe l'ensemble des méthodes de protection des végétaux
              utilisant des <strong className="text-foreground">mécanismes et agents naturels</strong> :
              macro-organismes auxiliaires, micro-organismes, médiateurs chimiques et substances
              naturelles d'origine végétale, animale ou minérale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Keprea développe des solutions à base d'<strong className="text-foreground">insectes élevés en France</strong>,
              exploitant leurs propriétés biologiques uniques pour créer des produits efficaces,
              traçables et conformes aux cahiers des charges agriculture biologique.
            </p>
          </div>
        </div>
      </section>

      {/* 3 raisons */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            3 raisons d'adopter le biocontrôle
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Conformité réglementaire</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plan Ecophyto 2+, retrait des substances actives critiques, exigences HVE
                et AB : le biocontrôle sécurise votre conformité aujourd'hui et demain.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Valeur commerciale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Les filières premium, grande distribution et export exigent des preuves
                de pratiques durables. Le biocontrôle est un argument de vente concret.
              </p>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Agronomie durable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Préservation des auxiliaires naturels, maintien de la biodiversité du sol,
                réduction des résidus sur les productions : des bénéfices mesurables long terme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approche Keprea */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            L'approche Keprea
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Bug,
                title: "Matière première insecte",
                desc: "Nos insectes (Hermetia illucens, vers de farine) sont élevés en France dans des conditions contrôlées, garantissant la traçabilité et la qualité constante de nos extraits."
              },
              {
                icon: FlaskConical,
                title: "Extraction innovante",
                desc: "Nos procédés d'extraction préservent les molécules actives : peptides antimicrobiens, chitine, acides aminés. Une technologie propriétaire développée à Dole (39)."
              },
              {
                icon: Sprout,
                title: "Formulations adaptées",
                desc: "Chaque produit est formulé pour une application terrain optimale : miscibilité eau, stabilité en conditions agricoles, compatibilité avec d'autres intrants."
              },
              {
                icon: Award,
                title: "Homologations & cahiers des charges",
                desc: "Nos produits répondent aux exigences de l'agriculture biologique (norme UE 2018/848) et sont développés dans le respect des bonnes pratiques phytosanitaires."
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à passer au biocontrôle ?</h2>
          <p className="text-lg opacity-90 mb-8">
            Découvrez nos gammes de solutions ou contactez-nous pour un conseil personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/solutions">
              <Button size="lg" variant="secondary">
                Voir nos solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white/20">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default PourquoiBiocontrole;
