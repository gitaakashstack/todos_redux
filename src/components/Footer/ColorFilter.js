import { useDispatch } from "react-redux";
import { taskColor } from "../../App";
import { filterActionCreator } from "../../store/filter-slice";
import "./ColorFilter.css";

const ColorFilter = function () {
  const dispatch = useDispatch();
  function colorSelectHandler(event) {
    if (event.target.tagName !== "INPUT") return;

    console.log(event.target.value);
    dispatch(filterActionCreator.setTaskColors(event.target.value));
  }
  return (
    <section className="color-filter">
      <h4>Filter By Color</h4>
      <form className="colors" onChange={colorSelectHandler}>
        <div className="color-box">
          <input type="checkbox" id="green" value={taskColor.green}></input>
          <label htmlFor="green">Green</label>
        </div>
        <div className="color-box">
          <input type="checkbox" id="blue" value={taskColor.blue}></input>
          <label htmlFor="blue">Blue</label>
        </div>
        <div className="color-box">
          <input type="checkbox" id="purple" value={taskColor.purple}></input>
          <label htmlFor="purple">Purple</label>
        </div>
        <div className="color-box">
          <input type="checkbox" id="red" value={taskColor.red}></input>
          <label htmlFor="red">Red</label>
        </div>
        <div className="color-box">
          <input type="checkbox" id="orange" value={taskColor.orange}></input>
          <label htmlFor="orange">Orange</label>
        </div>
      </form>
    </section>
  );
};

export default ColorFilter;
