import type { Course, Department, Faculty, GalleryItem, NewsItem, Notice } from '@/lib/types';

function iso(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString();
}

export type DepartmentWithCourses = Department & { courses: Course[] };

export const departments: DepartmentWithCourses[] = [
  {
    id: 'dept-eng',
    name: 'Engineering',
    description:
      'Industry-aligned programs focused on fundamentals, projects, and placements.',
    createdAt: iso(200),
    updatedAt: iso(10),
    courses: [
      {
        id: 'course-cse',
        title: 'B.Tech Computer Science & Engineering',
        description:
          'Core CS with modern electives in AI, cloud computing, cybersecurity, and full-stack development.',
        duration: '4 Years',
        departmentId: 'dept-eng',
        createdAt: iso(200),
        updatedAt: iso(10),
      },
      {
        id: 'course-ece',
        title: 'B.Tech Electronics & Communication',
        description:
          'Signals, communication systems, embedded systems, IoT, and VLSI fundamentals with labs.',
        duration: '4 Years',
        departmentId: 'dept-eng',
        createdAt: iso(190),
        updatedAt: iso(12),
      },
    ],
  },
  {
    id: 'dept-mgmt',
    name: 'Management',
    description:
      'Build leadership, communication, and strategy skills with real-world case studies.',
    createdAt: iso(240),
    updatedAt: iso(22),
    courses: [
      {
        id: 'course-bba',
        title: 'BBA (Business Administration)',
        description:
          'Foundational management education covering marketing, finance, HR, and entrepreneurship.',
        duration: '3 Years',
        departmentId: 'dept-mgmt',
        createdAt: iso(220),
        updatedAt: iso(30),
      },
      {
        id: 'course-mba',
        title: 'MBA (Master of Business Administration)',
        description:
          'Specializations available. Learn strategy, analytics, leadership and operations.',
        duration: '2 Years',
        departmentId: 'dept-mgmt',
        createdAt: iso(210),
        updatedAt: iso(25),
      },
    ],
  },
  {
    id: 'dept-sci',
    name: 'Sciences',
    description:
      'Strong foundations in science and research with modern lab exposure and projects.',
    createdAt: iso(280),
    updatedAt: iso(20),
    courses: [
      {
        id: 'course-bsc',
        title: 'B.Sc (Computer Science)',
        description:
          'Programming, data structures, databases, and practical projects with a science-first approach.',
        duration: '3 Years',
        departmentId: 'dept-sci',
        createdAt: iso(260),
        updatedAt: iso(18),
      },
    ],
  },
];

export const courses: Course[] = departments.flatMap((d) =>
  d.courses.map((c) => ({ ...c, department: { id: d.id, name: d.name, description: d.description } })),
);

export const faculty: (Faculty & { department?: { id: string; name: string } })[] = [
  {
    id: 'fac-1',
    name: 'Dr. A. Sharma',
    designation: 'Professor, Computer Science',
    departmentId: 'dept-eng',
    image: 'https://placehold.co/256x256/png?text=AS',
    bio:
      'Research interests: distributed systems, cloud computing, and software engineering.\n\nPhD in Computer Science with 10+ years of teaching and mentoring experience.',
    createdAt: iso(500),
    updatedAt: iso(3),
    department: { id: 'dept-eng', name: 'Engineering', description: 'Engineering programs and research.' },
  },
  {
    id: 'fac-2',
    name: 'Ms. R. Verma',
    designation: 'Assistant Professor, Management',
    departmentId: 'dept-mgmt',
    image: 'https://placehold.co/256x256/png?text=RV',
    bio:
      'Specializes in marketing strategy and digital branding with industry case-study driven teaching.',
    createdAt: iso(420),
    updatedAt: iso(9),
    department: { id: 'dept-mgmt', name: 'Management', description: 'Management and leadership studies.' },
  },
  {
    id: 'fac-3',
    name: 'Dr. S. Iyer',
    designation: 'Associate Professor, Sciences',
    departmentId: 'dept-sci',
    image: 'https://placehold.co/256x256/png?text=SI',
    bio:
      'Focus areas: applied data analysis, computational thinking, and interdisciplinary research.',
    createdAt: iso(380),
    updatedAt: iso(14),
    department: { id: 'dept-sci', name: 'Sciences', description: 'Science foundations and applied research.' },
  },
];

export const news: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Admissions Open for 2026 Batch',
    slug: 'admissions-open-2026',
    createdAt: iso(5),
    updatedAt: iso(5),
    content:
      'Admissions are now open for the 2026 batch across programs.\n\nVisit the Admissions page to view eligibility and submit your application. Our team will contact you after review.',
  },
  {
    id: 'news-2',
    title: 'Industry Talk Series: Future of AI',
    slug: 'industry-talk-future-of-ai',
    createdAt: iso(14),
    updatedAt: iso(14),
    content:
      'Join our industry talk series featuring guest speakers from leading tech companies.\n\nThe session covers modern AI tooling, best practices, and career pathways for students.',
  },
  {
    id: 'news-3',
    title: 'Campus Recruitment Drive Highlights',
    slug: 'campus-recruitment-highlights',
    createdAt: iso(30),
    updatedAt: iso(30),
    content:
      'This season’s placements achieved strong outcomes across engineering and management programs.\n\nWe’re grateful to our recruiting partners and alumni network for ongoing support.',
  },
];

export const notices: Notice[] = [
  {
    id: 'notice-1',
    title: 'Scholarship Application Window',
    content:
      'Scholarship applications are open for eligible students.\n\nPlease submit required documents to the scholarship desk before the deadline.',
    createdAt: iso(7),
    updatedAt: iso(7),
  },
  {
    id: 'notice-2',
    title: 'Semester Registration Guidelines',
    content:
      'Semester registration will be conducted online as per schedule.\n\nStudents should verify their course selections and fee status before final submission.',
    createdAt: iso(16),
    updatedAt: iso(16),
  },
  {
    id: 'notice-3',
    title: 'Library Hours Update',
    content:
      'The library will remain open on weekends during the examination period.\n\nPlease carry your ID card for entry.',
    createdAt: iso(25),
    updatedAt: iso(25),
  },
];

export const gallery: GalleryItem[] = [
  {
    id: 'gal-1',
    imageUrl: 'https://placehold.co/960x540/png?text=Campus+1',
    type: 'IMAGE',
    title: 'Main Campus',
    createdAt: iso(60),
  },
  {
    id: 'gal-2',
    imageUrl: 'https://placehold.co/960x540/png?text=Event+Hall',
    type: 'IMAGE',
    title: 'Event Hall',
    createdAt: iso(70),
  },
  {
    id: 'gal-3',
    imageUrl: 'https://example.com',
    type: 'VIDEO',
    title: 'Campus Tour (Video)',
    createdAt: iso(80),
  },
  {
    id: 'gal-4',
    imageUrl: 'https://placehold.co/960x540/png?text=Lab+Session',
    type: 'IMAGE',
    title: 'Lab Session',
    createdAt: iso(90),
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}

export function getFacultyById(id: string) {
  return faculty.find((f) => f.id === id);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug);
}

export function getNoticeById(id: string): Notice | undefined {
  return notices.find((n) => n.id === id);
}
