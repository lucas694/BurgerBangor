import "./BurgerBanner.css";
import Burgers from "../Assets/Burgers.png";
const BurgerBanner = () => {
  return(
    <div className={"BurgerBannerContainer"}>
      <div className={"BurgerBannerContent"}>
        <h1 className={"BurgerBannerTitle"}>NEW YORK’S FAVORITE ORGANIC HAMBURGER JOINT</h1>
        <img src={Burgers} alt={"Burgers"} className={"BurgerBannerImage"}/>
      </div>
    </div>
  )
};
export default BurgerBanner;