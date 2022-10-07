import Footer from "../components/shared/Footer/Footer";
import FooterBottom from "../components/shared/Footer/FooterBottom";
import { HeaderCatagory } from "../components/shared/HeaderCatagory/HeaderCatagory";
import Navbar from "../components/shared/Navbar/Navbar";
import { HomeContainer } from "../Features/HomeContainer/HomeContainer";


export default function Home() {
  return (
    <div >
      <Navbar/>
      <HeaderCatagory/>
      <HomeContainer/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}
