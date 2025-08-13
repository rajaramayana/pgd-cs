export default function CareerPathways() {
  const academicPathways = [
    "MSc in Cybersecurity",
    "MSc in Computer Science (Security Specialization)",
    "MBA in Information Security Management",
    "International Certifications (CEH, CompTIA Security+, CISSP)"
  ];

  const professionalRoles = [
    "Cybersecurity Analyst",
    "Security Operations Center (SOC) Analyst",
    "Penetration Tester",
    "Digital Forensics Investigator",
    "Network Security Engineer"
  ];

  const careerStats = [
    { value: "95%", label: "Job Placement Rate" },
    { value: "$65K+", label: "Average Starting Salary" },
    { value: "50+", label: "Industry Partners" }
  ];

  return (
    <section id="career" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="career-title">
            Career Pathways
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="career-subtitle">
            Our graduates are prepared for diverse career opportunities in cybersecurity and further academic pursuits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Academic Pathways */}
          <div className="bg-slate-50 rounded-xl p-8" data-testid="academic-pathways">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Academic Advancement</h3>
            <div className="space-y-4">
              {academicPathways.map((pathway, index) => (
                <div key={index} className="flex items-center" data-testid={`academic-path-${index}`}>
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-slate-700">{pathway}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Roles */}
          <div className="bg-primary/5 rounded-xl p-8" data-testid="professional-roles">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Professional Roles</h3>
            <div className="space-y-4">
              {professionalRoles.map((role, index) => (
                <div key={index} className="flex items-center" data-testid={`professional-role-${index}`}>
                  <div className="w-2 h-2 bg-accent rounded-full mr-4"></div>
                  <span className="text-slate-700">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career Statistics */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {careerStats.map((stat, index) => (
            <div key={index} className="bg-slate-50 rounded-xl p-8" data-testid={`career-stat-${index}`}>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
