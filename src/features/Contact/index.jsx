import React from "react";
import ContactInfoPanel from "./ContactInfoPanel";
import ContactForm from "./ContactForm";
import BackArrow from "../../icons/BackArrow";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <BackArrow
        className="ml-4 pt-4 w-6 h-12 cursor-pointer"
        onClick={() => navigate("/")}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 w-full">
          <ContactInfoPanel />
        </div>

        <div className="lg:col-span-3 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}