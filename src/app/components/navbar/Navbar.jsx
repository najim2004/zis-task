"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#E49B0F] px-4 h-[100px] flex flex-col justify-center">
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
        <div className="">
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
          <Link
            href="/services"
            className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
          >
            SERVICES
          </Link>
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
            href="/rate"
            className="text-black hover:text-white px-3 py-2 text-sm font-semibold"
          >
            RATE
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black hover:text-white rounded-md"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div className="hidden md:flex items-center space-x-4">

          {/* Phone Number */}
          <a href="tel:1-833-711-4606" className="flex items-center text-black text-xs font-semibold">
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
            BOOK NOW<br />PAY LATER
          </Link>
          <Link
            href="/login"
            className="border-2 border-black text-black px-2 py-1 rounded text-center text-xs font-semibold leading-0"
          >
            ACCOUNT<br />LOGIN
          </Link>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[#E49B0F] p-4 space-y-2">
            <Link
              href="/"
              className="block text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              ABOUT
            </Link>
            <Link
              href="/services"
              className="block text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              SERVICES
            </Link>
            <Link
              href="/fleet"
              className="block text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              FLEET
            </Link>
            <Link
              href="/quote"
              className="block text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              GET A QUOTE
            </Link>
            <Link
              href="/contact"
              className="block text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              CONTACT
            </Link>
            <Link
              href="/rate"
              className="block text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              RATE
            </Link>
            <Link
              href="/driver-login"
              className="block text-black hover:text-white px-3 py-2 text-sm font-semibold"
            >
              DRIVER LOGIN
            </Link>

            <a
              href="tel:1-833-711-4606"
              className="flex items-center text-black px-3 py-2"
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

            <Link
              href="/book"
              className="block bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-center"
            >
              BOOK NOW PAY LATER
            </Link>
            <Link
              href="/login"
              className="block border border-black text-black px-4 py-2 rounded hover:text-white text-center"
            >
              ACCOUNT LOGIN
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
