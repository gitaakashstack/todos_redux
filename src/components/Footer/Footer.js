import Actions from "./Actions";
import ColorFilter from "./ColorFilter";
import RemainingTodos from "./RemainingTodos";
import StatusFilter from "./StatusFilter";
import "./Footer.css";

const Footer = function () {
  return (
    <footer className="footer">
      <Actions />
      <RemainingTodos />
      <StatusFilter />
      <ColorFilter />
    </footer>
  );
};

export default Footer;
