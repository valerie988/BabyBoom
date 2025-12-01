import React, { useRef } from "react";
import Layout from "../../components/Layout";
import { toPng } from "html-to-image";

const Index: React.FC = () => {
  const voucherRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (voucherRef.current === null) return;
    toPng(voucherRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "voucher.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => console.error("Download error:", err));
  };

  const handleShare = async () => {
    if (!navigator.share) {
      alert("Sharing not supported on this browser.");
      return;
    }

    if (voucherRef.current === null) return;

    try {
      const dataUrl = await toPng(voucherRef.current, { cacheBust: true });
      const response = await fetch(dataUrl);
      const blob = await response.blob();
      const file = new File([blob], "voucher.png", { type: blob.type });

      await navigator.share({
        title: "My Health Voucher",
        text: "Check out my voucher!",
        files: [file],
      });
    } catch (err) {
      console.error("Share error:", err);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FDF8F6] flex justify-center py-10 px-4 max-md:mb-20">
        <div className="w-full md:ml-64 md:p-8 space-y-6">
          {/* HEADER CARD + QR AREA */}
          <div
            ref={voucherRef}
            className="bg-rose-400 text-white rounded-2xl p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] animate-fadeIn"
          >
            <p className="text-sm opacity-90">Voucher Holder</p>
            <h2 className="text-3xl font-semibold mt-1 tracking-wide">Marie Kamga</h2>
            <p className="text-sm mt-1 opacity-90">+237 677 123 456</p>

            {/* QR AREA */}
            <div className="mt-6 bg-white rounded-2xl p-6 shadow-inner">
              <div className="w-full flex justify-center">
                <div className="bg-[#3D332D] w-40 h-40 rounded-xl flex items-center justify-center shadow-md transition-transform hover:scale-105">
                  <span className="text-white font-bold text-2xl">QR</span>
                </div>
              </div>

              <div className="mt-5 text-center">
                <p className="text-gray-500 text-sm">Voucher Code</p>
                <p className="text-rose-600 text-3xl max-md:text-sm font-bold tracking-widest mt-1">
                  CS–2024–8745
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Show this code at any accredited health center
                </p>
              </div>
            </div>
          </div>

          {/* Voucher Details + Coverage + Buttons */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 animate-slideUp">
            <h3 className="text-lg font-semibold">Voucher Details</h3>
            <div className="mt-5 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Purchase Date</span>
                <span className="font-medium">15 Nov 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Expiration Date</span>
                <span className="font-medium">15 May 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status</span>
                <span className="text-green-600 font-medium">● Active</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Accepted Centers</span>
                <span className="font-medium">128</span>
              </div>
            </div>
          </div>

          <div className="bg-[#F9FFFC] rounded-2xl p-6 border border-[#CDEFE0] shadow-sm animate-slideUp delay-100">
            <h3 className="text-lg font-semibold">Included Coverage</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "4 prenatal consultations",
                "Assisted delivery",
                "Postnatal care (42 days)",
                "Baby vaccinations",
                "Nutritional follow-up",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleDownload}
              className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700 flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 transition"
            >
              ⬇ Download
            </button>

            <button
              onClick={handleShare}
              className="flex-1 py-3 rounded-xl border border-gray-300 text-gray-700 flex items-center justify-center gap-2 bg-green-300 hover:bg-green-400 transition"
            >
              🔗 Share
            </button>
          </div>

          <p className="text-center text-gray-500 text-xs">
            This voucher is valid in all accredited health centers across the country.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
