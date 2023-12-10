import { useEffect } from "react";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import Tasks from "./components/Tasks/Tasks";
import store from "./store";

export const taskColor = {
  green: "GREEN",
  orange: "ORANGE",
  blue: "BLUE",
  purple: "PURPLE",
  red: "RED",
};

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Heading />
        <Tasks />
        <Footer />
      </Layout>
    </Provider>
  );
}

export default App;
