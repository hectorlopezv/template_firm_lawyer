
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


const Home = () => {
  // const t = useTranslations("Index");
  return (
    <>
      <Banner />
      <PostBannerBox />
      <IconsWithCounters />
      <TwoColumnTextWithImage />
      <Features />
      <CTA
        headline="Obtenga la consulta para las cuestiones legales más complejas."
        buttonLink="#"
        buttonText="Conocenos"
        ctaType="withBg"
      />
      <PracticeAreas />
      {/* <BlogPosts /> */}
      <TeamMembers />
      <CTA
        headline="Tratamos cada caso por igual con la misma atención y dedicación porque cada cliente importa."
        buttonLink="/contacto"
        buttonText="Solicite una consulta gratis"
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

  return {
    title: "Lopez & Abogados",
    description: "Su solución integral para asuntos legales",
  };
}
