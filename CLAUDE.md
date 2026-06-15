# CLAUDE.md — Keprea Site Web

> Briefing opérationnel pour Claude Code. Injecté dans chaque session.  
> Garder ce fichier court. Le contexte détaillé est dans README.md et MEMORY.md.

---

## Contexte projet

Site web de Keprea, startup de biosolutions agricoles à base d'insectes (Dole, 39).  
Refonte en cours : passer d'une carte de visite digitale à un outil commercial SEO-friendly.  
Priorité absolue : ajouter des témoignages d'agriculteurs réels.

## Au démarrage de chaque session

1. Lire `README.md` pour le contexte et l'architecture cible
2. Lire `MEMORY.md` pour les décisions produit et le backlog
3. Lire `ERRORS.md` pour les bugs connus à ne pas reproduire
4. Inspecter `package.json` et la structure du repo avant toute modification

## Stack

À détecter dans le repo (ne pas supposer). Points d'entrée probables : `package.json`, `vite.config.*`, `next.config.*`, `astro.config.*`.

## Conventions de développement

- Changements incrémentaux uniquement — ne jamais casser l'existant
- Un changement = une chose à la fois, testable isolément
- Pas d'emojis dans l'UI professionnelle
- Contenu textuel indexable (pas de texte important dans des images ou vidéos)
- Vérifier le rendu mobile à 375px pour tout composant modifié
- ALT text sur toutes les images
- Attribut `poster` obligatoire sur toutes les balises `<video>`

## Règles SEO

- Balise `<title>` unique et descriptive sur chaque page (50-60 caractères)
- Meta `description` sur chaque page (150-160 caractères)
- Hiérarchie Hn respectée (un seul H1 par page)
- URLs en kebab-case, en français, descriptives

## Règles RGPD

- Pas de tracking sans consentement explicite
- Bandeau cookies avec opt-in requis
- Formulaires : case à cocher RGPD non pré-cochée obligatoire
- Mentions légales et politique de confidentialité accessibles depuis le footer

## Ne jamais faire

- Supprimer du contenu existant sans confirmation explicite
- Modifier les URLs existantes sans vérifier l'impact SEO (redirections 301)
- Laisser des `console.log` en production
- Introduire des dépendances non justifiées
- Ignorer les erreurs dans `ERRORS.md` ou oublier d'y documenter toute nouvelle erreur
- Ne pas mettre à jour `ERRORS.md` et `MEMORY.md` après chaque modification du code

## Limites de longueur (strictes)

CLAUDE.md ≤ 60 lignes · MEMORY.md ≤ 150 lignes · ERRORS.md ≤ 200 lignes — compresser avant d'ajouter si atteinte.
