import React, { useState } from 'react';

const SummaryOfFindings: React.FC = () => {
  const images = [
    '/images/Verdict/Verdict.png',
    '/images/Verdict/Jacqumeus.png',
    '/images/Verdict/Chanel.png',
    '/images/Verdict/Schiaparelli.png'
  ];

  const [current, setCurrent] = useState(0);

  const handleNext = () => setCurrent((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow rounded-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Overall Summary Carousel</h2>
        <div className="relative">
          <img
            src={images[current]}
            alt={`Summary ${current + 1}`}
            className="rounded-lg mx-auto max-h-[400px] object-contain"
          />
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Descriptive Text Boxes */}
      <div className="mt-8 space-y-8">
        {/* Color Trends */}
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Overall Color Trends</h3>
          <p className="text-gray-700 leading-relaxed">
            Across the runway collections analyzed, a dominant presence of neutral and earthy tones emerged.
            Designers leaned heavily into warm browns, soft beiges, muted greens, and sandy hues—suggesting a return to organic aesthetics and natural inspiration.
          </p>
        </div>

{/* Sentiment Overview with Image and Text */}
<div className="bg-white shadow rounded-lg p-6">
  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sentiment Overview</h3>
  <div className="flex flex-col gap-6 items-center">
    {/* Sentiment Chart */}
    <div className="w-full flex items-center justify-center bg-gray-100 rounded-md">
<img 
  src="images/Verdict/Sentiment.png" 
  alt="Sentiment Overview" 
  className="object-contain max-h-[600px] w-auto mx-auto"
/>

    </div>

    {/* Sentiment Description */}
    <div className="text-sm text-gray-700 w-full">
      <p>
        The sentiment analysis revealed that approximately 74% of comments were positive (BERT), and 38% were neutral (VADER), 
        indicating an overall favorable response to the collections with minimal negative feedback.
      </p>
    </div>
  </div>
</div>

      </div>
    </main>
  );
};

export default SummaryOfFindings;
