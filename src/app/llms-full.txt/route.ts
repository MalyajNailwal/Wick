import { getAllPosts } from '@/lib/blog-data';

export const dynamic = 'force-static';

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = 'https://wick.co.in';

  const content = `# Wick - India's Leading Automatic Tyre Equalisation System (ATES)
# Extended Reference for AI Systems
# Last updated: ${new Date().toISOString().split('T')[0]}

> Wick manufactures and installs the Automatic Tyre Equalisation System (ATES), branded as TyreRakhshak, for commercial vehicles across India. ATES automatically maintains optimal tyre pressure on trucks and trailers in real time, preventing blowouts, extending tyre life by 20%, and reducing fuel costs by 2%+. Founded in 2021 and headquartered in Faridabad, Haryana, Wick serves fleet operators nationwide in partnership with YORK / SAF-HOLLAND Group.

## Products

### TyreRakhshak ATES (Automatic Tyre Equalisation System)
- Connects to the vehicle's existing air compressor
- Uses manifolds, control valves, and rotary joints to manage tyre pressure
- Automatically inflates or deflates tyres while the vehicle is running
- Maintains optimal pressure based on real-time load and road conditions
- 24V DC power requirement
- Compatible with YORK RB15 Axles and Pneumatic Samrat Series Suspension
- Only moving component: rotary union
- Front-mounted driver indicator for system status
- Easy and quick installation
- Minimal maintenance (annual inspection recommended)

### Wick CPMS (Central Tyre Pressure Monitoring System)
- Real-time tyre pressure tracking across all wheels
- GPS integration for trailers
- System ON/OFF status indication
- Trailer tyre odometer (upcoming feature)
- Predictive maintenance alerts
- Data-driven fleet management dashboard
- Remote monitoring capability
- Historical data analytics

## All Pages

- Homepage: ${baseUrl}/
- Products & Pricing: ${baseUrl}/products
- Technology (How ATES Works): ${baseUrl}/technology
- About Wick: ${baseUrl}/about
- Contact & Get Quote: ${baseUrl}/contact
- FAQ: ${baseUrl}/faq
- Blog: ${baseUrl}/blog
- Case Studies: ${baseUrl}/case-studies
- Why Choose Wick ATES: ${baseUrl}/why-wick-ates
- Wick vs Competitors: ${baseUrl}/wick-vs-competitors
- Tyre Inflation System: ${baseUrl}/tire-inflation-system
- Truck Tyre Pressure Monitoring: ${baseUrl}/truck-tire-pressure-monitoring

## Service Locations

- Mumbai: ${baseUrl}/locations/mumbai
- Delhi NCR: ${baseUrl}/locations/delhi-ncr
- Bangalore: ${baseUrl}/locations/bangalore
- Chennai: ${baseUrl}/locations/chennai

## Blog Posts (Complete Index)

${posts.map(post => `### ${post.title}
- URL: ${baseUrl}/blog/${post.slug}
- Category: ${post.category}
- Date: ${post.date}
- Tags: ${post.tags.join(', ')}
- Summary: ${post.excerpt}
`).join('\n')}

## Frequently Asked Questions

**What is an automatic tyre inflation system?**
An automatic tyre inflation system (ATES) continuously monitors and maintains optimal tyre pressure in commercial vehicles. It automatically inflates tyres when pressure drops, preventing blowouts and extending tyre life by up to 20%.

**How does tyre pressure monitoring work in trucks?**
Tyre pressure monitoring systems use sensors to track real-time tyre pressure across all wheels. Advanced systems like ATES not only monitor but also automatically correct pressure deviations, ensuring optimal performance and safety.

**What is the difference between TPMS and ATES?**
TPMS only monitors and alerts about pressure changes. ATES monitors AND automatically corrects tyre pressure, providing complete tyre management without manual intervention.

**What are the benefits of tyre inflation systems for fleets?**
20% longer tyre life, 2%+ fuel savings, reduced vehicle downtime, improved safety, and lower maintenance costs. They prevent tyre blowouts and ensure consistent optimal performance across the fleet.

**How much can fleets save with automatic tyre pressure systems?**
Fleets typically save Rs 2-3 lakhs annually per vehicle through extended tyre life, Rs 50,000+ in fuel savings, and reduced downtime. The system pays for itself within 6-8 months.

**Are tyre inflation systems suitable for Indian commercial vehicles?**
Yes, modern tyre inflation systems are specifically designed for Indian road conditions, handling dust, heat, and challenging terrains while maintaining consistent tyre pressure for trucks and trailers.

**What maintenance is required for tyre inflation systems?**
Minimal maintenance - typically annual inspections and component checks. ATES is designed for harsh Indian conditions with robust, low-maintenance components.

**How to choose the best tyre management system for trucks?**
Consider automatic pressure correction capability, real-time monitoring, India-specific design, proven ROI, local support, and compatibility with your fleet. Look for systems offering 20%+ tyre life extension and measurable fuel savings.

**Why do truck tyres burst?**
Truck tyres burst primarily due to under-inflation (which causes excessive flexing and heat buildup), overloading, high speeds on hot roads, and worn-out tyres. ATES prevents this by maintaining optimal pressure at all times.

**How to improve truck tyre life?**
Maintain correct tyre pressure at all times (the #1 factor), avoid overloading, rotate tyres regularly, inspect for damage, and use an automatic tyre inflation system like ATES that ensures pressure never drops below optimal levels.

**What is the price of Wick TyreRakhshak ATES?**
Wick TyreRakhshak ATES pricing is customized based on fleet size and requirements. The system typically pays for itself within 6-8 months through tyre and fuel savings of Rs 2-3 lakhs per vehicle annually. Contact +91-9721601500 or office@wick.co.in for a custom quote.

**Is TyreRakhshak compatible with my truck/trailer?**
TyreRakhshak ATES is compatible with YORK RB15 Axles and Pneumatic Samrat Series Suspension systems. It runs on 24V DC power from the vehicle electrical system. Contact Wick to verify compatibility with your specific vehicle configuration.

## Key Statistics

- 20% longer tyre life
- 2%+ fuel savings
- 144 hours of downtime saved per vehicle annually
- 50+ fleet operators trust Wick
- 6-8 month payback period
- Rs 2-3 lakhs saved per vehicle annually
- Rs 50,000+ in fuel savings per vehicle
- Founded in 2021
- Headquartered in Faridabad, Haryana, India

## Industry Terms & Topics

Wick's expertise covers: automatic tyre inflation, tyre pressure monitoring, TPMS, CTIS (central tyre inflation system), fleet tyre management, commercial vehicle safety, truck tyre maintenance, trailer tyre management, tyre blowout prevention, fuel efficiency for trucks, pneumatic systems for trucks, axle management, hubcap systems, vehicle downtime reduction, fleet cost optimization, tyre lifecycle management, commercial vehicle maintenance systems, heavy vehicle safety, transport fleet management, logistics safety solutions.

## Technical Specifications

- Power: 24V DC (from vehicle electrical system)
- Compatible axles: YORK RB15
- Compatible suspension: Pneumatic Samrat Series
- Installation time: Quick installation by trained technicians
- Maintenance: Annual inspection recommended
- Operating conditions: Designed for Indian roads - extreme heat, dust, heavy loads
- Key components: Manifolds, control valves, rotary unions, pressure regulator
- Only moving part: Rotary union (reduces wear and maintenance)

## Company Information

- Founded: 2021
- Founder: Vinamra Bajaj
- Headquarters: House Of Wick, 33B, NIT, Faridabad, Haryana 121001, India
- Email: office@wick.co.in
- Phone: +91-9721601500
- Partner: YORK / SAF-HOLLAND Group (global axle and suspension manufacturer)
- Coverage: All of India
- Serves: Fleet owners, transport companies, commercial vehicle operators, logistics companies

## Social Links

- LinkedIn: https://www.linkedin.com/company/wick-ates
- Twitter/X: https://twitter.com/WickATES
- Facebook: https://www.facebook.com/wickates
- Instagram: https://www.instagram.com/wickates
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
