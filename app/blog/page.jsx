import React from "react";
import Link from "next/link";
import fs from "fs";
import path from "path";

function getBlogPosts() {
  const blogDir = path.join(process.cwd(), "app", "blogs");
  const files = fs.readdirSync(blogDir);

  const blogPosts = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const dateMatch = slug.match(/^(\d{4})(\d{2})(\d{2})/);
      const [_, year, month, day] = dateMatch;
      const date = `${year}-${month}-${day}`;
      const title = slug.slice(9); // Remove the "YYYYMMDD " portion
      return {
        slug,
        date,
        title,
      };
    })
    .sort((a, b) => b.date.localeCompare(a.date));

  return blogPosts;
}

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const blogPosts = getBlogPosts();

  return (
    <div>
      <h1 className="text-3xl font-medium mb-8 tracking-tighter">My Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blogs/${post.slug}`} className="text-blue-500">
              {post.date} - {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
