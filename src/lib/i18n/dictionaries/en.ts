import type { Dictionary } from "../getDictionary";

const en: Dictionary = {
  meta: {
    title: "Visualize Image Gallery",
    description:
      "A modern, premium image gallery with smooth navigation, responsive design, and accessible lightbox.",
    aboutTitle: "About Us | Visualize",
    aboutDescription:
      "Learn about the team and vision behind the Visualize image gallery.",
    contactTitle: "Contact Us | Visualize",
    contactDescription:
      "Get in touch via email, GitHub, or LinkedIn.",
  },
  nav: {
    home: "Home",
    about: "About",
    contact: "Contact",
    language: "Language",
  },
  hero: {
    badge: "Image Gallery",
    title: "Visualize",
    description:
      "A modern, luxurious experience for browsing photos with smooth navigation, proper focus management, and an accessible modal viewer.",
  },
  gallery: {
    title: "Photo Gallery",
    subtitle: "Click any image to open the full-size view.",
    imageCount: "photos",
    view: "View",
    ariaLabel: "Photo gallery",
  },
  lightbox: {
    close: "Close",
    previous: "Previous",
    next: "Next",
    previousImage: "Previous image",
    nextImage: "Next image",
    loading: "Loading image…",
  },
  about: {
    title: "About Us",
    intro:
      "Visualize is a modern image gallery built with a focus on user experience, visual quality, and accessibility.",
    missionTitle: "Our Mission",
    mission:
      "We believe photo browsing should feel simple, enjoyable, and professional. This project is built with Next.js, React, and Tailwind CSS to combine performance, quality, and maintainability.",
    featuresTitle: "Features",
    features: [
      "Responsive design for mobile, tablet, and desktop",
      "Image modal with keyboard and focus support",
      "Smooth animations and subtle micro-interactions",
      "Full support for Persian and English",
    ],
  },
  contact: {
    title: "Contact Us",
    intro:
      "We would love to hear your feedback, ideas, or collaboration requests. Reach out through any of the channels below.",
    emailLabel: "Email",
    githubLabel: "Project on GitHub",
    linkedinLabel: "LinkedIn",
    formNote:
      "For quick messages, email directly or connect on LinkedIn.",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with ❤️",
  },
  social: {
    github: "GitHub",
    linkedin: "LinkedIn",
    email: "Email",
    twitter: "Twitter",
    instagram: "Instagram",
  },
  galleryItems: {
    "01": { title: "Mountain Landscape", caption: "Photo summary" },
    "02": { title: "Mirror Lake", caption: "Photo summary" },
    "03": { title: "Urban Architecture", caption: "Photo summary" },
    "04": { title: "Snowy Peak", caption: "Photo summary" },
    "05": { title: "City View", caption: "Photo summary" },
    "06": { title: "Seaside Sunset", caption: "Photo summary" },
    "07": { title: "Tower & Sky", caption: "Photo summary" },
  },
};

export default en;
