// react router
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./pages/registration"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration/>,
  },
]);

 
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
