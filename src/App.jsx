import React, { useState } from "react";
import Select from "react-select";

function App() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [progressTasks, setProgressTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [showOnlyHigh, setShowOnlyHigh] = useState(false);

  const handleAddTask = (taskList, setTaskList) => {
    const priority = window.prompt('Görev önceliğini seçin: "low" veya "high"');
    if (priority && (priority === "low" || priority === "high")) {
      const task = window.prompt("Görevi giriniz:");
      if (task) {
        setTaskList([...taskList, { task: task, priority: priority }]);
      }
    } else {
      alert('Geçersiz seçim! Lütfen "low" veya "high" girin.');
    }
  };

  const handleMoveTask = (
    taskIndex,
    sourceList,
    setSourceList,
    destinationList,
    setDestinationList
  ) => {
    const taskToMove = sourceList[taskIndex];
    setSourceList(sourceList.filter((_, index) => index !== taskIndex));
    setDestinationList([...destinationList, taskToMove]);
  };

  const handleDeleteTask = (taskIndex, tasks, setTasks) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
  };

  const renderTasks = (tasks, setTasks, title) => {
    const options =
      title === "To Do"
        ? [
            { value: "move_to_progress", label: "Move to Progress" },
            { value: "move_to_done", label: "Move to Done" },
            { value: "", label: "Delete Task" },
          ]
        : title === "Done"
        ? [{ value: "", label: "Delete Task" }]
        : [
            { value: "move_to_done", label: "Move to Done" },
            { value: "", label: "Delete Task" },
          ];

    const handleChange = (selectedOption) => {
      if (selectedOption && selectedOption.value === "move_to_progress") {
        handleMoveTask(
          selectedTaskIndex,
          tasks,
          setTasks,
          progressTasks,
          setProgressTasks
        );
      } else if (selectedOption && selectedOption.value === "move_to_done") {
        handleMoveTask(
          selectedTaskIndex,
          tasks,
          setTasks,
          doneTasks,
          setDoneTasks
        );
      } else if (selectedOption && selectedOption.value === "") {
        handleDeleteTask(selectedTaskIndex, tasks, setTasks);
      }
    };

    const filteredTasks = showOnlyHigh
      ? tasks.filter((task) => task.priority === "high")
      : tasks;

    return (
      <div className="card">
        <div className="first-part">
          <div className="circle"></div>
          <p className="header">{title}</p>
          <div className="btn-div">
            <button
              className="btn-div-inside"
              onClick={() => handleAddTask(tasks, setTasks)}
            >
              +
            </button>
          </div>
        </div>
        <hr className="line"></hr>
        <div className="second-part">
          {filteredTasks.map((taskItem, index) => (
            <div className="box" key={index}>
              <div className="box-header">
                <span
                  className={`low-high ${
                    taskItem.priority === "high"
                      ? "high-priority"
                      : "low-priority"
                  }`}
                >
                  {taskItem.priority}
                </span>
                <Select
                  options={options}
                  onChange={handleChange}
                  placeholder="..."
                  className="menu"
                  onFocus={() => setSelectedTaskIndex(index)}
                  onBlur={() => setSelectedTaskIndex(null)}
                />
              </div>
              <div>
                <span className={`task ${taskItem.priority}`}>
                  {taskItem.task}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);

  return (
    <div>
      <div className="header-and-button">
        <h1 className="alls-header">Tasks</h1>
        <button
          className="first-button"
          onClick={() => setShowOnlyHigh(!showOnlyHigh)}
        >
          {showOnlyHigh ? "Show All" : "Show Only High"}
        </button>
      </div>
      <div className="three-card">
        {renderTasks(todoTasks, setTodoTasks, "To Do")}
        {renderTasks(progressTasks, setProgressTasks, "Progress")}
        {renderTasks(doneTasks, setDoneTasks, "Done")}
      </div>
    </div>
  );
}

export default App;
