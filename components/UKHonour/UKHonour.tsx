"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

const UKHonour = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0f4ff]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary">
            UK Honour Recognition
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Celebrating excellence and recognition from the United Kingdom
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                UK Honour Award
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Dr. Dheeraj Dubay has been honored with a prestigious recognition from the United Kingdom for outstanding contributions in the field of Joint Replacement Surgery. This honor reflects his dedication to excellence and innovation in orthopedic care.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-4 py-2 bg-primary/10 rounded-lg">
                  <span className="text-primary font-semibold">Excellence in Orthopedics</span>
                </div>
                <div className="px-4 py-2 bg-primary/10 rounded-lg">
                  <span className="text-primary font-semibold">International Recognition</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div 
                className="relative w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity" 
                style={{ minHeight: '400px', maxHeight: '600px' }}
                onClick={() => openModal("/assets/images/uk-honor-1.jpeg")}
              >
                <Image
                  src="/assets/images/uk-honor-1.jpeg"
                  alt="UK Honour Award"
                  width={800}
                  height={600}
                  className="object-contain w-full h-full"
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeModal}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 bg-transparent border-none">
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="UK Honour Award Full Size"
                width={1200}
                height={900}
                className="object-contain max-w-full max-h-[95vh] rounded-lg"
                style={{ maxWidth: '100%', maxHeight: '95vh' }}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default UKHonour;

