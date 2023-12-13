import { FaTimes } from "react-icons/fa";

/* we only need a task's id for rmeoving and the id
itself does not have to be shown or a part
of <h3> */
const IndividualTask = ({ IndividualTaskOnList, removeStudentTask }) => {
    return ( <
        div className = "task" >
        <
        h3 > { IndividualTaskOnList.text } <
        FaTimes style = {
            { color: "white", cursor: "pointer" } }
        onClick = {
            () => removeStudentTask(IndividualTaskOnList.id) }
        /> <
        /h3> <
        /div>
    );
};
/* Here, currently as you can see there is only a remove button of white colour 
that causes cursor to change to point and ultimately just removes based on ID.
A button to edit would be placed here and allow task text to be changed and 
existing text would be obtained depending on the task being editted. */
export default IndividualTask;