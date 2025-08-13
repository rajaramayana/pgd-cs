import { CheckCircle } from 'lucide-react';

export default function ProgramOverview() {
  const features = [
    {
      title: "No Prior Technical Background Required",
      description: "Specially designed for graduates from any discipline"
    },
    {
      title: "Hands-on Python Programming",
      description: "Every course includes practical Python labs"
    },
    {
      title: "Industry-Aligned Curriculum",
      description: "Covers all major cybersecurity domains"
    },
    {
      title: "Career-Ready Skills",
      description: "Direct pathway to cybersecurity careers"
    }
  ];

  return (
    <section id="overview" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="overview-title">
            Program Overview
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="overview-subtitle">
            Designed to bridge the gap for graduates from any discipline, this program provides comprehensive cybersecurity education with hands-on Python implementation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div data-testid="overview-image">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Cybersecurity Operations Center" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6" data-testid="overview-features-title">
              Why Choose Our PGDCS Program?
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start" data-testid={`feature-${index}`}>
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
