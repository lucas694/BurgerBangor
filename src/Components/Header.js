import "./Header.css";

const Header = () => {
  return(
    <div className={"HeaderContainer"}>
      <div className={"HeaderContent"}>
        <h1 className={"HeaderTitle"}>burger bangor</h1>
        <nav className={"HeaderNavbar"}>
          <li className={"HeaderLi"}>About</li>
          <li className={"HeaderLi"}>Menu</li>
          <li className={"HeaderLi hidden sm:block"}>Order Online</li>
          <li className={"HeaderLi sm:hidden"}>Order</li>
        </nav>
      </div>
    </div>
  )
};export default Header;