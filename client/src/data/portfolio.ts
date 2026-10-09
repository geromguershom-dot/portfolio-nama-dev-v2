/**
 * ============================================================
 *  TOUT LE CONTENU DU PORTFOLIO SE MODIFIE ICI
 * ============================================================
 * Les champs laissés vides ("") sont automatiquement masqués sur le site :
 * aucune fausse information n'est affichée.
 *
 * À COMPLÉTER (voir les "TODO") : email, WhatsApp, LinkedIn, ComeUp,
 * photo, liens des projets en ligne.
 */

export const profile = {
  name: "Nama Nkoa Guershom",
  shortName: "Gerom",
  role: "Développeur Full-Stack",
  location: "Yaoundé, Cameroun",
  availability: "Disponible pour de nouveaux projets",
  tagline:
    "Je conçois des sites et applications web modernes pour les entreprises et entrepreneurs qui veulent être visibles et efficaces en ligne.",
  bio: "Développeur full-stack basé à Yaoundé, formé à Localhost Academy (stack MERN : MongoDB, Express, React, Node.js) et diplômé en août 2026 avec la mention excellente. Je réalise des sites vitrines, des applications web et des boutiques en ligne pour des clients locaux et à distance, de la maquette jusqu'à la mise en ligne.",

  // TODO — à remplir (laisser "" pour masquer)
  email: "",
  whatsapp: "", // format international sans + ni espaces, ex. "2376XXXXXXXX"
  linkedin: "", // ex. "https://www.linkedin.com/in/ton-profil"
  comeup: "", // lien complet de ton profil ComeUp
  photo: "", // ex. "/photo.jpg" (fichier à placer dans client/public/)

  github: "https://github.com/geromguershom-dot",
  fiverr: "https://www.fiverr.com/guershom_",
  website: "",
};

export type Category = "Site vitrine" | "E-commerce" | "Application";

export type Project = {
  id: string;
  title: string;
  category: Category;
  kind: string; // description courte du type de projet
  year?: string;
  description: string;
  client?: string;
  role: string;
  stack: string[];
  cover: string;
  /** Captures d'écran réelles (à placer dans client/public/projects/) */
  screenshots?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "maestro-solutions",
    title: "Maestro Solutions",
    category: "Site vitrine",
    kind: "Site vitrine — climatisation & plomberie",
    year: "2026",
    client: "Salomon Fotso — Calor & Frío, Yaoundé",
    description:
      "Site professionnel pour une entreprise de climatisation et de plomberie de Yaoundé forte de 15 ans d'expérience : présentation des services, galerie et prise de contact. Mon premier projet client rémunéré.",
    role: "Conception, développement et mise en ligne",
    stack: ["React", "Vite", "Tailwind CSS", "Vercel"],
    cover: "/projects/maestro-solutions.svg",
    liveUrl: "https://maestro-solutions-calor-frio.vercel.app",
    repoUrl: "", // TODO
  },
  {
    id: "devlearn",
    title: "DevLearn",
    category: "Application",
    kind: "Plateforme e-learning full-stack (MERN)",
    year: "2026",
    description:
      "Plateforme de tutoriels vidéo pour étudiants, avec authentification multi-rôles, envoi de vidéos et suivi. Projet de fin de formation, soutenu en août 2026.",
    role: "Conception et développement full-stack",
    stack: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT", "Cloudinary", "Vercel", "Render"],
    cover: "/projects/devlearn.svg",
    liveUrl: "", // TODO
    repoUrl: "", // TODO
  },
  {
    id: "nutrition-market",
    title: "Nutrition & Market",
    category: "Site vitrine",
    kind: "Site multi-pages — bien-être & nature",
    description:
      "Site complet de 11 pages, blog inclus, avec une identité verte inspirée de la nature. Construit sans outil de build lourd, donc léger et rapide, avec un système de templates Python pour garder le code maintenable.",
    role: "Conception et développement",
    stack: ["HTML", "CSS", "JavaScript", "Python (templates)"],
    cover: "/projects/nutrition-market.svg",
    liveUrl: "", // TODO
    repoUrl: "", // TODO
  },
  {
    id: "bizflow-dashboard",
    title: "BizFlow Dashboard",
    category: "Application",
    kind: "Tableau de bord SaaS multi-rôles",
    description:
      "Tableau de bord de gestion pour suivre factures, clients et revenus, avec des accès différents selon le rôle de l'utilisateur.",
    role: "Conception et développement front-end",
    stack: ["React", "Vite"],
    cover: "/projects/bizflow.svg",
    liveUrl: "", // TODO
    repoUrl: "", // TODO
  },
  {
    id: "luxeshop",
    title: "LuxeShop",
    category: "E-commerce",
    kind: "Boutique en ligne full-stack (MERN)",
    description:
      "Application e-commerce complète : catalogue produits, panier, comptes utilisateurs et espace d'administration.",
    role: "Conception et développement full-stack",
    stack: ["React", "Node.js", "Express", "MongoDB", "Vercel"],
    cover: "/projects/luxeshop.svg",
    liveUrl: "", // TODO
    repoUrl: "", // TODO
  },
];

export const categories: Category[] = ["Site vitrine", "E-commerce", "Application"];

export const services = [
  {
    title: "Sites vitrines",
    text: "Un site rapide, clair et adapté au mobile pour présenter votre activité, vos services et vos réalisations, et vous faire contacter facilement.",
    tags: "React · Tailwind · Responsive",
  },
  {
    title: "Applications web",
    text: "Des applications complètes avec comptes utilisateurs, API, base de données et tableaux de bord sur mesure.",
    tags: "Node.js · Express · MongoDB",
  },
  {
    title: "E-commerce",
    text: "Une boutique pour présenter vos produits, recevoir des commandes et les gérer depuis un espace d'administration simple.",
    tags: "Catalogue · Panier · Admin",
  },
  {
    title: "Mise en ligne & suivi",
    text: "Hébergement, nom de domaine et mise en production, pour que votre site soit en ligne et fonctionne sans souci.",
    tags: "Vercel · Render · MongoDB Atlas",
  },
];

export const process = [
  { title: "Échange", text: "Comprendre votre activité, vos clients et ce que le site doit vous apporter." },
  { title: "Maquette", text: "Valider ensemble la structure et le design avant d'écrire le code." },
  { title: "Développement", text: "Construire un site solide, rapide et adapté au mobile." },
  { title: "Livraison", text: "Mettre en ligne, tester sur de vrais appareils et vous accompagner après." },
];

export const skills = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "REST API",
  "JWT / authentification",
  "Tailwind CSS",
  "Git / GitHub",
  "Vercel · Render",
  "Cloudinary",
];

export const timeline = [
  {
    label: "Août 2026",
    title: "Diplôme — Localhost Academy",
    text: "Formation JavaScript full-stack (stack MERN), sortie de promotion avec la mention excellente.",
  },
  {
    label: "Freelance",
    title: "Sites web pour clients locaux",
    text: "Réalisation de sites pour des entreprises de Yaoundé, de la maquette à la mise en ligne. Profils actifs sur Fiverr et ComeUp.",
  },
];

export type Channel = { id: string; label: string; href: string; handle: string };

export const channels: Channel[] = [
  { id: "email", label: "Email", href: profile.email ? `mailto:${profile.email}` : "", handle: profile.email },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: profile.whatsapp ? `https://wa.me/${profile.whatsapp}` : "",
    handle: profile.whatsapp ? `+${profile.whatsapp}` : "",
  },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, handle: "Profil LinkedIn" },
  { id: "github", label: "GitHub", href: profile.github, handle: "geromguershom-dot" },
  { id: "fiverr", label: "Fiverr", href: profile.fiverr, handle: "@guershom_" },
  { id: "comeup", label: "ComeUp", href: profile.comeup, handle: "GeromGuershom" },
].filter((channel) => Boolean(channel.href));

const nameParts = profile.name.split(" ").filter(Boolean);
export const initials = `${nameParts[0]?.[0] ?? ""}${nameParts[nameParts.length - 1]?.[0] ?? ""}`.toUpperCase();

export const getProject = (id: string) => projects.find((project) => project.id === id);
