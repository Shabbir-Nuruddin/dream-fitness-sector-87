import "@fontsource/bricolage-grotesque/800.css";
import type { Site } from "./lib";

const SPLIT: [number, number][] = [[5, 10], [17, 22]];

export const SITE: Site = {
  name: "Dream Fitness",
  sub: { en: "Imported machines · Kankrola, Sector 87", hi: "इम्पोर्टेड मशीनें · कांकरोला, सेक्टर 87" },
  banner: { en: "Morning and evening batches, Monday to Saturday: WhatsApp to plan your first visit", hi: "सोमवार से शनिवार सुबह और शाम के बैच: पहली विज़िट के लिए व्हाट्सऐप करें" },
  phone: "917838866202",
  phoneDisplay: "+91 78388 66202",
  lat: 28.3874262,
  lon: 76.9225825,
  hours: [[], SPLIT, SPLIT, SPLIT, SPLIT, SPLIT, SPLIT],
  theme: {
    dark: true,
    bg: "#0f0b08",
    bg2: "#17110c",
    panel: "#1f1710",
    ink: "#fbf2ea",
    ink2: "#d3c2b3",
    ink3: "#928070",
    line: "#2e2218",
    accent: "#ff7a1a",
    onAccent: "#2b1000",
    display: "Bricolage Grotesque",
    weight: 800,
    upper: false,
  },
  scene: "dumbbells",
  align: "left",
  hero: {
    title: [
      { en: "World-class machines.", hi: "वर्ल्ड-क्लास मशीनें।" },
      { en: "In New Gurgaon.", hi: "न्यू गुड़गांव में।" },
    ],
    proof: {
      en: "5.0 on Google from 35 reviews. Imported equipment, open space and a coach members call knowledgeable, in Sector 87.",
      hi: "गूगल पर 35 रिव्यू से 5.0। इम्पोर्टेड मशीनें, खुली जगह, और ऐसे कोच जिन्हें मेंबर्स जानकार बताते हैं, सेक्टर 87 में।",
    },
    fallback: "/img/p1.jpg",
  },
  marquee: ["Imported machines", "Strength", "Cardio", "Body transformation", "Open space", "Free Wi-Fi", "Sector 87"],
  dishes: {
    title: { en: "What members come for", hi: "मेंबर किसलिए आते हैं" },
    body: { en: "Every line is quoted from a Google review.", hi: "हर लाइन गूगल रिव्यू से ली गई है।" },
    layout: "cards",
    items: [
      { name: { en: "Machines", hi: "मशीनें" }, quote: "World class Gym machine and very experience gym trainer and good nature 💪", img: "/img/p2.jpg" },
      { name: { en: "Space", hi: "जगह" }, quote: "It is very good gym Open space", img: "/img/p7.jpg" },
      { name: { en: "Coaching", hi: "कोचिंग" }, quote: "Best equipments and best coach in the  area ♥️ really feel good to do exercise in this gym", img: "/img/p9.jpg" },
      { name: { en: "Transformation", hi: "ट्रांसफ़ॉर्मेशन" }, quote: "Awesome place for body transformation" },
      { name: { en: "Clean", hi: "साफ़-सफ़ाई" }, quote: "Best Gym In Sec 87 Well Clean and Well Equipment with  Professional Coach" },
      { name: { en: "Wi-Fi", hi: "वाई-फ़ाई" }, quote: "Excellent GYM with free wifi" },
    ],
  },
  gallery: {
    title: { en: "Inside Dream Fitness", hi: "ड्रीम फ़िटनेस के अंदर" },
    layout: "mosaic",
    photos: [
      { src: "/img/p1.jpg", alt: "Main floor at Dream Fitness", wide: true },
      { src: "/img/p2.jpg", alt: "Row of imported machines" },
      { src: "/img/p4.jpg", alt: "Strength equipment" },
      { src: "/img/p13.jpg", alt: "Wall mural inside the gym", wide: true },
      { src: "/img/p9.jpg", alt: "Training area" },
      { src: "/img/p5.jpg", alt: "Gym opening day" },
    ],
  },
  feature: {
    kind: "hosts",
    title: { en: "The owner and the coach", hi: "मालिक और कोच" },
    body: { en: "Members talk about the trainer and the owner in the same breath.", hi: "मेंबर्स ट्रेनर और मालिक दोनों की एक साथ तारीफ़ करते हैं।" },
    img: "/img/p7.jpg",
    hosts: [
      { name: "THE OWNER", quote: "the gym owner what a kind and helpful knowledgeable person. I must say please visit this gym." },
      { name: "THE COACH", quote: "The knowlegeable trainer and quality equipment make every workout a success!." },
      { name: "THE COACH", quote: "Great surrounding and well functioning equipment. Great coach and great gym🏋️‍♀️" },
    ],
  },
  reviews: {
    title: { en: "Thirty-five reviews, a perfect 5.0", hi: "पैंतीस रिव्यू, पूरे 5.0" },
    rating: 5.0,
    count: 35,
    quotes: [
      { quote: "One of the greatest gym i saw and use in new gurgaon area. Best machine best space and best knowledgeable trainer in the gym", stars: 5 },
      { quote: "Imported and world class gym machine and good trainer come join and feel the difference", stars: 5 },
      { quote: "An ideal place for physical exercise. The trainer and the machines are excellent.", stars: 5 },
      { quote: "Very good facility and excellent machines .", stars: 5 },
    ],
  },
  visit: {
    title: { en: "Kankrola, Sector 87", hi: "कांकरोला, सेक्टर 87" },
    img: "/img/p4.jpg",
    alt: "Strength equipment at Dream Fitness",
    address: { en: "Kankrola, Sector 87, Gurugram, Haryana", hi: "कांकरोला, सेक्टर 87, गुरुग्राम, हरियाणा" },
    note: { en: "Monday to Saturday, 5 to 10 am and 5 to 10 pm. Closed Sunday.", hi: "सोमवार से शनिवार, सुबह 5 से 10 और शाम 5 से 10। रविवार बंद।" },
  },
  story: [
    { kicker: { en: "Kit", hi: "मशीनें" }, title: { en: "Imported, world-class kit.", hi: "इम्पोर्टेड, वर्ल्ड-क्लास मशीनें।" }, quote: "Nice experience best quality imported gym equipment come and join and feel the difference" },
    { kicker: { en: "Space", hi: "जगह" }, title: { en: "Room on every machine.", hi: "हर मशीन पर जगह।" }, quote: "Best machine best space and best knowledgeable trainer in the gym" },
    { kicker: { en: "Goal", hi: "लक्ष्य" }, title: { en: "Come for a transformation.", hi: "ट्रांसफ़ॉर्मेशन के लिए आइए।" }, quote: "Awesome place for body transformation" },
  ],
  build: {
    title: { en: "Plan your first visit", hi: "अपनी पहली विज़िट प्लान करें" },
    body: { en: "Pick a goal and a time. It goes to WhatsApp exactly as you see it.", hi: "लक्ष्य और समय चुनें। मैसेज व्हाट्सऐप पर ठीक ऐसे ही जाएगा।" },
    pick: { label: { en: "Goal", hi: "लक्ष्य" }, options: [
      { name: { en: "Body transformation", hi: "बॉडी ट्रांसफ़ॉर्मेशन" } },
      { name: { en: "Weight loss", hi: "वज़न कम करना" } },
      { name: { en: "Muscle gain", hi: "मसल बनाना" } },
      { name: { en: "Just starting out", hi: "अभी शुरुआत" } },
    ] },
    when: true,
    hello: { en: "Hi Dream Fitness, I'd like to visit:", hi: "नमस्ते ड्रीम फ़िटनेस, मुझे विज़िट करनी है:" },
  },
  waHello: {
    en: "Hi Dream Fitness, I'd like to know about joining. Goal: , batch (morning/evening): ",
    hi: "नमस्ते ड्रीम फ़िटनेस, मुझे जॉइन करने के बारे में जानना है। लक्ष्य: , बैच (सुबह/शाम): ",
  },
  order: ["dishes", "feature", "build", "reviews", "gallery", "visit"],
};
