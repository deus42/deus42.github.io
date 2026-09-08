'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SiteEffects() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches || !('IntersectionObserver' in window)) return;
    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.06 },
    );
    for (const element of elements) {
      element.classList.add('reveal-ready');
      observer.observe(element);
    }
    const showAll = () => {
      if (media.matches)
        for (const element of elements) element.classList.add('is-visible');
    };
    media.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', showAll);
      for (const element of elements) element.classList.remove('reveal-ready');
    };
  }, []);
  return null;
}

export function CopyEmail() {
  const [status, setStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );
  async function copyEmail() {
    if (timer.current) clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText('deusson@gmail.com');
      setStatus('copied');
    } catch {
      setStatus('failed');
    }
    timer.current = setTimeout(() => setStatus('idle'), 4000);
  }
  return (
    <div className="email-contact">
      <div>
        <a href="mailto:deusson@gmail.com">deusson@gmail.com</a>
        <Button
          className="copy-button"
          variant="ghost"
          size="icon"
          onClick={copyEmail}
          aria-label={
            status === 'copied' ? 'Email copied' : 'Copy email address'
          }
        >
          {status === 'copied' ? <Check size={18} /> : <Copy size={18} />}
        </Button>
      </div>
      <output className="copy-status" aria-live="polite">
        {status === 'copied'
          ? 'Email copied.'
          : status === 'failed'
            ? 'Select the address to copy, or click to email.'
            : '\u00a0'}
      </output>
    </div>
  );
}
