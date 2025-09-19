// productsData.js
import product1 from "../assets/products1.png";
import product2 from "../assets/products2.png";
import product3 from "../assets/products3.png"
import product4 from "../assets/products4.png";
import product5 from "../assets/products5.png";
import product6 from "../assets/products6.png";

export const products = [
  {
    slug: "autoclave",
    image: product1,
    name: "AUTOCLAVE",
    description:
      "High-quality Autoclave with 21 CFR Part 11 compliant software.",
    rating: "4",
    number: "65",
    features: ["Fully automatic", "Durable", "Real-time monitoring"],
  },
  {
    slug: "bod-incubator",
    image: product2,
    name: "BOD INCUBATOR",
    description:
      "Energy efficient BOD incubator with precise temperature control.",
    rating: "4",
    number: "42",
    features: ["Energy Saving", "Digital Display", "Quiet Operation"],
  },
  {
    slug: "bod-incubator",
    image: product3,
    name: "BOD INCUBATOR",
    description:
      "Energy efficient BOD incubator with precise temperature control.",
    rating: "4",
    number: "42",
    features: ["Energy Saving", "Digital Display", "Quiet Operation"],
  },
  {
    slug: "chiller",
    image: product4,
    name: "CHILLER",
    description:
      "Advanced chiller unit ideal for lab and industrial use.",
    rating: "4",
    number: "33",
    features: ["Stainless steel", "Low noise", "High efficiency"],
  },
  {
    slug: "freezer",
    image: product5,
    name: "FREEZER",
    description:
      "Reliable and efficient freezer for lab-grade storage.",
    rating: "4",
    number: "51",
    features: ["-20°C or -40°C", "Digital control", "Lockable doors"],
  },
  {
    slug: "muffle-furnace",
    image: product6,
    name: "MUFFLE FURNACE",
    description:
      "Precision-controlled muffle furnace for high-temp heating.",
    rating: "4",
    number: "29",
    features: ["High temp", "Ceramic insulation", "Programmable timer"],
  },
];
