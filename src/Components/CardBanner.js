import "./CardBanner.css";

const CardBanner = (props) => {
  const {img,title} = props
  return(
    <div className={"CardBannerContainer"}>
      <img src={img} alt={"Banner1"} className={"BannerImg"} />
      <div className={"CardBannerContent"}>
        <h1 className={"CardBannerTitle"}>{title}</h1>
        <h1 className={"CardBannerDesc"}>order online</h1>
      </div>
    </div>
  )
};export default CardBanner