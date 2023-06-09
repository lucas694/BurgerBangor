import "./BtnBase.css";

const BtnBase = (props) => {
  const {onClick,className} = props;
  return(
    <button onClick={onClick} className={`BtnBase ${className}`}>
      {props.Children}
    </button>
  )
};export default BtnBase;