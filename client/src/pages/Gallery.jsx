import React, { useState, useRef, useEffect } from "react";

const Gallery = () => {
    const images = [
        "../../public/Dummy.jpg",
        "../../public/Dummy.jpg",
        "../../public/Dummy.jpg",
        "../../public/Dummy.jpg",
        "../../public/Dummy.jpg",
        "../../public/Dummy.jpg",
    ];

    const data = [
        {
            title: "Dummy Title 1",
            date: "2022-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie enim neque, vitae rutrum felis tristique vitae. Nunc consectetur est tortor, ut placerat orci volutpat vel. Maecenas malesuada orci a metus porttitor pellentesque. Maecenas nulla lorem, pulvinar nec tempor in, accumsan ac ante. Nullam egestas, tellus et laoreet pharetra, erat urna vestibulum ipsum, sed dictum ante velit in neque. Pellentesque ipsum nisi, convallis et rhoncus sit amet, imperdiet nec nisl. Duis suscipit condimentum elit, in placerat justo semper id. Quisque leo nibh, aliquet sit amet efficitur vel, placerat eget augue. Aliquam condimentum nunc id semper ultrices.1",
        },
        {
            title: "Dummy Title 2",
            date: "2022-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie enim neque, vitae rutrum felis tristique vitae. Nunc consectetur est tortor, ut placerat orci volutpat vel. Maecenas malesuada orci a metus porttitor pellentesque. Maecenas nulla lorem, pulvinar nec tempor in, accumsan ac ante. Nullam egestas, tellus et laoreet pharetra, erat urna vestibulum ipsum, sed dictum ante velit in neque. Pellentesque ipsum nisi, convallis et rhoncus sit amet, imperdiet nec nisl. Duis suscipit condimentum elit, in placerat justo semper id. Quisque leo nibh, aliquet sit amet efficitur vel, placerat eget augue. Aliquam condimentum nunc id semper ultrices.2",
        },
        {
            title: "Dummy Title 3",
            date: "2022-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie enim neque, vitae rutrum felis tristique vitae. Nunc consectetur est tortor, ut placerat orci volutpat vel. Maecenas malesuada orci a metus porttitor pellentesque. Maecenas nulla lorem, pulvinar nec tempor in, accumsan ac ante. Nullam egestas, tellus et laoreet pharetra, erat urna vestibulum ipsum, sed dictum ante velit in neque. Pellentesque ipsum nisi, convallis et rhoncus sit amet, imperdiet nec nisl. Duis suscipit condimentum elit, in placerat justo semper id. Quisque leo nibh, aliquet sit amet efficitur vel, placerat eget augue. Aliquam condimentum nunc id semper ultrices.3",
        },
        {
            title: "Dummy Title 4",
            date: "2022-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie enim neque, vitae rutrum felis tristique vitae. Nunc consectetur est tortor, ut placerat orci volutpat vel. Maecenas malesuada orci a metus porttitor pellentesque. Maecenas nulla lorem, pulvinar nec tempor in, accumsan ac ante. Nullam egestas, tellus et laoreet pharetra, erat urna vestibulum ipsum, sed dictum ante velit in neque. Pellentesque ipsum nisi, convallis et rhoncus sit amet, imperdiet nec nisl. Duis suscipit condimentum elit, in placerat justo semper id. Quisque leo nibh, aliquet sit amet efficitur vel, placerat eget augue. Aliquam condimentum nunc id semper ultrices.4",
        },
        {
            title: "Dummy Title 5",
            date: "2022-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie enim neque, vitae rutrum felis tristique vitae. Nunc consectetur est tortor, ut placerat orci volutpat vel. Maecenas malesuada orci a metus porttitor pellentesque. Maecenas nulla lorem, pulvinar nec tempor in, accumsan ac ante. Nullam egestas, tellus et laoreet pharetra, erat urna vestibulum ipsum, sed dictum ante velit in neque. Pellentesque ipsum nisi, convallis et rhoncus sit amet, imperdiet nec nisl. Duis suscipit condimentum elit, in placerat justo semper id. Quisque leo nibh, aliquet sit amet efficitur vel, placerat eget augue. Aliquam condimentum nunc id semper ultrices.5",
        },
        {
            title: "Dummy Title 6",
            date: "2022-01-01",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie enim neque, vitae rutrum felis tristique vitae. Nunc consectetur est tortor, ut placerat orci volutpat vel. Maecenas malesuada orci a metus porttitor pellentesque. Maecenas nulla lorem, pulvinar nec tempor in, accumsan ac ante. Nullam egestas, tellus et laoreet pharetra, erat urna vestibulum ipsum, sed dictum ante velit in neque. Pellentesque ipsum nisi, convallis et rhoncus sit amet, imperdiet nec nisl. Duis suscipit condimentum elit, in placerat justo semper id. Quisque leo nibh, aliquet sit amet efficitur vel, placerat eget augue. Aliquam condimentum nunc id semper ultrices.6",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            const scrollContainer = scrollRef.current;
            const activeElement = scrollContainer.children[activeIndex];
            if (activeElement) {
                const scrollLeft =
                    activeElement.offsetLeft -
                    scrollContainer.clientWidth / 2 +
                    activeElement.clientWidth / 2;
                scrollContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
            }
        }
    }, [activeIndex]);

    return (
        <div className="flex flex-col items-center mt-4 h-screen">
            <div className="relative w-full max-w-3xl overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex items-center space-x-8 overflow-x-auto scrollbar-hide py-8"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {images.map((src, index) => (
                        <div
                            key={src}
                            className={`cursor-pointer transition-all duration-300 ease-in-out flex-shrink-0
                                ${index === activeIndex
                                    ? "scale-125 z-10"
                                    : "opacity-60 scale-100"
                                }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                className="w-40 h-60 object-cover rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                            }`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>
            <div className="mt-8 text-center text-[#f9f6f0]">
                <h2 className="text-2xl font-bold font-serif">{data[activeIndex].title}</h2>
                <p className="">{data[activeIndex].date}</p>
                <p className="mt-4 mx-44">{data[activeIndex].description}</p>
            </div>
        </div>
    );
};

export default Gallery;
