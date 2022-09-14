import { Cartshop } from "./Cartshop";
import carts from "../../assets/carts.png";

export const Puficart = () => {
    return (
      <>
      <Cartshop />
        <div className="cart_section">
            <img src={carts} alt="cartImg" style={{width: "10rem", paddingBottom: "25px"}}/>
            <h2>Pufi CART</h2>
            <br />
            <hr />
            <p>Descripción del producto. Este es un texto simulado</p>
            <button>
                VER MÁS
            </button>
        </div>
      </>
    );
  };