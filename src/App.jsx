import MemoryGame from "./MemoryGame";
import LoginForm from "./LoginForm";
import ProfilePage from "./ProfilePage";
import Rules from "./Rules";
import { createHashRouter, RouterProvider } from "react-router-dom";
import HomeView from "./HomeView";

function App() {
  const router = createHashRouter([
    {
      children: [
        { element: <Rules />, path: "/" },
        { element: <MemoryGame />, path: "/memory" },
        { element: <LoginForm />, path: "/login" },
        { element: <ProfilePage />, path: "/profile/:username" },
      ],
      element: <HomeView />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
