import { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Downloads() {
  const [isDownloading, setIsDownloading] = useState<string | null>(null);
  const { toast } = useToast();

  const handleDownload = async (type: 'brochure' | 'syllabus') => {
    setIsDownloading(type);
    
    try {
      const response = await fetch(`/api/download/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(`Failed to download ${type}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = type === 'brochure' ? 'PGDCS-Program-Brochure.pdf' : 'PGDCS-Detailed-Syllabus.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Download Started",
        description: `${type === 'brochure' ? 'Program brochure' : 'Detailed syllabus'} download has started.`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: `Failed to download ${type}. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setIsDownloading(null);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="downloads" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="downloads-title">
            Downloads & Resources
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="downloads-subtitle">
            Get detailed information about our program with these comprehensive documents
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Program Brochure */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center" data-testid="brochure-card">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Program Brochure</h3>
            <p className="text-slate-600 mb-6">
              Complete overview of the PGDCS program including curriculum highlights, admission process, and career outcomes.
            </p>
            <Button
              onClick={() => handleDownload('brochure')}
              disabled={isDownloading === 'brochure'}
              className="btn-accent w-full"
              data-testid="download-brochure-btn"
            >
              {isDownloading === 'brochure' ? 'Downloading...' : 'Download Brochure (PDF)'}
            </Button>
          </div>

          {/* Detailed Syllabus */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center" data-testid="syllabus-card">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Detailed Syllabus</h3>
            <p className="text-slate-600 mb-6">
              Comprehensive course descriptions, learning outcomes, laboratory experiments, and assessment criteria for all 10 courses.
            </p>
            <Button
              onClick={() => handleDownload('syllabus')}
              disabled={isDownloading === 'syllabus'}
              className="btn-primary w-full"
              data-testid="download-syllabus-btn"
            >
              {isDownloading === 'syllabus' ? 'Downloading...' : 'Download Syllabus (PDF)'}
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">Need more information? Contact our admissions team.</p>
          <Button
            onClick={scrollToContact}
            variant="outline"
            className="bg-slate-200 hover:bg-slate-300 text-slate-800"
            data-testid="contact-admissions-btn"
          >
            Contact Admissions
          </Button>
        </div>
      </div>
    </section>
  );
}
