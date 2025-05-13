import React from 'react';

type RunwayImageCardProps = {
  designer: string;
  imageId: string;
  onClose: () => void;
};

const RunwayImageCard: React.FC<RunwayImageCardProps> = ({ designer, imageId, onClose }) => {
  const normalizedDesigner =
    designer.charAt(0).toUpperCase() + designer.slice(1).toLowerCase();

  const runwayImagePath = `/images/AllRunwayImages/${normalizedDesigner}Look${imageId}.png`;
  const colorImagePath = `/images/ColorAnalysisResults/${normalizedDesigner}Look${imageId}_largest_garment_colors.png`;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-5xl w-full relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl font-bold text-gray-700 hover:text-red-500"
        >
          &times;
        </button>

        {/* Image Content */}
        <div className="flex flex-col md:flex-row gap-6 p-6">
          {/* Runway Image */}
          <div className="md:w-1/2">
            <img
              src={runwayImagePath}
              alt={`${normalizedDesigner} Look ${imageId}`}
              className="w-full object-contain border rounded-lg"
            />
          </div>

          {/* Color Palette + Caption */}
          <div className="md:w-1/2 flex flex-col items-center justify-center">
            <img
              src={colorImagePath}
              alt={`${normalizedDesigner} Look ${imageId} Color Analysis`}
              className="w-[80%] object-contain border rounded-lg"
            />
            <p className="mt-4 text-lg font-medium text-gray-800 text-center">Color Palette</p>
          </div>
        </div>

        {/* Title Caption */}
        <h3 className="text-center text-2xl font-semibold mb-6">
          {normalizedDesigner} Look {imageId}
        </h3>
      </div>
    </div>
  );
};

export default RunwayImageCard;
