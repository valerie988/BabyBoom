import { Heart, Calendar, MapPin, Phone, Book, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout>
      {/* Shift content to the right on md+ screens to avoid overlapping fixed sidebar */}
      <div className="md:ml-64 p-4 md:p-8 space-y-6 max-md:mb-20">

        {/* TOP CARD */}
        <section className="bg-rose-400 text-white p-6 rounded-2xl shadow-lg animate-fadeIn">
          <p className="text-lg opacity-90">Hello,</p>
          <h1 className="text-3xl font-bold mb-4">Marie Kamga</h1>

          <div className="flex items-center gap-4 bg-white/20 backdrop-blur p-4 rounded-xl w-fit">
            <div className="bg-white/30 p-3 rounded-xl">
              <Heart size={28} />
            </div>
            <div>
              <p className="text-3xl font-bold">24</p>
              <p className="text-sm opacity-90">Weeks pregnant • 16 weeks left</p>
            </div>
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section className="animate-fadeUp">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

            <ActionCard
              to="/buy-voucher"
              bgColor="bg-emerald-100"
              iconColor="text-emerald-600"
              icon={<CreditCard size={22} />}
              title="Buy Health Check"
              subtitle="Purchase your e-voucher"
            />

            <ActionCard
              to="/facilities"
              bgColor="bg-teal-100"
              iconColor="text-teal-600"
              icon={<MapPin size={22} />}
              title="Find a Center"
              subtitle="See centers near you"
            />

            <ActionCard
              to="/education"
              bgColor="bg-yellow-100"
              iconColor="text-yellow-600"
              icon={<Book size={22} />}
              title="Education"
              subtitle="Pregnancy learning"
            />

            <ActionCard
              to="/teleconsult"
              bgColor="bg-blue-100"
              iconColor="text-blue-600"
              icon={<Phone size={22} />}
              title="Teleconsultation"
              subtitle="Talk to a midwife"
              badge="Available"
              badgeColor="text-emerald-600"
            />

          </div>
        </section>

        {/* UPCOMING APPOINTMENT */}
        <section className="animate-fadeUp delay-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xl font-semibold">Upcoming Appointment</h2>
            <Link to="/appointments" className="text-emerald-600 text-sm">
              See All
            </Link>
          </div>

          <div className="bg-white border rounded-2xl p-4 flex gap-4 items-start shadow-sm hover:shadow-md transition-all">
            <div className="bg-emerald-100 text-emerald-700 px-4 py-3 rounded-xl text-center shadow-sm">
              <p className="font-semibold">Nov</p>
              <p className="text-2xl font-bold -mt-1">25</p>
            </div>

            <div className="flex flex-col gap-1">
              <p className="font-semibold">Prenatal Consultation</p>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <MapPin size={16} /> Biyem-Assi Health Center
              </p>
              <p className="text-sm text-gray-500 flex items-center gap-2">
                <Calendar size={16} /> 10:00 AM
              </p>
            </div>
          </div>
        </section>

        {/* ACTIVE HEALTH CHECK */}
        <Link
          to="/my-voucher"
          className="bg-rose-400 text-white p-6 rounded-2xl flex items-center justify-between shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all animate-fadeUp delay-200"
        >
          <div>
            <p className="font-semibold text-lg">My Health Check</p>
            <p className="font-bold text-xl">Active</p>
            <p className="text-sm opacity-90">Tap to view QR code</p>
          </div>

          <div className="bg-white/30 p-3 rounded-xl">
            <CreditCard size={30} />
          </div>
        </Link>

      </div>
    </Layout>
  );
};

export default Home;

// 🟢 Reusable Quick Action Card Component
const ActionCard = ({
  to,
  bgColor,
  iconColor,
  icon,
  title,
  subtitle,
  badge,
  badgeColor,
}: {
  to: string;
  bgColor: string;
  iconColor: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  badge?: string;
  badgeColor?: string;
}) => (
  <Link
    to={to}
    className="bg-white border rounded-xl p-4 flex gap-4 items-start shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
  >
    <div className={`${bgColor} p-3 rounded-xl`}>
      <div className={iconColor}>{icon}</div>
    </div>
    <div className="flex flex-col">
      <p className="font-semibold">{title}</p>
      <p className="text-sm text-gray-500">{subtitle}</p>
      {badge && <span className={`text-xs font-semibold ${badgeColor}`}>{badge}</span>}
    </div>
  </Link>
);
