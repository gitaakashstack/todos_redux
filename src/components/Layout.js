import "./Layout.css";

const Layout = function (props) {
  return <main className="center-card">{props.children}</main>;
};

export default Layout;
