
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CompaniesPage } from './pages/CompaniesPage';
import { TeachersPage } from './pages/TeachersPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { InternshipsPage } from './pages/InternshipsPage';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/teachers" element={<TeachersPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          {/* Fallback for unknown routes, can redirect to HomePage or a 404 page */}
          <Route path="*" element={<HomePage />} /> 
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
    