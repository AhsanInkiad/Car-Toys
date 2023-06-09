import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Blogs from "../pages/blogs/Blogs";
import AllToys from "../pages/all toys/AllToys";
import AddToy from "../pages/add toy/AddToy";
import Details from "../pages/details/Details";
import Mytoy from "../pages/mytoy/Mytoy";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../pages/update toy/UpdateToy";
import ViewDetails2 from "../details 2/ViewDetails2";
import ViewDetails3 from "../details 3/ViewDetails3";
import NotFound from "../notfound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: '/addtoy',
        element: <AddToy></AddToy>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-toy-server-two.vercel.app/toys/${params.id}`)
      },

      {
        path: '/mytoy',
        element: <PrivateRoute><Mytoy></Mytoy></PrivateRoute>,
      },
      {
        path: '/updatetoy/:id',
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) => fetch(`https://car-toy-server-two.vercel.app/addedtoys/${params.id}`)
      },
      {
        path: '/viewdetails2/:id',
        element:  <PrivateRoute><ViewDetails2></ViewDetails2></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-toy-server-two.vercel.app/addedtoys/${params.id}`)

      },
      {
        path: '/viewdetails3/:id',
        element: <PrivateRoute> <ViewDetails3></ViewDetails3> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-toy-server-two.vercel.app/toys/${params.id}`)
      }


    ]
  },
  {
    path: '*',
    element: <NotFound></NotFound>
  }
]);

export default router;