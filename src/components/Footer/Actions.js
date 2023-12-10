import { useDispatch } from "react-redux";
import { taskActionCreator } from "../../store/task-slice";
import Button from "../UI/Button";
import "./Action.css";

const Actions = function () {
  const dispatch = useDispatch();

  function markAllCompletedHandler() {
    dispatch(taskActionCreator.markTasksCompleted());
  }

  function clearCompletionHandler() {
    dispatch(taskActionCreator.clearTaskCompletion());
  }

  return (
    <section className="action">
      <h4>Actions</h4>
      <div className="action-btns">
        <Button onClick={markAllCompletedHandler}>Mark All Completed</Button>
        <Button onClick={clearCompletionHandler}>Clear Completed</Button>
      </div>
    </section>
  );
};

export default Actions;
