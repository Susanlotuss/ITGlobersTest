import umbrella from "../../assets/umbrella.png";
import chair from "../../assets/chair.png";
import bag from "../../assets/bag.png";
import naping from "../../assets/naping.png";

export const Navbar = () => {
  return (
    <>
      <img
        src={chair}
        alt="chair-vector"
        className="vectors"
        style={{marginLeft: "27rem"}}
      />
      <img
        src={umbrella}
        alt="umbrella-vector"
        className="vectors"
      />
      <img
        src={bag}
        alt="bag-vector"
        className="vectors"
      />
      <img
        src={naping}
        alt="naping-vector"
        className="vectors"
      />
      <div className="navbar_container">
        <nav>
          <a href="/" style={{borderRight: "1px solid aliceblue"}}>PUFI PUFF</a>
          <a href="/" style={{borderRight: "1px solid aliceblue"}}>PUFI RAIN</a>
          <a href="/" style={{borderRight: "1px solid aliceblue"}}>PUFI CART</a>
          <a href="/">PUFI NAP</a>
        </nav>
      </div>
      <div className="nav_button">
        <button style={{borderRight: "1px solid aliceblue"}}>MI CUENTA</button>
        <button>MI COMPRA</button>
      </div>
    </>
  );
};
