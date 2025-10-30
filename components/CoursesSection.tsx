
import React from 'react';
import { COURSES_DATA } from '../constants';
import { CourseCard } from './CourseCard';

export const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Lộ Trình Học Chi Tiết</h2>
          <p className="mt-4 text-lg text-gray-600">Từ những bước đầu tiên đến trình độ nâng cao.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.level} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};
