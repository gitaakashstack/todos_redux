import "./Button.css";

const Button = function (props) {
  return (
    <button type="button" className="generic-btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
