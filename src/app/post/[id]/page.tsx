
// "use client";
// import React from "react";
// import CommentSection from "@/components/CommentSection";
// import AuthoreCard from "@/components/AuthoreCard";
// import Footer from "@/components/footer";
// import Navbar from "@/components/Navbar";


// const posts = [
//   {
//     id: "1",
//     title: "A Beginner’s Guide to Understanding APIs and How They Work",
//     description:
//       "Learn APIs easily: basics, functionality, and real-world applications.",
//     image: "https://study.com/cimages/videopreview/videopreview-full/kg7jeue1w3.jpg",
//   },
//   {
//     id: "2",
//     title:
//       "10 Common Programming Mistakes Beginners Make (and How to Avoid Them)",
//     description: "Identify, fix, and avoid common coding pitfalls effectively.",
//     image: "https://i.pinimg.com/736x/00/c1/67/00c16706b6ce0e068dce4203992b7c24.jpg",
//   },
//   {
//     id: "3",
//     title:
//       "Why Learning JavaScript Is the Perfect Starting Point for New Developers",
//     description: "Explore why JavaScript is ideal for beginner programmers.",
//     image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/06/best-ways-to-learn-javascript.jpg",
//   },
//   {
//     id: "4",
//     title: "How to Stay Motivated While Learning to Code",
//     description: "Practical tips to keep your coding journey on track.",
//     image: "https://coder-coder.com/wp-content/uploads/2018/09/Staying-motivated-while-learning-to-code.jpg",
//   },
//   {
//     id: "5",
//     title: "Top 5 Programming Languages to Watch Out for in 2024",
//     description: "Discover the most in-demand languages of the future.",
//     image: "https://media.licdn.com/dms/image/v2/D4D12AQEkODrCAOFifg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721199395852?e=2147483647&v=beta&t=4Ee1Vzv6fRBiLTIQjVMzEgE0F8rdKyqz15Dd4P1x5-k",
//   },
//   {
//     id: "6",
//     title: "Mastering Async/Await in JavaScript: A Deep Dive",
//     description: "Understand async/await with examples and practical tips.",
//     image: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdn1tpheupqutxd9r9l3w.jpg",
//   },
//   {
//     id: "7",
//     title: "Optimizing React Performance: Tips and Tricks for 2024",
//     description: "Boost React app performance with advanced optimization tips.",
//     image: "https://d3d5ob9paug8v4.cloudfront.net/wp-content/uploads/2024/10/1-scaled.jpg",
//   },
//   {
//     id: "8",
//     title: "The Rise of Edge Functions: Why You Should Start Using Them Today",
//     description: "Learn the advantages of edge computing in modern apps.",
//     image: "https://media.licdn.com/dms/image/v2/D5612AQGHHnfhLpyHPA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709647360781?e=2147483647&v=beta&t=FU1O7gPWsR9qAyGpMEKlOrx5VQ-9xtzhCGUyraXvKd8",
//   },
//   {
//     id: "9",
//     title: "How Open Source Projects Can Accelerate Your Coding Skills",
//     description: "Leverage open source to improve coding experience quickly.",
//     image: "https://raw.githubusercontent.com/dubinc/oss-gallery/main/public/thumbnail.jpg",
//   },
//   {
//     id: "10",
//     title: "A Beginner’s Guide to Version Control with Git and GitHub",
//     description: "Learn Git basics and collaborate effectively on GitHub.",
//     image: "https://media.licdn.com/dms/image/D4D12AQG5NizJnBCMJA/article-cover_image-shrink_720_1280/0/1684432377097?e=2147483647&v=beta&t=bKHobXttz_AUOYr5eT4VnvTl1uTjbNONuX6bh-opMqQ",
//   },
//   {
//     id: "11",
//     title: "Understanding RESTful APIs: Architecture and Best Practices",
//     description: "Dive into RESTful APIs and learn industry standards.",
//     image: "https://images.squarespace-cdn.com/content/v1/5e51872712c0b73372f8fa1a/5aea1df4-ae6f-475a-a2fb-164730aa6886/Understanding+RESTful+APIs+-+TestEvolve.jpg?format=500w",
//   },
//   {
//     id: "12",
//     title: "Building a Simple To-Do App Using React and TailwindCSS",
//     description: "Hands-on guide to creating sleek UI with React & Tailwind.",
//     image: "https://i.ytimg.com/vi/WE8aYoGK0Ec/maxresdefault.jpg",
//   },
//   {
//     id: "13",
//     title: "Demystifying Webhooks: How They Work and Why They Matter",
//     description: "Learn webhooks: real-time communication for modern apps.",
//     image: "https://static.webdatarocks.com/uploads/2024/01/21213037/webhook-article--1024x576.png",
//   },
//   {
//     id: "14",
//     title:
//       "Introduction to TypeScript: Why Every JavaScript Developer Should Learn It",
//     description: "Explore TypeScript benefits and transition seamlessly.",
//     image: "https://i.ytimg.com/vi/Gd76yF1Dkg4/maxresdefault.jpg",
//   },
//   {
//     id: "15",
//     title:
//       "What Are Microservices? A Beginner’s Guide to Scalable Architecture",
//     description: "Discover microservices architecture and its core benefits.",
//     image: "https://a.storyblok.com/f/219851/1718x884/93302063d2/thumbnail-microservices.webp",
//   },
// ];

// export default function Post({ params }: { params: Promise<{ id: string }> }) {
//   const [id, setId] = React.useState<string | null>(null);
//   const [loading, setLoading] = React.useState<boolean>(true);

//   React.useEffect(() => {
//     params.then((resolvedParams) => {
//       setId(resolvedParams.id);
//       setLoading(false);
//     });
//   }, [params]);

//   if (loading) {
//     return <h2 className="text-2xl font-bold text-center mt-10">Loading...</h2>;
//   }

//   const post = posts.find((p) => p.id === id);
//   if (!post) {
//     return (
//       <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>
//     );
//   }

//   const renderParagraphs = (description: string) => {
//     return description.split("\n").map((para, index) => (
//       <p key={index} className="mt-4 text-justify">
//         {para.trim()}
//       </p>
//     ));
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-5">
//       <Navbar />
//       <h1 className="md:text-4xl text-3xl mx-auto font-bold text-red-600 text-center">
//         {post.title}
//       </h1>
//       {post.image && (
//         <img
//           src={post.image}
//           alt={post.title}
//           className="w-full h-auto rounded-md mt-4"
//         />
//       )}
//       <div className="mt-6 text-lg text-slate-700">
//         {renderParagraphs(post.description)}
//       </div>
//       <CommentSection postId={post.id} />
//       <AuthoreCard />
//       <Footer />
//     </div>
//   );
// }
'use client';
import React from 'react'
import Image from 'next/image'
import CommentSection from '@/components/CommentSection'
import AuthoreCard from '@/components/AuthoreCard'
import Footer from '@/components/footer'
import Navbar from '@/components/Navbar'


const posts = [
  {
    id: "1",
    title: "A Beginner’s Guide to Understanding APIs and How They Work",
    description:
      "Learn APIs easily: basics, functionality, and real-world applications.",
    image: "https://study.com/cimages/videopreview/videopreview-full/kg7jeue1w3.jpg",
  },
  {
    id: "2",
    title:
      "10 Common Programming Mistakes Beginners Make (and How to Avoid Them)",
    description: "Identify, fix, and avoid common coding pitfalls effectively.",
    image: "https://i.pinimg.com/736x/00/c1/67/00c16706b6ce0e068dce4203992b7c24.jpg",
  },
  {
    id: "3",
    title:
      "Why Learning JavaScript Is the Perfect Starting Point for New Developers",
    description: "Explore why JavaScript is ideal for beginner programmers.",
    image: "https://usa.bootcampcdn.com/wp-content/uploads/sites/119/2020/06/best-ways-to-learn-javascript.jpg",
  },
  {
    id: "4",
    title: "How to Stay Motivated While Learning to Code",
    description: "Practical tips to keep your coding journey on track.",
    image: "https://coder-coder.com/wp-content/uploads/2018/09/Staying-motivated-while-learning-to-code.jpg",
  },
  {
    id: "5",
    title: "Top 5 Programming Languages to Watch Out for in 2024",
    description: "Discover the most in-demand languages of the future.",
    image: "https://media.licdn.com/dms/image/v2/D4D12AQEkODrCAOFifg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721199395852?e=2147483647&v=beta&t=4Ee1Vzv6fRBiLTIQjVMzEgE0F8rdKyqz15Dd4P1x5-k",
  },
  {
    id: "6",
    title: "Mastering Async/Await in JavaScript: A Deep Dive",
    description: "Understand async/await with examples and practical tips.",
    image: "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdn1tpheupqutxd9r9l3w.jpg",
  },
  {
    id: "7",
    title: "Optimizing React Performance: Tips and Tricks for 2024",
    description: "Boost React app performance with advanced optimization tips.",
    image: "https://d3d5ob9paug8v4.cloudfront.net/wp-content/uploads/2024/10/1-scaled.jpg",
  },
  {
    id: "8",
    title: "The Rise of Edge Functions: Why You Should Start Using Them Today",
    description: "Learn the advantages of edge computing in modern apps.",
    image: "https://media.licdn.com/dms/image/v2/D5612AQGHHnfhLpyHPA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1709647360781?e=2147483647&v=beta&t=FU1O7gPWsR9qAyGpMEKlOrx5VQ-9xtzhCGUyraXvKd8",
  },
  {
    id: "9",
    title: "How Open Source Projects Can Accelerate Your Coding Skills",
    description: "Leverage open source to improve coding experience quickly.",
    image: "https://raw.githubusercontent.com/dubinc/oss-gallery/main/public/thumbnail.jpg",
  },
  {
    id: "10",
    title: "A Beginner’s Guide to Version Control with Git and GitHub",
    description: "Learn Git basics and collaborate effectively on GitHub.",
    image: "https://media.licdn.com/dms/image/D4D12AQG5NizJnBCMJA/article-cover_image-shrink_720_1280/0/1684432377097?e=2147483647&v=beta&t=bKHobXttz_AUOYr5eT4VnvTl1uTjbNONuX6bh-opMqQ",
  },
  {
    id: "11",
    title: "Understanding RESTful APIs: Architecture and Best Practices",
    description: "Dive into RESTful APIs and learn industry standards.",
    image: "https://images.squarespace-cdn.com/content/v1/5e51872712c0b73372f8fa1a/5aea1df4-ae6f-475a-a2fb-164730aa6886/Understanding+RESTful+APIs+-+TestEvolve.jpg?format=500w",
  },
  {
    id: "12",
    title: "Building a Simple To-Do App Using React and TailwindCSS",
    description: "Hands-on guide to creating sleek UI with React & Tailwind.",
    image: "https://i.ytimg.com/vi/WE8aYoGK0Ec/maxresdefault.jpg",
  },
  {
    id: "13",
    title: "Demystifying Webhooks: How They Work and Why They Matter",
    description: "Learn webhooks: real-time communication for modern apps.",
    image: "https://static.webdatarocks.com/uploads/2024/01/21213037/webhook-article--1024x576.png",
  },
  {
    id: "14",
    title:
      "Introduction to TypeScript: Why Every JavaScript Developer Should Learn It",
    description: "Explore TypeScript benefits and transition seamlessly.",
    image: "https://i.ytimg.com/vi/Gd76yF1Dkg4/maxresdefault.jpg",
  },
  {
    id: "15",
    title:
      "What Are Microservices? A Beginner’s Guide to Scalable Architecture",
    description: "Discover microservices architecture and its core benefits.",
    image: "https://a.storyblok.com/f/219851/1718x884/93302063d2/thumbnail-microservices.webp",
  },
];


export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const [id, setId] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    params.then((resolvedParams: { id: React.SetStateAction<string | null> }) => {
      setId(resolvedParams.id);
      setLoading(false);
    });
  }, [params]);

  if (loading) {
    return <h2 className="text-2xl font-bold text-center mt-10">Loading...</h2>;
  }

  const post = posts.find((p) => p.id === id);
  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post not found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Navbar />
      <h1 className="md:text-4xl text-3xl mx-auto font-bold text-red-600 text-center">
        {post.title}
      </h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1024}
          height={576}
          className="w-full h-auto rounded-md mt-4"
        />
      )}
      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <CommentSection postId={post.id} />
      <AuthoreCard />
      <Footer />
    </div>
  );
}