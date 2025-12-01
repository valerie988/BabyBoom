import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error(t("fillAllFields"), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        theme: "colored",
      });
      return;
    }

    toast.success(t("loginSuccess"), {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "colored",
    });

    setTimeout(() => navigate("/home"), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <ToastContainer />
      <div className="w-full max-w-4xl flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Left image */}
        <div className="hidden md:flex flex-1 bg-rose-50 items-center justify-center p-6">
          <img
            src="/images/baby-boom.png"
            alt="babyboom"
            className="object-contain max-h-[400px]"
          />
        </div>

        {/* Right form */}
        <div className="flex-1 p-8 md:p-12 relative">
          <div className="absolute top-4 right-4">
            <LanguageSwitcher />
          </div>

          <h1 className="text-4xl font-bold text-rose-400 mb-2  text-center md:text-left">
            {t("Login")}
          </h1>
          <p className="text-gray-500 mb-6  text-center md:text-left text-lg">
            {t("Welcome Back")}
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 ">
                {t("Email")}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@domain.com"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 focus:ring-2 focus:ring-rose-200 focus:outline-none text-lg"
              />
            </div>

            {/* Password with show/hide */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1 ">
                {t("Password")}
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 border border-gray-300 rounded-lg px-4 pr-12 focus:ring-2 focus:ring-rose-200 focus:outline-none text-lg"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Login button */}
            <button
              type="submit"
              className="w-full bg-rose-400 text-white py-3 rounded-xl font-semibold hover:bg-rose-500 transition text-lg "
            >
              {t("Login")}
            </button>

            <div className="flex justify-between text-sm text-rose-400 mt-2 ">
              <button type="button" className="hover:underline">
                {t("Forgot Password")}
              </button>
              <button type="button" className="hover:underline" onClick={() => navigate("/signup")}>
                {t("SignUp")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
