import { useDispatch } from "react-redux";
import { taskColor } from "../../App";
import { taskActionCreator } from "../../store/task-slice";
import "./InputElement.css";

const InputElement = function (props) {
  const dispatch = useDispatch();

  function checkboxChangeHandler(event) {
    dispatch(taskActionCreator.updateCompletionStatus({ id: props.id }));
  }

  function dropdownChangeHandler(event) {
    dispatch(
      taskActionCreator.updateTaskColor({
        id: props.id,
        taskColor: event.target.value,
      })
    );
  }

  return (
    <div className="input-wrapper">
      <div className="checkbox">
        <input
          type="checkbox"
          id={props.id}
          onChange={checkboxChangeHandler}
          checked={props.isChecked}
        ></input>
        <label htmlFor={props.id}>{props.label}</label>
      </div>
      <div className="dropdown">
        <select onChange={dropdownChangeHandler} value={props.color}>
          <option></option>
          <option value={taskColor.green}>Green</option>
          <option value={taskColor.blue}>Blue</option>
          <option value={taskColor.orange}>Orange</option>
          <option value={taskColor.purple}>Purple</option>
          <option value={taskColor.red}>Red</option>
        </select>
      </div>
    </div>
  );
};

export default InputElement;
