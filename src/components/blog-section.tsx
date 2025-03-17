"use client";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import squirrel from "@/assets/images/squirrel.png";
import squirrel2 from "@/assets/images/squirrel-phone.png";
import squirrel3 from "@/assets/images/squirrel-influencer.png";

const blogPosts = [
  {
    title: "Aumenta il tasso di conversione",
    date: "2020-03-16",
    category: "Marketing",
    description:
      "Questo prodotto ha completamente trasformato il modo in cui lavoriamo. L'efficienza è aumentata del 200%!",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image: squirrel,
    },
    rating: 5,
  },
  {
    title: "Il futuro dell'AI nella creazione di contenuti",
    date: "2023-07-10",
    category: "Tecnologia",
    description:
      "L'AI sta trasformando il modo in cui creiamo contenuti. Dalla scrittura automatizzata alla generazione intelligente di immagini, il futuro sembra promettente...",
    author: {
      name: "Sophia Reynolds",
      role: "AI Researcher",
      image: squirrel2,
    },
    rating: 5,
  },
  {
    title: "5 SEO Strategie per il 2024",
    date: "2024-01-05",
    category: "SEO",
    description:
      "Mantieniti al passo con la concorrenza con queste strategie SEO. Scopri come ottimizzare i tuoi contenuti e migliorare il tuo ranking...",
    author: {
      name: "James Carter",
      role: "SEO Specialist",
      image: squirrel3,
    },
    rating: 5,
  },
];

export default function BlogSection() {
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex gap-1 my-4 w-full justify-center">
        {[...Array(rating)].map((_, i) => (
          <div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="mx-auto text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Cosa dicono i nostri clienti
          </h2>
          <p className="mt-6 mb-16 text-center text-2xl text-gray-600">
            Scopri le esperienze di chi ha già scelto di innovare con noi
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="relative flex max-w-xl flex-col items-start justify-between bg-white border border-gray-300 shadow-lg rounded-3xl p-6"
            >
              <Quote className="absolute text-gray-200 w-12 h-12 -top-1 -left-1 z-10" />
              <div className="flex justify-center items-center gap-x-4 text-xs mt-4 w-full">
                <time className="text-gray-500">{post.date}</time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category}
                </a>
              </div>

              <StarRating rating={post.rating} />
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="rounded-full bg-gray-50"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
