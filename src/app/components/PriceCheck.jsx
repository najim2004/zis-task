import { Clock, Plane } from "lucide-react"; // Correct import

export default function PriceCheck() {
  return (
    <section className="max-w-[1320px] mx-auto px-4 mt-20">
      <h2 className="text-3xl md:text-4xl text-center text-gray-900 mb-8 md:mb-12">
        Quick Price Check
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-primary gap-6 text-white p-6 flex items-center justify-center space-y-2">
          <Clock className="size-16" />
          <div className="space-y-2">
            <h3 className="text-xl font-medium text-center">Hourly Rate</h3>
            <p className="text-lg">Start from $60</p>
          </div>
        </div>
        <div className="bg-primary gap-6 text-white p-6 flex items-center justify-center space-y-2">
          <Plane className="size-16" />

          <div className="space-y-2">
            <h3 className="text-xl font-medium text-center">LGA AIRPORT</h3>
            <p className="text-lg">Start from $80.00</p>
          </div>
        </div>
        <div className="bg-primary gap-6 text-white p-6 flex items-center justify-center space-y-2">
          <Plane className="size-16" />

          <div className="space-y-2">
            <h3 className="text-xl font-medium text-center">JFK AIRPORT</h3>
            <p className="text-lg">Start from $90.00</p>
          </div>
        </div>
        <div className="bg-primary gap-6 text-white p-6 flex items-center justify-center space-y-2">
          <Plane className="size-16" />

          <div className="space-y-2">
            <h3 className="text-xl font-medium text-center">EWR AIRPORT</h3>
            <p className="text-lg">Start from $100.00</p>
          </div>
        </div>
      </div>
    </section>
  );
}
