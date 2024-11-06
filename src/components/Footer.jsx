import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer flex p-10 max-w-screen-2xl mx-auto bg-base-300 shadow-2xl">
     <div className="flex flex-col items-center justify-center gap-5 w-full">
     <div className="my-4">
     <aside  className="space-y-3">
        <h3 className="text-4xl font-bold text-center text-primary">
        Gadget Heaven
        </h3>
        <p className="text-lg font-medium text-secondary text-center">
          Leading the way in cutting-edge technology and innovation.</p>
      </aside>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center w-full">
     <nav className="flex flex-col space-y-3 items-center">
        <h6 className="footer-title text-lg font-bold">Services</h6>
        <Link className="link link-hover text-base">Product and Support</Link>
        <Link className="link link-hover text-base">Order Tracking</Link>
        <Link className="link link-hover text-base">Shipment</Link>
        <Link className="link link-hover text-base">Delivery</Link>
      </nav>
      <nav className="flex flex-col space-y-3 items-center">
        <h6 className="footer-title text-lg font-bold">Company</h6>
        <Link className="link link-hover text-base">About us</Link>
        <Link className="link link-hover text-base">Career</Link>
        <Link className="link link-hover text-base">Contact</Link>
      </nav>
      <nav className="flex flex-col space-y-3 items-center">
        <h6 className="footer-title text-lg font-bold">Legal</h6>
        <Link className="link link-hover text-base">Terms and policy </Link>
        <Link className="link link-hover text-base">Privacy policy</Link>
        <Link className="link link-hover text-base">Cookie policy</Link>
      </nav>
     </div>
     </div>
    </footer>
  );
};

export default Footer;
