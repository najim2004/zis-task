export default function FAQ() {
  const faqs = [
    {
      question: "What types of vehicles are available in your fleet?",
      answer:
        "Our luxury fleet includes a wide range of vehicles to suit your needs. From elegant sedans to spacious SUVs and stretch limousines, we offer various options to accommodate different group sizes and occasions.",
    },
    {
      question: "Are your chauffeurs experienced?",
      answer:
        "Yes, all our chauffeurs are highly experienced professionals with extensive training in customer service and safety protocols. They undergo regular background checks and maintain excellent driving records.",
    },
    {
      question: "What amenities can I expect in a RPC Limo?",
      answer:
        "Our vehicles come equipped with premium amenities including climate control, leather seating, entertainment systems, complimentary Wi-Fi, and refreshment options. Specific amenities may vary by vehicle type.",
    },
    {
      question: "What is the minimum age requirement to rent a limo?",
      answer:
        "The primary renter must be at least 21 years of age and possess a valid driver's license, even though you won't be driving. Additional requirements may apply for certain services.",
    },
    {
      question: "What if I encounter a problem during my service?",
      answer:
        "We provide 24/7 customer support. In case of any issues, you can contact our dedicated support team immediately through our emergency hotline, and we'll resolve your concern promptly.",
    },
    {
      question: "Can I modify or cancel my reservation?",
      answer:
        "Yes, reservations can be modified or cancelled according to our flexible booking policy. Please notify us at least 24 hours in advance to avoid any cancellation fees.",
    },
    {
      question: "How does RPC Limo ensure passenger safety during the ride?",
      answer:
        "We prioritize passenger safety through regular vehicle maintenance, comprehensive insurance coverage, professional chauffeurs, and strict safety protocols. All vehicles are equipped with modern safety features.",
    },
  ];

  return (
    <section className="max-w-[1320px] mx-auto px-4 mt-20">
      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8 md:mb-12">
        Frequently Asked Questions for RPC Limo Service
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details key={index} className="group rounded-lg bg-gray-50">
            <summary className="flex items-center gap-5 cursor-pointer py-4 hover:bg-gray-50 group-open:bg-primary">
              <span className="ml-6 flex-shrink-0">
                <svg
                  className="w-6 h-6 text-gray-500 group-open:rotate-45 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </span>
              <span className="text-lg text-gray-800 font-medium">
                {faq.question}
              </span>
            </summary>
            <div className="px-6 text-gray-600 py-4">{faq.answer}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
