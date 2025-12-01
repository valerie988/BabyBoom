// src/pages/CentersPage.tsx

import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MapPin, ChevronDown } from "lucide-react";
import Layout from "../../components/Layout";

type HealthCenter = {
  id: string;
  name: string;
  address: string;
  distance: number;
  acceptsCheck: boolean;
  hours: string;
  tags: string[];
  lat: number;
  lng: number;
  image: string;
};

const containerStyle = {
  width: "100%",
  height: "300px",
};

const CentersPage: React.FC = () => {
  const [userLocation, setUserLocation] = useState({ lat: 3.848, lng: 11.502 });
  const [filter, setFilter] = useState<"ALL" | "ACCEPTING" | "OTHER">("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const centers: HealthCenter[] = [
    { id: "1", name: "Buea General Hospital", address: "Buea Town", distance: 2.1, acceptsCheck: true, hours: "7am - 5pm", tags: ["Prenatal", "Delivery"], lat: 4.157, lng: 9.243, image: "/hospital1.png" },
    { id: "2", name: "St. Theresa Clinic", address: "Buea Downtown", distance: 3.2, acceptsCheck: false, hours: "8am - 6pm", tags: ["Maternity", "Pediatrics"], lat: 4.159, lng: 9.247, image: "/hospital2.png" },
    { id: "3", name: "Buea Health Center", address: "Buea Heights", distance: 4.0, acceptsCheck: true, hours: "24h/24", tags: ["Prenatal", "Vaccination"], lat: 4.161, lng: 9.250, image: "/hospital3.png" },
    { id: "4", name: "Holy Family Clinic", address: "Buea Main Road", distance: 1.8, acceptsCheck: false, hours: "7am - 7pm", tags: ["Delivery", "Pediatrics"], lat: 4.155, lng: 9.245, image: "/hospital4.png" },
    { id: "5", name: "Regional Hospital Buea", address: "Molyko", distance: 3.5, acceptsCheck: true, hours: "24h/24", tags: ["Prenatal", "Maternity"], lat: 4.160, lng: 9.248, image: "/hospital5.png" },
  ];

  // Get user's real location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => console.log("Unable to retrieve location")
    );
  }, []);

  const filteredCenters = centers
    .filter((c) => {
      if (filter === "ACCEPTING") return c.acceptsCheck;
      if (filter === "OTHER") return !c.acceptsCheck;
      return true;
    })
    .filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Layout>
      <div className=" min-h-screen bg-gray-50 p-4 md:px-16 md:ml-64 md:p-8 space-y-6 max-md:mb-20">

        <h1 className="text-xl font-semibold mb-4">Health Centers Near You</h1>

        {/* Map */}
        {isLoaded && (
          <GoogleMap mapContainerStyle={containerStyle} center={userLocation} zoom={13}>
            <Marker position={userLocation} />
            {filteredCenters.map((c) => (
              <Marker
                key={c.id}
                position={{ lat: c.lat, lng: c.lng }}
                icon={{ url: "https://maps.google.com/mapfiles/ms/icons/hospital.png" }}
              />
            ))}
          </GoogleMap>
        )}

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4 mb-4">
          <input
            type="text"
            placeholder="Search centers..."
            className="flex-1 px-4 py-2 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="inline-flex justify-between items-center w-44 px-4 py-2 bg-white border border-gray-200 rounded-xl shadow-sm text-gray-700 hover:bg-gray-50"
            >
              {filter === "ALL" ? "All Centers" : filter === "ACCEPTING" ? "Accepting Chèque" : "Other Centers"}
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-1 w-44 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => { setFilter("ALL"); setIsDropdownOpen(false); }}
                >
                  All Centers
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => { setFilter("ACCEPTING"); setIsDropdownOpen(false); }}
                >
                  Accepting Chèque Santé
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => { setFilter("OTHER"); setIsDropdownOpen(false); }}
                >
                  Other Centers
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Centers List */}
        {filteredCenters.map((c) => (
          <div key={c.id} className="bg-white p-4 rounded-xl border mb-4 shadow-sm">
            <div className="flex space-x-4">
              <img src={c.image} className="w-20 h-20 rounded-lg object-cover" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{c.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{c.address}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <span><MapPin size={14} className="inline mr-1" /> {c.distance} km</span>
                  <span>🕒 {c.hours}</span>
                </div>
                <div className="flex flex-wrap mt-3">
                  {c.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-teal-50 text-teal-600 text-xs rounded-full mr-2 mb-2">{t}</span>
                  ))}
                  <span className={`px-3 py-1 text-xs rounded-full ${c.acceptsCheck ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                    {c.acceptsCheck ? "Accepts Chèque" : "Does not accept"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </Layout>
  );
};

export default CentersPage;
