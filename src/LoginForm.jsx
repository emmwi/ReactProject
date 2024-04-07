import { useState, useEffect } from "react";
import { FormDiv, FormStyle, InputForm, InputButton } from "./StyledComponents";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
//använder useNavigate för att kunna navigera till den user man vill se profilen basserat på adressparametervärde

const initialValues = {
  username: "",
  password: "",
};

const validate = (values) => {
  let errors = {};
  //om username är tomt hanteras ett error att det måste vara ifyllt.
  if (!values.username) {
    errors.username = "You don't remember your username? tough luck bäjbs";
  }
  //om password är tom så ges ett error att det måste vara ifyllt
  if (!values.password) {
    errors.password = "You must type in your password, tänk ju";
  }
  return errors;
};
function LoginForm() {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //hämtar och sparar ner users för att sedan kunna använda det vid inloggning
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    //try-catch på async function så att allt är hämtat och klart
    try {
      const response = await fetch("users.json");
      const result = await response.json();
      setUsers(result.users);
    } catch (error) {
      console.log("error fetching users", error);
    }
  }

  //för att kunna pusha till nästa sida där man använder params()för att läsa värdet från länken vem som är inloggad.
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validate,

    onSubmit: (values) => {
      //om det inte finns användare hämtade slutar funktionen köras
      if (users.length === 0) {
        console.log("Användardata har inte hämtats ännu.");
        return;
      }
      /*kollar igenom users för att se om username och password man skrivit in matchar, (- gör om allt till Lowercase )om det gör detta så navigerar den till det username man har skrivit in med hjälp av   { element: <ProfilePage />, path: "/profile/:username" }, i app.jsx */
      const lowercaseUsername = values.username.toLowerCase();
      const lowercasePassword = values.password.toLowerCase();
      const user = users.find(
        (user) =>
          user.user.toLowerCase() === lowercaseUsername &&
          user.password.toLowerCase() === lowercasePassword
      );
      //om const user finns så navigeras man till dennes profilsida- basserat på username
      if (user) {
        navigate(`/profile/${values.username}`);
      } else {
        setErrorMessage("wrong user name or password, try again.");

        //resettar felmeddelandet till osynligt efter 10-sekunder
        setTimeout(() => {
          setErrorMessage("");
        }, 10000);
      }
    },
  });

  return (
    <>
      <FormDiv>
        <FormStyle onSubmit={formik.handleSubmit}>
          <label htmlFor="username">User Name</label>
          <InputForm
            type="text"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <p className="errors">{formik.errors.username}</p>
          ) : null}
          <label htmlFor="password">Password</label>
          <InputForm
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="errors">{formik.errors.password}</p>
          ) : null}
          <InputButton type="submit" value="Log in" />
          {errorMessage && <p className="errors">{errorMessage}</p>}
        </FormStyle>
      </FormDiv>
    </>
  );
}
export default LoginForm;
