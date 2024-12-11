import Intro from "@/components/intro";
import NewsletterForm from "@/components/newsletter-form";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";

export default function Home() {
  return (
    <section className="py-32 pt-40">
      {/* for container to work, we have to add config to our tailwind */}
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <NewsletterForm />
      </div>
    </section>
  );
}
