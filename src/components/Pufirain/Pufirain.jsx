import { Rainshop } from "./Rainshop";
import umbrellaRain from "../../assets/umbrellaRain.png";

export const Pufirain = () => {
    return (
      <>
      <Rainshop />
        <div className="rain_section">
          <img src={umbrellaRain} alt="redUmbrella" style={{width: "8rem", paddingBottom: "25px"}}/>
            <h2>Pufi RAIN</h2>
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