/**
 * Centralized blog cross-link mapping for maintainability.
 *
 * This file defines the relationships between blog posts for:
 * 1. relatedSlugs - shown in the "Related Posts" section on each blog post
 * 2. contextualLinks - inline markdown links embedded in blog content
 *
 * To add a new blog post cross-link:
 * 1. Add the slug to the relevant post's relatedSlugs array
 * 2. Add a contextualLink entry with the target slug, anchor text, and insertion point
 * 3. Update the blog-data.ts content field with the actual markdown link
 */

interface ContextualLink {
  targetSlug: string;
  anchorText: string;
  insertAfterHeading?: string;
}

interface BlogLinkEntry {
  relatedSlugs: string[];
  contextualLinks: ContextualLink[];
}

export const blogCrossLinks: Record<string, BlogLinkEntry> = {
  'automatic-tyre-inflation-deflation-system': {
    relatedSlugs: [
      'automatic-tyre-inflation-system-vs-tpms',
      'how-to-prevent-truck-tyre-blowouts',
    ],
    contextualLinks: [
      { targetSlug: 'automatic-tyre-inflation-system-vs-tpms', anchorText: 'how ATES compares to TPMS' },
      { targetSlug: 'how-to-prevent-truck-tyre-blowouts', anchorText: 'preventing tyre blowouts' },
    ],
  },

  'automatic-tyre-inflation-system-vs-tpms': {
    relatedSlugs: [
      'automatic-tyre-inflation-deflation-system',
      'best-tyre-inflation-system-india',
      'why-trailers-need-automatic-tyre-inflation',
    ],
    contextualLinks: [
      { targetSlug: 'automatic-tyre-inflation-deflation-system', anchorText: 'how ATES works in detail' },
      { targetSlug: 'best-tyre-inflation-system-india', anchorText: 'choosing the best system for your fleet' },
    ],
  },

  'wick-tyrerakhshak-saves-tyres-fuel-downtime': {
    relatedSlugs: [
      'how-to-save-fuel-in-trucks',
      'good-enough-maintenance-costing-fleet-operators',
    ],
    contextualLinks: [
      { targetSlug: 'how-to-save-fuel-in-trucks', anchorText: 'tyre pressure and fuel savings' },
      { targetSlug: 'good-enough-maintenance-costing-fleet-operators', anchorText: 'the good enough maintenance trap' },
    ],
  },

  'how-to-prevent-truck-tyre-blowouts': {
    relatedSlugs: [
      'why-breakdowns-are-rarely-sudden-in-fleet-operations',
      'automatic-tyre-inflation-deflation-system',
      'monsoon-tyre-safety-india',
      'summer-tyre-pressure-guide',
    ],
    contextualLinks: [
      { targetSlug: 'why-breakdowns-are-rarely-sudden-in-fleet-operations', anchorText: 'breakdowns are rarely sudden' },
      { targetSlug: 'automatic-tyre-inflation-deflation-system', anchorText: 'how ATES prevents blowouts automatically' },
    ],
  },

  'best-tyre-inflation-system-india': {
    relatedSlugs: [
      'automatic-tyre-inflation-system-vs-tpms',
      'wick-tyrerakhshak-saves-tyres-fuel-downtime',
    ],
    contextualLinks: [
      { targetSlug: 'automatic-tyre-inflation-system-vs-tpms', anchorText: 'ATES vs TPMS comparison' },
      { targetSlug: 'wick-tyrerakhshak-saves-tyres-fuel-downtime', anchorText: 'measurable fleet savings' },
    ],
  },

  'tyre-inflation-system-faridabad': {
    relatedSlugs: ['best-tyre-inflation-system-india'],
    contextualLinks: [
      { targetSlug: 'best-tyre-inflation-system-india', anchorText: 'best tyre inflation system guide' },
    ],
  },

  'how-to-save-fuel-in-trucks': {
    relatedSlugs: [
      'wick-tyrerakhshak-saves-tyres-fuel-downtime',
      'fleet-efficiency-system-behind-the-vehicle',
    ],
    contextualLinks: [
      { targetSlug: 'wick-tyrerakhshak-saves-tyres-fuel-downtime', anchorText: 'saving on tyres and downtime too' },
      { targetSlug: 'fleet-efficiency-system-behind-the-vehicle', anchorText: 'system-level fleet efficiency' },
    ],
  },

  'why-fleet-problems-start-with-tyre-pressure': {
    relatedSlugs: [
      'good-enough-maintenance-costing-fleet-operators',
      'how-to-prevent-truck-tyre-blowouts',
      'summer-tyre-pressure-guide',
      'winter-fleet-tyre-maintenance',
    ],
    contextualLinks: [
      { targetSlug: 'good-enough-maintenance-costing-fleet-operators', anchorText: 'the good enough maintenance costing you' },
      { targetSlug: 'how-to-prevent-truck-tyre-blowouts', anchorText: 'blowout prevention guide' },
    ],
  },

  'why-breakdowns-are-rarely-sudden-in-fleet-operations': {
    relatedSlugs: [
      'why-fleet-problems-start-with-tyre-pressure',
      'good-enough-maintenance-costing-fleet-operators',
    ],
    contextualLinks: [
      { targetSlug: 'why-fleet-problems-start-with-tyre-pressure', anchorText: 'tyre pressure as root cause' },
      { targetSlug: 'good-enough-maintenance-costing-fleet-operators', anchorText: 'cost of good enough maintenance' },
    ],
  },

  'good-enough-maintenance-costing-fleet-operators': {
    relatedSlugs: [
      'fleet-efficiency-system-behind-the-vehicle',
      'why-fleet-problems-start-with-tyre-pressure',
    ],
    contextualLinks: [
      { targetSlug: 'fleet-efficiency-system-behind-the-vehicle', anchorText: 'systems behind the vehicle' },
      { targetSlug: 'why-fleet-problems-start-with-tyre-pressure', anchorText: 'tyre pressure root cause' },
    ],
  },

  'fleet-efficiency-system-behind-the-vehicle': {
    relatedSlugs: [
      'automatic-tyre-inflation-system-vs-tpms',
      'good-enough-maintenance-costing-fleet-operators',
    ],
    contextualLinks: [
      { targetSlug: 'automatic-tyre-inflation-system-vs-tpms', anchorText: 'TPMS vs automatic systems comparison' },
      { targetSlug: 'good-enough-maintenance-costing-fleet-operators', anchorText: 'bridging the maintenance gap' },
    ],
  },

  // Trailer cluster
  'trailer-tyre-safety-guide-india': {
    relatedSlugs: [
      'trailer-axle-tyre-pressure-management',
      'why-trailers-need-automatic-tyre-inflation',
      'how-to-prevent-truck-tyre-blowouts',
    ],
    contextualLinks: [
      { targetSlug: 'trailer-axle-tyre-pressure-management', anchorText: 'trailer axle pressure management' },
      { targetSlug: 'how-to-prevent-truck-tyre-blowouts', anchorText: 'blowout prevention strategies' },
    ],
  },

  'trailer-axle-tyre-pressure-management': {
    relatedSlugs: [
      'trailer-tyre-safety-guide-india',
      'why-trailers-need-automatic-tyre-inflation',
      'why-fleet-problems-start-with-tyre-pressure',
    ],
    contextualLinks: [
      { targetSlug: 'trailer-tyre-safety-guide-india', anchorText: 'complete trailer safety guide' },
      { targetSlug: 'why-fleet-problems-start-with-tyre-pressure', anchorText: 'tyre pressure as root cause' },
    ],
  },

  'why-trailers-need-automatic-tyre-inflation': {
    relatedSlugs: [
      'trailer-tyre-safety-guide-india',
      'automatic-tyre-inflation-system-vs-tpms',
      'wick-tyrerakhshak-saves-tyres-fuel-downtime',
    ],
    contextualLinks: [
      { targetSlug: 'trailer-tyre-safety-guide-india', anchorText: 'trailer tyre safety guide' },
      { targetSlug: 'wick-tyrerakhshak-saves-tyres-fuel-downtime', anchorText: 'measurable fleet savings' },
    ],
  },

  // Seasonal cluster
  'monsoon-tyre-safety-india': {
    relatedSlugs: [
      'how-to-prevent-truck-tyre-blowouts',
      'why-fleet-problems-start-with-tyre-pressure',
      'summer-tyre-pressure-guide',
    ],
    contextualLinks: [
      { targetSlug: 'how-to-prevent-truck-tyre-blowouts', anchorText: 'blowout prevention strategies' },
      { targetSlug: 'why-fleet-problems-start-with-tyre-pressure', anchorText: 'tyre pressure fundamentals' },
    ],
  },

  'summer-tyre-pressure-guide': {
    relatedSlugs: [
      'automatic-tyre-inflation-deflation-system',
      'how-to-prevent-truck-tyre-blowouts',
      'monsoon-tyre-safety-india',
    ],
    contextualLinks: [
      { targetSlug: 'automatic-tyre-inflation-deflation-system', anchorText: 'how automatic systems handle heat' },
      { targetSlug: 'how-to-prevent-truck-tyre-blowouts', anchorText: 'comprehensive blowout prevention' },
    ],
  },

  'winter-fleet-tyre-maintenance': {
    relatedSlugs: [
      'why-fleet-problems-start-with-tyre-pressure',
      'good-enough-maintenance-costing-fleet-operators',
      'summer-tyre-pressure-guide',
    ],
    contextualLinks: [
      { targetSlug: 'why-fleet-problems-start-with-tyre-pressure', anchorText: 'tyre pressure fundamentals' },
      { targetSlug: 'good-enough-maintenance-costing-fleet-operators', anchorText: 'cost of reactive maintenance' },
    ],
  },
};

/**
 * Get related slugs for a blog post from the centralized map.
 * Falls back to empty array if post not in map.
 */
export function getRelatedSlugsFromMap(slug: string): string[] {
  return blogCrossLinks[slug]?.relatedSlugs ?? [];
}

/**
 * Get all contextual links for a blog post from the centralized map.
 * Falls back to empty array if post not in map.
 */
export function getContextualLinksFromMap(slug: string): ContextualLink[] {
  return blogCrossLinks[slug]?.contextualLinks ?? [];
}
