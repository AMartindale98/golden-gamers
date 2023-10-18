import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Sponsorship from "./pages/Sponsorship";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Captains from "./pages/Captains";
import { DonorDriveProvider } from "./contexts/DonorDriveContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/sponsorship", element: <Sponsorship /> },
  { path: "/contact", element: <Contact /> },
  { path: "/about/team", element: <About /> },
  { path: "/about/captains", element: <Captains /> },
]);

function App() {
  return (
    <DonorDriveProvider>
      <RouterProvider router={router} />
    </DonorDriveProvider>
  );
}

export default App;
