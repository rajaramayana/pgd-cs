import { useEffect } from 'react';
import Navigation from '@/components/navigation';
import HeroSection from '@/components/hero-section';
import ProgramOverview from '@/components/program-overview';
import CourseStructure from '@/components/course-structure';
import Eligibility from '@/components/eligibility';
import CareerPathways from '@/components/career-pathways';
import Downloads from '@/components/downloads';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = 'Post Graduate Diploma in Cyber Security (PGDCS) - Academic Excellence';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Join our comprehensive 1-year PGDCS program designed for graduates from any discipline. Master cybersecurity fundamentals with Python-based practical skills. No prior technical background required.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Join our comprehensive 1-year PGDCS program designed for graduates from any discipline. Master cybersecurity fundamentals with Python-based practical skills. No prior technical background required.';
      document.head.appendChild(meta);
    }

    // Add Open Graph tags for social sharing
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Post Graduate Diploma in Cyber Security (PGDCS)';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Comprehensive 1-year cybersecurity program with Python-based practical training for graduates from any discipline.';
    document.head.appendChild(ogDescription);

    const ogType = document.createElement('meta');
    ogType.setAttribute('property', 'og:type');
    ogType.content = 'website';
    document.head.appendChild(ogType);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      
      {/* Quick Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6" data-testid="stat-duration">
              <div className="text-3xl font-bold text-primary mb-2">1 Year</div>
              <div className="text-slate-600">Program Duration</div>
            </div>
            <div className="p-6" data-testid="stat-credits">
              <div className="text-3xl font-bold text-primary mb-2">30 Credits</div>
              <div className="text-slate-600">Total Credit Hours</div>
            </div>
            <div className="p-6" data-testid="stat-courses">
              <div className="text-3xl font-bold text-primary mb-2">10 Courses</div>
              <div className="text-slate-600">Comprehensive Curriculum</div>
            </div>
            <div className="p-6" data-testid="stat-python">
              <div className="text-3xl font-bold text-primary mb-2">Python</div>
              <div className="text-slate-600">Practical Focus</div>
            </div>
          </div>
        </div>
      </section>

      <ProgramOverview />
      <CourseStructure />
      <Eligibility />
      <CareerPathways />
      <Downloads />
      <Contact />
      <Footer />
    </div>
  );
}
