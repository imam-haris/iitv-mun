import React, { useState } from 'react';
import { Mail,ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the registration fee for IITBHU MUN 2025?',
      answer: 'The registration fee varies based on the committee you choose. Individual delegate fees range from ₹800 to ₹1500, while delegation fees (for schools/colleges) start from ₹5000. Early bird discounts are available until January 15th, 2025.'
    },
    {
      question: 'How do I register for the conference?',
      answer: 'Registration can be completed online through our official website. Fill out the registration form, select your preferred committee, and complete the payment process. You will receive a confirmation email with further details.'
    },
    {
      question: 'What documents do I need to bring?',
      answer: 'Please bring a valid government-issued photo ID, your registration confirmation, and any required academic documents. International delegates should carry their passport and visa (if applicable).'
    },
    {
      question: 'Are there accommodation facilities available?',
      answer: 'Yes, we provide accommodation in IIT BHU hostels for outstation delegates. The accommodation fee is separate from the registration fee and includes meals during the conference period.'
    },
    {
      question: 'What is the dress code for the conference?',
      answer: 'The dress code is formal/business attire for all three days. Men should wear formal suits or shirt with trousers and tie. Women should wear formal suits, sarees, or other professional attire.'
    },
    {
      question: 'Can I participate if I\'m new to MUN?',
      answer: 'Absolutely! We welcome delegates of all experience levels. We have committees specifically designed for beginners, and our experienced chairs will guide you through the procedures.'
    },
    {
      question: 'What should I prepare before the conference?',
      answer: 'Study your committee\'s agenda thoroughly, research your country\'s position on the topic, and prepare your opening statement. We will provide detailed study guides and background materials after registration.'
    },
    {
      question: 'Are there any awards or recognition?',
      answer: 'Yes, we have various awards including Best Delegate, Outstanding Delegate, Honorable Mention, and Best Delegation. Special recognition awards are also given for diplomatic excellence and constructive participation.'
    },
    {
      question: 'What is the cancellation policy?',
      answer: 'Cancellations made before January 31st, 2025 are eligible for a 50% refund. No refunds will be provided for cancellations made after this date due to event planning constraints.'
    },
    {
      question: 'How can I contact the organizing committee?',
      answer: 'You can reach us through email at iitbhumun2025@gmail.com or call our helpline at +91-9999999999. Our team is available Monday to Friday, 10 AM to 6 PM.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Questions</span>
          </h2>
          <p className="text-xl text-purple-300 max-w-3xl mx-auto">
            Find answers to common questions about IITBHU MUN 2025. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <HelpCircle className="text-white" size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  </div>
                  <div className="ml-4">
                    {openIndex === index ? (
                      <ChevronUp className="text-purple-400" size={24} />
                    ) : (
                      <ChevronDown className="text-purple-400" size={24} />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <p className="text-purple-200 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-purple-200 mb-6">
              Our support team is here to help! Reach out to us for personalized assistance with your queries.
            </p>
            <div className="flex-col sm:flex-row gap-4 justify-center">
                {/* <Mail className="text-purple-400" size={16} /> */}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=Secretariat@iitbhumun.com"
                  target="_blank"
                  rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                >
                  Secretariat@iitbhumun.com
                </a>
              {/* <a
                href="tel:+919999999999"
                className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Call Support
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;