import { Puffshop } from "./Puffshop";
import puffy from "../../assets/puffy.png";

export const Pufipuff = () => {
    return (
      <>
      <Puffshop />
        <div className="puff_section">
            <img src={puffy} alt="puffImage" style={{width: "8rem", paddingBottom: "25px"}}/>
            <h2>Pufi PUFF</h2>
            <br />
            <hr />
            <p>Descripción del producto. Este es <br /> un texto simulado</p>
            <button>
                VER MÁS
            </button>
        </div>
      </>
    );
  };