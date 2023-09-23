import "./App.css";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Work from "./Pages/work/Work";
import Sidebar from "./components/sidebar'/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Sidebar>
          <Home />
        </Sidebar>
      ),
    },
    {
      path: "/about",
      element: (
        <Sidebar>
          <About />
        </Sidebar>
      ),
    },
    {
      path: "/work",
      element: (
        <Sidebar>
          <Work />
        </Sidebar>
      ),
    },
    {
      path:"*",
      element:<h1 class='text-center'>Page Not Found</h1>
    }
  ]);
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
