export interface Cabana {
  slug: string;
  name: string;
  price: string;
  desc: string;
  features: string[];
  image: string;
  fullDesc: string;
  amenities: string[];
  images: string[];
}

export const cabanas: Cabana[] = [
  {
    slug: "volcano-suite",
    name: "Volcano Suite",
    price: "$320",
    desc: "Vistas panorámicas al volcán Miravalles, terraza privada, cama king-size y ducha de lluvia interior-exterior.",
    features: ["Cama King-size", "Terraza privada", "Ducha interior-exterior", "WiFi"],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
    fullDesc:
      "Esta suite ofrece una experiencia única con vistas ininterrumpidas al volcán Miravalles. La terraza privada cuenta con una piscina de inmersión y hamacas. El baño interior-exterior combina una ducha de lluvia con un jardín privado. Incluye minibar, café artesanal de la región y ropa de cama de algodón egipcio.",
    amenities: ["Piscina de inmersión", "Ducha de lluvia", "Minibar", "Café artesanal", "Ropa de cama premium", "Aire acondicionado", "TV", "Caja fuerte"],
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562771409-1a2b23f0e8f3?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop",
    ],
  },
  {
    slug: "rainforest-bungalow",
    name: "Rainforest Bungalow",
    price: "$260",
    desc: "Rodeado de árboles centenarios, ventanales de piso a techo, hamaca en el porche y baño al aire libre.",
    features: ["Ventanales piso a techo", "Hamaca", "Baño al aire libre", "Mini bar"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    fullDesc:
      "Sumergido en el bosque, este bungalow te conecta con la naturaleza sin sacrificar el confort. Los ventanales de piso a techo enmarcan la selva. El porche con hamaca es perfecto para la siesta. El baño al aire libre te permite bañarte bajo el cielo estrellado. Incluye cafetera y productos de bienvenida.",
    amenities: ["Hamaca", "Baño al aire libre", "Cafetera", "Productos de bienvenida", "Ventilador de techo", "Cama Queen-size", "Mosquitero", "Secador de pelo"],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1526778548025-fa2f459b5fe5?q=80&w=2066&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562771409-1a2b23f0e8f3?q=80&w=1974&auto=format&fit=crop",
    ],
  },
  {
    slug: "celeste-suite",
    name: "Celeste Suite",
    price: "$380",
    desc: "Inspirada en el color legendario del río, tina de hidromasaje con vista al dosel y amenidades premium.",
    features: ["Tina de hidromasaje", "Vista al dosel", "Amenidades premium", "Aire acondicionado"],
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
    fullDesc:
      "Nuestra suite más exclusiva, decorada en tonos aqua que evocan el Río Celeste. La tina de hidromasaje frente al ventanal ofrece vistas al dosel del bosque. Incluye amenities de lujo, bata y pantuflas, y un servicio de bienvenida con frutas frescas y vino. La cama king-size con dosel completa la experiencia.",
    amenities: ["Tina de hidromasaje", "Vista al dosel", "Bata y pantuflas", "Servicio de bienvenida", "Cama King-size con dosel", "Aire acondicionado", "TV", "Mini bar"],
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562771409-1a2b23f0e8f3?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1949&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop",
    ],
  },
];
