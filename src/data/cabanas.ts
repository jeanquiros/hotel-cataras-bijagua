export interface Cabana {
  slug: string;
  name: string;
  price: string;
  desc: string;
  fullDesc: string;
  info: string;
  tag: string;
  cover: string;
  images: string[];
}

export const cabanas: Cabana[] = [
  {
    slug: "habitacion-1",
    name: "Bungalow Superior con Aire Acondicionado",
    price: "$100",
    desc: "Capacidad para 6 personas con cocina equipada, baño privado, agua caliente, aire acondicionado y porche con hamaca.",
    fullDesc: "Este bungalow superior tiene capacidad para hasta 6 personas, con cocina equipada, baño privado, agua caliente, aire acondicionado y un porche con hamaca con vista al jardín. Ropa de cama, toallas y café de la casa incluidos. Ideal para familias o grupos que buscan comodidad y tranquilidad en la montaña.",
    info: "6 personas · A/A · Cocina · Baño · Hamaca",
    tag: "Superior",
    cover: "/images/habitacion-uno/IMG_20210523_123800.jpg",
    images: [
      "/images/habitacion-uno/IMG_20210523_123800.jpg",
      "/images/habitacion-uno/IMG_20240411_091200.jpg",
      "/images/habitacion-uno/IMG_20240411_091519.jpg",
      "/images/habitacion-uno/IMG_20240411_091744.jpg",
      "/images/habitacion-uno/IMG_9588.JPG",
    ],
  },
  {
    slug: "habitacion-2",
    name: "Bungalow Estándar #1",
    price: "$80",
    desc: "Capacidad para 4 personas con baño privado, agua caliente y porche con hamaca.",
    fullDesc: "Bungalow estándar con capacidad para 4 personas, baño privado, agua caliente y porche con hamaca. Ropa de cama, toallas y café de la casa incluidos. Una opción cómoda y accesible para disfrutar del bosque.",
    info: "4 personas · Baño · Hamaca",
    tag: "Estándar",
    cover: "",
    images: [],
  },
  {
    slug: "habitacion-3",
    name: "Bungalow Estándar #2",
    price: "$80",
    desc: "Capacidad para 4 personas con baño privado, agua caliente y porche con hamaca.",
    fullDesc: "Bungalow estándar con capacidad para 4 personas, baño privado, agua caliente y porche con hamaca. Ropa de cama, toallas y café de la casa incluidos. Perfecto para parejas o grupos pequeños.",
    info: "4 personas · Baño · Hamaca",
    tag: "Estándar",
    cover: "",
    images: [],
  },
];
