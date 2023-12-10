import { useDispatch } from "react-redux";
import { taskActionCreator } from "../store/task-slice";
import "./Heading.css";

const Heading = function () {
  const dispatch = useDispatch();
  function keyDownHandler(event) {
    if (event.keyCode !== 13) return;
    if (!event.target.value.trim()) return;

    dispatch(taskActionCreator.appendTask(event.target.value));
    event.target.value = event.target.defaultValue;
  }
  return (
    <header className="heading">
      <input
        type="text"
        defaultValue="What Needs To Be Done ?"
        onKeyDown={keyDownHandler}
      ></input>
    </header>
  );
};

export default Heading;
