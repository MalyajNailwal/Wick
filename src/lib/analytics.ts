export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'quote_click'
  | 'call_click'
  | 'brochure_download'
  | 'contact_form_submit'
  | 'blog_cta_click';

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

function getUtmParams(): AnalyticsParams {
  if (typeof window === 'undefined') return {};

  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

  return utmKeys.reduce<AnalyticsParams>((acc, key) => {
    const value = params.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === 'undefined') return;

  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag !== 'function') return;

  gtag('event', eventName, {
    ...getUtmParams(),
    landing_page: window.location.pathname,
    ...params,
  });
}
