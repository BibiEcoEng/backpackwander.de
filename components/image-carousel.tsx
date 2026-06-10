'use client';

import Image from 'next/image';
import { useState } from 'react';

const IMAGES = [
  '/images/Banner.png',
  '/images/banner-2.png',
  '/images/banner-3.png',
  '/images/Banner-4.png'
];

export function ImageCarousel() {
  const [index, setIndex] = useState(0);

  if (!IMAGES.length) return null;

  return (
    <section className="section-shell my-12">
      <div className="relative rounded-2xl overflow-hidden border border-line bg-surface">
        <div className="w-full">
          <Image
            src={IMAGES[index]}
            alt={`Carousel image ${index + 1}`}
            width={1600}
            height={900}
            className="w-full h-[420px] object-cover sm:h-[540px]"
            priority={false}
          />
        </div>

        <button
          aria-label="Previous image"
          onClick={() => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-line bg-surface p-2 text-offwhite hover:bg-background"
        >
          ‹
        </button>

        <button
          aria-label="Next image"
          onClick={() => setIndex((i) => (i + 1) % IMAGES.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-line bg-surface p-2 text-offwhite hover:bg-background"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-8 rounded-full ${i === index ? 'bg-accent' : 'bg-line'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
