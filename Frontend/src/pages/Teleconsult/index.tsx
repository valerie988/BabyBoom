import React, { useState } from "react";
import { Video, MessageSquare, Phone, CalendarCheck, X } from "lucide-react";
import Layout from "../../components/Layout";

const features = [
  {
    title: "Video Consultation",
    description: "Speak face-to-face with a midwife or nurse from your home.",
    icon: Video,
    color: "text-teal-600 bg-teal-50",
    content: () => (
      <div className="text-center">
        <h2 className="font-bold text-lg mb-2">Video Consultation</h2>
        <p className="text-sm text-gray-700 mb-4">
          Join a video call with your healthcare provider.
        </p>
        <a
          href="https://meet.google.com/your-meet-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition"
        >
          Join Google Meet
        </a>
      </div>
    ),
  },
  {
    title: "Live Chat",
    description: "Ask your questions via chat and receive quick responses.",
    icon: MessageSquare,
    color: "text-orange-600 bg-orange-50",
    content: () => (
      <div className="text-center">
        <h2 className="font-bold text-lg mb-2">Live Chat</h2>
        <p className="text-sm text-gray-700 mb-4">
          Start a WhatsApp chat with our team.
        </p>
        <a
          href="https://wa.me/237652173171"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Open WhatsApp
        </a>
      </div>
    ),
  },
  {
    title: "Audio Call",
    description: "Phone-based consultations for areas with low connectivity.",
    icon: Phone,
    color: "text-green-600 bg-green-50",
    content: () => (
      <div className="text-center">
        <h2 className="font-bold text-lg mb-2">Audio Call</h2>
        <p className="text-sm text-gray-700 mb-4">
          Call directly to our midwife.
        </p>
        <a
          href="tel:+237652173171"
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Call Now
        </a>
      </div>
    ),
  },
  {
    title: "Scheduled Appointments",
    description: "Book appointments in advance with your preferred provider.",
    icon: CalendarCheck,
    color: "text-blue-600 bg-blue-50",
    content: () => (
      <div className="text-center">
        <h2 className="font-bold text-lg mb-2">Scheduled Appointments</h2>
        <p className="text-sm text-gray-700 mb-4">
          Schedule your next appointment with ease.
        </p>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Coming Soon
        </a>
      </div>
    ),
  },
];

const Index: React.FC = () => {
  const [modalFeature, setModalFeature] = useState<number | null>(null);

  return (
    <Layout>
      <div className=" min-h-screen bg-gray-50 p-4 md:px-16 md:ml-64 md:p-8 space-y-6 max-md:mb-20">
        {/* TOP BANNER */}
        <div className="bg-linear-to-r from-teal-400 to-teal-500 text-white rounded-2xl p-12 text-center shadow-md animate-fadeIn">
          <Video size={50} className="mx-auto mb-4 opacity-90 animate-bounce" />
          <h1 className="text-3xl md:text-4xl font-semibold">
            Teleconsultation
          </h1>
          <p className="text-sm md:text-base mt-3 max-w-xl mx-auto">
            Connect instantly with qualified midwives and nurses for support and care.
          </p>
        </div>

        {/* FEATURES GRID */}
        <h2 className="text-lg font-semibold mt-10 mb-4">Available Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                onClick={() => setModalFeature(idx)}
                className="flex items-start p-5 bg-white rounded-2xl border hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer animate-fadeIn"
              >
                <div className={`p-3 rounded-xl ${f.color} flex items-center justify-center`}>
                  <Icon size={22} />
                </div>

                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{f.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CALL TO ACTION */}
        <div className="bg-white border rounded-2xl mt-10 p-6 text-center shadow-sm animate-fadeInUp">
          <h2 className="text-lg font-semibold text-teal-600">Ready to Start?</h2>
          <p className="text-sm text-gray-600 mt-1">
            Choose a service above to begin your consultation.
          </p>
        </div>

        {/* MODAL */}
        {modalFeature !== null && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Backdrop blur */}
            <div
              className="absolute inset-0 backdrop-blur-sm bg-white/30 transition-opacity"
              onClick={() => setModalFeature(null)}
            ></div>

            <div className="relative bg-white rounded-2xl p-6 w-[90%] md:w-1/2 shadow-lg animate-fadeInUp z-10">
              <button
                onClick={() => setModalFeature(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              {features[modalFeature].content()}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
