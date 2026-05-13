export function CTASection({
  heading = 'Ready to Walk Without Pain?',
  subheading = 'Book a consultation with Dr. Dheeraj Dubay today. Available at Shalby Hospital Vaishali Nagar and Dr. Dubay Hip & Knee Clinic, Vidhyadhar Nagar, Jaipur.',
  showWhatsApp = true,
}: {
  heading?: string
  subheading?: string
  showWhatsApp?: boolean
}) {
  return (
    <div className="bg-blue-700 rounded-2xl p-8 md:p-12 text-center my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{heading}</h2>
      <p className="text-blue-100 mb-8 max-w-xl mx-auto leading-relaxed">{subheading}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/booking/jaipur"
          className="bg-white text-blue-700 px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors"
        >
          Book Appointment
        </a>
        <a
          href="tel:+918955373205"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold text-sm border border-blue-500 hover:bg-blue-500 transition-colors"
        >
          Call +91-8955373205
        </a>
        {showWhatsApp && (
          <a
            href="https://wa.me/918955373205"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-green-400 transition-colors"
          >
            WhatsApp Us
          </a>
        )}
      </div>
    </div>
  )
}
