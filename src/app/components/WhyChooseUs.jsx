import { Car, Clock, Shield } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Car,
    title: "Premium Fleet",
    description:
      "Our fleet of luxury vehicles ensures you travel in style and comfort, no matter the occasion.",
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description:
      "We pride ourselves on our timeliness, ensuring you arrive at your destination right on schedule.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Your safety is our top priority, with professional chauffeurs and well-maintained vehicles.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-[1320px] mx-auto mt-20">
      <div className="mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center mb-12 font-serif">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/book-now"
            className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-sm transition-all duration-300 hover:bg-[#C78A18] hover:shadow-md"
          >
            Experience Luxury
          </Link>
        </div>
      </div>
    </section>
  );
}
