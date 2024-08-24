import Footer from "@/components/easy-drive/Footer";
import Navbar from "@/components/easy-drive/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <h1>Main Layout</h1>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
