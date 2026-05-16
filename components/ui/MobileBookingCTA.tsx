"use client";

import { getWhatsAppBookingUrl } from "@/lib/whatsapp-booking";

export default function MobileBookingCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 flex gap-2">
      <a
        href={getWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-blue-600 text-white text-center py-3 rounded-lg text-sm font-semibold"
      >
        Book Appointment
      </a>
      <a
        href="tel:+918955373205"
        className="flex-1 bg-green-600 text-white text-center py-3 rounded-lg text-sm font-semibold"
      >
        Call Now
      </a>
    </div>
  );
}
