'use client";';
import Image from "next/image";
import squirrel from "@/assets/images/squirrel.png";
import squirrel2 from "@/assets/images/squirrel-phone.png";
import squirrel3 from "@/assets/images/squirrel-influencer.png";

const blogPosts = [
  {
    title: "Boost your conversion rate",
    date: "2020-03-16",
    category: "Marketing",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo...",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      image: squirrel,
    },
  },
  {
    title: "The Future of AI in Content Creation",
    date: "2023-07-10",
    category: "Technology",
    description:
      "AI is transforming the way we create content. From automated writing to intelligent image generation, the future looks promising...",
    author: {
      name: "Sophia Reynolds",
      role: "AI Researcher",
      image: squirrel2,
    },
  },
  {
    title: "5 SEO Strategies for 2024",
    date: "2024-01-05",
    category: "SEO",
    description:
      "Stay ahead of the competition with these top SEO strategies. Learn how to optimize your content and improve your ranking...",
    author: {
      name: "James Carter",
      role: "SEO Specialist",
      image: squirrel3,
    },
  },
];

export default function BlogSection() {
  return (
    <div className="bg-trasparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-600 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time className="text-gray-500">{post.date}</time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category}
                </a>
              </div>
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
