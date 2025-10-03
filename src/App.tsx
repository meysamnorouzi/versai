import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import LanguageCoursePage from './pages/LanguageCoursePage'
import CanadaExpressEntryPage from './pages/CanadaExpressEntryPage'
import CanadaImmigrationPage from './pages/CanadaImmigrationPage'
import PRFrancePage from './pages/PRFrancePage'
import FranceOfficePage from './pages/FranceOfficePage'
import FranceStudyPage from './pages/FranceStudyPage'
import FranceVisaPage from './pages/FranceVisaPage'
import GermanyPage from './pages/GermanyPage'
import ItalyPage from './pages/ItalyPage'
import SwedenPage from './pages/SwedenPage'
import TurkeyPage from './pages/TurkeyPage'
import ContactUsPage from './pages/ContactUsPage'
import BlogListPage from './pages/BlogListPage'
import ArticleDetailPage from './pages/ArticleDetailPage'
import NotFound from './pages/NotFound'
import ErrorBoundary from './components/ui/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/language-course" element={<Layout><LanguageCoursePage /></Layout>} />
        <Route path="/canada-express-entry" element={<Layout><CanadaExpressEntryPage /></Layout>} />
        <Route path="/canada-immigration" element={<Layout><CanadaImmigrationPage /></Layout>} />
        <Route path="/pr-france" element={<Layout><PRFrancePage /></Layout>} />
        <Route path="/france-office" element={<Layout><FranceOfficePage /></Layout>} />
        <Route path="/france-study" element={<Layout><FranceStudyPage /></Layout>} />
        <Route path="/france-visa" element={<Layout><FranceVisaPage /></Layout>} />
        <Route path="/germany" element={<Layout><GermanyPage /></Layout>} />
        <Route path="/italy" element={<Layout><ItalyPage /></Layout>} />
        <Route path="/sweden" element={<Layout><SwedenPage /></Layout>} />
        <Route path="/turkey" element={<Layout><TurkeyPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactUsPage /></Layout>} />
        <Route path="/articles" element={<Layout><BlogListPage /></Layout>} />
        <Route path="/article/:id" element={<Layout><ArticleDetailPage /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App
