import React from "react";

const sampleVideos = [
    {
        id: 1,
        title: "Learn Basic Crochet Stitches",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 2,
        title: "Crochet Baby Clothes Tutorial",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
        id: 3,
        title: "Advanced Crochet Patterns",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
];

const Videos = () => {
    return (
        <div className="ml-16">
            <div className="max-w-7xl p-8 md:p-16">
                <h2 className="text-3xl font-bold mb-8 text-gray-800">Crochet Tutorials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {sampleVideos.map((video) => (
                        <div key={video.id} className="shadow-lg rounded-lg overflow-hidden">
                            <iframe
                                className="w-full h-64"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Videos;
