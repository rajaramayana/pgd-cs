import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-primary" data-testid="logo">
                PGDCS Program
              </h1>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('overview')}
                className="text-slate-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-overview"
              >
                Overview
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-slate-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-courses"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('eligibility')}
                className="text-slate-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-eligibility"
              >
                Eligibility
              </button>
              <button
                onClick={() => scrollToSection('career')}
                className="text-slate-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-career"
              >
                Career Paths
              </button>
              <button
                onClick={() => scrollToSection('downloads')}
                className="text-slate-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                data-testid="nav-downloads"
              >
                Downloads
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
                data-testid="nav-apply"
              >
                Apply Now
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('overview')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-primary font-medium"
              data-testid="mobile-nav-overview"
            >
              Overview
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-primary font-medium"
              data-testid="mobile-nav-courses"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('eligibility')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-primary font-medium"
              data-testid="mobile-nav-eligibility"
            >
              Eligibility
            </button>
            <button
              onClick={() => scrollToSection('career')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-primary font-medium"
              data-testid="mobile-nav-career"
            >
              Career Paths
            </button>
            <button
              onClick={() => scrollToSection('downloads')}
              className="block w-full text-left px-3 py-2 text-slate-700 hover:text-primary font-medium"
              data-testid="mobile-nav-downloads"
            >
              Downloads
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-2 btn-primary"
              data-testid="mobile-nav-apply"
            >
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
