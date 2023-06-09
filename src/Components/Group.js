import "./Group.css";
import BtnBase from "./Btn/BtnBase";
const Group = () => {
  return(
    <div className={"GroupContainer"}>
      <div className={"GroupContent"}>
        <div className={"GroupLeft"}>
          <h1 className={"GroupLeftTitle"}>the burger above all burgers</h1>
        </div>
        <div className={"GroupRight"}>
          <p className={"GroupRightDesc"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec ornare neque.</p>
          <div className={"BtnControl"}>
            <BtnBase className={"BtnWhite"} Children={"About Us"} />
          </div>
        </div>
      </div>

    </div>
  )
};export default Group;