import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import BentoCards from "@/components/BentoCards/BentoCards";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import CTA from "@/components/CTA/CTA";

export default function Home(){
return(
<>
<Navbar/>
<Hero/>
<BentoCards/>
<Services/>
<Projects/>
<CTA/>
</>
)
}