import { useState } from "react";
import Layout from "../../components/Layout";

export default function Index() {
  const [paymentMethod, setPaymentMethod] = useState<"mobile" | "card">("mobile");
  const [mobileOperator, setMobileOperator] = useState<"MTN" | "Orange" | "Nkwa">("MTN");

  return (
    <Layout>
      <main className="flex-1 p-6 bg-[#faf7f5] md:ml-64 md:p-8 space-y-6 max-md:mb-20">
        
        {/* Voucher Card */}
        <div className="bg-white border border-[#ffd4c7] shadow-sm rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-3 text-[#ff865e] font-semibold text-lg">
            🎟️ Standard Health Voucher
          </div>

          <p className="text-gray-600 mb-4">
            Full coverage for prenatal care and safe delivery.
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>✔ Prenatal consultations</li>
            <li>✔ Assisted delivery</li>
            <li>✔ Postnatal care (42 days)</li>
            <li>✔ Vaccinations for the baby</li>
          </ul>

          <div className="text-right font-bold text-[#ff6f4e] text-2xl">
            4000 XAF
          </div>
        </div>

        {/* Payment Section */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6">
          <h2 className="font-semibold mb-4 text-lg">Payment Method</h2>

          <div className="space-y-4 mb-6">
            {/* Mobile Money */}
            <label
              className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition 
                ${
                  paymentMethod === "mobile"
                    ? "border-[#ff9d7e] bg-[#fff2ec]"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "mobile"}
                onChange={() => setPaymentMethod("mobile")}
                className="accent-[#ff7b59]"
              />
              <span className="text-gray-700 font-medium text-base">
                📱 Mobile Money (MTN, Orange, Nkwa)
              </span>
            </label>

            {/* Bank card */}
            <label
              className={`flex items-center gap-3 border rounded-xl p-4 cursor-pointer transition 
                ${
                  paymentMethod === "card"
                    ? "border-[#ff9d7e] bg-[#fff2ec]"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="accent-[#ff7b59]"
              />
              <span className="text-gray-700 font-medium text-base">
                💳 Bank Card (Visa, Mastercard)
              </span>
            </label>
          </div>

          {/* Mobile Operators */}
          {paymentMethod === "mobile" && (
            <div className="flex gap-4 mb-6">
              {["MTN", "Orange", "Nkwa"].map((op) => (
                <button
                  key={op}
                  className={`flex-1 py-2.5 rounded-xl border font-medium transition 
                    ${
                      mobileOperator === op
                        ? "border-[#ff9d7e] bg-[#fff2ec]"
                        : "border-gray-200 bg-white hover:bg-gray-50"
                    }`}
                  onClick={() =>
                    setMobileOperator(op as "MTN" | "Orange" | "Nkwa")
                  }
                >
                  {op}
                </button>
              ))}
            </div>
          )}

          {/* Pay Button */}
          <button className="w-full py-3.5 rounded-xl font-semibold text-white 
            bg-rose-400
            hover:opacity-90 transition shadow">
            Pay 4000 XAF
          </button>

          <p className="text-gray-400 text-sm mt-3 text-center">
            By continuing, you accept our terms. Payments are secure and encrypted.
          </p>
        </div>
      </main>
    </Layout>
  );
}
