export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'automatic-tyre-inflation-deflation-system',
    title: 'Automatic Tyre Inflation and Deflation System: How ATES Keeps Your Fleet Safe',
    excerpt:
      'Learn how the Automatic Tyre Equalisation System (ATES) maintains optimal tyre pressure in real time, prevents blowouts, extends tyre life by 20%, and saves your fleet up to 144 hours of downtime annually.',
    date: '2026-04-02',
    readTime: '7 min read',
    category: 'Technology',
    tags: [
      'ATES',
      'tyre inflation system',
      'fleet safety',
      'TyreRakhshak',
      'commercial vehicle',
      'tyre pressure',
      'blowout prevention',
    ],
    content: `
## Overview

Since the discovery of tyres, constant development and integration of creative systems have been done to support commercial vehicles in enhancing efficiency, security, performance, and tyre maintenance. Out of these, one of the major factors affecting commercial vehicles is improper maintenance of tyre pressure.

On a long run, due to friction between the tyre and the road, the temperature of the tyre increases and so does the pressure. This rise in pressure can cause a **tyre blowout**, one of the most dangerous and costly incidents on highways.

To address this problem, we have assembled a machine named the **Automatic Tyre Equalisation System (ATES)** the core technology behind our flagship product, **TyreRakhshak**.

## Our Goal

Our primary goal is to **inflate a tyre during low pressure** and **deflate during high pressure**, continuously maintaining the optimal pressure according to the load of the trailer.

Our product also promises **safety and cost saving** through an automatic system while keeping user interventions at a minimum.

## Components and Their Functions

### 1. Tank

The tank is a crucial part of the ATES as it holds a reserve of compressed air produced by the vehicle's compressor. This reserve allows the system to adjust tyre pressure swiftly in real time, responding to various changes on the road from highway cruising to heavy-load hauling.

### 2. Pressure Protection Valve (PPV)

The Pressure Protection Valve (PPV) opens when a certain air pressure threshold is reached. This component regulates the compressed air delivered to the tyres from a centralised reservoir. Maintaining correct tyre pressure levels is vital and depends on factors such as vehicle load and driving speed.

### 3. Non-Return Valve (NRV)

The Non-Return Valve (NRV) ensures the air flow is unidirectional, preventing the backward flow of air that has passed through the PPV. This one-way valve is essential for maintaining the integrity and efficiency of the system.

### 4. Control Box

The control box is the **brain of the ATES**, synchronising the functions of various components. It includes:

**Filter Regulator Lubricator (FRL):** This unit combines three parts Filter, Regulator, and Lubricator. The filter removes dust particles from the air, the regulator maintains the appropriate pressure, and the lubricator ensures the smooth operation of the system.

**Ball Valve:** A key controlling component designed to directly curb the flow of air further in the system.

**Direction Control Valve (DCV):** The DCV is the core link between our system and your truck's engine. With a direct wired connection, the DCV synchronises our system's activation with your truck's ignition. When the truck is switched off, our system gracefully powers down. This seamless integration ensures our system is always ready when you are, minimising downtime and maximising efficiency.

### 5. Manifold

The manifold acts as an air distributor within the tyres. There are two types of manifolds designed for this system one with **5 ports** and the other with **7 ports**. These manifolds ensure that air is evenly distributed to all the tyres, facilitating uniform pressure maintenance across every axle.

### 6. Rotary

The rotary component has a stationary side attached through the axle and a rotating side connected to the wheel isolator. This setup allows the seamless transfer of air from the stationary part to the rotating tyres, ensuring continuous and efficient tyre pressure management even while the vehicle is in motion.

## The Results Speak for Themselves

By incorporating these automatic mechanisms, TyreRakhshak provides a holistic solution for maintaining optimal tyre pressure:

| Metric | Impact |
|--------|--------|
| **Tyre Life** | Increases by **20%** |
| **Fuel Economy** | Boosts by over **2%** |
| **Downtime Saved** | Up to **144 hours** annually |
| **Safety** | Significantly reduces blowout risk |

With **TyreRakhshak**, you're not just investing in efficiency, you're investing in **safety and longevity** for your fleet.

*Stay connected with Wick Insights for more deep dives into commercial vehicle technology, fleet management best practices, and industry updates. We'll be publishing new articles regularly, subscribe to our newsletter to never miss an update.*
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
