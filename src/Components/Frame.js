import "./Frame.css";
import FrameImg from "../Assets/frameimg.png";
import BtnBase from "./Btn/BtnBase";

const Frame = () => {
  return(
    <div className={"FrameContainer"}>
      <div className={"FrameContent"}>
        <div className={"FrameImgContent"}>
          <img src={FrameImg} alt={"FrameImg"}  className={"Frameimg"}/>
        </div>
        <div className={"FrameTextContent"}>
          <h1 className={"FrameText"}>order online or</h1>
          <h1 className={"FrameText"}>come visit us today</h1>
          <div className={"FrameBtnControl"}>
            <BtnBase className={"FrameBtn"} Children={"Order Now"}/>
          </div>
        </div>
      </div>

    </div>
  )
};export default Frame;