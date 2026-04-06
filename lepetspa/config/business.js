// ============================================================
// Le Pet Spa — Single Source of Truth Configuration
// Edit this file to update all contact info, hours, and links
// ============================================================

export const business = {
  name: "Le Pet Spa",
  tagline: "Your Neighborhood Pet Store & Much More...",
  description:
    "New York's premier luxury pet boutique offering expert grooming, premium nutrition, and high-end pet supplies with a personal touch.",

  address: {
    street: "300 Rector Place",
    city: "New York",
    state: "NY",
    zip: "10280",
    full: "300 Rector Place, New York, NY 10280",
  },

  contact: {
    phone: "212.786.9070",
    phoneRaw: "+12127869070",
    email: "lepetspa@lepetspabpc.com",
  },

  social: {
    facebook: "https://www.facebook.com/LePetSpaNyc/#",
    instagram: "https://www.instagram.com/le_pet_spa/",
    twitter: "https://x.com/pet_le",
    yelp: "https://www.yelp.com/biz/le-pet-spa-new-york",
  },

  hours: [
    { day: "Sunday",    open: "10:30 AM", close: "6:00 PM",  closed: false },
    { day: "Monday",    open: "10:30 AM", close: "7:00 PM",  closed: false },
    { day: "Tuesday",   open: "10:30 AM", close: "7:00 PM",  closed: false },
    { day: "Wednesday", open: "10:30 AM", close: "7:00 PM",  closed: false },
    { day: "Thursday",  open: "10:30 AM", close: "7:00 PM",  closed: false },
    { day: "Friday",    open: "11:00 AM", close: "7:00 PM",  closed: false },
    { day: "Saturday",  open: "10:30 AM", close: "6:00 PM",  closed: false },
  ],

  services: [
    {
      id: "grooming",
      title: "Luxury Grooming",
      description:
        "Full-service grooming tailored to your pet's breed and coat type. Bath, trim, brush-out, nail care, and more.",
      icon: "✂️",
      image: "/shop-4.jpg", // Using shop interior for grooming context
      highlight: true,
    },
    {
      id: "nutrition",
      title: "Wholesome Nutrition",
      description:
        "Curated selection of premium, vet-approved pet food and supplements for optimal health and vitality.",
      icon: "🥗",
      image: "/shop-2.jpg", // Freezer/Food photo
      highlight: false,
    },
    {
      id: "supplies",
      title: "Pet Supplies",
      description:
        "Designer accessories, premium toys, cozy beds, and everything your pet deserves — all under one roof.",
      icon: "🛍️",
      image: "/shop-1.jpg", // Toys/Supplies photo
      highlight: false,
    },
  ],

  nav: [
    { label: "Home",     href: "#hero" },
    { label: "About",    href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Hours",    href: "#hours" },
    { label: "Contact",  href: "#contact" },
  ],

  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0!2d-74.0170!3d40.7092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a15b4c27c67%3A0x0!2s300+Rector+Pl%2C+New+York%2C+NY+10280!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
};
