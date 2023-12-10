import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskStatus } from "../../store/filter-slice";
import { LoadTasks } from "../../store/task-slice";
import InputElement from "./InputElement";
import "./Tasks.css";

const DUMMY_TASKS = [
  {
    id: "t1",
    task: "Learn React",
  },
  {
    id: "t2",
    task: "Learn Redux",
  },
  {
    id: "t3",
    task: "Don't Give up",
  },
];

const getFilteredTasks = function (status, colors) {
  return (task) => {
    let colorFilter = true;

    if (task.color && 0 in colors) colorFilter = colors.includes(task.color);
    console.log(colorFilter);
    if (status === taskStatus.active) return !task.completed && colorFilter;
    if (status === taskStatus.completed) return task.completed && colorFilter;
    return colorFilter;
  };
};

const Tasks = function () {
  const tasks = useSelector((state) => state.task.tasks);
  const { status, colors } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter(getFilteredTasks(status, colors));

  useEffect(() => {
    dispatch(LoadTasks());
  }, [dispatch]);

  const InputElementJSX = filteredTasks.map((taskobj) => (
    <InputElement
      id={taskobj.id}
      label={taskobj.task}
      isChecked={taskobj.completed}
      color={taskobj.color}
    />
  ));

  return <form className="tasklist">{InputElementJSX}</form>;
};

export default Tasks;
