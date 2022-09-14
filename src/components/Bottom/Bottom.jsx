import { Footer } from "../Footer/Footer";
import face from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import insta from "../../assets/instagram.png"

export const Bottom = () => {
  return (
    <>
      <section>
        <div className="bottom_section">
          <p className="p_bottom">Pufi</p>
          <li>
            <ul>PUFI RAIN</ul>
            <ul>PUFI PUFF</ul>
            <ul>PUFI CART</ul>
            <ul>PUFI NAP</ul>
          </li>
          <li>
            <ul>CONTACTO</ul>
            <ul>AYUDA</ul>
            <ul>CÓMO COMPRAR</ul>
            <ul>TÉRMINOS & CONDICIONES</ul>
          </li>
          <li>
            <ul>COMPRA 100% SEGURA</ul>
          </li>
          <li>
            <ul>SEGUINOS EN <img src={face} alt="socialVector"/> <img src={twitter} alt="socialVector" /> <img src={insta} alt="socialVector" /></ul>
          </li>
        </div>
      </section>
      <Footer />
    </>
  );
};
