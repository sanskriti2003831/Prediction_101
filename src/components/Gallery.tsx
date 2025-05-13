import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Palette, Search } from 'lucide-react';

interface RunwayImage {
  id: string;
  designer: 'Jacquemus' | 'Schiaparelli' | 'Chanel';
  imageUrl: string;
  season: string;
  colorPalette: string[];
}

const runwayImages: RunwayImage[] = [
  {
    id: '1',
    designer: 'Chanel',
    imageUrl: 'images/AllRunwayImages/ChanelLook1.png',  
    season: 'Spring Summer 2025',
    colorPalette: ['#010101', '#abb4ad', '#848b7d', '#645f60', '#cdc9c5']
  },
  {
    id: '2',
    designer: 'Schiaparelli',
    imageUrl: 'images/AllRunwayImages/SchiaperelliLook1.png',
    season: 'Spring Summer 2025',
    colorPalette: ['#000000', '#b67040', '#b59b82', '#5e3f25', '#e0a87e']
  },
  {
    id: '3',
    designer: 'Jacquemus',
    imageUrl: 'images/AllRunwayImages/JacquemusLook1.png',
    season: 'Spring Summer 2025',
    colorPalette: ['#ebe2d9', '#cfb8a2', '#9e7b62', '#956f55', '#c9ae8e']
  }
];

const designers = ['All', 'Jacquemus', 'Schiaparelli', 'Chanel'] as const;

function Gallery() {
  const navigate = useNavigate();
  const { name } = useParams<{ name?: string }>();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<RunwayImage | null>(null);

  const initialDesigner = name
    ? (name.charAt(0).toUpperCase() + name.slice(1)) as RunwayImage['designer']
    : 'All';

  const [selectedDesigner, setSelectedDesigner] = useState<'All' | RunwayImage['designer']>(initialDesigner);

  // Sync URL param with local state on param change
  useEffect(() => {
    if (name) {
      const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
      if (designers.includes(capitalized as any)) {
        setSelectedDesigner(capitalized as RunwayImage['designer']);
      }
    } else {
      setSelectedDesigner('All');
    }
  }, [name]);

  const handleDesignerClick = (designer: typeof designers[number]) => {
    if (designer === 'All') {
      navigate('/');
    } else {
      navigate(`/designer/${designer.toLowerCase()}`);
    }
  };

  const filteredImages = runwayImages
    .filter(img => selectedDesigner === 'All' || img.designer === selectedDesigner)
    .filter(img =>
      img.designer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.season.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Fashion Runway Gallery</h1>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search collections..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Designer Filter */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex gap-4 mb-8">
          {designers.map((designer) => (
            <button
              key={designer}
              onClick={() => handleDesignerClick(designer)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedDesigner === designer ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {designer}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[3/4]">
                <img
                  src={image.imageUrl}
                  alt={`${image.designer} ${image.season}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">{image.designer}</h2>
                  <span className="text-gray-500">{image.season}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-gray-400" />
                  <div className="flex gap-2">
                    {image.colorPalette.map((color, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 rounded-full shadow-inner"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={selectedImage.imageUrl}
              alt={`${selectedImage.designer} ${selectedImage.season}`}
              className="w-full h-auto"
            />
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedImage.designer}</h2>
                <span className="text-lg text-gray-600">{selectedImage.season}</span>
              </div>
              <div className="flex items-center gap-3">
                <Palette className="w-6 h-6 text-gray-500" />
                <div className="flex gap-3">
                  {selectedImage.colorPalette.map((color, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full shadow-lg"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
