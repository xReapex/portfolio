import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Dossier de Compétences",
  description: "Développeur Web Full-Stack - Dossier de compétences détaillé avec formation et références projets.",
};

const BLUR_FADE_DELAY = 0.04;

const technicalSkills = {
  "Systèmes": ["Windows", "Distributions Linux (Ubuntu, Debian, Tails)"],
  "Langages": ["PHP", "NodeJS", "HTML", "CSS", "JavaScript", "Solidity"],
  "Frameworks": ["Symfony", "Sulu", "Twig", "Angular", "ReactJS", "Drupal", "TailwindCSS"],
  "Progiciels": ["Visual Studio Code", "PhpStorm", "WAMP"],
  "SGBDR": ["PostgreSQL", "MySQL", "HeidiSQL"],
  "Langues": ["Français courant", "Anglais technique", "Espagnol basique", "Russe basique"]
};

const functionalSkills = [
  {
    category: "Programmation",
    skills: [
      "Développement orienté objet (POO) – architecture MVC",
      "Développement et maintenance de sites web (CMS, SaaS, applications métiers)",
      "Intégration d'&apos;'API REST et mise en place de microservices",
      "Développement Blockchain (Solidity, Web3.js, Truffle, smart contracts)",
      "Tests unitaires & bonnes pratiques de qualité du code"
    ]
  },
  {
    category: "Méthodologie & organisation",
    skills: [
      "Conception et modélisation logicielle (UML, architecture logicielle)",
      "Méthodologies agiles",
      "Gestion de projet web (suivi, adaptation à des environnements complexes)"
    ]
  }
];

const projects = [
  {
    company: "Worklift",
    period: "2025",
    role: "Projet Personnel – Code Propriétaire",
    description: "Worklift : Agence et logiciel d&apos;automatisation Web",
    domains: [
      "Création d'un logiciel web pour exécuter des automatisations customisées via API sans besoin de connaissances techniques pour le client"
    ],
    environment: [
      "ExpressJS, EJS, n8n API, MySQL, TailwindCSS",
      "Progiciels: Trae"
    ]
  },
  {
    company: "VitaeAI",
    period: "2024",
    role: "Projet Personnel – Code Propriétaire",
    description: "VitaeAI : Jobboard Web3 agrégateur avec correspondance et analyse de profil par CV",
    domains: [
      "Création d'un logiciel web d&apos;annonces d&apos;emplois orienté web3",
      "Agrégation des offres d&apos;emplois depuis divers sites",
      "Outils d&apos;analyse de CV par IA",
      "Mise en correspondance des CV avec les offres"
    ],
    environment: [
      "Symfony, Twig, NodeJS, StripeAPI, MistralAI API, MySQL, TailwindCSS",
      "Progiciels: Visual Studio Code"
    ]
  },
  {
    company: "Open Web Addict",
    period: "Avril 2023 – Octobre 2023",
    role: "Développeur Symfony",
    description: "Open Web Addict : Société de création de site Internet.",
    domains: [
      "Méthodologie : Points journaliers, Slack",
      "Maintenance et amélioration du site « masecurite.interieur.gouv.fr » ainsi que d&apos;un site Internet du Ministère de l&apos;Intérieur"
    ],
    environment: [
      "Architecture MVC, Symfony, StimulusJS, Twig, PostgreSQL",
      "Progiciels: Visual Studio Code"
    ]
  },
  {
    company: "Ambika",
    period: "Juin 2022 – Septembre 2022",
    role: "Stage développeur Drupal",
    description: "Ambika : Société de création, maintenance et hébergement de site Drupal depuis 2005.",
    domains: [
      "Méthodologie : Agilité (Réunions début/fin semaine)",
      "Création d&apos;une solution d&apos;uniformisation de visuels pour un site de vins avec l&apos;utilisation de l&apos;API Drupal",
      "Outillage mis en place pour : Librairie PHP (imagick), Module Drupal",
      "Remplacement du système de génération de Sprites CSS pour tous les sites d&apos;Ambika (package déprécié)",
      "Outillage mis en place pour : Packages JS (gulp / gulp.spritesmith)"
    ],
    environment: [
      "Architecture MVC, CMS Drupal, Ubuntu, librairies PHP et JS open sources",
      "Progiciels: Visual Studio Code"
    ]
  },
  {
    company: "Ministère de l&apos;Intérieur",
    period: "Septembre 2019 – Septembre 2021",
    role: "Développeur Web Full Stack en alternance",
    description: "",
    domains: [
      "Méthodologie : Agilité (Sprint, Réunions)",
      "Montée en compétence sur PHP / Symfony",
      "Participation à la résolution de tickets sur un des sites du ministère",
      "Création d&apos;un portfolio à l&apos;aide de Symfony avec différents composants :",
      "• Requêtes API avec HttpClient sur l&apos;API de Github (récupération de données de projets)",
      "• Test d&apos;une création d&apos;API publique avec API Platform",
      "• Création de composants Twig réutilisables",
      "• Envoi d&apos;email de confirmation (symfony/mailer)",
      "• Intégration flux RSS",
      "• Authentification / Création de compte",
      "• Gestion de compte",
      "Création de composants responsive à l&apos;aide de VueJS pour les cookies sur les sites du Ministère depuis une maquette"
    ],
    environment: [
      "Ubuntu, PHP 7.2, Symfony 4/5, MySQL"
    ]
  },
];

export default function CompetencesPage() {
  return (
    <section className="space-y-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="space-y-2">
          <h1 className="font-medium text-2xl mb-2 tracking-tighter">Dossier de compétences - Développeur Web Full-Stack </h1>
          <div className="text-muted-foreground space-y-1">
            <p className="text-lg font-medium">Thomas ROBERT</p>
          </div>
        </div>
      </BlurFade>

      {/* Compétences techniques */}
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="space-y-6">
          <h2 className="font-medium text-xl tracking-tight uppercase">Compétences techniques</h2>
          <div className="grid gap-4">
            {Object.entries(technicalSkills).map(([category, skills], index) => (
              <BlurFade delay={BLUR_FADE_DELAY * 3 + index * 0.1} key={category}>
                <div className="space-y-2">
                  <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                    {category}
                  </h3>
                  <div className="text-sm">
                    {skills.join(", ")}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Compétences fonctionnelles */}
      <BlurFade delay={BLUR_FADE_DELAY * 4}>
        <div className="space-y-6">
          <h2 className="font-medium text-xl tracking-tight uppercase">Compétences fonctionnelles</h2>
          <div className="space-y-6">
            {functionalSkills.map((section, index) => (
              <BlurFade delay={BLUR_FADE_DELAY * 5 + index * 0.2} key={section.category}>
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">{section.category}</h3>
                  <ul className="space-y-2">
                    {section.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-start space-x-3 text-sm"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>

      {/* Références projets */}
      <BlurFade delay={BLUR_FADE_DELAY * 8}>
        <div className="space-y-8">
          <h2 className="font-medium text-xl tracking-tight uppercase">Références projets</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <BlurFade delay={BLUR_FADE_DELAY * 9 + index * 0.2} key={index}>
                <div className="space-y-4 pb-6 border-b border-border last:border-b-0">
                  {/* Header du projet */}
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="font-semibold text-lg uppercase">{project.company}</h3>
                      <span className="text-sm text-muted-foreground font-medium">
                        {project.period}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium text-sm">{project.role}</p>
                      {project.description && (
                        <p className="text-sm text-muted-foreground italic">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Domaine d&apos;intervention */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                      Domaine d&apos;intervention :
                    </h4>
                    <ul className="space-y-1">
                      {project.domains.map((domain, domainIndex) => (
                        <li key={domainIndex} className="flex items-start space-x-3 text-sm">
                          <span className="text-primary mt-1 text-xs">■</span>
                          <span className="leading-relaxed">{domain}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Environnement technique */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm uppercase tracking-wide text-muted-foreground">
                      Environnement technique :
                    </h4>
                    <ul className="space-y-1">
                      {project.environment.map((env, envIndex) => (
                        <li key={envIndex} className="flex items-start space-x-3 text-sm">
                          <span className="text-primary mt-1 text-xs">■</span>
                          <span className="leading-relaxed">{env}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </BlurFade>
    </section>
  );
}