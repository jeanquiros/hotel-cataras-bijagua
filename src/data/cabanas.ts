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
    name: "Bungalow Familiar #1",
    price: "$85",
    desc: "Capacidad para 6 personas con cocina equipada, baño privado, agua caliente y porche con hamaca.",
    fullDesc: "Este bungalow familiar tiene capacidad para hasta 6 personas, con cocina equipada, baño privado, agua caliente y un porche con hamaca con vista al jardín. Ropa de cama, toallas y café de la casa incluidos. Ideal para familias o grupos pequeños que buscan tranquilidad en la montaña.",
    info: "6 personas · Cocina · Baño · Hamaca",
    tag: "Familiar",
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
    name: "Bungalow Familiar #2",
    price: "$85",
    desc: "Capacidad para 6 personas con cocina equipada, baño privado, agua caliente y porche con hamaca.",
    fullDesc: "Mismo diseño que el #1, con vista al jardín y acceso directo al sendero. Espacioso y tranquilo. Ropa de cama, toallas y café de la casa incluidos.",
    info: "6 personas · Cocina · Baño · Hamaca",
    tag: "Familiar",
    cover: "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-2.jpg",
    images: [
      "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-2.jpg",
    ],
  },
  {
    slug: "habitacion-3",
    name: "Bungalow Familiar #3",
    price: "$85",
    desc: "Capacidad para 6 personas con cocina equipada, baño privado, agua caliente y porche con hamaca.",
    fullDesc: "Tercer bungalow familiar con porche privado y hamaca. Perfecto para descansar después de la caminata.",
    info: "6 personas · Cocina · Baño · Hamaca",
    tag: "Familiar",
    cover: "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-3.jpg",
    images: [
      "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-3.jpg",
    ],
  },
  {
    slug: "habitacion-4",
    name: "Bungalow Familiar #4",
    price: "$85",
    desc: "Capacidad para 6 personas con cocina equipada, baño privado, agua caliente y porche con hamaca.",
    fullDesc: "Ubicado al final del sendero, el más privado de los bungalows familiares con vista al bosque secundario.",
    info: "6 personas · Cocina · Baño · Hamaca",
    tag: "Familiar",
    cover: "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-4.jpg",
    images: [
      "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-4.jpg",
    ],
  },
  {
    slug: "habitacion-5",
    name: "Bungalow Estándar #1",
    price: "$65",
    desc: "Ideal para parejas o grupos pequeños. Cómodo, funcional y con acceso a todas las áreas del hotel.",
    fullDesc: "Bungalow estándar perfecto para parejas o grupos pequeños. Incluye baño privado, agua caliente y porche con hamaca. Ropa de cama y toallas incluidas.",
    info: "3 personas · Baño · Porche",
    tag: "Estándar",
    cover: "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-5.jpg",
    images: [
      "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-5.jpg",
    ],
  },
  {
    slug: "habitacion-6",
    name: "Bungalow Estándar #2",
    price: "$65",
    desc: "Segundo bungalow estándar con porche y hamaca. Económico sin sacrificar comodidad.",
    fullDesc: "Bungalow estándar con baño privado, agua caliente y porche con hamaca. Una opción económica sin sacrificar la comodidad ni la experiencia del bosque.",
    info: "3 personas · Baño · Porche",
    tag: "Estándar",
    cover: "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-6.jpg",
    images: [
      "https://s3-cdn.hotellinksolutions.com/hotels/cataratas/room-6.jpg",
    ],
  },
];
