import { Navbar } from "./Navbar";
import { Content } from "./Content";

export const Header = () => {
  return (
    <>
      <div className="header_sectionbg">
        <h1>Pufi°</h1>
        <Navbar />
        <Content />
      </div>
    </>
  );
};
