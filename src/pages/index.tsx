import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Layout, SEO } from "@/components/layout";
import Hero from "@/sections/hero";
import Intro from "@/sections/Intro";
import About from "@/sections/About";
import CTA from "@/sections/CTA";
import Reviews from "@/sections/Reviews/Reviews";

export default function Home() {

  return (
    <>
      <SEO />
      <Layout>
        <Hero />
        <div className="relative z-10 bg-white">
          <Intro />
          <About />
        </div>
        <CTA />
        <Reviews />
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "seo"])),
    },
  };
}
