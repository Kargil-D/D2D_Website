export interface Destination {
  name: string;
  country: string;
  image: string;
  tag?: string;
}

export const POPULAR_DESTINATIONS: Destination[] = [
  {
    name: "Sri Lanka",
    country: "South Asia",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1546708973-b3a1f01da3ec?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    tag: "Luxury",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Thailand",
    country: "Southeast Asia",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Vietnam",
    country: "Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Bali",
    country: "Indonesia",
    tag: "Honeymoon",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Singapore",
    country: "Southeast Asia",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Switzerland",
    country: "Europe",
    tag: "Bestseller",
    image:
      "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Kashmir",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1566837497312-7be4a47e156c?auto=format&fit=crop&w=400&q=80",
  },
];
