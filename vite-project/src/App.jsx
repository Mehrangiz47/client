//Style
import { Home } from "./components/pages/home/home";
//React Router Dom
import {createBrowSerRouter, RouterProvider} from "react-router-dom"
//Components
import {CotactDetails} from './components/contact-details/contactDetails'

//Pages
function App() {
  const router = createBrowSerRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ])
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  );
}

export default App;
