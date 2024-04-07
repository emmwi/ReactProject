import { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { ThemeBtn } from "./StyledComponents";

function ThemeChange() {
  const [colorTheme, setColorTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    setColorTheme((prevTheme) => !prevTheme);
  };

  /*useEffect uppdateras varje gång colorTheme ändras från true/false och om colortheme är true sätter vi body till klassen yellow-Theme och om vi ändrar den till false så sätter vi body till klassen green-theme.
  https://dev.to/franklin030601/using-dark-mode-in-your-react-app-5364*/
  useEffect(() => {
    document.body.className = colorTheme ? "light-theme" : "dark-theme";
  }, [colorTheme]);

  return (
    <>
      <ThemeBtn type="button" value="Change Theme" onClick={toggleTheme} />
    </>
  );
}

export default ThemeChange;
