import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Testimoni from "../components/Testimoni";

export default function Home() {
  return (
    <>
      
      <SeoHead title='CHMIS Landing Page' image='https://www.chak.or.ke/images/logo.png'/>
      <Layout>
        <Hero />
        <Feature />
        <Pricing /> 
         
      </Layout>
    </>
  );
}
