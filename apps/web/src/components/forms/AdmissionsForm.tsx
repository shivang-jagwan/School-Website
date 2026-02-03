'use client';

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  studentName: z.string().min(2).max(160),
  email: z.string().email(),
  phone: z.string().min(7).max(20),
  courseId: z.string().min(1, 'Please select a course'),
});

type FormValues = z.infer<typeof schema>;

export type AdmissionsCourseOption = {
  id: string;
  title: string;
};

type Props = {
  courses: AdmissionsCourseOption[];
};

export function AdmissionsForm({ courses }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  const options = useMemo(() => courses ?? [], [courses]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      studentName: '',
      email: '',
      phone: '',
      courseId: options[0]?.id ?? '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus('submitting');
    setError('');

    try {
      const courseTitle = options.find((c) => c.id === values.courseId)?.title ?? values.courseId;
      const recipient = 'admissions@university.edu';
      const subject = `Admission enquiry: ${values.studentName}`;
      const body = [
        `Name: ${values.studentName}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `Course: ${courseTitle}`,
        '',
        'Submitted from the website admissions form.',
      ].join('\n');

      const mailto = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      if (typeof window !== 'undefined') {
        window.location.href = mailto;
      }

      setStatus('success');
      reset();
    } catch (e) {
      setStatus('error');
      setError(e instanceof Error ? e.message : 'Failed to open email client');
    }
  });

  return (
    <form onSubmit={onSubmit} className="mt-4 grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-xs font-semibold text-foreground/70">Full name</label>
          <Input placeholder="Your name" {...register('studentName')} />
          {errors.studentName && (
            <p className="text-xs text-red-600">{errors.studentName.message}</p>
          )}
        </div>
        <div className="grid gap-2">
          <label className="text-xs font-semibold text-foreground/70">Email</label>
          <Input type="email" placeholder="you@example.com" {...register('email')} />
          {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-xs font-semibold text-foreground/70">Phone</label>
          <Input placeholder="Phone number" {...register('phone')} />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div className="grid gap-2">
          <label className="text-xs font-semibold text-foreground/70">Course</label>
          <select
            className="h-10 rounded-xl border border-foreground/10 bg-background px-3 text-sm outline-none focus:border-primary"
            {...register('courseId')}
          >
            <option value="" disabled>
              Select a course
            </option>
            {options.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
          {errors.courseId && <p className="text-xs text-red-600">{errors.courseId.message}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting…' : 'Submit Application'}
        </Button>
        {status === 'success' && <span className="text-xs text-emerald-700">Submitted.</span>}
        {status === 'error' && <span className="text-xs text-red-700">{error}</span>}
      </div>

      <p className="text-xs text-foreground/60">
        This will open your email client to send the application details.
      </p>
    </form>
  );
}
