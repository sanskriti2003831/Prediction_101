import React from 'react';
import { Palette, Image, Search, Filter } from 'lucide-react';

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Fashion Runway Analysis Project</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 mb-4">
          This project explores visual and emotional themes in contemporary fashion runway collections, analyzing color palettes, trends, and viewer sentiment. 
          Focusing on major fashion houses including <strong>Jacquemus</strong>, <strong>Schiaparelli</strong>, and <strong>Chanel</strong>, we combine visual data with natural language processing to uncover underlying design patterns and audience perceptions.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <div className="grid gap-6">
          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            <Filter className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="text-xl font-medium mb-2">Designer Filtering</h3>
              <p className="text-gray-600">
                Focus on specific designers and their unique aesthetics by filtering images by brand.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            <Search className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="text-xl font-medium mb-2">Smart Search</h3>
              <p className="text-gray-600">
                Search runway images by designer or season to easily locate collections of interest.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            <Palette className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="text-xl font-medium mb-2">Color Analysis</h3>
              <p className="text-gray-600">
                Discover dominant color themes using machine learning and palette extraction techniques.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
            <Image className="w-6 h-6 text-blue-500 mt-1" />
            <div>
              <h3 className="text-xl font-medium mb-2">Interactive Gallery</h3>
              <p className="text-gray-600">
                Browse and explore annotated runway looks, complete with palette previews and metadata.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Methodology</h2>
        <div className="prose text-gray-700">
          <p className="mb-4">
            The workflow behind this analysis involves:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Collecting high-resolution runway images from verified sources</li>
            <li>Segmenting garments and extracting dominant color palettes</li>
            <li>Performing color clustering and seasonal trend detection</li>
            <li>Scraping viewer comments and analyzing sentiment with BERT and VADER</li>
            <li>Organizing data by designer and visualizing results interactively</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
          <li>React & Tailwind CSS for frontend development</li>
          <li>Python, OpenCV, and TensorFlow for image processing and color analysis</li>
          <li>Hugging Face Transformers and VADER for sentiment classification</li>
          <li>Oracle APEX and SQL for backend data storage</li>
          <li>Tableau & matplotlib for additional visual insights</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Future Developments</h2>
        <p className="text-gray-700">
          Planned improvements for this project include:
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
          <li>More accurate seasonal trend forecasting using time series models</li>
          <li>Pattern detection (e.g. tweed, stripes) using CNNs</li>
          <li>Greater fashion house integration for broader coverage</li>
          <li>Real-time analysis from social media and livestream events</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
