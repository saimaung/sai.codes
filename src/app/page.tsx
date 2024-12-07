import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";

export default function Home() {
  return (
    <section className="py-32 pt-40">
      {/* for container to work, we have to add config to our tailwind */}
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
      </div>
    </section>
  );
}
