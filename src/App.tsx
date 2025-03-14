import React, { useState } from 'react';
import { Share2, Youtube, Instagram, Twitter, Bot, PlayCircle, Clock, Calendar } from 'lucide-react';

// Mock data - In production, this would come from your database
const mockVideos = [
  {
    id: 1,
    title: "AI Assistant Explaining Machine Learning",
    url: "https://example.com/video1.mp4",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    duration: "2:30",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "Virtual AI Tour Guide",
    url: "https://example.com/video2.mp4",
    thumbnail: "https://images.unsplash.com/photo-1676377064974-5c754686e453",
    duration: "3:45",
    date: "2024-03-14",
  },
  {
    id: 3,
    title: "AI Creative Writing Session",
    url: "https://example.com/video3.mp4",
    thumbnail: "https://images.unsplash.com/photo-1675226159321-d626ff0c8f49",
    duration: "4:15",
    date: "2024-03-13",
  }
];

function App() {
  const [selectedVideo, setSelectedVideo] = useState(mockVideos[0]);
  
  const handleShare = (platform: string) => {
    // In a real application, you would implement the actual sharing logic here
    console.log(`Sharing to ${platform}`);
    alert(`Video would be shared to ${platform} in a production environment`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Bot className="w-10 h-10" />
            AI Video Gallery
          </h1>
          <p className="text-xl text-gray-300">Share AI-generated content across social media</p>
        </header>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
              <div className="aspect-video relative rounded-lg overflow-hidden bg-black mb-4">
                <video
                  src={selectedVideo.url}
                  poster={selectedVideo.thumbnail}
                  controls
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 px-3 py-1 rounded-full flex items-center gap-2">
                  <Bot className="w-4 h-4" />
                  <span className="text-sm font-medium">AI Generated</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">{selectedVideo.title}</h2>
              
              <div className="flex items-center gap-4 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedVideo.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedVideo.date}</span>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share to Social Media
                </h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleShare('YouTube')}
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    YouTube
                  </button>
                  <button
                    onClick={() => handleShare('Instagram')}
                    className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-6 py-3 rounded-lg transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </button>
                  <button
                    onClick={() => handleShare('Twitter')}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                    Twitter
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                More AI Videos
              </h3>
              <div className="space-y-4">
                {mockVideos.map((video) => (
                  <div
                    key={video.id}
                    onClick={() => setSelectedVideo(video)}
                    className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
                      selectedVideo.id === video.id
                        ? 'ring-2 ring-blue-500'
                        : 'hover:ring-2 hover:ring-blue-500/50'
                    }`}
                  >
                    <div className="relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-sm">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-3 bg-gray-700/50">
                      <h4 className="font-medium text-sm line-clamp-2">{video.title}</h4>
                      <p className="text-xs text-gray-400 mt-1">{video.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;