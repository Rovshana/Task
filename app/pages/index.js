import Footer from "../components/shared/Footer/Footer";
import FooterBottom from "../components/shared/Footer/FooterBottom";
import { HeaderCatagory } from "../components/shared/HeaderCatagory/HeaderCatagory";
import Navbar from "../components/shared/Navbar/Navbar";
import SubMenu from "../components/SubMenu/SubMenu";
import BasketConatiner from "../Features/BasketContainer/BasketConatiner";
import { HomeContainer } from "../Features/HomeContainer/HomeContainer";
import ProductContainer from "../Features/ProductContainer/ProductContainer";


export default function Home() {
  return (
    <div >
      {/* <BasketConatiner/> */}
      
      <HomeContainer/>
      {/* <ProductContainer/> */}
      {/* <SubMenu/> */}
      
    </div>
  )
}
