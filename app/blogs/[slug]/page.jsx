import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { useMDXComponents } from "../../../mdx-components";

export async function generateStaticParams() {
  const blogDir = path.join(process.cwd(), "app", "blogs");
  const files = fs.readdirSync(blogDir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export default async function BlogPost({ params }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const filePath = path.join(process.cwd(), "app", "blogs", `${decodedSlug}.mdx`);
  const rawSource = fs.readFileSync(filePath, "utf8");
  const { content } = await compileMDX({
    source: rawSource,
    components: useMDXComponents(),
  });

  return <>{content}</>;
}
