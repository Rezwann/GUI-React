import "/src/styles.css";

/* This deals with the change list button, 
a student is able to use */
/* There is no need to pass showAdd as
parameter because these two buttons can be free */
const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="changebutton"
      style={{ backgroundColor: "#55607e" }}
    >
      Change List
    </button>
  );
};

/* Here, we do need onAdd, so that once change list
is clicked, the Add Task button appears */
const Header = ({ onAdd }) => {
  return (
    <header>
      <Button onClick={onAdd} />
    </header>
  );
};

export default Header;
