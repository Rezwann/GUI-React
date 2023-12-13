import React, { useState } from "react";
import TaskListHeader from "/src/ScheduleList/StudentScheduleHeader";
import StudentTasks from "/src/ScheduleList/StudentScheduleAllTasks";
import AddStudySessionTask from "/src/ScheduleList/AddStudySessionTask";

export default function StudentSchedule() {
  /* the "Add Task" button is only needed 
  if the student wants to change the list */
  const [ShowAddTaskButton, setShowAddTaskButton] = useState(false);
  const [ScheduleListTasks, setStudyTasks] = useState([]);

  // removing task using id
  const deleteTask = (id) => {
    setStudyTasks(ScheduleListTasks.filter((task) => task.id !== id));
  };

  // adding task with a random id
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 25000) + 1;
    const newTask = { id, ...task };
    setStudyTasks([...ScheduleListTasks, newTask]);
  };

  return (
    /* when change list is selected, const value is changed */
    /* onAdd from AddStudySessionTask.js */
    <div className="session-container">
      <div className="container">
        <TaskListHeader
          onAdd={() => setShowAddTaskButton(!ShowAddTaskButton)}
          ShowAddTaskButton={ShowAddTaskButton}
        />
        <h2 className="sessiontitle">Task List</h2>
        <div className="main-tasks">
          {ShowAddTaskButton && <AddStudySessionTask onAdd={addTask} />}
          {ScheduleListTasks.length > 0 ? (
            <StudentTasks
              tasks={ScheduleListTasks}
              removeStudentTask={deleteTask}
            />
          ) : (
            <h2 className="missing-task-text">"You have no tasks added"</h2>
          )}
        </div>
      </div>
    </div>
  );
}
/* text displayed where total tasks is not greater than zero */
