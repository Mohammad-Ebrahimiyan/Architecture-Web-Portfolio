import React, {Suspense, lazy} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Layout';
import Spinner from "../components/ui/Spinner";
import ErrorBoundary from "../components/ErrorBoundary";

const Home = lazy(() => import("../pages/Home"));
const Contact = lazy(() => import("../features/Contact"));
const ProjectDetails = lazy(() => import("../components/ProjectDetails"));
const MobileMenu = lazy(() => import("../features/MobileMenu"));

export default function MyRoutes() {
  return (
    <HashRouter>
      <ErrorBoundary>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project/:projectId" element={<ProjectDetails />} />
            <Route path="mobile-menu" element={<MobileMenu />} />
          </Route>
        </Routes>
      </Suspense>
      </ErrorBoundary>
    </HashRouter>
  );
}