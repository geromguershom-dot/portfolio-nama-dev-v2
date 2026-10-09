# Portfolio — Nama Nkoa Guershom

Portfolio de développeur full-stack basé à Yaoundé : sites vitrines, applications web et e-commerce.

**Stack :** React 19 · Vite · TypeScript · Tailwind CSS 4 · wouter · déployé sur Vercel.

## Modifier le contenu

Tout le contenu (profil, projets, services, liens) est dans **`client/src/data/portfolio.ts`**.
Les champs laissés vides (`""`) sont automatiquement masqués sur le site.

- **Photo :** place `photo.jpg` dans `client/public/` puis mets `photo: "/photo.jpg"`.
- **Captures de projet :** place les images dans `client/public/projects/` puis ajoute-les dans `screenshots: [...]` du projet.
- **Nouveau projet :** copie un bloc dans `projects` et change l'`id`.

## Lancer en local

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm check    # vérification TypeScript
pnpm build    # build de production dans dist/public
```

## Déploiement (Vercel)

`vercel.json` est déjà configuré (build `vite build`, dossier `dist/public`, redirection SPA).
Chaque `git push` sur `main` redéploie automatiquement.
