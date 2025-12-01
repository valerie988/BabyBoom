import React, { useState } from "react";
import { BookOpen, Play, X } from "lucide-react";
import Layout from "../../components/Layout";
import trimesterImg from "../../assets/trimester.jpeg";

interface Resource {
  id: number;
  title: string;
  description: string;
  duration: string;
  languages: string[];
  category: string;
  type: "article" | "audio";
}

const categories = ["All", "Prenatal", "Nutrition", "Postnatal", "Baby"];

const resources: Resource[] = [
  {
    id: 1,
    title: "First Prenatal Consultation",
    description: "When and why to attend your first prenatal visit",
    duration: "5 min",
    languages: ["English"],
    category: "Prenatal",
    type: "article",
  },
  {
    id: 2,
    title: "Danger Signs During Pregnancy",
    description: "Symptoms to monitor and when to seek emergency care",
    duration: "8 min",
    languages: ["English", "Ewondo"],
    category: "Prenatal",
    type: "audio",
  },
  {
    id: 3,
    title: "Healthy Eating During Pregnancy",
    description: "Recommended foods for you and your baby",
    duration: "10 min",
    languages: ["English"],
    category: "Nutrition",
    type: "article",
  },
  {
    id: 4,
    title: "Preparing for Childbirth",
    description: "How to prepare mentally and physically",
    duration: "12 min",
    languages: ["English", "Bamileke"],
    category: "Prenatal",
    type: "audio",
  },
  {
    id: 5,
    title: "Essential Postnatal Care",
    description: "Taking care of yourself after delivery",
    duration: "7 min",
    languages: ["English"],
    category: "Postnatal",
    type: "article",
  },
  {
    id: 6,
    title: "Breastfeeding Guide",
    description: "Complete guide to help you start breastfeeding well",
    duration: "15 min",
    languages: ["English", "Douala"],
    category: "Postnatal",
    type: "audio",
  },
  {
    id: 7,
    title: "Newborn Vaccinations",
    description: "Importance and schedule of newborn vaccines",
    duration: "6 min",
    languages: ["English"],
    category: "Baby",
    type: "article",
  },
];

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalResource, setModalResource] = useState<Resource | null>(null);

  const filteredResources = resources
    .filter((r) =>
      selectedCategory === "All" ? true : r.category === selectedCategory
    )
    .filter((r) =>
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <Layout>
      <div className="md:ml-64 md:p-8 space-y-6 max-md:mb-20">
        {/* Banner */}
        <div
          className="w-full h-52 md:h-64 bg-contain bg-center rounded-2xl relative flex items-end shadow-md"
           style={{ backgroundImage: `url(${trimesterImg})` }}>
          <div className="bg-white rounded-xl shadow-lg p-6 m-4 w-[90%] md:w-[60%] animate-fadeInUp">
            <h2 className="text-xl font-semibold mb-1">
              Tailored Educational Resources
            </h2>
            <p className="text-sm text-gray-600">
              Content in English and local languages to support you
            </p>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1 rounded-full border text-sm transition-colors duration-300 transform hover:scale-105 ${
                selectedCategory === cat
                  ? "bg-rose-400 text-white border-rose-400 shadow-lg"
                  : "border-gray-300 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 mt-4 transition"
        />

        {/* Resource Count */}
        <p className="text-gray-500 text-sm mt-4">
          {filteredResources.length} resources available
        </p>

        {/* Resource Cards */}
        {filteredResources.length === 0 ? (
          <p className="text-gray-400 mt-6 text-center">
            No resources found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {filteredResources.map((item) => (
              <div
                key={item.id}
                onClick={() => setModalResource(item)}
                className="flex items-start p-4 bg-white rounded-2xl border hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer animate-fadeIn"
              >
                {/* Icon */}
                <div className="p-3 bg-green-50 rounded-xl flex items-center justify-center">
                  {item.type === "article" ? (
                    <BookOpen className="text-green-600" size={22} />
                  ) : (
                    <Play className="text-green-600" size={22} />
                  )}
                </div>

                {/* Text */}
                <div className="ml-4 flex-1">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">
                    <span>{item.duration}</span>
                    <span className="flex gap-1 text-green-600 font-medium">
                      {item.languages.join(", ")}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="ml-2 mt-2 text-gray-400">{">"}</div>
              </div>
            ))}
          </div>
        )}

        {/* Modal */}
        {modalResource && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[90%] md:w-1/2 relative animate-fadeInUp">
              <button
                onClick={() => setModalResource(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <h2 className="text-xl font-bold mb-2 text-rose-400">{modalResource.title}</h2>
              <p className="text-gray-600 mb-4">{modalResource.description}</p>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Duration: {modalResource.duration}</span>
                <span>Languages: {modalResource.languages.join(", ")}</span>
              </div>
              <span className="text-xs text-gray-400">
                Category: {modalResource.category}
              </span>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Index;
