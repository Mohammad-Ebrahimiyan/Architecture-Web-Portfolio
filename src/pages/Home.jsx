import React, { Suspense, lazy } from "react";
import Spinner from "../components/ui/Spinner";

// Lazy load sections
const HeroSection = lazy(() => import("../features/HeroSection"));
const AboutUs = lazy(() => import("../features/AboutUs"));
const WhatWeDo = lazy(() => import("../features/WhatWeDo"));
const OurWork = lazy(() => import("../features/OurWork"));

export default function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <AboutUs />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <WhatWeDo />
      </Suspense>

      <Suspense fallback={<Spinner />}>
        <OurWork />
      </Suspense>
    </>
  );
}
