import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Thomas ROBERT",
  initials: "TR",
  url: "https://robtho.fr",
  location: "Paris, FR",
  locationLink: "https://www.google.com/maps/place/paris",
  description:
    "Développeur Web Full Stack, ma maîtrise de Symfony et ma curiosité technologique me permettent de donner vie à des projets innovants.",
  summary:
    "Tout a commencé en 2015, quand je me suis lancé, par passion, dans la création de **bots Discord**. De fil en aiguille, j’ai découvert le plaisir de développer des scripts variés, puis des **sites web** toujours plus complets. Chaque étape a nourri ma curiosité et renforcé mes compétences. Plus récemment, c’est l’univers fascinant de la **blockchain** qui a attiré mon attention, et que j’explore désormais avec la même envie d’apprendre.",
  avatarUrl: "./logo.png",
  skills: [
    "PHP", "Symfony", "Sulu", "Javascript", "NodeJS", "ReactJS", "AngularJS", "Solidity", "HTML", "CSS", "TailwindCSS", "Git"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/dossier-de-competences", icon: NotebookIcon, label: "Dossier de compétences" },
  ],
  contact: {
    email: "thomas1.robert1@gmail.com",
    tel: "0634670439",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/xReapex",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/robtho",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:thomas1.robert1@gmail.com",
        icon: Icons.email,
        
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Auto-entrepreneur",
      href: "",
      badges: ["Freelance"],
      location: "Remote",
      title: "Développeur Blockchain & SaaS",
      logoUrl: "./logo.png",
      start: "Nov 2023",
      end: "Present",
      description:
        "Développement de solutions SaaS en tant qu’indépendant. Apprentissage et mise en pratique de Solidity, Web3.js, Truffle et tests unitaires pour des projets blockchain personnels.",
    },
    {
      company: "Open Web Addict",
      href: "https://openwebaddict.com",
      badges: [],
      location: "Paris, France",
      title: "Développeur Symfony",
      logoUrl: "https://pbs.twimg.com/profile_images/904634350221873152/Td0sOa9U_400x400.jpg",
      start: "Avr 2023",
      end: "Oct 2023",
      description:
        "Contribution au développement de sites étatiques d’envergure. Adaptation à de nouvelles technologies et à une organisation projet exigeante. Renforcement des compétences techniques et méthodologiques.",
    },
    {
      company: "Ambika",
      href: "https://ambika.fr",
      badges: [],
      location: "Saint-Maur-Des-Fossés, France",
      title: "Développeur Drupal (Stage)",
      logoUrl: "https://pbs.twimg.com/profile_images/695628940220764161/zHz5PvY0_400x400.png",
      start: "Jun 2022",
      end: "Sep 2022",
      description:
        "Maintenance et développement de sites sous CMS Drupal. Participation à des projets en cours de réalisation.",
    },
    {
      company: "Ministère de l’Intérieur - Direction du Numérique",
      href: "https://www.interieur.gouv.fr",
      badges: [],
      location: "Paris, France",
      title: "Développeur Full Stack (Alternance)",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBZPuGnfYGpKlzhYD7TMRHyR6B0FJoA_j3g&s",
      start: "Sep 2019",
      end: "Aug 2021",
      description:
        "Développement de composants Vue.js pour la gestion des cookies sur les sites ministériels. Initiation à Symfony et découverte du fonctionnement des différentes directions. Acquisition de compétences professionnelles essentielles en entreprise.",
    }
  ]
  ,
  education: [
    {
      school: "IUT de Montreuil",
      href: "https://www.iut.univ-paris8.fr",
      degree: "Licence Professionnelle (CSID)",
      logoUrl: "https://www.profilculture-formation.com/getting/file/logo_formation/400x400/LOGO_IUT_MONTREUIL_Moyen.jpg",
      start: "2021",
      end: "2022",
    },
    {
      school: "CFA UTEC Emerainville",
      href: "https://www.utec77.fr",
      degree: "BTS SIO SLAM (Solutions Logicielles et Applications Métiers)",
      logoUrl: "https://static.wixstatic.com/media/2565f3_71ef3f3d5bcf4bb2aa1114eb03a3f135~mv2.png/v1/fill/w_1000,h_715,al_c,q_90,usm_0.66_1.00_0.01/2565f3_71ef3f3d5bcf4bb2aa1114eb03a3f135~mv2.png",
      start: "2019",
      end: "2021",
    },
    {
      school: "Lycée Langevin Wallon",
      href: "https://www.lycee-langevin-wallon.com/",
      degree: "Baccalauréat STI2D, Option SIN (Mention Assez Bien)",
      logoUrl: "https://www.lycee-langevin-wallon.com/images/marianne.png",
      start: "2016",
      end: "2019",
    },
  ]
  ,
  projects: [
    {
      title: "WorkLift - SaaS d'automatisation",
      href: "https://github.com/xReapex/n8n",
      dates: "Depuis 2025",
      active: true,
      description:
        "Avec l'émergence des logiciels d'automatisation tel que **n8n**, j'ai décidé de créer WorkLift, un SaaS **permettant aux entreprises d'executer des automatisations** prédéfinies et customisables sans connaissances techniques.",
      technologies: [
        "ExpressJS",
        "EJS",
        "NodeJS",
        "TailwindCSS",
        "n8n"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/xReapex/n8n",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blur.png",
      video:
        "",
    },
    {
      title: "VitaeAi",
      href: "https://github.com/VitaeAi",
      dates: "Depuis 2024",
      active: true,
      description:
        "VitaeAi est une **plateforme de recherche d'emploi Web3**, les offres sont **agrégées** depuis différentes sources et les outils mis en place permettent de **trier les offres par similarité avec le profil de l'utilisateur**.",
      technologies: [
        "Symfony",
        "Twig",
        "Javascript",
        "Stripe",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/VitaeAi",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/blur2.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;