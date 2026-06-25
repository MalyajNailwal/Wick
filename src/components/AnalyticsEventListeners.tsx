'use client';

import { useEffect } from 'react';
import { trackEvent, type AnalyticsEventName } from '@/lib/analytics';

const CONVERSION_EVENTS = [
  'whatsapp_click',
  'quote_click',
  'call_click',
  'brochure_download',
  'contact_form_submit',
  'blog_cta_click',
] as const satisfies readonly AnalyticsEventName[];

const CONVERSION_EVENT_SET = new Set<AnalyticsEventName>(CONVERSION_EVENTS);

function parseParams(value: string | null) {
  if (!value) return {};

  try {
    return JSON.parse(value);
  } catch {
    return {};
  }
}

function inferEvent(target: HTMLElement): AnalyticsEventName | undefined {
  const href = target.getAttribute('href') || target.getAttribute('data-href') || '';
  const text = target.innerText.trim();

  if (href.startsWith('tel:')) return 'call_click';
  if (href.includes('wa.me')) return 'whatsapp_click';
  if (/quote|demo|consultation|roi|contact sales|get started/i.test(text)) return 'quote_click';

  return undefined;
}

export default function AnalyticsEventListeners() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const explicitTarget = (event.target as HTMLElement).closest<HTMLElement>('[data-analytics-event]');
      const target = explicitTarget || (event.target as HTMLElement).closest<HTMLElement>('a, button, [role="button"]');
      if (!target) return;

      const eventName = (explicitTarget?.dataset.analyticsEvent || inferEvent(target)) as AnalyticsEventName | undefined;
      if (!eventName || !CONVERSION_EVENT_SET.has(eventName)) return;

      trackEvent(eventName, {
        ...parseParams(explicitTarget?.dataset.analyticsParams),
        element_text: target.innerText.trim().slice(0, 120),
        element_href: target.getAttribute('href') || target.getAttribute('data-href') || undefined,
      });
    };

    window.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('click', handleClick, true);
    };
  }, []);

  return null;
}
