import React from 'react';

const SentimentAnalysis1: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Title */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900">Sentiment Analysis on Fashion Conversations</h1>
        <p className="text-sm text-gray-600 mt-2">Insights from Instagram comments on fashion brands and trends</p>
      </div>

      {/* Overview Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
  <div className="bg-white shadow rounded-lg p-6 text-center">
    <h2 className="text-lg font-semibold text-gray-800 mb-4">Average Sentiment Scores</h2>
    <div className="text-2xl font-bold mb-4">
      <p className="text-yellow-600 mb-2">
        <strong>BERT Sentiment Score:</strong> 0.5425
      </p>
      <p className="text-grey-600">
        <strong>VADER Sentiment Score:</strong> 0.6865
      </p>
    </div>
    {}
    <div className="flex justify-center mt-4">
      {/* an indicator icon for the sentiment */}
      <span className="text-pink-600">📊</span>
    </div>
  </div>

<div className="bg-white shadow rounded-lg p-6 text-center">
  <h2 className="text-lg font-semibold text-gray-800 mb-2">Sentiment Distribution</h2>

  {/* BERT */}
  <div className="mb-4">
    <h3 className="text-sm font-medium text-gray-700 mb-1">BERT Sentiment</h3>
    <p className="text-sm text-gray-700">Positive: <span className="font-bold text-green-600">74.13%</span></p>
    <p className="text-sm text-gray-700">Negative: <span className="font-bold text-red-600">25.87%</span></p>
    <p className="text-sm text-gray-700 mt-1">Avg. Score: <span className="font-semibold text-blue-600">0.54</span></p>
  </div>

  {/* VADER */}
  <div>
    <h3 className="text-sm font-medium text-gray-700 mb-1">VADER Sentiment</h3>
    <p className="text-sm text-gray-700">Neutral: <span className="font-bold text-yellow-600">37.45%</span></p>
    <p className="text-sm text-gray-700">Positive: <span className="font-bold text-green-600">22.78%</span></p>
    <p className="text-sm text-gray-700">Compound: <span className="font-bold text-purple-600">20.08%</span></p>
    <p className="text-sm text-gray-700">Negative: <span className="font-bold text-red-600">19.69%</span></p>
    <p className="text-sm text-gray-700 mt-1">Avg. Score: <span className="font-semibold text-blue-600">0.69</span></p>
  </div>
</div>


        <div className="bg-white shadow rounded-lg p-6 text-center">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Most Talked-About Brand Among The Brands</h2>
          <p className="text-xl font-bold text-gray-900">Schiaparelli</p>
        </div>
      </div>

<div className="bg-white shadow rounded-lg p-6 mb-12 max-w-7xl mx-auto">
  <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Sentiment by Fashion House</h2>
  <div className="bg-gray-100 rounded-md overflow-hidden">
    <img 
      src="images/SentimentTrends/EmotionAnalysis.png" 
      alt="Sentiment By Fashion House" 
      className="w-full h-auto object-cover"
    />
  </div>
</div>


{/* Brand Comparison */}
<div className="bg-white shadow rounded-lg p-6 mb-12">
  <h2 className="text-lg font-medium text-gray-900 mb-4">Sentiment Classification by NLP Models</h2>
  <div className="flex space-x-6 bg-gray-100 p-4 rounded-md">
    {/* Display VADER Sentiment Distribution Chart */}
    <div className="flex-1 text-center">
      <h3 className="text-sm font-medium text-gray-700 mb-2">VADER Sentiment Distribution</h3>
      <img 
        src="/images/SentimentTrends/VaderChart.png" 
        alt="VADER Sentiment Distribution" 
        className="max-w-full h-auto object-contain"
      />
    </div>
    
    {/* Display BERT Sentiment Distribution Chart */}
    <div className="flex-1 text-center">
      <h3 className="text-sm font-medium text-gray-700 mb-2">BERT Sentiment Distribution</h3>
      <img 
        src="/images/SentimentTrends/BertChart.png" 
        alt="BERT Sentiment Distribution" 
        className="max-w-full h-auto object-contain"
      />
    </div>
  </div>
</div>



{/* Word Clouds and Emojis */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
  <div className="bg-white shadow rounded-lg p-6">
    <div className="bg-gray-100 min-h-[300px] flex items-center justify-center rounded-md">
      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Positive Sentiment Word Cloud</h3>
        <img 
          src="/images/SentimentTrends/positive_wordcloud.png" 
          alt="Positive Sentiment Analysis Plot" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>

  <div className="bg-white shadow rounded-lg p-6">
    <div className="bg-gray-100 min-h-[300px] flex items-center justify-center rounded-md">
      <div className="text-center">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Negative Sentiment Word Cloud</h3>
        <img 
          src="/images/SentimentTrends/negative_wordcloud.png" 
          alt="Negative Sentiment Analysis Plot" 
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  </div>
</div>


<div className="bg-white shadow rounded-lg p-6 mb-12 max-w-7xl mx-auto">
  <h2 className="text-lg font-medium text-gray-900 mb-4">Average Emotion Analysis</h2>
  <div className="bg-gray-100 h-96 flex items-center justify-center rounded-md">
    {/* Display the PNG plot */}
    <img 
      src={"/images/SentimentTrends/average_emotion_scores.png"} 
      alt="Emoji Frequency Distribution" 
      className="max-w-full max-h-full object-contain"
    />
  </div>
</div>


      {/* Summary Text */}
      <div className="bg-gray-100 shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Insights Summary</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          Audience sentiment in 2025 was overwhelmingly positive towards neutral and earthy tones,
          especially in Chanel's and Schiaparelli's collections. Comments frequently praised design sophistication
          and subtle elegance. Emojis used most often were ❤️, 😍, and 🔥, reinforcing the emotional impact of
          visually appealing runway pieces.
        </p>
      </div>
    </main>
  );
};

export default SentimentAnalysis1;
