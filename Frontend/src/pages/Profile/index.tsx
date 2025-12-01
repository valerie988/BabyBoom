

import React, { useState } from 'react';
import {
  User,
  Phone,
  Mail,
  Calendar,
  Cake,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import { profileLinks, userProfile, type ProfileLink } from '../../types/ProfileData';
import Layout from '../../components/Layout';

const groupLinks = (links: ProfileLink[]) => {
  return links.reduce((acc, link) => {
    const key = link.section;
    if (!acc[key]) acc[key] = [];
    acc[key].push(link);
    return acc;
  }, {} as Record<string, ProfileLink[]>);
};

const Profile: React.FC = () => {
  const { fullName, phone, email, dob, expectedDelivery } = userProfile;
  const [activePopup, setActivePopup] = useState<React.ReactNode | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'FR'>('EN');

  const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-center text-sm py-2">
      <div className="w-5 h-5 text-gray-500 mr-3 shrink-0">{icon}</div>
      <div className="flex justify-between w-full">
        <span className="text-gray-600 mr-2">{label}</span>
        <span className="font-medium text-gray-800">{value}</span>
      </div>
    </div>
  );

  const handleLinkClick = (link: ProfileLink) => {
    switch (link.label) {
      case 'Notifications':
        setActivePopup(
          <div>
            <h3 className="font-semibold text-lg mb-2">Notifications</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Your prenatal appointment is scheduled for Nov 15, 2025.</li>
              <li>New health tips available for Week 24 of pregnancy.</li>
              <li>You received a message from your midwife.</li>
            </ul>
          </div>
        );
        break;

      case 'Help':
        setActivePopup(
          <div>
            <h3 className="font-semibold text-lg mb-2">Help & Support</h3>
            <p className="text-sm text-gray-700 mb-2">Contact our support team:</p>
            <a
              href="https://wa.me/237652173171"
              target="_blank"
              className="text-blue-600 underline"
              rel="noreferrer"
            >
              Open WhatsApp
            </a>
            <p className="text-sm text-gray-700 mt-2">
              Or email at <span className="text-blue-600">support@babyboom.com</span>
            </p>
          </div>
        );
        break;

      case 'Appointments':
        setActivePopup(
          <div>
            <h3 className="font-semibold text-lg mb-2">Upcoming Appointments</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
              <li>Nov 15, 2025 - Prenatal Checkup with Dr. Smith</li>
              <li>Nov 20, 2025 - Nutrition Consultation</li>
            </ul>
          </div>
        );
        break;

      case 'Security':
        setActivePopup(
          <div>
            <h3 className="font-semibold text-lg mb-2">App Settings</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside space-y-2 mb-4">
              <li>Change password</li>
              <li>Notification preferences</li>
            </ul>

            {/* Language Selection */}
            <div className="mt-2">
              <p className="text-gray-700 text-sm mb-1">Language:</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedLanguage('EN')}
                  className={`px-3 py-1 rounded-lg border ${
                    selectedLanguage === 'EN' ? 'bg-green-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setSelectedLanguage('FR')}
                  className={`px-3 py-1 rounded-lg border ${
                    selectedLanguage === 'FR' ? 'bg-green-600 text-white' : 'border-gray-300 text-gray-700'
                  }`}
                >
                  French
                </button>
              </div>
            </div>
          </div>
        );
        break;

      default:
        setActivePopup(
          <div>
            <h3 className="font-semibold text-lg mb-2">{link.label}</h3>
            <p className="text-sm text-gray-700">Information about {link.label}</p>
          </div>
        );
    }
  };

  const groupedLinks = groupLinks(profileLinks);

  return (
    <Layout>
      <div className="md:ml-64 md:p-8 space-y-6 max-md:mb-20">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-pink-100 rounded-full mx-auto mb-3 flex items-center justify-center text-pink-500">
            <User className="w-10 h-10" />
          </div>
          <h1 className="text-xl font-bold text-gray-800">{fullName}</h1>
          <p className="text-sm text-gray-500">Week 24 of pregnancy</p>
        </div>

        {/* Personal Info */}
        <div className="bg-white rounded-xl shadow-md p-5 mb-8 border border-gray-100">
          <InfoRow icon={<User />} label="Full Name" value={fullName} />
          <InfoRow icon={<Phone />} label="Phone" value={phone} />
          <InfoRow icon={<Mail />} label="Email" value={email} />
          <InfoRow icon={<Cake />} label="Date of Birth" value={dob} />
          <InfoRow icon={<Calendar />} label="Expected Delivery" value={expectedDelivery} />
        </div>

        {/* Menu Sections */}
        {Object.entries(groupedLinks).map(([section, links]) => (
          <div key={section} className="mb-6">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">{section}</h2>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 divide-y divide-gray-100">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link)}
                  className="w-full text-left px-4 py-3 flex justify-between items-center text-gray-800 hover:text-green-600 transition hover:bg-gray-50 rounded-xl no-underline"
                >
                  <div className="flex items-center gap-3">
                    {link.icon && <span className="text-gray-500"><link.icon className="w-5 h-5" /></span>}
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button className="w-full mt-6 py-3 border border-red-300 text-red-500 font-semibold rounded-xl hover:bg-red-50 transition duration-150 flex items-center justify-center">
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </button>

        {/* Version Info */}
        <p className="text-center text-xs text-gray-400 mt-8">
          Version 1.0.0 • BabyBoom @ 2025
        </p>

        {/* Popup Modal */}
        {activePopup && (
          <div
            onClick={() => setActivePopup(null)}
            className="fixed inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-6 max-w-sm w-full shadow-lg"
            >
              {activePopup}
              <button
                onClick={() => setActivePopup(null)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
};

export default Profile;
