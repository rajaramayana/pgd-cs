import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownload = (type: 'brochure' | 'syllabus') => {
    const element = document.getElementById('downloads');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { label: 'Program Overview', id: 'overview' },
    { label: 'Course Structure', id: 'courses' },
    { label: 'Eligibility', id: 'eligibility' },
    { label: 'Career Paths', id: 'career' },
    { label: 'Downloads', id: 'downloads' }
  ];

  const resources = [
    { label: 'Program Brochure', action: () => handleDownload('brochure') },
    { label: 'Detailed Syllabus', action: () => handleDownload('syllabus') },
    { label: 'Application Form', id: 'contact' },
    { label: 'Contact Admissions', id: 'contact' }
  ];

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Program Description */}
          <div className="md:col-span-2" data-testid="footer-description">
            <h3 className="text-xl font-bold mb-4">Post Graduate Diploma in Cyber Security</h3>
            <p className="text-slate-300 mb-4">
              Preparing the next generation of cybersecurity professionals with comprehensive education and hands-on Python programming skills.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" data-testid="social-facebook">
                <Facebook className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" data-testid="social-twitter">
                <Twitter className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white" data-testid="social-linkedin">
                <Linkedin className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div data-testid="footer-quick-links">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-300 hover:text-white transition-colors text-left"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div data-testid="footer-resources">
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  {resource.action ? (
                    <button
                      onClick={resource.action}
                      className="text-slate-300 hover:text-white transition-colors text-left"
                      data-testid={`footer-resource-${index}`}
                    >
                      {resource.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => scrollToSection(resource.id!)}
                      className="text-slate-300 hover:text-white transition-colors text-left"
                      data-testid={`footer-resource-${index}`}
                    >
                      {resource.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-300" data-testid="footer-copyright">
          <p>&copy; 2024 Post Graduate Diploma in Cyber Security Program. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
