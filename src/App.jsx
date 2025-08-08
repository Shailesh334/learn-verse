import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router";
import Watch from "./components/Watch";
import VideoContainer from "./components/VideoContainer";

function App() {

  const appRoutes = createBrowserRouter([
    {
      path:"/",
      element:<Body/>,
      children:[
        {
           
          path:"/",
          element:<VideoContainer />
        
        },
        {
          path:"/watch",
          element:<Watch />
        }
      ]
    }
  ])
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRoutes}/>
      </Provider>
    </div>
  );
}

export default App;
