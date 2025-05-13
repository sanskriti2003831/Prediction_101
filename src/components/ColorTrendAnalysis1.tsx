import React from 'react';

const ColorAnalysisPlots: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 gap-6">

{/* Plot 1 with Side Text */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-lg font-medium text-gray-900 mb-4">Color Analysis</h2>
  <div className="flex flex-col lg:flex-row gap-6 items-center">
    {/* Image */}
    <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-md">
      <img 
        src="images/Color Trends/color_family_pie_chart_updated.png" 
        alt="Plot 1" 
        className="w-full object-contain" 
      />
    </div>

    {/* Side Text */}
    <div className="flex-1 text-sm text-gray-700">
      <p>
        This pie chart illustrates the distribution of dominant color families observed in runway collections. 
        Each segment represents a color family and its relative prevalence, offering insight into seasonal trends 
        and designer preferences.
      </p>
    </div>
  </div>
</div>

{/* Plots 2 and 3 Side by Side with Texts */}
<div className="flex flex-col lg:flex-row gap-6">
  {/* Plot 2 with Text */}
  <div className="bg-white shadow rounded-lg p-6 flex-1">
    <h2 className="text-lg font-medium text-gray-900 mb-4">Saturation-Based Comparison</h2>
    <div className="flex items-center justify-center bg-gray-100 rounded-md mb-4">
      <img 
        src="images/Color Trends/vibrant_muted_trend.png" 
        alt="Plot 2" 
        className="w-full object-contain"
      />
    </div>
    <p className="text-sm text-gray-700">
      This plot visualizes the trend between vibrant and muted color palettes used in the runway designs.
    </p>
  </div>

  {/* Plot 3 with Text */}
  <div className="bg-white shadow rounded-lg p-6 flex-1">
    <h2 className="text-lg font-medium text-gray-900 mb-4">Hue-Based Comparison</h2>
    <div className="flex items-center justify-center bg-gray-100 rounded-md mb-4">
      <img 
        src="images/Color Trends/warm_cool_trend.png" 
        alt="Plot 3" 
        className="w-full object-contain"
      />
    </div>
    <p className="text-sm text-gray-700">
      This chart shows the balance between warm and cool tones appearing across various collections.
    </p>
  </div>
</div>

      </div>
    </main>
  );
};

export default ColorAnalysisPlots;
