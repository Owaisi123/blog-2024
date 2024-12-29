import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from './ui/card';

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Corrected the property name to match the data structure in Mega.tsx
  date: string;
}

interface BlogCardProps {
  post: Post;
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card className={`shadow-lg rounded-lg ${isDarkBackground ? 'bg-gray-800' : 'bg-white'}`}>
      <Image
        src={post.imageUrl} // Use post.imageUrl instead of a hardcoded URL
        alt={post.title}
        width={1920}
        height={1080}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm ${
            isDarkBackground ? "text-slate-400 " : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <div className="flex justify-center items-center w-full mt-4">
          <a
            href={`/post/${post.id}`}
            className={`w-48 h-12 flex justify-center items-center text-center px-6 text-white rounded hover:bg-blue-500 ${
              isDarkBackground
                ? "bg-black hover:bg-slate-500"
                : "bg-blue-600 hover:bg-blue-500"
            }`}
          >
            Read More
          </a>
        </div>
      </div>
    </Card>
  );
}