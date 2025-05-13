import React from 'react';

const PantoneColortrends: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Row - Pantone Color of the Year + Text */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Main Card */}
        <div className="bg-white shadow rounded-lg p-6 w-full sm:w-96">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Pantone Color of the Year 2025</h2>
          <div className="flex items-center justify-center bg-gray-100 rounded-md">
            <img src="images/Color Trends/PantoneColoroftheYear2025.png" alt="Main Plot" className="w-full object-contain" />
          </div>
        </div>

        {/* Text Box */}
        <div className="bg-gray-100 shadow rounded-lg p-6 w-full sm:w-80">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Pantone 2025 Color Trend</h3>
          <p className="text-sm text-gray-700">
            Pantone's Color of the Year for 2025 is expected to influence the fashion and design world. 
            This year, the chosen color embodies modern aesthetics and brings fresh energy to creative industries.
          </p>
        </div>
      </div>

      {/* Mocha Mousse Section */}
      <div className="flex justify-center mt-12">
        <div className="bg-white shadow rounded-lg p-6 w-full">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Brand with Color-Usage in their Collection that is the Closest to Mocha Mousse</h3>
          <div className="flex items-center justify-center bg-gray-100 rounded-md mb-4">
            <img 
              src="images/Color Trends/mocha_mousse_comparison.png" 
              alt="Brand closest to Mocha Mousse" 
              className="w-full h-auto object-contain max-w-full max-h-[80vh]"
            />
          </div>

          {/* Small Box with Brand Name and Percentage */}
          <div className="bg-gray-200 p-4 rounded-lg w-full sm:w-80 mx-auto text-center">
            <h4 className="text-lg font-medium text-gray-900">Jacquemus</h4>
            <p className="text-sm text-gray-700">
              Closeness to Mocha Mousse: <span className="font-bold text-gray-900">3.79% (Highest among the brands analyzed)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Section: Card 5 and Text 6 Side by Side */}
<div className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-16 w-full">
  {/* Card 5 */}
  <div className="bg-white shadow rounded-lg p-6 flex-1">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Color Family Distribution Plot</h3>
    <div className="flex items-center justify-center bg-gray-100 rounded-md">
      <img 
        src="images/Color Trends/color_family_palettes.png" 
        alt="Neutral Tones Plot" 
        className="w-full h-auto object-contain max-h-[60vh]"
      />
    </div>
  </div>

  {/* Text 6 */}
  <div className="bg-gray-100 shadow rounded-lg p-6 flex-1">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Insights Summary</h3>
    <p className="text-sm text-gray-700">
      Pantone Match Visual – From Runway to Standard:<br /><br />
      The charts below and on the side analyze the distribution and diversity of Pantone colors across runway garments.
      The left visual shows sample palettes from each family — highlighting both dominant trends and 
      the diversity within color groups.
      Whereas, the plot below shows how often each Pantone color family appeared in runway garments. 

    </p>
  </div>
</div>

{/* Card 7: Below, Centered */}
<div className="flex justify-center mt-12">
  <div className="bg-white shadow rounded-lg p-6 w-full lg:w-[60%]">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Color Family Palette 2025</h3>
    <div className="flex items-center justify-center bg-gray-100 rounded-md">
      <img 
        src="images/Color Trends/color_family_distribution.png" 
        alt="Color Distribution" 
        className="w-full h-auto object-contain max-h-[60vh]"
      />
    </div>
  </div>
</div>

      


{/* Final Section: Card and Text Side by Side */}
<div className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-12 w-full">
  {/* Last Card */}
  <div className="bg-white shadow rounded-lg p-6 w-full lg:w-[48%]">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Color Distribution 2025</h3>
    <div className="flex items-center justify-center bg-gray-100 rounded-md">
      <img 
        src="images/Color Trends/pantone_preview.png" 
        alt="Color Distribution" 
        className="w-full h-auto object-contain"
      />
    </div>
  </div>

  {/* Text Box beside the Card */}
  <div className="bg-gray-100 shadow rounded-lg p-6 w-full lg:w-[48%]">
    <h3 className="text-lg font-medium text-gray-900 mb-4">Insights Summary</h3>
    <p className="text-sm text-gray-700">
      Pantone Match Visual – From Runway to Standard<br /><br />
      Each row shows a garment’s original extracted color (left) and its closest Pantone match (right), 
      with color family labels. This bridges fashion data and industry-standard color language, offering 
      clear insights into trend alignment and palette forecasting.
    </p>
  </div>

      </div>
    </main>
  );
};

export default PantoneColortrends;
