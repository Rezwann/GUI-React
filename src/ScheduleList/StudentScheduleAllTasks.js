import ScheduleTask from "/src/ScheduleList/StudentScheduleTask";

/* Example followed from React website:
https://reactjs.org/docs/lists-and-keys.html */
const AllTasks = ({ tasks, removeStudentTask }) => {
  return (
    <div className="taskstyles">
      <section className="task_whitespace"></section>
      {/* here, we are iterating through 'tasks' */}
      {/* we are using StudentScheduleTask.js which 
      has 'IndividualTaskOnList'*/}
      {/* removeStudentTask can be seen in StudentSchedule.js */}
      {tasks.map((IndividualTaskOnList) => (
        <ScheduleTask
          key={IndividualTaskOnList.id}
          IndividualTaskOnList={IndividualTaskOnList}
          removeStudentTask={removeStudentTask}
        />
      ))}
    </div>
  );
};

export default AllTasks;
