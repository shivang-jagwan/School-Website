'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().min(2).max(160),
  email: z.string().email(),
  phone: z.string().min(7).max(20).optional().or(z.literal('')),
  subject: z.string().min(2).max(200).optional().or(z.literal('')),
  message: z.string().min(10).max(20000),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus('submitting');
    setError('');

    const payload = {
      ...values,
      phone: values.phone || undefined,
      subject: values.subject || undefined,
    };

    try {
      const recipient = 'info@university.edu';
      const subject = payload.subject || `Website enquiry: ${payload.name}`;
      const body = [
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        payload.phone ? `Phone: ${payload.phone}` : undefined,
        '',
        payload.message,
      ]
        .filter(Boolean)
        .join('\n');

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
          <label className="text-xs font-semibold text-foreground/70">Name</label>
          <Input placeholder="Your name" {...register('name')} />
          {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div className="grid gap-2">
          <label className="text-xs font-semibold text-foreground/70">Email</label>
          <Input type="email" placeholder="you@example.com" {...register('email')} />
          {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-xs font-semibold text-foreground/70">Phone (optional)</label>
          <Input placeholder="Phone" {...register('phone')} />
          {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div className="grid gap-2">
          <label className="text-xs font-semibold text-foreground/70">Subject (optional)</label>
          <Input placeholder="Subject" {...register('subject')} />
          {errors.subject && (
            <p className="text-xs text-red-600">{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-2">
        <label className="text-xs font-semibold text-foreground/70">Message</label>
        <Textarea rows={6} placeholder="How can we help?" {...register('message')} />
        {errors.message && <p className="text-xs text-red-600">{errors.message.message}</p>}
      </div>

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send Message'}
        </Button>
        {status === 'success' && <span className="text-xs text-emerald-700">Sent.</span>}
        {status === 'error' && <span className="text-xs text-red-700">{error}</span>}
      </div>
    </form>
  );
}
