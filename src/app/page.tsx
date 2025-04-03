import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Dynamic Blog</h1>
      <Link href="/posts" className="text-blue-500 hover:underline">
        View All Posts
      </Link>
    </div>
  );
}
