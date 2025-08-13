import { GraduationCap, CheckCircle, Users } from 'lucide-react';

export default function Eligibility() {
  const eligibilityCards = [
    {
      icon: GraduationCap,
      title: "Academic Qualification",
      description: "Bachelor's degree in any discipline from a recognized university",
      color: "text-primary"
    },
    {
      icon: CheckCircle,
      title: "Technical Prerequisites",
      description: "No prior programming or computer science background required",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "Ideal Candidates",
      description: "Fresh graduates, IT professionals, and government/banking employees",
      color: "text-blue-600"
    }
  ];

  const candidateTypes = [
    {
      title: "Fresh Graduates",
      description: "Seeking a career in cybersecurity"
    },
    {
      title: "IT Professionals",
      description: "Wishing to specialize in security"
    },
    {
      title: "Industry Professionals",
      description: "From banking, law enforcement, or government"
    }
  ];

  return (
    <section id="eligibility" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="eligibility-title">
            Eligibility Requirements
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="eligibility-subtitle">
            Our program is designed to be accessible to graduates from all academic backgrounds
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {eligibilityCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg" data-testid={`eligibility-card-${index}`}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className={`w-8 h-8 ${card.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-600">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg" data-testid="candidate-details">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Who Should Apply?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {candidateTypes.map((candidate, index) => (
              <div key={index} className="text-center" data-testid={`candidate-type-${index}`}>
                <h4 className="font-semibold text-primary mb-2">{candidate.title}</h4>
                <p className="text-slate-600">{candidate.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
