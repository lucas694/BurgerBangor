import "./Banner.css";
import Banner1 from "../Assets/Banner1.png";
import Banner2 from "../Assets/Banner2.png";
import CardBanner from "./CardBanner";
const Banner = (props) => {
  return(
    <div className={"BannerContainer"}>
      <div className={"BannerContent"}>
        <CardBanner img={Banner1} title={"salt & Vinegar french fries"}/>
        <CardBanner img={Banner2} title={"crispy chicken sandwich"}/>
      </div>
      <h1 className={"BannerMessage"}> the best burger i’ve ever had </h1>
    </div>
  )
};export default Banner