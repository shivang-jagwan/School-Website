export type Role = 'ADMIN' | 'STUDENT' | 'FACULTY';

export type Paginated<T> = {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
};

export type Department = {
  id: string;
  name: string;
  description: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  departmentId: string;
  department?: Department;
  createdAt?: string;
  updatedAt?: string;
};

export type Faculty = {
  id: string;
  name: string;
  designation: string;
  departmentId: string;
  image: string;
  bio?: string | null;
  department?: Department;
  createdAt?: string;
  updatedAt?: string;
};

export type NewsListItem = {
  id: string;
  title: string;
  slug: string;
  image?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type NewsItem = NewsListItem & {
  content: string;
};

export type GalleryItem = {
  id: string;
  imageUrl: string;
  type: 'IMAGE' | 'VIDEO';
  title?: string | null;
  createdAt: string;
};

export type Admission = {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  courseId: string;
  status: 'PENDING' | 'REVIEWING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
  course?: { id: string; title: string };
};

export type Notice = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
  createdAt: string;
};

export type SessionUser = {
  id: string;
  email: string;
  name: string;
  role: Role;
};
