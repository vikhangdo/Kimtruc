
import { Course } from './types';

export const COURSES_DATA: Course[] = [
  {
    level: 'STARTERS',
    duration: '3-6 THÁNG',
    targetAudience: 'Dành cho học sinh lớp 1, 2',
    curriculum: [
      'Từ vựng + Bài tập luyện tập từ vựng theo chủ đề (học xuyên suốt) + Speaking part 4 (daily topic)',
      'Starters 1,2,3,4 (chương trình 2018) (Test đánh giá chất lượng => Đăng kí thi) (~ 2 - 3 THÁNG)',
      'Starters Skills Builder 1-2 (2018) (~1,5 THÁNG)',
      'Starters Plus + Collins + Oxford (1,5 THÁNG)',
    ],
    theme: {
      bg: 'bg-blue-50',
      text: 'text-blue-800',
      border: 'border-blue-500',
      icon: 'text-blue-600',
    },
  },
  {
    level: 'MOVERS',
    duration: '3-6 THÁNG',
    targetAudience: 'Dành cho học sinh lớp 3, 4',
    curriculum: [
      'Từ vựng + Bài tập luyện tập từ vựng theo chủ đề (học xuyên suốt) + Speaking part 4 (daily topic)',
      'Movers 1,2,3,4 (2018) (Test đánh giá chất lượng => Đăng kí thi) (~2-3 THÁNG)',
      'Movers Skills Builder 1-2 (2018) (1,5 THÁNG)',
      'Movers Plus + Collins + Oxford (1,5 THÁNG)',
    ],
    theme: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      border: 'border-green-500',
      icon: 'text-green-600',
    },
  },
  {
    level: 'FLYERS',
    duration: '7-8 THÁNG',
    targetAudience: 'Dành cho học sinh lớp 4, 5',
    curriculum: [
      'Từ vựng + Bài tập luyện tập từ vựng theo chủ đề (học xuyên suốt) + Speaking part 4 (daily topic) + Ngữ pháp trọng tâm',
      'Flyers 1,2,3,4 (2018) (Test đánh giá chất lượng => Đăng kí thi) (~ 3 THÁNG)',
      'Flyers Skills Builder 1-2 (2018) (3 THÁNG)',
      'Flyers Plus + Collins + Oxford (1,5 THÁNG)',
    ],
    theme: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-800',
      border: 'border-yellow-500',
      icon: 'text-yellow-600',
    },
  },
  {
    level: 'KET',
    duration: '9-10 THÁNG',
    targetAudience: 'Dành cho học sinh lớp 6, 7',
    curriculum: [
      'Từ vựng + Bài tập luyện tập từ vựng theo chủ đề (học xuyên suốt) + Speaking part 4 (daily topic) (1,5 THÁNG) + ngữ pháp trọng tâm',
      'A2 Key For Schools Exam Trainer (~2 THÁNG)',
      'Cambridge KET 1-2-3-5-6-7 (4 THÁNG) (Test đánh giá trình độ => đăng kí thi)',
      'Succeed In Cambridge English – Key English Tests (~2 THÁNG)',
    ],
    theme: {
      bg: 'bg-purple-50',
      text: 'text-purple-800',
      border: 'border-purple-500',
      icon: 'text-purple-600',
    },
  },
  {
    level: 'PET',
    duration: '13-14 THÁNG',
    targetAudience: 'Dành cho học sinh lớp 8, 9',
    equivalent: 'Tương đương IELTS 4.0-4.5; TOEIC 400-500',
    curriculum: [
      'Từ vựng + Ngữ pháp trọng tâm+ Speaking part 4 (daily topic) ( 1 - 2 THÁNG)',
      'CAMBRIDGE PRELIMINARY ENGLISH TEST 1,2,3,4 (~ 4 tháng)',
      'B1 PRELIMINARY 1 FOR THE REVISED 2020 (1,5 tháng)',
      'B1 PRELIMINARY FOR SCHOOLS TRAINER (1,5 tháng)',
      'CAMBRIDGE ENGLISH PRELIMINARY – PRELIMINARY ENGLISH TEST (PET) 1,2 (3-4 tháng) (test đánh giá chất lượng => đăng kí thi)',
      'PET COLLINS FOR SCHOOL (1,5 tháng)',
    ],
    theme: {
      bg: 'bg-red-50',
      text: 'text-red-800',
      border: 'border-red-500',
      icon: 'text-red-600',
    },
  },
  {
    level: 'LỚP GRAMMAR – NGỮ PHÁP',
    duration: 'Linh hoạt',
    targetAudience: 'Dành cho học sinh ở tất cả các khối lớp',
    curriculum: [
      'Bổ sung, ôn tập kiến thức ngữ pháp trong bộ sách Smart, Friend Plus, Global success.',
    ],
    theme: {
      bg: 'bg-indigo-50',
      text: 'text-indigo-800',
      border: 'border-indigo-500',
      icon: 'text-indigo-600',
    },
  },
];
