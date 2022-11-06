import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
function App() {
  return (
    <div className="max-w-6xl mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Vehicle Doctor - Doctor for your vehicle</title>
        <meta
          name="description"
          content="Vehicle Doctor is a react application for vehicle repair shop."
        />
      </Helmet>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
