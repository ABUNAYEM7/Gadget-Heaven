import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* dynamic layout */}
      <div className="min-h-svh[calc(100vh-200px)]">
      <ToastContainer
              position="top-center"
              autoClose={500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition: Bounce
              />
        <Outlet />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
