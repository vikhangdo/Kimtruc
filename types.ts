
export interface Course {
  level: string;
  duration: string;
  targetAudience: string;
  curriculum: string[];
  equivalent?: string;
  theme: {
    bg: string;
    text: string;
    border: string;
    icon: string;
  };
}
