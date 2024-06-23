import BlogPosts from "@/components/home/BlogPosts";
import FAQs from "@/components/home/FAQs";
import Features from "@/components/home/Features";
import PracticeAreas from "@/components/home/PracticeAreas";
import TeamMembers from "@/components/home/TeamMembers";
import Testimonials from "@/components/home/Testimonials";
import Banner from "@/components/home/banner";
import IconsWithCounters from "@/components/home/iconsWithCounters";
import PostBannerBox from "@/components/home/postBannerBox";
import TwoColumnTextWithImage from "@/components/home/twoColumnTextWithImage";
import CTA from "@/components/shared/CTA";
import PreFooter from "@/components/shared/PreFooter";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

const Home = () => {
  const t = useTranslations("Index");
  return (
    <>
      <h1>{t("title")}</h1>
      <Banner />
      <PostBannerBox />
      <IconsWithCounters />
      <TwoColumnTextWithImage />
      <Features />
      <CTA
        headline="Get the consultation For Most Complex Legal Issues."
        buttonLink="#"
        buttonText="Contact Us"
        ctaType="withBg"
      />
      <PracticeAreas />
      <BlogPosts />
      <TeamMembers />
      <CTA
        headline="We Treat Every Case Equally With Same Attention And Dedication Because Every Client Matters."
        buttonLink="#"
        buttonText="Request Free Consultation"
        ctaType="withImage"
      />
      <FAQs />
      <Testimonials />
      <PreFooter />
    </>
  );
};

export default Home;

export async function generateMetadata({ params: { locale } }: any) {
  const t = await getTranslations({ locale});

  return {
    title: t("title"),
    description: "Your one stop solution for legal matters",
  };
}
