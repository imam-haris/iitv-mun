import React, { useState } from "react";
import {
  User,
  // Mail,
  // Phone,
  // MapPin,
  Calendar,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

interface RegistrationProps {
  closeRegistration: () => void;
}

const Registration: React.FC<RegistrationProps> = ({ closeRegistration }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    city: "",
    committee: "",
    experience: "",
    accommodation: false,
    delegation: false,
  });

  const committees = [
    { name: "United Nations Security Council", fee: 1500, level: "Advanced" },
    { name: "United Nations General Assembly", fee: 800, level: "Beginner" },
    { name: "International Court of Justice", fee: 1500, level: "Advanced" },
    { name: "UN Human Rights Council", fee: 1000, level: "Intermediate" },
    {
      name: "UN Economic and Social Council",
      fee: 1000,
      level: "Intermediate",
    },
    { name: "World Health Organization", fee: 800, level: "Beginner" },
    {
      name: "International Atomic Energy Agency",
      fee: 1500,
      level: "Advanced",
    },
    { name: "UN Environment Programme", fee: 1000, level: "Intermediate" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const getCommitteeFee = () => {
    const selected = committees.find((c) => c.name === formData.committee);
    return selected ? selected.fee : 0;
  };

  const getTotalFee = () => {
    let total = getCommitteeFee();
    if (formData.accommodation) total += 2000;
    if (formData.delegation) total += 3000;
    return total;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "registrations"), {
        ...formData,
        timestamp: new Date(),
        fees: getTotalFee(),
      });

      alert(
        "Registration submitted! You will receive a confirmation email shortly."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        city: "",
        committee: "",
        experience: "",
        accommodation: false,
        delegation: false,
      });

      closeRegistration();
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong! Please try again.");
    }
  };

  const fees = getTotalFee();
  console.log(fees);

  return (
    <section
      id="register"
      className="py-20 bg-[#0f051e] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-4 left-1/4 w-20 h-20 border-2 border-indigo-400/20 rounded-full"></div>
        <div className="absolute top-0 right-1/4 w-12 h-12 bg-indigo-500/10 rounded-full"></div>
        <div className="absolute top-10 right-10 w-6 h-6 bg-indigo-400/20 rotate-45"></div>
        <div className="absolute bottom-1 right-1/3 w-1 h-32 bg-gradient-to-b from-indigo-300/30 to-transparent rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Register for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">
              IITBHU MUN 2025
            </span>
          </h2>
          <p className="text-xl text-indigo-300 max-w-3xl mx-auto">
            Secure your spot at one of India's premier Model United Nations
            conferences. Limited seats available!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="mr-3" size={24} />
                Registration Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-indigo-300 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-indigo-300 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-indigo-300 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-indigo-300 text-sm font-medium mb-2">
                      Institution/School
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
                      placeholder="Enter your institution"
                      required
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-indigo-300 text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-indigo-300 text-sm font-medium mb-2">
                      MUN Experience
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400 transition-colors"
                      required
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">
                        Beginner (0-2 conferences)
                      </option>
                      <option value="intermediate">
                        Intermediate (3-5 conferences)
                      </option>
                      <option value="advanced">
                        Advanced (6+ conferences)
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-indigo-300 text-sm font-medium mb-2">
                    Preferred Committee
                  </label>
                  <select
                    name="committee"
                    value={formData.committee}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400 transition-colors"
                    required
                  >
                    <option value="">Select a committee</option>
                    {committees.map((committee, index) => (
                      <option key={index} value={committee.name}>
                        {committee.name} (₹{committee.fee} - {committee.level})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="accommodation"
                      checked={formData.accommodation}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-indigo-600 bg-indigo-900/30 border-indigo-500/30 rounded focus:ring-indigo-500"
                    />
                    <label className="ml-2 text-indigo-300">
                      I need accommodation (+₹2000)
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="delegation"
                      checked={formData.delegation}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-indigo-600 bg-indigo-900/30 border-indigo-500/30 rounded focus:ring-indigo-500"
                    />
                    <label className="ml-2 text-indigo-300">
                      I'm registering as part of a delegation (+₹3000)
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CreditCard className="mr-3" size={20} />
                  Fee Structure
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-indigo-200">
                    <span>Committee Fee:</span>
                    <span>₹{getCommitteeFee()}</span>
                  </div>
                  {formData.accommodation && (
                    <div className="flex justify-between text-indigo-200">
                      <span>Accommodation:</span>
                      <span>₹2000</span>
                    </div>
                  )}
                  {formData.delegation && (
                    <div className="flex justify-between text-indigo-200">
                      <span>Delegation Fee:</span>
                      <span>₹3000</span>
                    </div>
                  )}
                  <div className="border-t border-indigo-500/30 pt-3">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total Amount:</span>
                      <span>₹{getTotalFee()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="mr-3" size={20} />
                  Important Dates
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-indigo-200">
                    <span>Early Bird Deadline:</span>
                    <span>Jan 15, 2025</span>
                  </div>
                  <div className="flex justify-between text-indigo-200">
                    <span>Regular Registration:</span>
                    <span>Feb 10, 2025</span>
                  </div>
                  <div className="flex justify-between text-indigo-200">
                    <span>Conference Dates:</span>
                    <span>Feb 21–23, 2025</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="mr-3" size={20} />
                  What's Included
                </h3>
                <ul className="space-y-2 text-indigo-200">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Conference materials and study guides
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Meals during all three days
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Cultural evening and networking events
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Digital certificate of participation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Chance to win awards and recognition
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
