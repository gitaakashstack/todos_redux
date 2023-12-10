import { useSelector } from "react-redux";
import "./RemainingTodos.css";

const RemainingTodos = function () {
  const remainingTodos = useSelector((state) => state.task.incompleteTasks);
  return (
    <section className="rem-todos">
      <h4>Remaining Todos</h4>
      <div>
        <p>{remainingTodos} task left</p>
      </div>
    </section>
  );
};

export default RemainingTodos;
