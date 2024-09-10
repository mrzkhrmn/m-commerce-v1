import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="md:h-[580px] bg-black w-full text-white  px-10 flex items-center">
      <div className="flex justify-between w-full">
        <div className="flex flex-col ">
          <p className="font-semibold mb-8">Company</p>
          <div className="flex  flex-col gap-2 font-thin font-thin">
            <p>About us</p>
            <p>Careers</p>
            <p>Showroom Locations</p>
            <p>Social Responsibility</p>
          </div>
          <div className="flex  flex-col gap-2 font-thin">
            <p>About us</p>
            <p>Careers</p>
            <p>Showroom Locations</p>
            <p>Social Responsibility</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold mb-8">Customer Service</p>
          <div className="flex flex-col justify-center gap-2 font-thin">
            <p>FAQs</p>
            <p>Shipping</p>
            <p>Return</p>
            <p>The Journals</p>
            <p>Terms / Privacy Policy</p>
            <p>Gift Vouchers</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold mb-8">Wholesale Resources</p>
          <div className="flex flex-col justify-center gap-2 font-thin">
            <p>Fabric Range</p>
            <p>Colour Range</p>
            <p>Downloads & Assets</p>
            <p>Catalogs & POS Materials</p>
            <p>Printers & Embroiderers</p>
            <p>Invoices & Payments (TermSync)</p>
          </div>
        </div>
        <div className="flex flex-col w-[20%]">
          <p className="font-semibold mb-8">Stay Connected</p>
          <div className="flex  gap-2 font-thin text-3xl">
            <Link>
              <FaLinkedin />
            </Link>
            <Link>
              <FaGithub />
            </Link>
            <Link>
              <FaInstagram />
            </Link>
          </div>
          <div className="font-thin my-6">
            <p className="">
              Be one of the first to receive new product launches, sale offers,
              collabs & more.
            </p>
          </div>
          <input
            type="text"
            placeholder="Your email"
            className="border border-white bg-transparent rounded-full text-white placeholder-white/80 outline-none"
          />
        </div>
      </div>
    </footer>
  );
};
