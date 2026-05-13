import { CheckCircle } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../ui/button";
import { useModal } from "@/hooks/use-modal-store";
import AwardsSection from "../Awards/AwardsSection";

const WhyChoose = () => {
  const router = useRouter();
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const { onOpen } = useModal();

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    router.push(`/booking/${city}`);
    setShowCityDropdown(false);
  };

  // const handleBookAppointment = () => {
  //   setShowCityDropdown(true);
  // };

  const handleNavigateToBooking = () => {
    if (selectedCity) {
      router.push(`/booking/${encodeURIComponent(selectedCity)}`);
    }
  };

  return (
    <div className="w-[80%] mx-auto my-16 md:my-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
          Why Choose Us?
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Discover the reasons why we stand out in the field of joint replacement.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div data-aos="slide-right" className="mx-auto">
          <Image
            width={900}
            height={900}
            src="/assets/images/whycoose2.jpg"
            alt="Why Choose Us"
            className="rounded-xl"
          />
        </div>
        <div data-aos="slide-left">
          <ul className="space-y-6">
            {[
              "Safety First Quality Must",
              "Patient-Centric Approach",
              "Focused Leadership",
              "Cutting-Edge Technology",
              "Transparent Pricing",
              "Coordinated Care",
            ].map((text, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="mr-3 text-primary" />
                <span className="text-xl md:text-2xl font-medium text-gray-700">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <AwardsSection />
    </div>
  );
};

export default WhyChoose;
