
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-white py-20 md:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')"}}
      ></div>
      <div className="container mx-auto px-6 text-center relative">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Lộ Trình Học Cambridge
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold text-blue-600 leading-tight mt-2">
          Chuẩn Quốc Tế
        </h2>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Khám phá lộ trình học tiếng Anh Cambridge toàn diện, được thiết kế chuyên biệt cho từng lứa tuổi, giúp con bạn tự tin chinh phục các kỳ thi quốc tế.
        </p>
        <div className="mt-8">
          <a 
            href="#courses" 
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 inline-block"
          >
            Xem Lộ Trình
          </a>
        </div>
      </div>
    </section>
  );
};
