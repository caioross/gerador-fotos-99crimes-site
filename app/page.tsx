import Nav from "../components/Nav";
import { Hero, Pipeline, Why, Stack, CTA, Footer } from "../components/Sections";

export default function Page() {
  return (
    <main className="relative z-[2]">
      <Nav />
      <Hero />
      <Pipeline />
      <Why />
      <Stack />
      <CTA />
      <Footer />
    </main>
  );
}
