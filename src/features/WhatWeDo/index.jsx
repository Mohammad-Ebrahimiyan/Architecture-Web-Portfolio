import React from 'react';
import { ITEMS } from '../../data/WhatWeDo';


export default function WhatWeDo() {

  return (
    <section id="whatwedo" className="mt-16 md:mt-32 px-4">
      <h1
        className="ml-4 text-[2rem] font-bold tracking-[-0.8px]"
        style={{ color: 'var(--title-color)' }}
      >
        What We Do
      </h1>

      <div className="mt-8 space-y-12">
        {ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 md:grid md:grid-cols-2 md:items-center md:justify-items-center md:p-0"
          >
            {item.imageRight ? (
              <>
                <p
                  className="order-2 mt-8 ml-4 text-base sm:text-[1.3rem] md:text-[1.4rem] leading-[2rem] text-left md:order-1 md:col-start-1 md:self-center md:mt-0 md:mx-16"
                  style={{ color: 'var(--text-color)' }}
                >
                  {item.text}
                </p>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="order-1 w-[27rem] sm:w-[30rem] md:w-[90%] object-cover md:order-2 md:mt-6 md:col-start-2"
                />
              </>
            ) : (
              <>
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-[27rem] sm:w-[30rem] md:w-[90%] object-cover md:mt-6"
                />
                <p
                  className="mt-8 ml-4 text-base sm:text-[1.3rem] md:text-[1.4rem] leading-[2rem] text-left md:mt-0 md:mx-16"
                  style={{ color: 'var(--text-color)' }}
                >
                  {item.text}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

