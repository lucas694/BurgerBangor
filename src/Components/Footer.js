import "./Footer.css";

const Footer = () => {
  return(
    <div className={"FooterContainer"}>
      <div className={"FooterMainContent"}>
        <div className={"FooterContent"}>
          <div className={"FooterLeft"}>
            <h1 className={"FooterLogo"}>Burger</h1>
            <h1 className={"FooterLogo"}>BANGOR</h1>
          </div>
          <ul className={"UlFooter"}>
            <h1 className={"FooterListTitle"}>Home</h1>
            <li>About</li>
            <li>Menu</li>
            <li>Locations</li>
            <li>Privacy</li>
          </ul>
          <ul className={"UlFooter"}>
            <h1 className={"FooterListTitle"}>Home</h1>
            <li>Open from</li>
            <li>11AM to</li>
            <li>11PM daily</li>
          </ul>
          <div className={"FooterRight"}>
            <h1 className={"FooterFormTitle"}>Join Our Newsletter</h1>
            <div className={"FooterInputControl"}>
              <input className={"FooterFormInput"}  />
              <button className={"FooterFormButton"}>Submit</button>
            </div>
          </div>
        </div>
        <div className={"FooterBottom"}>
          <p className={"FooterCopyText"}>Copyright Burger Heaven</p>
          <p className={"FooterCopyText"}>Privacy Policy</p>
        </div>
      </div>
    </div>
  )
};export default Footer;