# Keprea — Refonte du site web

> Document destiné aux humains (développeurs, contributeurs, collaborateurs).  
> Pour le contexte agent, voir CLAUDE.md. Pour la mémoire stratégique, voir MEMORY.md.

---

## Présentation du projet

**Keprea** est une startup agricole fondée en 2025 à Dole (Jura, France), spécialisée dans les **biosolutions à base d'insectes** pour l'agriculture. Son offre couvre quatre catégories :

- **Bioprotection** — protection biologique des cultures
- **Biopesticides** — alternatives aux pesticides chimiques
- **Boosters** — stimulateurs de croissance et de défenses naturelles
- **Biofertilisant** — fertilisation organique d'origine insecte

L'objectif de cette refonte est de **faire passer le site d'une carte de visite digitale à un outil commercial crédible**, SEO-friendly et orienté conversion.

---

## Objectifs de la refonte

1. Crédibiliser l'offre auprès des agriculteurs et distributeurs
2. Structurer un parcours de conversion clair (découverte → conviction → contact)
3. Rendre le site indexable et référenceable (SEO technique + contenu)
4. Intégrer des preuves sociales réelles (témoignages agriculteurs — levier n°1)
5. Mettre en conformité RGPD (mentions légales, consentement cookies, politique de confidentialité)
6. Migrer vers une stack maintenable (GitHub + Vercel + Claude Code)

---

## Architecture cible (pages à créer)

| URL | Contenu |
|-----|---------|
| `/` | Accueil — storytelling en 7 étapes, CTA visibles, preuves sociales |
| `/solutions/` | Hub des 4 gammes produits |
| `/solutions/bioprotection/` | Page produit enrichie |
| `/solutions/biopesticides/` | Page produit enrichie |
| `/solutions/boosters/` | Page produit enrichie |
| `/solutions/biofertilisant/` | Page produit enrichie |
| `/pourquoi-le-biocontrole/` | Page pédagogique — argumentaire biocontrôle |
| `/qui-sommes-nous/` | Équipe, histoire, valeurs, mission |
| `/notre-production/` | Process de production (responsive) |
| `/ressources/` | Blog, fiches techniques téléchargeables, newsletter |
| `/contact/` | Formulaire simplifié + consentement RGPD explicite |
| `/mentions-legales/` | Mentions légales obligatoires |
| `/politique-confidentialite/` | Politique de confidentialité RGPD |

---

## Phases de travail

### Phase 0 — Corrections urgentes (avant toute migration)
- Supprimer le badge « Edit with Lovable »
- Corriger la faute « une meilleur performance »
- Corriger l'emoji cassé `ð` et supprimer les emojis non professionnels de l'UI
- Déduplication des cartes valeurs
- Ajouter `poster` aux balises `<video>` pour éviter les écrans blancs

### Phase 1 — Fondations (sur le site actuel)
- Ajouter mentions légales et politique de confidentialité
- Intégrer un bandeau de consentement cookies RGPD
- Rendre les CTA visibles et contrastés
- Améliorer le formulaire de contact (champs minimaux + RGPD)
- Commencer à collecter des témoignages agriculteurs

### Phase 2 — Architecture (après migration GitHub/Vercel)
- Implémenter les nouvelles pages selon l'architecture cible
- Créer les pages produits enrichies avec fiches techniques
- Construire la page « Pourquoi le biocontrôle ? »
- Intégrer les preuves sociales (témoignages, logos partenaires)
- Mettre en place le maillage interne
- Configurer Google Analytics et Google Search Console

### Phase 3 — Croissance
- Lancer le blog/ressources avec contenus SEO
- Activer les fiches techniques téléchargeables
- Déployer la newsletter
- Optimiser selon les métriques de performance

---

## Critères de succès (à 6 mois)

- Taux de rebond < 60 %
- Temps moyen sur site > 2 minutes
- Nombre de formulaires soumis × 3
- > 3 pages vues par session
- Croissance du trafic organique à partir du mois 3
- > 20 téléchargements de fiches techniques / mois
- > 50 abonnés newsletter en 3 mois

---

## Installation & développement

> ⚠️ Ces instructions sont à compléter après inspection du dépôt Git.

```bash
# Cloner le dépôt
git clone <repo-url>
cd keprea-site

# Installer les dépendances (adapter selon la stack détectée)
npm install

# Lancer en développement
npm run dev

# Build de production
npm run build
```

**Stack supposée** : à détecter en inspectant `package.json` et la structure du projet.  
Voir CLAUDE.md pour les conventions de développement à respecter.

---

## Ressources clés

- Rapport complet : « Stratégie & Refonte du Site Web Keprea — Juin 2026 »
- Mémoire stratégique : `MEMORY.md`
- Erreurs connues : `ERRORS.md`
- Briefing agent : `CLAUDE.md`
