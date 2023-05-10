import './App.css';
import Home from './components/home';
import Mainpage from './components/mainpage';
import Dailytask from './components/dailytask';
import Newtask from './components/newtask';
import Navbar from './components/navbar';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//What's the difference between BrowserRouter and CreateBrowswerRouter?

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/mainpage",
    element: <Mainpage />
  },
  {
    path: "/dailytask",
    element: <Dailytask />
  },
  {
    path: "/newtask",
    element: <Newtask />
  }
])
function App() {
  return (
    <createBrowserRouter>
      <Navbar/>
      <RouterProvider
        router={router}
        fallbackElement={<Home />}
      />
      
    </createBrowserRouter>
    
  );
}

export default App;
