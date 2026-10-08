// ============================================================
//  KHAYR: store settings and products
//  Edit this file to change the brand, contact details, prices,
//  sizes and products. No other file needs to change.
// ============================================================

const CONFIG = {
  brand: "KHAYR",
  currency: "GH₵",
  whatsappNumber: "233000000000",       // country code first, no + or spaces
  phoneDisplay: "+233 000 000 000",
  email: "hello@khayrkyre.example",
  address: "Accra, Ghana",
  hours: "Monday to Saturday, 9:00 am to 7:00 pm",
  deliveryFee: 25,                      // GH₵ charged on smaller orders
  freeDeliveryAbove: 400                // orders at or above this get free delivery
};

// Field guide:
//  id          unique number
//  name        product name shown on the card
//  gender      "women" or "men" (controls the tabs and filters)
//  category    short label, e.g. "Tops", "Dresses", "Bottoms"
//  price       current price in GH₵
//  oldPrice    optional, shows a crossed-out price (leave out or set to null)
//  sizes       sizes customers can choose from
//  shape       illustration shape: "top", "dress" or "bottoms"
//  color       main colour of the built-in illustration
//  badge       optional: "New", "Bestseller", "Sale" or ""
//  description text shown in the product window
//  image       optional photo link or file path, e.g. "images/tee-black.jpg".
//              Leave as "" to show the built-in illustration.

const WOMEN_SIZES = ["XS", "S", "M", "L", "XL"];
const MEN_SIZES = ["S", "M", "L", "XL", "XXL"];

const products = [
  {
    id: 1,
    name: "Essential Cotton Tee",
    gender: "men",
    category: "Tops",
    price: 90,
    sizes: MEN_SIZES,
    shape: "top",
    color: "#1f1e1c",
    badge: "New",
    description: "A heavyweight cotton tee with a relaxed fit and a clean crew neck. A wardrobe staple that works on its own or under a jacket.",
    image: ""
  },
  {
    id: 2,
    name: "Oversized Hoodie",
    gender: "men",
    category: "Tops",
    price: 220,
    sizes: MEN_SIZES,
    shape: "top",
    color: "#6b6258",
    badge: "Bestseller",
    description: "Brushed fleece inside, a roomy oversized fit and a soft hood. Made for cool evenings and easy weekends.",
    image: ""
  },
  {
    id: 3,
    name: "Relaxed Joggers",
    gender: "men",
    category: "Bottoms",
    price: 150,
    sizes: MEN_SIZES,
    shape: "bottoms",
    color: "#3d4a3f",
    badge: "",
    description: "Tapered joggers with an elastic waistband and drawstring. Comfortable for the gym, travel or lounging at home.",
    image: ""
  },
  {
    id: 4,
    name: "Linen Button-Up Shirt",
    gender: "men",
    category: "Tops",
    price: 160,
    sizes: MEN_SIZES,
    shape: "top",
    color: "#d9d2c3",
    badge: "New",
    description: "Breathable linen with a soft collar and a tailored fit. Smart enough for the office and easy enough for weekends.",
    image: ""
  },
  {
    id: 5,
    name: "Floral Midi Dress",
    gender: "women",
    category: "Dresses",
    price: 240,
    oldPrice: 280,
    sizes: WOMEN_SIZES,
    shape: "dress",
    color: "#e8b4b8",
    badge: "Sale",
    description: "A flowing midi dress with a soft floral print, a fitted waist and a light, comfortable feel. Ideal for weddings, brunch and summer events.",
    image: ""
  },
  {
    id: 6,
    name: "High-Waist Wide Trousers",
    gender: "women",
    category: "Bottoms",
    price: 190,
    sizes: WOMEN_SIZES,
    shape: "bottoms",
    color: "#c9b79c",
    badge: "",
    description: "Wide-leg trousers with a high waist that elongate the silhouette. Pair them with a fitted top for a polished look.",
    image: ""
  },
  {
    id: 7,
    name: "Ribbed Knit Top",
    gender: "women",
    category: "Tops",
    price: 120,
    sizes: WOMEN_SIZES,
    shape: "top",
    color: "#8d5f5b",
    badge: "",
    description: "A soft ribbed knit with a slim fit that flatters every shape. Layer it under a blazer or wear it alone.",
    image: ""
  },
  {
    id: 8,
    name: "Pleated Midi Skirt",
    gender: "women",
    category: "Bottoms",
    price: 150,
    sizes: WOMEN_SIZES,
    shape: "bottoms",
    color: "#5c4a6b",
    badge: "Bestseller",
    description: "A pleated midi skirt with a smooth waistband and gentle movement. Style it for work, dinner or a day out.",
    image: ""
  }
];
