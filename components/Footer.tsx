
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Sẵn sàng để bắt đầu?</h2>
          <p className="mt-2 text-gray-400">Liên hệ với chúng tôi ngay hôm nay để nhận tư vấn miễn phí về lộ trình học phù hợp nhất cho con bạn.</p>
          <div className="mt-6">
            <a 
              href="tel:0123456789" 
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 inline-block"
            >
              Hotline: 0123.456.789
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <p className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Cambridge Pathway. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
