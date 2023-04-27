import { useState } from "react";
import Button from "react-bootstrap/Button";

const Form = ({ renderHome }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: "dillard.69@osu.edu",
    password: "lookingforlove",
  });

  // Return true if the formState matches the valid state object
  const isValid = (submitState) => {
    // if submitState is the same as valid then return isValid as true
    return (
      submitState.email === valid.email &&
      submitState.password === valid.password
    );

    // if not, console.error("you fucked up Micah")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid(formState)) {
      // show home page
      renderHome();
      console.log("You're in Micah");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        placeholder="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
      />

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </form>
  );
};

export default Form;
