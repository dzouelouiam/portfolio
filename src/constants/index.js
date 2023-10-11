import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  emsi,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  abdel,
  datatrend,
  sys_rec,
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "MERN stack Gestion de stock",
      company_name: "DATATREND",
      icon: datatrend,
      iconBg: "#E6DEDD",
      date: "Juin 2023 - Août 2023",
      points: [
        "Création et mise en œuvre d'une application de suivi de stock.",
        "Une application web pour le gestionnaire de stock pour le suivi des entrées et des sorties de stock.",
        "Conception et réalisation des statistiques globale des entées et des sortie.",
      ],
    },
    {
      title: "Application web de gestion de commandes et de factures",
      company_name: "ON BRAND BEAUTY",
      icon: abdel,
      iconBg: "#E6DEDD",
      date: "Juillet 2022 - Août 2022",
      points: [
        "Conception et réalisation d'une application de suivi des achats des clients.",
        "Une application web pour les clients pour le suivi de leurs commandes.",
        "Une application web pour les administrateurs permettant d’exploiter les différentes fonctionnalités du système d’achat.",
      ],
    },
    {
      title: "Système de recommandation de films",
      company_name: "EMSI",
      icon: sys_rec,
      iconBg: "#E6DEDD",
      date: "février 2023 - Juin 2023",
      points: [
        "Conception et réalisation d'une application de recommandation des films.",
        "Conception et réalisation d'une application de suivi des chats par utilisateur.",
        "Réalisation de filtrage par contenu des films.",
      ],
    },
    {
      title: "système de gestion d'absence par la reconnaissance faciale",
      company_name: "EMSI",
      icon: emsi,
      iconBg: "#E6DEDD",
      date: "février 2023 - Juin 2023",
      points: [
        "Conception et réalisation d'une application de gestion d'absence par reconnaissance faciale.",
        "Conception et réalisation d'une application de suivi des absences par étudiant.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };