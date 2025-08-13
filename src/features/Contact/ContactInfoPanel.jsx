import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactInfoPanel() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

      <div className="space-y-8">
        <InfoItem
          icon={<Mail className="w-6 h-6 text-blue-600" />}
          title="Email Us"
          subtitle="Send us an email anytime"
          content={
            <a
              href="mailto:info@example.com"
              className="text-blue-700 font-medium break-all"
            >
              mohammadebrahimiyan34@gmail.com
            </a>
          }
          bgColor="bg-blue-100"
        />
        <InfoItem
          icon={<Phone className="w-6 h-6 text-green-600" />}
          title="Call Us"
          subtitle="Mon–Fri from 8am to 5pm"
          content={
            <a href="tel:+989339631987" className="text-blue-700 font-medium break-all">
              +(98)9339631987
            </a>
          }
          bgColor="bg-green-100"
        />
        <InfoItem
          icon={<MapPin className="w-6 h-6 text-purple-600" />}
          title="Visit Us"
          subtitle="Come say hello at our office"
          content={
            <address className="not-italic text-gray-600">
              <p>100 Smith Street</p>
              <p>Collingwood VIC 3066</p>
              <p>Australia</p>
            </address>
          }
          bgColor="bg-purple-100"
        />
        <InfoItem
          icon={<Clock className="w-6 h-6 text-orange-600" />}
          title="Business Hours"
          content={
            <div className="text-gray-600">
              <p>Sunday - Thursday: 10:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 3:00 PM</p>
              <p>Friday: Closed</p>
            </div>
          }
          bgColor="bg-orange-100"
        />
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
        <div className="bg-blue-50 rounded-lg p-4">
          <h4 className="font-semibold text-blue-900 mb-2">Quick Response</h4>
          <p className="text-sm text-blue-800">
            We typically respond to all inquiries within 2–4 hours during
            business hours.
          </p>
        </div>
      </div>
    </div>
  );
}

function InfoItem({ icon, title, subtitle, content, bgColor }) {
  return (
    <div className="flex items-start space-x-4">
      <div
        className={`w-12 h-12 ${bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
      >
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        {subtitle && <p className="text-gray-600 mb-1">{subtitle}</p>}
        {content}
      </div>
    </div>
  );
}
