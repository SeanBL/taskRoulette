import './App.css';
import Home from './components/home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

//What's the difference between BrowserRouter and CreateBrowswerRouter?

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])
function App() {
  return (
    <RouterProvider
    router={router}
    fallbackElement={<Home />}
    />
  );
}

export default App;
