import { NavLink } from "react-router-dom";
import { navLinks } from "../types/navLinks";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r p-6 h-screen fixed top-0 left-0 shadow-lg overflow-y-auto">
      {/* APP NAME */}
      <h1 className="text-3xl font-extrabold text-green-600 mb-12 tracking-wide">
        BabyBoom
      </h1>

      {/* NAV ITEMS */}
      <nav className="flex flex-col gap-3">
        {navLinks.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative flex items-center gap-4 px-5 py-3 rounded-2xl transition-all duration-300
     ${
       isActive
         ? "bg-green-100 text-green-700 shadow-md font-semibold"
         : "text-gray-700 hover:bg-green-50 hover:text-green-600"
     }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Left accent dot */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-600 rounded-full ml-1"></span>
                  )}

                  {/* Icon */}
                  <Icon className="w-5 h-5" />

                  {/* Label */}
                  <span className="text-sm">{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer / Version */}
      <div className="mt-auto pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-400">Version 1.0.0</p>
      </div>
    </aside>
  );
};

export default Sidebar;
