import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-black py-12 px-4 md:px-8 mt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description Section */}
          <div className="md:col-span-1">
            <Image
              src="https://rpclimo.com/wp-content/uploads/2017/11/fgggggg.png"
              alt="RPC LIMO"
              width={250}
              height={100}
              className="mb-6"
            />
            <p className="text-sm leading-relaxed mb-6">
              Spanning from the bustling energy of New York to over 300 cities
              worldwide, RPC Limo is your trusted partner in sophisticated
              travel logistics. We pledge to provide a smooth transition from
              the outset of your journey to its conclusion, ensuring every leg
              of your trip is executed with precision and elegance.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded hover:bg-black/90 transition-colors">
              Book Now Pay Later
            </button>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/fleet" className="hover:underline">
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:underline">
                  Our Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:underline">
                  Book A Ride
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">OUR SERVICES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/corporate" className="hover:underline">
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link href="/airport" className="hover:underline">
                  Airport Transfer
                </Link>
              </li>
              <li>
                <Link href="/wedding" className="hover:underline">
                  Wedding Transfer
                </Link>
              </li>
              <li>
                <Link href="/charter" className="hover:underline">
                  Charter Service
                </Link>
              </li>
              <li>
                <Link href="/cruise" className="hover:underline">
                  Cruise Port Transfer
                </Link>
              </li>
            </ul>
          </div>

          {/* App Download Section */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex gap-2">
                  <Link href="https://apps.apple.com">
                    <Image
                      src="https://imgs.search.brave.com/aFql0-Azta-IVVx8GAvkV3LxXlFws7Zc5xCPWFSLT_0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTAvRG93/bmxvYWQtT24tVGhl/LUFwcC1TdG9yZS1Q/TkctVHJhbnNwYXJl/bnQtSW1hZ2UucG5n"
                      alt="Download on App Store"
                      width={120}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </Link>
                  <Link href="https://play.google.com">
                    <Image
                      src="https://imgs.search.brave.com/B7TuIwgS4_Qeti-N4LCKnV_CNCHB7q5elfA0SJ52buY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY2NDI4NzEy/OGdvb2dsZS1wbGF5/LXN0b3JlLWxvZ28t/cG5nLnBuZw"
                      alt="Get it on Google Play"
                      width={120}
                      height={40}
                      className="h-10 object-center object-cover w-auto"
                    />
                  </Link>
                </div>
              </div>
              <p className="text-sm">
                If you are a rider or want to use our platform to ride please
                download RPC LIMO app.
              </p>
              <p className="text-sm">
                If you are a driver or want to drive with us please download RPC
                DRIVER app.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Copyright © RPC Limo 2024 - Developed by ZSI
          </p>
          <div className="flex gap-6">
            <Link href="https://facebook.com" className="hover:opacity-80">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="https://twitter.com" className="hover:opacity-80">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="https://instagram.com" className="hover:opacity-80">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}