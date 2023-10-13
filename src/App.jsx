/* eslint-disable no-undef */
//three pages so far. other ideas i had for pages were: calendar (currently i have that as a component if it seems to fit with anything else), contact us (but that could just be within the sponsorship page, or as a dropdown link and it's still its own page?), a social media hub.
//for next time 10/13: check each page for copy/design. everything is TECHNICALLY done.

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
