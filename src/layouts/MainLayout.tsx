import Footer from "@/components/easy-drive/Footer";
import Navbar from "@/components/easy-drive/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <h1>Main Layout</h1>
      <main className="container mx-auto p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
