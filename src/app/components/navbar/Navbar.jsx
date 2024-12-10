import Image from "next/image";
import Link from "next/link";
import { SideNavbar } from "./SideNavbar";

export const Navbar = () => {
  return (
    <nav className="bg-primary px-4 h-[100px] flex flex-col justify-center">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://rpclimo.com/wp-content/uploads/2017/11/fgggggg.png"
              alt=""
              width={200}
              height={200}
            />
          </Link>
          <div className="hidden lg:flex items-center">
            <Link
              href="/"
              className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              ABOUT
            </Link>
            <div className="relative group">
              <Link
                href="/services"
                className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
              >
                SERVICES
              </Link>
              <div className="absolute hidden group-hover:block bg-primary shadow-lg rounded-md pt-2 w-max text-sm">
                <Link
                  href="/services/link1"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Corporate Travel
                </Link>
                <Link
                  href="/services/link2"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Airport Transfer
                </Link>
                <Link
                  href="/services/link3"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Weddings Service
                </Link>
                <Link
                  href="/services/link4"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Exclusive Town Car
                </Link>
                <Link
                  href="/services/link5"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Cruise transportation
                </Link>
                <Link
                  href="/services/link6"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Homecoming prom
                </Link>
                <Link
                  href="/services/link7"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Night out transportation
                </Link>
                <Link
                  href="/services/link8"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Bachelor party transfer
                </Link>
                <Link
                  href="/services/link9"
                  className="block px-4 py-2 text-black hover:text-gray-50"
                >
                  Hourly Transportation
                </Link>
              </div>
            </div>
            <Link
              href="/fleet"
              className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              FLEET
            </Link>
            <Link
              href="/quote"
              className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              GET A QUOTE
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              CONTACT
            </Link>
            <Link
              href="/driver-login"
              className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              DRIVER LOGIN
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <SideNavbar />

        <div className="hidden md:flex items-center space-x-4">
          {/* Phone Number */}
          <a
            href="tel:1-833-711-4606"
            className="flex items-center text-black text-xs font-semibold"
          >
            <svg
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            1-833 711 4606
          </a>

          {/* Action Buttons */}
          <Link
            href="/book"
            className="border-2 border-black text-black px-2 py-1 rounded text-center text-xs font-semibold leading-0"
          >
            BOOK NOW
            <br />
            PAY LATER
          </Link>
          <Link
            href="/login"
            className="border-2 border-black text-black px-2 py-1 rounded text-center text-xs font-semibold leading-0"
          >
            ACCOUNT
            <br />
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};
