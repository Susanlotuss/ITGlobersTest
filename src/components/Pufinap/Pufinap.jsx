import { Napshop } from "./Napshop";
import napy from "../../assets/napy.png";

export const Pufinap = () => {
    return (
      <>
      <Napshop />
        <div className="nap_section">
            <img src={napy} alt="pillowImg" style={{width: "8rem", paddingBottom: "25px"}}/>
            <h2>Pufi NAP</h2>
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