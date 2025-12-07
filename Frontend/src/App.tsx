import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Login from "./auth/login";
import BuyVoucher from "./pages/BuyVoucher";
import Facilities from "./pages/Facilities";
import FacilityDetail from "./pages/FacilityDetail";
import Education from "./pages/Education";
import Teleconsult from "./pages/Teleconsult";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import MyVoucher from "./pages/MyVoucher";
import SignUp from "./auth/signup";

const App = () => (
  <BrowserRouter basename="/BabyBoom">
    <Routes>
      <Route path="/" element={<Navigate to="/onboarding" replace />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buy-voucher" element={<BuyVoucher />} />
      <Route path="/my-voucher" element={<MyVoucher />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/facility/:id" element={<FacilityDetail />} />
      <Route path="/education" element={<Education />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/teleconsult" element={<Teleconsult />} />

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
