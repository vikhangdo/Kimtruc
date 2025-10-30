
import React from 'react';
import type { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-2.452a9.357 9.357 0 0 0-1.506-3.042A9.357 9.357 0 0 0 18 9.75M9 19.128a9.38 9.38 0 0 1-2.625.372 9.337 9.337 0 0 1-4.121-2.452A9.357 9.357 0 0 1 3.75 14.25m0-4.5A9.357 9.357 0 0 1 6 6.75a9.357 9.357 0 0 1 3-1.5m0 0c1.153-.56 2.458-.87 3.75-.87m0 0A9.357 9.357 0 0 1 18 6.75m0 0a9.357 9.357 0 0 1 2.25 3m0 0a9.357 9.357 0 0 1-1.5 3m0 0a9.357 9.357 0 0 1-3 1.5M3 7.5l3 3m0 0l3-3m-3 3v-3m6 3l3-3m0 0l3 3m-3-3v3" />
  </svg>
);

const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);


export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className={`flex flex-col rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 ${course.theme.bg} border-t-4 ${course.theme.border} overflow-hidden`}>
      <div className="p-6">
        <h3 className={`text-2xl font-bold ${course.theme.text}`}>{course.level}</h3>
        
        <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-700">
          <div className="flex items-center">
            <ClockIcon className={`w-5 h-5 mr-2 ${course.theme.icon}`} />
            <span><strong>Thời gian:</strong> {course.duration}</span>
          </div>
          <div className="flex items-center">
            <UsersIcon className={`w-5 h-5 mr-2 ${course.theme.icon}`} />
            <span><strong>Đối tượng:</strong> {course.targetAudience}</span>
          </div>
          {course.equivalent && (
            <p className="text-xs font-semibold bg-gray-200 text-gray-700 px-2 py-1 rounded-full mt-2 inline-block self-start">{course.equivalent}</p>
          )}
        </div>
      </div>
      
      <div className="bg-white p-6 flex-grow">
        <h4 className="font-semibold text-gray-800 mb-4">Nội dung chương trình:</h4>
        <ul className="space-y-3">
          {course.curriculum.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircleIcon className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${course.theme.icon}`} />
              <span className="text-gray-600 text-sm">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
