import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Logobar from "@/components/logobar";
import Arrivals from "@/components/arrivals";
import TopSelling from "@/components/topSelling";
import DressStyle from "@/components/dressStyle";
import HappyCustomers from "@/components/happyCustomers";
import NewsLetter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Logobar />
      <Arrivals />
      <TopSelling />
      <DressStyle />
      <HappyCustomers />
      <NewsLetter />
      <Footer />
    </>
  );
}
