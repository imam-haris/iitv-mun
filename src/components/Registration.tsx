import React, { useState } from "react";
import { User, CreditCard, CheckCircle, Calendar } from "lucide-react";

import { supabase } from "../../supabaseClient";

interface RegistrationProps {
  closeRegistration: () => void;
  onRegisterSuccess: () => void;
}

interface FormDataType {
  name: string;
  email: string;
  phone: string;
  institution: string;
  city: string;
  experience: string;
  committee1: string;
  portfolio1: string[];
  committee2: string;
  portfolio2: string[];
  committee3: string;
  portfolio3: string[];
  accommodation: boolean;
  delegation: boolean;
  photo: File | null;
}

const Registration: React.FC<RegistrationProps> = ({
  closeRegistration,
  onRegisterSuccess,
}) => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    institution: "",
    city: "",
    experience: "",
    committee1: "",
    portfolio1: [],
    committee2: "",
    portfolio2: [],
    committee3: "",
    portfolio3: [],
    accommodation: false,
    delegation: false,
    photo: null,
  });

  const committees = [
    {
      name: "Disarmament and International Security Committee (DISEC)",
      fee: 1799,
      portfolios: [
        // AFRICA (19 countries)
        "Nigeria",
        "South Africa",
        "Egypt",
        "Kenya",
        "Morocco",
        "Ethiopia",
        "Ghana",
        "Algeria",
        "Tanzania",
        "Uganda",
        "Zimbabwe",
        "Tunisia",
        "Senegal",
        "Ivory Coast",
        "Cameroon",
        "Democratic Republic of Congo",
        "Angola",
        "Rwanda",
        "Botswana",

        // ASIA (17 countries)
        "China",
        "India",
        "Japan",
        "Pakistan",
        "Indonesia",
        "South Korea",
        "Turkey",
        "Iran",
        "Saudi Arabia",
        "Israel",
        "Thailand",
        "Vietnam",
        "Philippines",
        "Malaysia",
        "Bangladesh",
        "Singapore",
        "Afghanistan",

        // EUROPE (12 countries)
        "United Kingdom",
        "France",
        "Russia",
        "Germany",
        "Italy",
        "Spain",
        "Poland",
        "Netherlands",
        "Sweden",
        "Switzerland",
        "Ukraine",
        "Czech Republic",

        // NORTH AMERICA (8 countries)
        "United States",
        "Canada",
        "Mexico",
        "Cuba",
        "Jamaica",
        "Costa Rica",
        "Panama",
        "Haiti",

        // SOUTH AMERICA (9 countries)
        "Brazil",
        "Argentina",
        "Chile",
        "Colombia",
        "Peru",
        "Venezuela",
        "Ecuador",
        "Uruguay",
        "Bolivia",

        // OCEANIA (5 countries)
        "Australia",
        "New Zealand",
        "Papua New Guinea",
        "Fiji",
        "Solomon Islands"
      ]

    },
    {
      name: "United Nations Human Resources Committee (UNHRC)",
      fee: 1799,
      portfolios: [
        "Afghanistan",
        "Australia",
        "Bangladesh",
        "Brazil",
        "Bhutan",
        "Belgium",
        "Chile",
        "Canada",
        "Costa Rica",
        "Colombia",
        "China",
        "Central African Republic",
        "Democratic Republic of Congo",
        "Denmark",
        "El Salvador",
        "Egypt",
        "France",
        "Finland",
        "Germany",
        "Ghana",
        "Georgia",
        "India",
        "Iraq",
        "Iran",
        "Indonesia",
        "Italy",
        "Israel",
        "Iceland",
        "Jordan",
        "Japan",
        "Kenya",
        "Mexico",
        "Nepal",
        "Netherlands",
        "New Zealand",
        "North Korea",
        "Pakistan",
        "Phillipines",
        "Palestine",
        "Qatar",
        "Russia",
        "South Korea",
        "South Africa",
        "Turkey",
        "Ukraine",
        "United Arab Emirates",
        "United Kingdom",
        "United States",
        "Zimbabwe"
      ],

    },
    {
      name: "Joint Parliamentary Committee (JPC)",
      fee: 1799,
      portfolios: [
        "Narendra Modi - Varanasi - BJP",
        "Amit Shah - Gandhinagar - BJP",
        "Rajnath Singh - Lucknow - BJP",
        "Nitin Gadkari - Nagpur - BJP",
        "Smriti Irani - Amethi - BJP",
        "Piyush Goyal - Nellore - BJP",
        "Pralhad Joshi - Dharwad - BJP",
        "Om Birla - Kota - BJP",
        "Dharmendra Pradhan - Rajya Sabha Nominee - BJP",
        "Rajnath Singh - Lucknow - BJP",
        "Jyotiraditya Scindia - Guna - BJP",
        "Ramesh Pokhriyal - Haridwar - BJP",
        "Kiren Rijiju - Arunachal West - BJP",
        "Tapir Gao - Arunachal East - BJP",
        "Sarbananda Sonowal - Dibrugarh - BJP",
        "Gajendra Singh Shekhawat - Jodhpur - BJP",
        "Bhupender Yadav - Alwar - BJP",
        "Tejasvi Surya - Bangalore South - BJP",
        "Shobha Karandlaje - Bangalore North - BJP",
        "H. D. Kumaraswamy - Mandya - BJP",
        "Basavaraj Bommai - Haveri - BJP",
        "Shivraj Singh Chouhan - Vidisha - BJP",
        "Shankar Lalwani - Indore - BJP",
        "Om Birla - Kota - BJP",
        "Ganesh Singh - Satna - BJP",
        "V. D. Sharma - Khajuraho - BJP",
        "Janardan Mishra - Rewa - BJP",
        "Rajkumar Roat - Banswara - BJP",
        "Ramesh Jigajinagi - Bijapur - BJP",
        "Dilip Saikia - Darrang-Udalguri - BJP",
        "Joyanta Basumatary - Kokrajhar - BJP",
        "Kamakhya Prasad Tasa - Kaziranga - BJP",
        "Bijendra Singh - Jaipur Rural - BJP",
        "Anurag Thakur - Hamirpur - BJP",
        "Rajeev Chandrasekhar - Bangalore Rural - BJP",
        "Parvesh Verma - West Delhi - BJP",
        "Manoj Tiwari - North East Delhi - BJP",
        "Shiv Sena MP - Mumbai North - Shiv Sena (NDA)",
        "BJP MP - Nagpur - BJP",
        "BJP MP - Gujarat - BJP",
        "Rahul Gandhi - Wayanad - INC",
        "Priyanka Gandhi - Raebareli - INC",
        "Sonia Gandhi - Gandhinagar - INC",
        "Abhishek Banerjee - Diamond Harbour - AITC",
        "Mahua Moitra - Krishnanagar - AITC",
        "T. R. Baalu - Sriperumbudur - DMK",
        "Dayanidhi Maran - Chennai Central - DMK",
        "Dr. Kalanidhi Veeraswamy - Chennai North - DMK",
        "D. M. Kathir Anand - Vellore - DMK",
        "G. Selvam - Kancheepuram (SC) - DMK",
        "Jayant Chaudhary - Rae Bareli - RLD",
        "Akhilesh Yadav - Mainpuri - SP",
        "Shivpal Singh Yadav - Firozabad - SP",
        "Priyanka Yadav - Badaun - SP",
        "Mallikarjun Kharge - Gulbarga - INC",
        "Randeep Surjewala - Patiala - INC",
        "Sushmita Dev - Silchar - INC",
        "Kanimozhi Karunanidhi - Thanjavur - DMK",
        "M. K. Stalin MP - Chennai South - DMK",
        "B. Senguttuvan - Tiruchirappalli - DMK",
        "Mamata Banerjee - South Kolkata - AITC",
        "Saugata Roy - Kolkata North - AITC",
        "Sudip Bandyopadhyay - Kolkata Dakshin - AITC",
        "Abdul Khaleque - Barpeta - INC",
        "Ruhal Ahmed - Guwahati - INC",
        "R. K. Chaudhary - Mohanlalganj - SP",
        "Pradeep Kumar Singh - Saharsa - INC",
        "Ajay Kumar Lallu - Azamgarh - INC",
        "Ranjan Singh - Gaya - INC",
        "Dinesh Gundu Rao - Bangalore North - INC",
        "Chandrashekhar Azad - Nagina - Independent",
        "Asaduddin Owaisi - Hyderabad - AIMIM",
        "Hanuman Beniwal - Nagaur - RLP",
        "Richard Vanlalhmangaiha - Mizoram - Independent",
        "Pappu Yadav - Bhagalpur - Independent",
        "Gurmeet Singh Hayer - Fatehgarh Sahib - Independent",
        "Dushyant Singh Jhalawar - Baran - Independent",
        "Rahul Kaswan - Churu - Independent",
        "Arjun Ram Meghwal - Bikaner(SC) - BJP"
      ],

    },
    {
      name: "United Nations Commission on the status of Women (UNCSW)",
      fee: 1799,
      portfolios: [
        "Afghanistan",
        "Argentina",
        "Australia",
        "Bangladesh",
        "Brazil",
        "Canada",
        "Chile",
        "China",
        "Colombia",
        "Cuba",
        "Czech Republic",
        "Domocratic Republic of Congo",
        "Egypt",
        "Ethiopia",
        "France",
        "Germany",
        "Ghana",
        "Haiti",
        "India",
        "Indonesia",
        "Iran",
        "Italy",
        "Jamaica",
        "Japan",
        "Kenya",
        "Lebanon",
        "Mexico",
        "Morocco",
        "Myanmar",
        "Nepal",
        "Nigeria",
        "Norway",
        "Pakistan",
        "Peru",
        "Phillipines",
        "Poland",
        "Qatar",
        "Romania",
        "Russia",
        "Rwanda",
        "Saudi Arabia",
        "Senegal",
        "Serbia",
        "South Africa",
        "South Korea",
        "Spain",
        "Srilanka",
        "Sudan",
        "Sweden",
        "Switzerland",
        "Syria",
        "Thailand",
        "Tunisia",
        "Turkey",
        "Uganda",
        "Ukaraine",
        "United Kingdom",
        "United States",
        "Venezuela",
        "Yemen",
        "African Union",
        "European Union",
        "Association of Southeast Asian Nations (ASEAN)",
        "South Asian Association for Regional Cooperation (SAARC)",
        "BRICS",
        "League of Arab States (LAS)",
        "Human Rights Watch (HRW)",
        "Amnesty International",
        "Women’s International League for Peace and Freedom (WILPF)",
        "Women for Women International",
        "Global Network of Women Peacebuilders (GNWP)",
        "CARE International",
        "Nordic Council",
        "Organisation of Islamic Cooperation (OIC)",
        "League of Arab States (LAS)"
      ]

    },
    {
      name: "All India Political Party Meet (AIPPM)",
      fee: 1799,
      portfolios: [
        "Narendra Modi - Bharatiya Janata Party",
        "Amit Shah - Bharatiya Janata Party",
        "Dharmendra Pradhan - Bharatiya Janata Party",
        "Ashwini Vaishnaw - Bharatiya Janata Party",
        "Bhupinder Patel - Bharatiya Janata Party",
        "Hardeep Singh Puri - Bharatiya Janata Party",
        "Kiren Rijiju - Bharatiya Janata Party",
        "Manoharlal Khattar - Bharatiya Janata Party",
        "Manoj Tiwari - Bharatiya Janata Party",
        "Anurag Singh Thakur - Bharatiya Janata Party",
        "Nirmala Sitharaman - Bharatiya Janata Party",
        "Nitin Gadkari - Bharatiya Janata Party",
        "Piyush Goyal - Bharatiya Janata Party",
        "Rajnath Singh - Bharatiya Janata Party",
        "Shivraj Singh Chouhan - Bharatiya Janata Party",
        "Smriti Irani - Bharatiya Janata Party",
        "Subramanyam Jaishankar - Bharatiya Janata Party",
        "Sudhanshu Trivedi - Bharatiya Janata Party",
        "Tejaswi Surya - Bharatiya Janata Party",
        "Vasundhara Raje - Bharatiya Janata Party",
        "Yogi Adityanath - Bharatiya Janata Party",
        "Maneka Gandhi - Bharatiya Janata Party",
        "Meenakshi Lekhi - Bharatiya Janata Party",
        "G Kishan Reddy - Bharatiya Janata Party",
        "Jyotiraditya Scindia - Bharatiya Janata Party",
        "Dr Mansukh Mandaviya - Bharatiya Janata Party",
        "Himanta Biswa Sarma - Bharatiya Janata Party",
        "Hardik Patel - Bharatiya Janata Party",
        "Pema Khandu - Bharatiya Janata Party",
        "J.P. Nadda - Bharatiya Janata Party",
        "Prahlad Joshi - Bharatiya Janata Party",
        "Diya Kumari - Bharatiya Janata Party",
        "Annamalai - Bharatiya Janata Party",
        "Arjun Ram Meghwal - Bharatiya Janata Party",
        "Devendra Fadnavis - Bharatiya Janata Party",
        "Navneet Kaur Rana - Bharatiya Janata Party",
        "Rahul Gandhi - Indian National Congress",
        "Sonia Gandhi - Indian National Congress",
        "Priyanka Gandhi Vadra - Indian National Congress",
        "Sachin Pilot - Indian National Congress",
        "Dr. Shashi Tharoor - Indian National Congress",
        "Dr. Manmohan Singh - Indian National Congress",
        "Ashok Gehlot - Indian National Congress",
        "Adhir Ranjan Chowdhury - Indian National Congress",
        "Bhupesh Baghel - Indian National Congress",
        "Mallikarjun Kharge - Indian National Congress",
        "Dr. Abhishek Manu - Indian National Congress",
        "Bhupinder Singh Hooda - Indian National Congress",
        "Imran Pratapgarhi - Indian National Congress",
        "Jairam Ramesh - Indian National Congress",
        "Ajay Maken - Indian National Congress",
        "Kanhaiya Kumar - Indian National Congress",
        "Shanti Dhariwal - Indian National Congress",
        "Siddaramaiah - Indian National Congress",
        "Arvind Kejriwal - Aam Admi Party",
        "Sanjay Singh - Aam Admi Party",
        "Raghav Chadha - Aam Admi Party",
        "Bhagwant Mann - Aam Admi Party",
        "Atishi Marlena - Aam Admi Party",
        "Manish Sisodia - Aam Admi Party",
        "Lalu Prasad Yadav - Rashtriya Janta Dal",
        "Manoj Jha - Rashtriya Janta Dal",
        "Rabri Devi - Rashtriya Janta Dal",
        "Tejashwi Yadav - Rashtriya Janta Dal",
        "Akhilesh Yadav - Samajwadi Party",
        "Ram Gopal Yadav - Samajwadi Party",
        "S.T. Hasan - Samajwadi Party",
        "Nitish Kumar - Janta Dal",
        "S. Ambreesh - Janta Dal",
        "Ajit Pawar - Nationalist Congress Party",
        "Praful Patel - Nationalist Congress Party",
        "Sharad Pawar - Nationalist Congress Party",
        "Supriya Sule - Nationalist Congress Party",
        "Kunwar Danish Ali - Bahujan Samaj Party",
        "Kumari Mayawati - Bahujan Samaj Party",
        "Sanjay Raut - Shiv Sena(UBT)",
        "Uddhav Thackeray - Shiv Sena(UBT)",
        "Eknath Shinde - Shiv Sena",
        "Mamta Banerjee - All India Trinamool Congress",
        "Abhishek Banerjee - All India Trinamool Congress",
        "Derek O'Brien - All India Trinamool Congress",
        "Mahua Moitra - All India Trinamool Congress",
        "Asaduddin Owaisi - All India Majlis-e-Ittehad-ul-Muslimeen",
        "Imtiaz Jaleel - All India Majlis-e-Ittehad-ul-Muslimeen",
        "Akhtarul Iman - All India Majlis-e-Ittehad-ul-Muslimeen",
        "Omar Abdullah - Jammu and Kashmir National Congress",
        "Farooq Abdullah - Jammu and Kashmir National Congress",
        "Mehbooba Mufti - Jammu and Kashmir People's Democratic Party",
        "Pinarayi Vijayan - Communist Party of India (Marxist)",
        "D. Raja - Communist Party of India",
        "Yogendra Yadav - Swaraj India Party",
        "Raj Thackeray - Maharashtra Navnirman Sena",
        "M. K. Stalin - Dravida Munnetra Kazhagam",
        "K. Karunanidhi - Dravida Munnetra Kazhagam",
        "Sukhbir Singh Badal - Shiromani Akali Dal",
        "Harsimrat Kaur Badal - Shiromani Akali Dal",
        "Nara Chandrababu Naidu - Telugu Desam Party",
        "Chirag Paswan - Lok Janshakti Party(Ram Vilas)",
        "Naveen Patnaik - Biju Janata Dal",
        "Prem Singh Tamang - Sikkim Krantikari Morcha",
        "Hemant Soren - Jharkhand Mukti Morcha",
        "Conrad Sangma - National People's Party",
        "Neiphiu Rio - Nationalist Democratic Progressive Party",
        "Pawan Kalyan - Janasena Party",
        "Jagan Mohan Reddy - YSR Congress Party",
        "Prashant Kishore - Jan Suraj",
        "HD Deve Gowda - Janata Dal (Secular)",
        "Naba Kumar Sarania - Independent",
        "Ranjan Gogoi - Independent",
        "Umesh Kumar - Independent",
        "Kapil Sibal - Independent",
        "Chandrashekhar Azad Ravan - Independent",
        "Mohammad Haneefa - Independent",
        "Sheikh Abdul Rashid - Independent"
      ],

    },
    {
      name: "United Nations Environment Programme (UNEP)",
      fee: 1799,
      portfolios: ["DEMO", "DEMO", "DEMO", "DEMO", "DEMO"],
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    let fieldValue: string | boolean = value;

    if (type === "checkbox") {
      fieldValue = (e.target as HTMLInputElement).checked;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: fieldValue,
      ...(name === "committee1" ? { committee2: "", committee3: "", portfolio1: [] } : {}),
      ...(name === "committee2" ? { committee3: "", portfolio2: [] } : {}),
    }));
  };

  const handlePortfolioChange = (committeeKey: "portfolio1" | "portfolio2" | "portfolio3", value: string) => {
    setFormData((prev) => {
      const selected = prev[committeeKey];
      let updated: string[];
      if (selected.includes(value)) {
        updated = selected.filter((p) => p !== value);
      } else {
        if (selected.length < 5) {
          updated = [...selected, value];
        } else {
          updated = selected;
          alert("You can select up to 5 portfolios only.");
        }
      }
      return { ...prev, [committeeKey]: updated };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      let photoURL = "";

      if (formData.photo) {
        const fileName = `${Date.now()}-${formData.photo.name}`;
        const filePath = `registrations/${Date.now()}-${formData.photo.name}`;

        const { error: uploadError } = await supabase.storage
          .from("payment")
          .upload(filePath, formData.photo, {
            contentType: formData.photo.type,
          });

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from("payment")
          .getPublicUrl(fileName);
        photoURL = data.publicUrl;
      }

      const { error: insertError } = await supabase
        .from("registrations")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            institution: formData.institution,
            city: formData.city,
            experience: formData.experience,
            committee1: formData.committee1,
            portfolio1: formData.portfolio1,
            committee2: formData.committee2,
            portfolio2: formData.portfolio2,
            committee3: formData.committee3,
            portfolio3: formData.portfolio3,
            accommodation: formData.accommodation,
            delegation: formData.delegation,
            photo: photoURL,
            created_at: new Date(),
          },
        ]);

      if (insertError) throw insertError;

      alert("Registration submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        institution: "",
        city: "",
        experience: "",
        committee1: "",
        portfolio1: [],
        committee2: "",
        portfolio2: [],
        committee3: "",
        portfolio3: [],
        accommodation: false,
        delegation: false,
        photo: null,
      });

      onRegisterSuccess();
      closeRegistration();
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const getCommitteeFee = () => {
    const selected = committees.find((c) => c.name === formData.committee1);
    return selected ? selected.fee : 0;
  };

  const getTotalFee = () => {
    let total = getCommitteeFee();
    return total;
  };

  const renderPortfolioDropdown = (
    committeeName: string,
    portfolioKey: "portfolio1" | "portfolio2" | "portfolio3"
  ) => {
    const committee = committees.find((c) => c.name === committeeName);
    if (!committee) return null;

    return (
      <div className="mt-4">
        <label className="block text-indigo-300 text-sm font-medium mb-2">
          Select Portfolios (up to 5)
        </label>
        {/* Scrollable container */}
        <div className="max-h-48 overflow-y-auto border border-indigo-500/30 rounded-lg p-2">
          <div className="grid grid-cols-2 gap-2">
            {committee.portfolios.map((p, i) => (
              <label key={i} className="flex items-center text-white">
                <input
                  type="checkbox"
                  value={p}
                  checked={formData[portfolioKey].includes(p)}
                  onChange={() => handlePortfolioChange(portfolioKey, p)}
                  className="mr-2"
                />
                {p}
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="register"
      className="py-20 bg-[#0f051e] relative overflow-hidden"
    >
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
            {/* Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-indigo-500/20">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <User className="mr-3" size={24} />
                Registration Form
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* existing inputs ... */}
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
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
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
                      placeholder="Enter your email"
                      required
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
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
                      placeholder="Enter your phone number"
                      required
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
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
                      placeholder="Enter your institution"
                      required
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
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
                      placeholder="Enter your city"
                      required
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white placeholder-indigo-400 focus:outline-none focus:border-indigo-400 transition-colors"
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
                      required
                      className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white focus:outline-none focus:border-indigo-400 transition-colors"
                    >
                      <option value="">Select experience level</option>
                      <option value="beginner">
                        Beginner (0-5 conferences)
                      </option>
                      <option value="intermediate">
                        Intermediate (5-15 conferences)
                      </option>
                      <option value="advanced">
                        Advanced (15+ conferences)
                      </option>
                    </select>
                  </div>
                </div>



                {/* Committee Preferences + Portfolio */}
                <div>
                  <label className="block text-indigo-300 text-sm font-medium mb-2">
                    1st Preference Committee
                  </label>
                  <select
                    name="committee1"
                    value={formData.committee1}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white"
                  >
                    <option value="">Select committee</option>
                    {committees.map((c, i) => (
                      <option key={i} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                  {renderPortfolioDropdown(formData.committee1, "portfolio1")}
                </div>
                <div>
                  <label className="block text-indigo-300 text-sm font-medium mb-2">
                    2nd Preference Committee
                  </label>
                  <select
                    name="committee2"
                    value={formData.committee2}
                    onChange={handleInputChange}
                    disabled={!formData.committee1}
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white"
                  >
                    <option value="">Select committee</option>
                    {committees
                      .filter((c) => c.name !== formData.committee1)
                      .map((c, i) => (
                        <option key={i} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                  </select>
                  {renderPortfolioDropdown(formData.committee2, "portfolio2")}
                </div>
                <div>
                  <label className="block text-indigo-300 text-sm font-medium mb-2">
                    3rd Preference Committee
                  </label>
                  <select
                    name="committee3"
                    value={formData.committee3}
                    onChange={handleInputChange}
                    disabled={!formData.committee2}
                    className="w-full px-4 py-3 bg-indigo-900/30 border border-indigo-500/30 rounded-lg text-white"
                  >
                    <option value="">Select committee</option>
                    {committees
                      .filter(
                        (c) =>
                          c.name !== formData.committee1 &&
                          c.name !== formData.committee2
                      )
                      .map((c, i) => (
                        <option key={i} value={c.name}>
                          {c.name}
                        </option>
                      ))}
                  </select>
                  {renderPortfolioDropdown(formData.committee3, "portfolio3")}
                </div>

                {/* Accommodation & Delegation */}
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
                      I want to join session (FREE)
                    </label>
                  </div>
                  <div className="flex items-center">
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                </button>
                <label className="ml-2 text-indigo-300">
                  *Breakfast and dinner only for accomodated people
                </label>
              </form>
            </div>
            {/* Right panel */}
            <div className="space-y-6">
              {/* Fee Structure */}
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
                  <div className="border-t border-indigo-500/30 pt-3">
                    <div className="flex justify-between text-white font-bold text-lg">
                      <span>Total Amount:</span>
                      <span>₹{getTotalFee()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Dates */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Calendar className="mr-3" size={20} />
                  Important Dates
                </h3>
                <div className="space-y-3 text-indigo-200">
                  <div className="flex justify-between">
                    <span>Conference Dates:</span>
                    <span>Oct 31– Nov 2, 2025</span>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-indigo-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="mr-3" size={20} />
                  What's Included
                </h3>
                <ul className="space-y-2 text-indigo-200">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Meals during all three days*
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Cultural evening and networking events
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Certificate of participation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 text-indigo-400" size={16} />
                    Chance to win awards and recognition
                  </li>
                </ul>
                <label className="ml-2 text-indigo-300">
                      *Fee for IIT(BHU) - ₹699
                    </label>
                    <label className="ml-2 text-indigo-300">
                       BHU - ₹1199
                    </label>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Registration;
