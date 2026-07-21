import React from 'react';

export interface Project {
  title: string;
  desc: string;
  img: string;
  category: string; // "Wardrobes" | "Mirrors" | "Walk-in Closets"
  story: string;
  images: string[];
}

export const projects: Project[] = [
  {
    title: "The Ultimate Aura Mirror",
    desc: "A custom full-length interactive lighting piece crafted with dynamic aura-glow projection.",
    img: "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg",
    category: "Mirrors",
    story: "Individually shaped and polished in our Lagos workshop, our premium Aura Mirror creates the ultimate aesthetic vibe with halo illumination and high-grade glass.",
    images: [
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg",
      "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg",
      "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg"
    ]
  },
  {
    title: "Signature Instagram Mirror",
    desc: "Designed with smart edge lighting, perfect for modern bedrooms and gorgeous content creation.",
    img: "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg",
    category: "Mirrors",
    story: "Crafted with dynamic edge illumination, this high-fidelity Instagram Mirror elevates any room and guarantees flawless lighting for selfie videos and outfit checks.",
    images: [
      "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg",
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg",
      "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg"
    ]
  },
  {
    title: "Luxury Fitted Drip Wardrobes",
    desc: "Bespoke dual-tone wardrobe units styled with customized drawers, gold trims, and motion LEDs.",
    img: "https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg",
    category: "Wardrobes",
    story: "Tailored to your room layout, our luxury Drip Wardrobes incorporate personalized soft-close cabinets, rich gold handle finishes, and motion-activated inner lighting.",
    images: [
      "https://i.postimg.cc/pLQ223xr/Screenshot-20260522-142556-Tik-Tok.jpg",
      "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg",
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg"
    ]
  },
  {
    title: "Viral Snapchat Mirrors",
    desc: "Custom outline mirror designed with rich, glowing neon backlighting.",
    img: "https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg",
    category: "Mirrors",
    story: "Featuring customizable RGB backing, this Snapchat Mirror is a favourite for daily streaks and high-fidelity snaps.",
    images: [
      "https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg",
      "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg",
      "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg"
    ]
  },
  {
    title: "Interactive TikTok Mirrors",
    desc: "Smartphone style interface with warm intelligent backlighting.",
    img: "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg",
    category: "Mirrors",
    story: "Designed in the classic style of dynamic mobile interfaces, our TikTok Mirrors combine high-definition glass with a playful retro-tech display.",
    images: [
      "https://i.postimg.cc/N0w5D1Gv/Screenshot-20260522-142444-Tik-Tok.jpg",
      "https://i.postimg.cc/rmfsq31y/Screenshot-20260522-142514-Tik-Tok.jpg",
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg"
    ]
  },
  {
    title: "Bespoke Wavy LED Mirror",
    desc: "Art deco inspired wavy border mirror perfect for contemporary closets.",
    img: "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg",
    category: "Mirrors",
    story: "Undulating organic shape meet warm-white neon strip lights to create a beautifully glowing focal point.",
    images: [
      "https://i.postimg.cc/ZKBnhf02/Screenshot-20260522-142551-Tik-Tok.jpg",
      "https://i.postimg.cc/vB2PqNnm/a5164097-dd7b-4477-ae33-c34845983535.jpg",
      "https://i.postimg.cc/d04n3x4h/f8e41194-bf0b-4826-8a41-4076e72b6095.jpg"
    ]
  }
];
