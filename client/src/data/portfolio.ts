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
  email: "geromguershom@gmail.com",
  whatsapp: "237682091580", // format international sans + ni espaces
  linkedin: "https://www.linkedin.com/in/gerom-guershom-4802203b9",
  comeup: "", // lien complet de ton profil ComeUp
  photo: "/photo.webp", // fichier dans client/public/

  github: "https://github.com/geromguershom-dot",
  fiverr: "", // TODO — remets https://www.fiverr.com/guershom_ quand ton profil est en ligne
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
    kind: "Site vitrine — climatisation, froid & plomberie",
    year: "2026",
    client: "Salomon Fotso — Calor & Frío, Yaoundé",
    description:
      "Site professionnel pour une entreprise de climatisation, froid industriel, électricité et plomberie de Yaoundé, forte de 15 ans d'expérience : services, réalisations, formations, avis clients et demande de devis. Mon premier projet client rémunéré.",
    role: "Conception, développement et mise en ligne",
    stack: ["React", "Vite", "Tailwind CSS", "Vercel"],
    cover: "/projects/maestro-solutions-1.webp",
    screenshots: ["/projects/maestro-solutions-1.webp", "/projects/maestro-solutions-2.webp", "/projects/maestro-solutions-3.webp"],
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
      "Plateforme d'apprentissage en ligne : tutoriels vidéo, quiz, forum d'échange entre étudiants et enseignants et suivi de la progression, avec authentification multi-rôles. Projet de fin de formation, soutenu en août 2026.",
    role: "Conception et développement full-stack",
    stack: ["React", "Node.js", "Express", "MongoDB Atlas", "JWT", "Cloudinary", "Vercel", "Render"],
    cover: "/projects/devlearn-1.webp",
    screenshots: ["/projects/devlearn-1.webp", "/projects/devlearn-2.webp"],
    liveUrl: "", // TODO
    repoUrl: "", // TODO
  },
    {
    id: "nutrition-market",
    title: "Nutrition & Market",
    category: "Site vitrine",
    kind: "Site de démonstration multi-pages — santé & nutrition",
    year: "2026",
    description:
      "Projet de démonstration pensé pour les pharmacies et les commerces de santé : 12 pages (boutique, conseils, formations, annonces, blog, contact), un panier dont la commande part directement sur WhatsApp, et une identité verte avec logo sur mesure. Léger et rapide : HTML, CSS et JavaScript natifs, avec un petit générateur de pages en Python pour garder le code maintenable.",
    role: "Conception, logo et développement",
    stack: ["HTML", "CSS", "JavaScript", "Python (génération des pages)", "Vercel"],
    cover: "/projects/nutrition-market-1.webp",
    screenshots: [
      "/projects/nutrition-market-1.webp",
      "/projects/nutrition-market-2.webp",
      "/projects/nutrition-market-3.webp",
    ],
    liveUrl: "https://nutrition-market-c2rp.vercel.app",
    repoUrl: "https://github.com/geromguershom-dot/nutrition-market",
  },
  {
    id: "batirium",
    title: "Batirium",
    category: "Site vitrine",
    kind: "Site de démonstration — construction & architecture",
    year: "2026",
    description:
      "Projet de démonstration pour une entreprise de construction et d'architecture : un site multi-pages au design éditorial (accueil plein écran, études de cas, agence, contact), avec transitions entre les pages, filtres de projets et un second micro-site autonome pour un studio de coiffure. Sans framework : HTML, CSS et JavaScript natifs, responsive et rapide.",
    role: "Conception et développement",
    stack: ["HTML", "CSS", "JavaScript", "Vercel"],
    cover: "/projects/batirium-1.webp",
    screenshots: [
      "/projects/batirium-1.webp",
      "/projects/batirium-2.webp",
      "/projects/batirium-3.webp",
    ],
    liveUrl: "", // TODO — adresse Vercel de Batirium
    repoUrl: "https://github.com/geromguershom-dot/batirium",
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
    icon: "layout",
    title: "Sites vitrines",
    text: "Un site rapide et clair pour présenter votre activité et vous faire contacter facilement.",
    points: ["Design adapté au mobile", "Pages services et réalisations", "Contact direct par WhatsApp", "Mise en ligne incluse"],
  },
  {
    icon: "server",
    title: "Applications web",
    text: "Des applications complètes avec comptes utilisateurs, base de données et tableaux de bord sur mesure.",
    points: ["Comptes et rôles (JWT)", "API Node.js / Express", "Base de données MongoDB", "Tableaux de bord"],
  },
  {
    icon: "cart",
    title: "E-commerce",
    text: "Une boutique pour présenter vos produits et gérer vos commandes depuis un espace simple.",
    points: ["Catalogue de produits", "Panier et commandes", "Espace d'administration", "Adapté au mobile"],
  },
  {
    icon: "rocket",
    title: "Mise en ligne & suivi",
    text: "Hébergement et mise en production, pour que votre site soit en ligne et fonctionne sans souci.",
    points: ["Hébergement Vercel / Render", "Nom de domaine", "Base de données cloud", "Accompagnement après livraison"],
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
    text: "Réalisation de sites pour des entreprises de Yaoundé, de la maquette à la mise en ligne.",
  },
];

export const stats = [
  { value: String(projects.length).padStart(2, "0"), label: "Projets présentés" },
  { value: "MERN", label: "Stack principale" },
  { value: "2026", label: "Diplômé, mention excellente" },
  { value: "Yaoundé", label: "Basé au Cameroun, disponible à distance" },
];

export const faq = [
  {
    q: "Quels types de projets réalisez-vous ?",
    a: "Des sites vitrines, des applications web full-stack (comptes utilisateurs, base de données, tableaux de bord) et des boutiques en ligne, pour des entreprises locales comme pour des clients à distance.",
  },
  {
    q: "Comment se déroule une collaboration ?",
    a: "Nous échangeons d'abord sur votre activité et vos objectifs, je vous propose une maquette à valider, puis je développe le site, je le mets en ligne et je vous accompagne après la livraison.",
  },
  {
    q: "Travaillez-vous à distance ?",
    a: "Oui. Je suis basé à Yaoundé et je travaille avec des clients locaux comme à distance, par WhatsApp, email ou appel.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Décrivez-moi votre projet depuis la page Contact (WhatsApp ou email) et je reviens vers vous avec une proposition adaptée.",
  },
  // TODO — ajoute ici tes réponses sur les délais et les tarifs si tu veux les afficher.
];

export type Testimonial = { quote: string; author: string; role: string };

/** TODO — ajoute de vrais témoignages de clients : la section n'apparaît que s'il y en a. */
export const testimonials: Testimonial[] = [];

export type Channel = { id: string; label: string; href: string; handle: string };

const formatPhone = (number: string) =>
  number.startsWith("237") && number.length === 12
    ? `+237 ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8, 10)} ${number.slice(10, 12)}`
    : number
      ? `+${number}`
      : "";

export const channels: Channel[] = [
  { id: "email", label: "Email", href: profile.email ? `mailto:${profile.email}` : "", handle: profile.email },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: profile.whatsapp ? `https://wa.me/${profile.whatsapp}` : "",
    handle: formatPhone(profile.whatsapp),
  },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, handle: "gerom-guershom" },
  { id: "github", label: "GitHub", href: profile.github, handle: "geromguershom-dot" },
  { id: "fiverr", label: "Fiverr", href: profile.fiverr, handle: "@guershom_" },
  { id: "comeup", label: "ComeUp", href: profile.comeup, handle: "GeromGuershom" },
].filter((channel) => Boolean(channel.href));

const nameParts = profile.name.split(" ").filter(Boolean);
export const initials = `${nameParts[0]?.[0] ?? ""}${nameParts[nameParts.length - 1]?.[0] ?? ""}`.toUpperCase();

export const getProject = (id: string) => projects.find((project) => project.id === id);
