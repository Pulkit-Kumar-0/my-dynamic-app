import { notFound } from "next/navigation";

// Define the Post interface
interface Post {
  id: number;
  title: string;
  body: string;
}

// Define the props type using Next.js's built-in type
type Props = {
  params: {
    id: string;
  };
};

// Server component with explicit typing
export default async function PostPage({ params }: Props) {
  const post = await fetchPost(params.id);

  // Handle invalid post IDs (optional but recommended)
  if (!post) {
    notFound(); // Next.js utility to return a 404 page
  }

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}

async function fetchPost(id: string): Promise<Post | null> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) return null; // Handle fetch errors gracefully
  return res.json();
}
