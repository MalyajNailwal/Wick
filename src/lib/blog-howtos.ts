export interface HowToStep {
  name: string;
  text: string;
  image?: string;
}

export interface BlogHowTo {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
  supply?: string[];
  tool?: string[];
  steps: HowToStep[];
}

export const blogHowTos: Record<string, BlogHowTo> = {
  'how-to-prevent-truck-tyre-blowouts': {
    name: 'How to Prevent Truck Tyre Blowouts on Indian Highways',
    description: 'Step-by-step guide to preventing dangerous truck tyre blowouts through proper pressure management, regular inspection, and automated tyre inflation systems.',
    totalTime: 'PT30M',
    steps: [
      {
        name: 'Check Tyre Pressure Daily',
        text: 'Inspect tyre pressure every morning before departure using a calibrated pressure gauge. Check all tyres including spares. Under-inflation is the #1 cause of blowouts — even 10% below recommended pressure increases blowout risk significantly.',
      },
      {
        name: 'Inspect Tyre Tread Depth',
        text: 'Measure tread depth across the tyre surface. Indian regulations require minimum 1.6mm tread depth for commercial vehicles. Replace tyres when tread reaches 2mm for safety.',
      },
      {
        name: 'Look for Visual Damage',
        text: 'Walk around the vehicle and inspect each tyre for cuts, bulges, cracks, embedded objects, or uneven wear patterns. Pay special attention to sidewalls and the area near the bead.',
      },
      {
        name: 'Check Load Distribution',
        text: 'Ensure cargo is evenly distributed across the trailer. Overloading or uneven loading causes excessive pressure on specific tyres, leading to overheating and potential blowouts.',
      },
      {
        name: 'Monitor Tyre Temperature',
        text: 'After long highway runs, check tyre temperature. Hot tyres indicate over-inflation, under-inflation, or braking issues. Let tyres cool before adjusting pressure.',
      },
      {
        name: 'Install an Automatic Tyre Inflation System',
        text: 'For permanent blowout prevention, install an ATES (Automatic Tyre Equalisation System) like TyreRakhshak. ATES maintains optimal pressure automatically while driving, eliminating the root cause of most blowouts. This reduces blowout risk by up to 85%.',
      },
    ],
  },

  'how-to-save-fuel-in-trucks': {
    name: 'How to Save Fuel in Trucks — 7 Proven Methods',
    description: 'Practical guide to reducing truck fuel consumption through tyre pressure management, driving techniques, and fleet optimization strategies.',
    totalTime: 'PT45M',
    steps: [
      {
        name: 'Maintain Correct Tyre Pressure',
        text: 'Keep tyres at the manufacturer-recommended pressure. Under-inflated tyres increase rolling resistance by up to 10%, consuming more fuel. Check pressure daily and consider an automatic tyre inflation system for consistent optimisation.',
      },
      {
        name: 'Reduce Vehicle Weight',
        text: 'Remove unnecessary cargo, equipment, and fluids. Every 100kg of extra weight increases fuel consumption by approximately 0.5%. Audit your fleet regularly for excess weight.',
      },
      {
        name: 'Optimise Driving Speed',
        text: 'Maintain steady speeds between 60-80 km/h for optimal fuel efficiency. Avoid rapid acceleration and hard braking. Use cruise control on highways where safe and legal.',
      },
      {
        name: 'Plan Efficient Routes',
        text: 'Use route planning software to minimise distance, avoid traffic congestion, and reduce idling time. Shorter routes with fewer stops save significant fuel.',
      },
      {
        name: 'Maintain Aerodynamics',
        text: 'Use side skirts, boat tails, and gap reducers to improve aerodynamics. At highway speeds, aerodynamic drag accounts for up to 50% of fuel consumption.',
      },
      {
        name: 'Service Engine Regularly',
        text: 'Follow the manufacturer-recommended service schedule. Clean air filters, fresh oil, and properly tuned engines consume 5-10% less fuel than poorly maintained ones.',
      },
      {
        name: 'Monitor Fuel Data',
        text: 'Use fleet management software to track fuel consumption per vehicle and per route. Identify underperforming vehicles and drivers. Data-driven decisions save the most fuel.',
      },
    ],
  },

  'monsoon-tyre-safety-india': {
    name: 'Monsoon Tyre Safety Guide for Indian Fleets',
    description: 'Complete guide to protecting your fleet tyres during Indian monsoon season — from pressure management to wet-road driving techniques.',
    totalTime: 'PT40M',
    steps: [
      {
        name: 'Check Tyre Tread Depth Before Monsoon',
        text: 'Inspect tread depth across all tyres before the monsoon begins. Tread depth below 2mm significantly reduces water evacuation, increasing hydroplaning risk. Replace worn tyres before the rains start.',
      },
      {
        name: 'Adjust Tyre Pressure for Wet Conditions',
        text: 'Slightly reduce tyre pressure (5-10 PSI below standard) for better grip on wet roads. Higher pressure reduces the contact patch and grip. Monitor pressure more frequently during monsoon.',
      },
      {
        name: 'Inspect for Cuts and Punctures',
        text: 'Walk around each vehicle and inspect tyres for cuts, cracks, or embedded objects. Water entering through small cuts can reach the steel belt and cause rust, weakening the tyre structure.',
      },
      {
        name: 'Check Valve Stem Seals',
        text: 'Ensure valve stem caps are tight and seals are intact. Water entering through damaged valve stems causes gradual pressure loss and can corrode the valve core.',
      },
      {
        name: 'Install Automatic Tyre Inflation',
        text: 'Install an ATES system to automatically maintain optimal pressure during monsoon. Fluctuating temperatures and wet conditions cause frequent pressure changes. ATES handles this without driver intervention.',
      },
      {
        name: 'Drive at Reduced Speeds',
        text: 'Reduce speed on wet roads. At higher speeds, tyres cannot evacuate water fast enough, leading to hydroplaning. Maintain safe distances and avoid sudden braking.',
      },
    ],
  },

  'summer-tyre-pressure-guide': {
    name: 'Summer Tyre Pressure Management Guide for Trucks',
    description: 'How to manage truck tyre pressure during Indian summers when temperatures exceed 45°C and tyre pressure can fluctuate dangerously.',
    totalTime: 'PT35M',
    steps: [
      {
        name: 'Check Pressure in Early Morning',
        text: 'Measure tyre pressure before the sun heats the road surface. Ambient temperature directly affects tyre pressure — for every 10°C rise, pressure increases by approximately 1 PSI.',
      },
      {
        name: 'Do Not Deflate Hot Tyres',
        text: 'Never release air from hot tyres after a long run. Wait at least 3 hours for tyres to cool to ambient temperature before adjusting pressure. Deflating hot tyres leads to under-inflation when they cool.',
      },
      {
        name: 'Monitor Pressure Throughout the Day',
        text: 'Re-check pressure at midday and evening. Summer heat causes significant pressure swings. A tyre at 100 PSI in the morning may reach 108 PSI by afternoon.',
      },
      {
        name: 'Inspect for Heat Damage',
        text: 'After each trip, inspect tyres for signs of heat damage: bubbling sidewalls, discolouration, or a strong rubber smell. These indicate overheating and potential failure.',
      },
      {
        name: 'Use Shade for Parking',
        text: 'Park vehicles in shaded areas when possible. Direct sunlight on parked tyres accelerates rubber degradation and increases internal pressure.',
      },
      {
        name: 'Install Automatic Pressure Control',
        text: 'An ATES system automatically equalises tyre pressure regardless of temperature fluctuations. This eliminates manual monitoring and prevents the pressure spikes that cause summer blowouts.',
      },
    ],
  },

  'winter-fleet-tyre-maintenance': {
    name: 'Winter Fleet Tyre Maintenance Guide for India',
    description: 'Essential tyre maintenance practices for Indian fleets during winter when cold temperatures reduce tyre pressure and increase wear.',
    totalTime: 'PT35M',
    steps: [
      {
        name: 'Increase Tyre Pressure Checks',
        text: 'Cold weather reduces tyre pressure — for every 10°C drop, pressure decreases by approximately 1 PSI. Check pressure twice daily during winter months, especially for early morning departures.',
      },
      {
        name: 'Warm Up Tyres Before Heavy Loads',
        text: 'Drive 5-10 km at moderate speed before loading heavy cargo. Cold tyres are stiffer and less flexible, making them more susceptible to damage from impact with potholes.',
      },
      {
        name: 'Inspect for Cold-Weather Cracking',
        text: 'Cold temperatures cause rubber to harden and crack. Inspect sidewalls and tread grooves for small cracks, especially in tyres that are 3+ years old.',
      },
      {
        name: 'Check Tyre Alignment',
        text: 'Misaligned tyres wear unevenly and faster in winter. Have alignment checked at the start of winter season and after any impact with potholes.',
      },
      {
        name: 'Monitor Tyre Age',
        text: 'Check tyre manufacturing date codes. Tyres older than 5 years should be replaced before winter, as aged rubber performs poorly in cold conditions.',
      },
      {
        name: 'Use Automatic Pressure Management',
        text: 'Install ATES to automatically maintain optimal pressure during temperature swings. Winter mornings can be 10-15°C colder than afternoons, causing significant pressure variation.',
      },
    ],
  },

  'trailer-tyre-safety-guide-india': {
    name: 'Complete Trailer Tyre Safety Guide for Indian Operators',
    description: 'Comprehensive guide to trailer tyre management — from selection and installation to monitoring and replacement for Indian fleet operators.',
    totalTime: 'PT50M',
    steps: [
      {
        name: 'Select Correct Tyre Specifications',
        text: 'Choose tyres rated for your trailer type and load capacity. Check load index, speed rating, and ply rating. Mismatched tyres cause uneven wear and safety issues.',
      },
      {
        name: 'Ensure Proper Installation',
        text: 'Have tyres mounted and balanced by certified technicians. Improper mounting causes vibration, uneven wear, and potential bead failure. Torque wheel nuts to manufacturer specifications.',
      },
      {
        name: 'Maintain Consistent Pressure Across All Wheels',
        text: 'All tyres on the same axle should be within 2 PSI of each other. Uneven pressure causes the trailer to pull to one side and accelerates wear on the higher-pressure tyres.',
      },
      {
        name: 'Check Pressure Before Every Trip',
        text: 'Trailer tyres lose pressure faster than tractor tyres due to longer idle periods. Check pressure before every trip, not just weekly.',
      },
      {
        name: 'Rotate Tyres Regularly',
        text: 'Rotate trailer tyres every 20,000-30,000 km to ensure even wear. Move inner tyres to outer positions and vice versa. This extends overall tyre life by 10-15%.',
      },
      {
        name: 'Monitor Tyre Temperature on Long Hauls',
        text: 'Stop every 3-4 hours on long hauls and check tyre temperature by hand. Hot tyres indicate pressure issues, brake problems, or bearing failures.',
      },
      {
        name: 'Install Automatic Tyre Management',
        text: 'For trailer fleets, install ATES to automatically equalise pressure across all wheels. This eliminates manual checks and prevents the uneven pressure that causes most trailer tyre failures.',
      },
    ],
  },

  'fleet-tyre-management-tips-india': {
    name: 'Fleet Tyre Management Best Practices for Indian Operators',
    description: 'Expert tips for managing tyres across a commercial fleet — from procurement strategy to end-of-life disposal.',
    totalTime: 'PT55M',
    steps: [
      {
        name: 'Develop a Tyre Procurement Policy',
        text: 'Standardise tyre brands and specifications across your fleet. Bulk procurement reduces costs by 10-15%. Evaluate tyres based on total cost of ownership, not just purchase price.',
      },
      {
        name: 'Implement Daily Pressure Checks',
        text: 'Make tyre pressure checks part of the pre-trip inspection process. Use calibrated digital gauges for accuracy. Train drivers on proper checking techniques.',
      },
      {
        name: 'Track Tyre Performance Data',
        text: 'Record tyre brand, model, installation date, kilometres driven, and reason for removal. This data reveals which tyres perform best for your specific routes and loads.',
      },
      {
        name: 'Schedule Regular Rotations',
        text: 'Rotate tyres based on wear patterns, not just distance. Front tyres wear differently than rear tyres. Inner tyres on multi-axle trailers wear faster than outer ones.',
      },
      {
        name: 'Train Drivers on Tyre Care',
        text: 'Educate drivers on the impact of their driving on tyre life. Aggressive braking, speeding over bumps, and curb striking all shorten tyre life significantly.',
      },
      {
        name: 'Use Technology for Monitoring',
        text: 'Deploy ATES and CPMS (Central Tyre Pressure Monitoring System) across your fleet. Automated systems reduce manual labour, improve accuracy, and prevent costly blowouts.',
      },
      {
        name: 'Plan End-of-Life Disposal',
        text: 'Retreadable tyres should be evaluated for retreading at 50-60% wear. Non-retreadable tyres should be disposed of through certified recyclers. Track retread performance data.',
      },
    ],
  },

  'tyre-inflation-system-for-trucks-india': {
    name: 'How to Choose the Right Tyre Inflation System for Trucks in India',
    description: 'Complete buyer\'s guide for selecting, evaluating, and installing a tyre inflation system for Indian commercial trucks.',
    totalTime: 'PT40M',
    steps: [
      {
        name: 'Assess Your Fleet Needs',
        text: 'Evaluate your fleet size, vehicle types, typical routes, and annual mileage. Long-haul fleets benefit most from ATES, while city delivery fleets may prioritise CPMS monitoring.',
      },
      {
        name: 'Compare ATES vs TPMS',
        text: 'ATES automatically corrects tyre pressure; TPMS only monitors and alerts. For fleets where drivers may not respond to alerts immediately, ATES provides superior protection.',
      },
      {
        name: 'Verify Compatibility',
        text: 'Check that the system is compatible with your vehicle axles, suspension, and electrical system. Wick ATES works with YORK RB15 Axles and Pneumatic Samrat Series Suspension.',
      },
      {
        name: 'Evaluate ROI Projections',
        text: 'Request ROI calculations based on your fleet data. Key metrics: tyre life extension (20%+), fuel savings (2%+), downtime reduction (144 hrs/year), and payback period (6-8 months).',
      },
      {
        name: 'Check Installation and Support',
        text: 'Choose a provider with on-site installation and local support. Wick provides installation at your depot in under 4 hours per vehicle with zero downtime.',
      },
      {
        name: 'Request a Demo',
        text: 'Before committing, request a demo or pilot installation on a few vehicles. Monitor performance data for 3-6 months before fleet-wide rollout.',
      },
    ],
  },
};
