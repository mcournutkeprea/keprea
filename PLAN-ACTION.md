# Plan d'action — Refonte du site web Keprea

> Établi le 15 juin 2026 à partir de `README.md`, `MEMORY.md`, `ERRORS.md`, `CLAUDE.md` et de l'inspection du dépôt.
> Objectif : faire passer le site d'une carte de visite digitale à un outil commercial crédible, SEO-friendly et orienté conversion.

---

## 1. État des lieux technique (constaté dans le dépôt)

La refonte ne part pas de zéro : il existe une application React fonctionnelle qu'il faut faire évoluer, pas reconstruire.

**Stack réelle détectée :**

- **Build** : Vite 5 + TypeScript 5.8
- **Framework** : React 18 (SPA, rendu côté client uniquement)
- **UI** : shadcn/ui + Radix + Tailwind 3.4 + `tailwindcss-animate`
- **Routing** : `react-router-dom` 6 (présent mais site mono-page aujourd'hui)
- **Formulaires** : `react-hook-form` + `zod` (déjà en place — bon socle)
- **Backend formulaire** : fonction Supabase `send-contact-email` (edge function existante)
- **Cartes** : Leaflet + Mapbox (composants `FranceMap`, `MapFrance`)
- **i18n** : assets déclinés en FR/EN/DE/ES/PT (infographies) + `LanguageSelector`
- **Origine** : `lovable-tagger` dans `vite.config.ts` et `package.json` → reliquats Lovable à nettoyer

**Composants existants** (`src/components/`) : `Hero`, `Solutions`, `Production`, `Team`, `About`, `Innovation`, `Contact`, `ContactForm`, `Navigation`, `ProductsSchema`, `LanguageSelector`, maps. Le contenu est donc déjà sectionné — il faudra le **redistribuer en pages routées**, pas le réécrire.

### Le point d'architecture le plus important

Le site est une **SPA en rendu client**. C'est le frein SEO majeur : Google indexe mal le contenu injecté en JavaScript, et l'architecture cible à 12 URLs n'aura pas de valeur SEO sans HTML servi en amont. Deux options se présentent (décision à trancher en Phase 2, voir §6) :

- **A — Pré-rendu statique** (`vite-plugin-ssg` / `vite-react-ssg`) : on garde Vite et React, on génère du HTML statique par route. Migration légère, compatible Vercel. **Recommandé.**
- **B — Migration vers un framework SSG/SSR** (Next.js ou Astro) : SEO optimal mais réécriture lourde. À ne retenir que si le blog Phase 3 prend de l'ampleur.

---

## 2. Principes directeurs (rappel CLAUDE.md)

Ces règles encadrent **chaque** modification :

- Changements **incrémentaux** : une chose à la fois, testable isolément — ne jamais casser l'existant.
- Pas de suppression de contenu existant sans confirmation explicite.
- Pas de modification d'URL sans **redirection 301** (préservation du SEO acquis).
- Vérifier le rendu **mobile à 375px** sur tout composant touché.
- `alt` sur toutes les images, `poster` sur toutes les `<video>`, pas d'emoji dans l'UI.
- Contenu important **toujours en HTML indexable**, jamais enfermé dans une image/vidéo.
- Toute nouvelle erreur découverte → entrée dans `ERRORS.md`.

---

## 3. Phase 0 — Corrections urgentes (1 à 2 jours)

Nettoyage immédiat, faisable sur le site actuel, avant toute migration. Aucun risque architectural.

| # | Action | Fichiers probables | Critère de fin |
|---|--------|--------------------|----------------|
| 0.1 | Supprimer le badge « Edit with Lovable » et `lovable-tagger` | `vite.config.ts`, `package.json`, `index.html` | Plus aucune trace Lovable au build prod |
| 0.2 | Corriger « une meilleur**e** performance » | grep `meilleur performance` dans `src/` | Texte corrigé |
| 0.3 | Supprimer l'emoji cassé `ð` | grep `ð` dans `src/` | Caractère retiré/remplacé |
| 0.4 | Retirer les emojis non pro (coccinelle…) → icônes SVG (`lucide-react` déjà dispo) | composants concernés | UI sobre, ton B2B |
| 0.5 | Dédupliquer les cartes valeurs | `About.tsx` / `Innovation.tsx` (à confirmer) | Une seule occurrence |

**Livrable :** un site visuellement propre et professionnel, sans régression. Chaque correction = 1 commit isolé.

---

## 4. Phase 1 — Fondations légales & conversion (3 à 5 jours)

Réalisable sur le site actuel. Met le site en conformité et améliore la conversion sans attendre la nouvelle architecture.

**Conformité RGPD (obligation légale) :**

- Créer **Mentions légales** : éditeur, SIRET, capital social, hébergeur, directeur de publication.
- Créer **Politique de confidentialité** : données collectées, finalités, durée, droits (accès, rectification, suppression).
- Intégrer un **bandeau de consentement cookies** (opt-in, case non pré-cochée). Aucun script analytics ne se charge avant consentement. Options : Axeptio, Cookiebot, ou implémentation custom légère.
- **Footer complet** : liens légaux, navigation secondaire, contact, réseaux sociaux (aujourd'hui absent/incomplet).

**Conversion :**

- Simplifier le **formulaire de contact** à 5 champs max : Prénom, Entreprise, Email, Message, case RGPD non pré-cochée. Le socle `react-hook-form` + `zod` est déjà là ; vérifier la fonction Supabase `send-contact-email`.
- Rendre les **CTA contrastés et visibles** (ratio WCAG AA ≥ 4.5:1), texte explicite (éviter « En savoir plus »).
- Ajouter l'attribut **`poster`** à toutes les `<video>` (évite l'écran blanc).

**Mesure :**

- Préparer GA4 (déclenché **après** consentement) et vérifier le site dans Google Search Console.

**Collecte (à lancer en parallèle, sans code) :**

- **Démarrer dès maintenant la collecte de témoignages agriculteurs** — c'est le levier n°1 et le délai d'obtention est long. Voir §7.

**Livrable :** site conforme RGPD, formulaire optimisé, CTA efficaces, mesure d'audience en place.

---

## 5. Phase 2 — Architecture multi-pages & SEO (10 à 15 jours)

Cœur de la refonte. À mener **après** migration vers GitHub + Vercel.

### 5.1 Migration infrastructure (prérequis)

- Documenter `.env` **avant** migration (risque de perte de config Supabase/Mapbox).
- Pousser le dépôt sur GitHub, connecter Vercel (déploiements automatiques par PR).
- Valider un premier déploiement iso-fonctionnel avant d'ajouter des pages.

### 5.2 Décision de rendu

Trancher A (pré-rendu Vite, recommandé) vs B (Next/Astro) — voir §1 et §6. Sans cette brique, les pages SEO n'auront pas d'effet.

### 5.3 Mise en place des 12 routes cibles

URLs en kebab-case, français, descriptives. Redirections **301** depuis toute URL existante modifiée.

```
/                           Accueil — storytelling 7 étapes, CTA, preuves sociales
/solutions/                 Hub des 4 gammes
/solutions/bioprotection/   Page produit enrichie
/solutions/biopesticides/   Page produit enrichie
/solutions/boosters/        Page produit enrichie
/solutions/biofertilisant/  Page produit enrichie
/pourquoi-le-biocontrole/   Page pédagogique SEO
/qui-sommes-nous/           Équipe, histoire, valeurs, mission
/notre-production/          Process de production (responsive)
/ressources/                Blog, fiches techniques, newsletter
/contact/                   Formulaire simplifié RGPD
/mentions-legales/
/politique-confidentialite/
```

### 5.4 Contenu & SEO technique

- **Pages produits enrichies** (contre le thin content) : description, mode d'emploi, cultures cibles, témoignages, FAQ, fiche technique téléchargeable.
- Créer la page **« Pourquoi le biocontrôle ? »** (argumentaire pédagogique, requêtes longue traîne).
- **Sortir le contenu clé des images/vidéos** vers du HTML indexable (ou, a minima, `alt` exhaustifs).
- `<title>` unique (50-60 car.) et meta `description` (150-160 car.) **par page**.
- Hiérarchie Hn : **un seul H1 par page**.
- **Maillage interne** entre pages produits, pédagogie et accueil.
- Rendre le **schéma de production responsive** (SVG mobile-first ou scroll horizontal contrôlé).
- Intégrer les **preuves sociales** : témoignages, logos partenaires/clients.
- Générer `sitemap.xml` + `robots.txt`, soumettre le sitemap à la Search Console.

**Livrable :** site multi-pages indexable, pages produits crédibles, parcours de conversion complet.

---

## 6. Phase 3 — Croissance (en continu, après mise en ligne)

- Lancer le **blog/ressources** avec contenus SEO (requêtes longue traîne agricoles).
- Activer les **fiches techniques PDF téléchargeables** (objectif > 20 dl/mois).
- Déployer la **newsletter** (objectif > 50 abonnés en 3 mois).
- Itérer selon les métriques (voir §8).

---

## 7. Chantier transversal prioritaire — Témoignages agriculteurs

Identifié comme **levier n°1** de conversion, et le plus long à produire. À démarrer en Phase 1, à intégrer en Phase 2.

- Identifier 3 à 5 agriculteurs/coopératives utilisateurs satisfaits.
- Recueillir : verbatim texte + photo (idéalement vidéo courte avec `poster`).
- Format : nom, exploitation, culture, problème → solution Keprea → résultat chiffré si possible.
- Obtenir l'**accord écrit** de diffusion (image + propos).
- Intégrer sur l'accueil et au pied de chaque page produit concernée.

---

## 8. Critères de succès (horizon 6 mois)

| Métrique | Cible |
|----------|-------|
| Taux de rebond | < 60 % |
| Temps moyen sur site | > 2 min |
| Formulaires soumis | × 3 vs baseline |
| Pages vues / session | > 3 |
| Trafic organique | Croissance dès M+3 |
| Téléchargements fiches techniques | > 20 / mois |
| Abonnés newsletter | > 50 en 3 mois |

---

## 9. Risques à surveiller (rappel ERRORS.md)

- **`.env` non documenté** avant migration → perte de config Supabase/Mapbox.
- **URL modifiée sans 301** → perte de juice SEO.
- **Reliquats Lovable** persistant après nettoyage (vérifier styles + composants).
- **CORS/API** : vérifier les headers de la fonction Supabase en production.
- **Cache Vercel** non invalidé → version obsolète servie après déploiement.

---

## 10. Séquencement recommandé

1. **Phase 0** maintenant (rapide, sans risque) — *et lancer la collecte de témoignages en parallèle*.
2. **Phase 1** sur le site actuel (conformité légale = priorité, ne dépend de rien).
3. **Migration GitHub/Vercel** + décision de rendu (§5.2).
4. **Phase 2** : architecture, contenu, SEO technique.
5. **Phase 3** : croissance en continu, pilotée par les métriques.

> Prochaine étape concrète suggérée : attaquer la Phase 0 (5 corrections isolées, un commit chacune). Je peux les implémenter dès que tu valides.
