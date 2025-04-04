import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex min-h-screen w-[100vw] flex-col">
      <Navbar />
      <main className="container mx-auto grow px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
