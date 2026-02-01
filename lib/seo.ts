// lib/seo.ts
export const SEO = {
  site: {
    name: {
      tr: "En-Ka Makine Kalıp",
      en: "En-Ka Machining & Mold",
    },

    legalName: "En-Ka Makine Kalıp",

    baseUrl:
      process.env.NEXT_PUBLIC_BASE_URL &&
      process.env.NEXT_PUBLIC_BASE_URL.startsWith("http")
        ? process.env.NEXT_PUBLIC_BASE_URL
        : "https://www.en-ka.net",

    logo: "/Logo.png",

    email: "bilgi@en-ka.net",
    phone: "+90 224 441 55 44",
    fax: "+90 224 441 16 17",

    address: {
      street: "Beyaz Cadde No: 2",
      district: "Çalı Sanayi Bölgesi, Nilüfer",
      city: "Bursa",
      postalCode: "16143",
      country: "TR",
    },

    description: {
      tr: "En-Ka Makine ve Kalıp, Bursa Çalı Sanayi Bölgesi'nde yerleşik bir CNC işleme ve kalıp imalat şirketidir. Çeşitli sektörlere hassas işleme ve kalıp imalat hizmetleri sunmaktayız.",
      en: "En-Ka Machining & Mold is a CNC machining and mold manufacturing company based in Bursa Çalı Sanayi Bölgesi. We provide precision machining and mold manufacturing services for various industries.",
    },

    geo: {
      lat: 40.17163,
      lng: 28.925233,
    },

    socials: [
      "https://www.facebook.com/enkamakinakalip",
      "https://www.instagram.com/enkamakina/",
    ],

    openingHours: {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:30",
      closes: "18:30",
    },
  },
};
