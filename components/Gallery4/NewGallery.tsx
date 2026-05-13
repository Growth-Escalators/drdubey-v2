"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineExpandAlt, AiOutlineDownload, AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { BiZoomIn, BiZoomOut } from "react-icons/bi";

const Gallery = ({ images }: any) => {
  const [selectedImage, setSelectedImage] = useState<null | any>(null);
  const [scale, setScale] = useState(1);

  const handleDownload = async (imageUrl: string, description: string) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${description || 'gallery-image'}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleZoom = (type: 'in' | 'out') => {
    if (type === 'in' && scale < 3) {
      setScale(prev => prev + 0.5);
    } else if (type === 'out' && scale > 1) {
      setScale(prev => prev - 0.5);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 py-16">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our collection of memorable moments and achievements in orthopedic excellence
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {images.map((x: any, index: number) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="aspect-[4/3] relative group cursor-pointer" 
                onClick={() => setSelectedImage(x)}
              >
                <Image
                  src={x.imageUrl}
                  alt={x.description || "Gallery Image"}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm">
                      <AiOutlineExpandAlt className="text-2xl text-gray-800" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                {x.description && (
                  <div className="space-y-2">
                    <p className="text-gray-800 font-medium line-clamp-2">
                      {x.description}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Custom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => {
              setSelectedImage(null);
              setScale(1);
            }}
          >
            <div className="absolute top-4 right-4 flex gap-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoom('in');
                }}
                className="bg-white/80 p-3 rounded-full hover:bg-white transition-all"
              >
                <BiZoomIn className="text-2xl" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoom('out');
                }}
                className="bg-white/80 p-3 rounded-full hover:bg-white transition-all"
              >
                <BiZoomOut className="text-2xl" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload(selectedImage.imageUrl, selectedImage.description);
                }}
                className="bg-white/80 p-3 rounded-full hover:bg-white transition-all"
              >
                <AiOutlineDownload className="text-2xl" />
              </button>
              <button
                onClick={() => {
                  setSelectedImage(null);
                  setScale(1);
                }}
                className="bg-white/80 p-3 rounded-full hover:bg-white transition-all"
              >
                <AiOutlineClose className="text-2xl" />
              </button>
            </div>
            
            <motion.div
              className="relative max-w-[90vw] max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.imageUrl}
                  alt={selectedImage.description || "Gallery Image"}
                  width={1200}
                  height={800}
                  className="object-contain"
                  style={{
                    transform: `scale(${scale})`,
                    transition: 'transform 0.3s ease'
                  }}
                />
              </div>
              {selectedImage.description && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm">
                  <p className="text-gray-800 font-medium">
                    {selectedImage.description}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
