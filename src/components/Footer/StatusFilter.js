import { useDispatch } from "react-redux";
import { taskStatus } from "../../store/filter-slice";
import { filterActionCreator } from "../../store/filter-slice";
import Button from "../UI/Button";
import "./StatusFilter.css";

const StatusFilter = function () {
  const dispatch = useDispatch();

  function statusFilterHandler(event) {
    if (event.target.tagName !== "BUTTON") return;

    if (event.target.innerText === "All")
      dispatch(filterActionCreator.setTaskStatus(taskStatus.all));
    if (event.target.innerText === "Active")
      dispatch(filterActionCreator.setTaskStatus(taskStatus.active));
    if (event.target.innerText === "Completed")
      dispatch(filterActionCreator.setTaskStatus(taskStatus.completed));
  }

  return (
    <section className="status-filter">
      <h4>Filter By Status</h4>
      <div className="status" onClick={statusFilterHandler}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </div>
    </section>
  );
};

export default StatusFilter;
