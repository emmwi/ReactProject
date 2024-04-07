import HeaderNavbar from "./HeaderNavbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

function HomeView() {
  const [colorTheme, setColorTheme] = useState(true);

  /*ägger in alla mina komponenter inom ThemeContext så att alla komponenter kan använda den*/
  return (
    <>
      <ThemeContext.Provider value={[colorTheme, setColorTheme]}>
        <HeaderNavbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ThemeContext.Provider>
    </>
  );
}
export default HomeView;
