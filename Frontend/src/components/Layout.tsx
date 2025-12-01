
import BottomNav from "./BottomNav";
import Sidebar from "./Sidebar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex bg-[#F8F5F2]">
  <Sidebar />
  <main className="flex-1 p-4 md:p-8">
    {children}
  </main>
  <BottomNav />
</div>

  );
};

export default Layout;
