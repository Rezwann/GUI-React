import { useState } from "react";

const StudentTask = ({ onAdd }) => {
  /* const for checking student enters a task */
  const [text, setText] = useState("");
  const SubmitStudentTask = (event) => {
    event.preventDefault(); /* prevent refresh */
    if (!text) {
      alert("You must enter a task.");
      return;
    }
    onAdd({ text });
  };

  /* form's onSubmit allows us to use text */
  return (
    <form onSubmit={SubmitStudentTask}>
      <input className="sessionbutton" type="submit" value="Add Task" />
      <section className="whitespace"></section>
      <input
        className="task_input"
        type="text"
        placeholder=" Enter a task "
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
    </form>
  );
};

/* "setText" i.e. in intial const */
export default StudentTask;
