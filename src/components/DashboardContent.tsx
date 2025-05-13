import React from 'react';
import { ImageIcon, Palette, TrendingUp } from 'lucide-react';


const trendingColors = [
  { name: 'Black', hex: '#000000', percentage: 30.4 },
  { name: 'Very Dark Red', hex: '#010000', percentage: 22.5 },
  { name: 'Very Dark Brown', hex: '#010100', percentage: 21.6 },
  { name: 'Very Dark Gray', hex: '#010101', percentage: 16.7 },
  { name: 'Dark Olive Brown', hex: '#020100', percentage: 8.8 },
];


const runwayShows = [
  { name: 'Schiaparelli Haute Couture Spring Summer 2025 Collection', date: 'Jan 2025', images: 33 },
  { name: 'Chanel Haute Couture Spring-Summer 2025 Collection', date: 'Jan 2025', images: 51 },
  { name: 'Jacquemus Spring-Summer 2025 Collection "LA CROISIÈRE"', date: 'Jan 2025', images: 41 },
  ];

const DashboardContent: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div>
        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
{/* Card 1 */}
<div className="bg-white overflow-hidden shadow rounded-lg">
  <div className="px-4 py-5 sm:p-6">
    <div className="flex items-center">
      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
        <ImageIcon className="h-6 w-6 text-white" />
      </div>
      <div className="ml-5 w-0 flex-1">
        <dl>
          <dt className="text-sm font-medium text-gray-500 truncate">Total Images Analyzed</dt>
          <dd className="flex items-baseline">
            <div className="text-2xl font-semibold text-gray-900">125</div>
            {/* Display the percentage change */}
            <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <span>+12.6%</span> {/* This would be calculated dynamically */}
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</div>

          {/* Card 2 */}
        <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
       <div className="flex items-center">
      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
        <Palette className="h-6 w-6 text-white" />
      </div>
      <div className="ml-5 w-0 flex-1">
        <dl>
          <dt className="text-sm font-medium text-gray-500 truncate">Unique Colors Identified</dt>
          <dd className="flex items-baseline">
            <div className="text-2xl font-semibold text-gray-900">529</div>
            {/* Display the percentage */}
            <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
              <span>52.9%</span> {/* This would be calculated dynamically */}
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</div>

          {/* Card 3 */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Trend Confidence</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">92%</div>
                      <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                        <span>+5.4%</span>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Colors + Runway Shows */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Trending Colors */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Top Trending Colors</h2>
            <div className="space-y-4">
              {trendingColors.map((color) => (
                <div key={color.hex} className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-md mr-4"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{color.name}</p>
                      <p className="text-sm font-medium text-gray-500">{color.percentage}%</p>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full"
                        style={{ width: `${color.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Runway Shows Table */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Runway Shows Analyzed</h2>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Show Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Images
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {runwayShows.map((show) => (
                    <tr key={show.name}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {show.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {show.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {show.images}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

{/* Color Trend Timeline */}
<div className="bg-white shadow rounded-lg p-6">
  <h2 className="text-lg font-medium text-gray-900 mb-4">Color Trend Timeline</h2>
  <div className="space-y-4">
    <img
      src="images/Color Trends/JacquemusLook_top_colors.png"
      alt="Color Trend Plot 1"
      className="w-full rounded-md border border-gray-200"
    />
    <img
      src="images/Color Trends/ChanelLook_top_colors.png"
      alt="Color Trend Plot 2"
      className="w-full rounded-md border border-gray-200"
    />
    <img
      src="images/Color Trends/SchiaparelliLook_top_colors.png"
      alt="Color Trend Plot 3"
      className="w-full rounded-md border border-gray-200"
    />
  </div>
</div>

      </div>
    </main>
  );
};

export default DashboardContent;
