import { NavLink } from "react-router-dom";
import { Home, Book, Map, Phone, User } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/home", icon: Home },
  { label: "Education", path: "/education", icon: Book },
  { label: "Centers", path: "/facilities", icon: Map },
  { label: "Consult", path: "/teleconsult", icon: Phone },
  { label: "Profile", path: "/profile", icon: User },
];

const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg flex justify-around py-2 z-50">
      {navLinks.map((link) => {
        const Icon = link.icon;
        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full relative transition-all duration-200 ${
                isActive ? "text-green-600" : "text-gray-500"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {/* Active Background Bubble */}
                {isActive && (
                  <span className="absolute -top-2 w-10 h-10 bg-green-100 rounded-full z-0"></span>
                )}

                {/* Icon with bounce effect */}
                <div
                  className={`relative z-10 p-2 rounded-full transition-transform duration-200 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                >
                  <Icon size={24} />
                </div>

                <span className="text-xs mt-1 font-medium z-10">{link.label}</span>
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default BottomNav;
