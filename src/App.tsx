import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Info, Grid, BarChart } from 'lucide-react'; // Import necessary icons
import Gallery from './components/Gallery';
import DesignerGallery from './components/DesignerGallery';
import About from './components/About';
import DashboardContent from './components/DashboardContent'; // Import DashboardContent
import ColorAnalysisPlots from './components/ColorTrendAnalysis1'; // Import ColorAnalysisPlots
import PantoneColortrends from './components/PantoneColorTrends';
import SentimentAnalysis1 from './components/SentimentAnalysis1';
import SummaryOfFindings from './components/SummaryOfFindings';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <Link to="/" className="flex items-center px-4 text-gray-900 hover:text-gray-600">
                  <Home className="w-5 h-5 mr-2" />
                  <span className="font-medium">Gallery</span>
                </Link>
                <Link to="/dashboard" className="flex items-center px-4 text-gray-900 hover:text-gray-600">
                  <Grid className="w-5 h-5 mr-2" /> 
                  <span className="font-medium">Dashboard</span>
                </Link>
                <Link to="/color-analysis" className="flex items-center px-4 text-gray-900 hover:text-gray-600">
                  <BarChart className="w-5 h-5 mr-2" />
                  <span className="font-medium">Color Trend Analysis</span>
                </Link>
                <Link to="/pantone-color-trends" className="flex items-center px-4 text-gray-900 hover:text-gray-600">
                  <BarChart className="w-5 h-5 mr-2" />
                <span className="font-medium">Pantone Color Trends</span>
                </Link>
                <Link to="/sentiment" className="flex items-center px-4 text-gray-900 hover:text-gray-600">
                <BarChart className="w-5 h-5 mr-2" />
                <span className="font-medium">Sentiment Analysis</span>
                </Link>
                <Link to="/summary" className="flex items-center px-4 text-gray-900 hover:text-gray-600">
                <Grid className="w-5 h-5 mr-2" />
                <span className="font-medium">Summary</span>
                </Link>

                <Link to="/about" className="flex items-center px-4 text-gray-900 hover:text-gray-600">
                  <Info className="w-5 h-5 mr-2" />
                  <span className="font-medium">About Project</span>
                </Link>

              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          {/* Gallery Page */}
          <Route path="/" element={<Gallery />} />
          
          {/* Designer Gallery Page */}
          <Route path="/designer/:designer" element={<DesignerGallery />} />
          
          {/* Dashboard Page */}
          <Route path="/dashboard" element={<DashboardContent />} />
          
          {/*Color Trend Analysis Page */}
          <Route path="/color-analysis" element={<ColorAnalysisPlots />} />

          {/*Pantone Color Trend Analysis Page*/}
          <Route path="/pantone-color-trends" element={<PantoneColortrends />} />
           
          {/* Sentiment Analysis Trend*/}
          <Route path="/sentiment" element={<SentimentAnalysis1/>} />

          {/*Final Summary Page*/}
          <Route path="/summary" element={<SummaryOfFindings />} />

          {/* About Page */}
          <Route path="/about" element={<About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
