import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadBrochure = () => {
    // This will be handled by the Downloads component
    scrollToSection('downloads');
  };

  return (
    <section className="relative gradient-primary text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&h=1200')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
            Post Graduate Diploma in<br />
            <span className="text-blue-200">Cyber Security</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto" data-testid="hero-description">
            A comprehensive 1-year program designed for graduates from any discipline to master cybersecurity fundamentals and Python-based practical skills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleDownloadBrochure}
              className="btn-accent text-lg"
              size="lg"
              data-testid="hero-download-brochure"
            >
              Download Brochure
            </Button>
            <Button
              onClick={() => scrollToSection('overview')}
              variant="outline"
              className="bg-white text-primary hover:bg-blue-50 text-lg"
              size="lg"
              data-testid="hero-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
