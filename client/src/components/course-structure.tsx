import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Course {
  code: string;
  title: string;
  credits: number;
  description: string;
}

export default function CourseStructure() {
  const [downloadingCourse, setDownloadingCourse] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCourseDownload = async (courseCode: string) => {
    setDownloadingCourse(courseCode);
    
    try {
      const response = await fetch(`/api/download/course/${courseCode.replace(/\s/g, '')}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      if (!response.ok) {
        throw new Error(`Failed to download ${courseCode} syllabus`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = `${courseCode.replace(/\s/g, '')}-Syllabus.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Download Started",
        description: `${courseCode} syllabus download has started.`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: `Failed to download ${courseCode} syllabus. Please try again.`,
        variant: "destructive",
      });
    } finally {
      setDownloadingCourse(null);
    }
  };

  const semester1Courses: Course[] = [
    {
      code: "PGDCS 101",
      title: "Fundamentals of Cyber Security",
      credits: 3,
      description: "Overview of cybersecurity concepts, threats, policies, and ethical hacking basics."
    },
    {
      code: "PGDCS 102",
      title: "Python Programming for Cybersecurity",
      credits: 3,
      description: "Python fundamentals with a focus on cybersecurity applications."
    },
    {
      code: "PGDCS 103",
      title: "Fundamentals of Cryptography",
      credits: 3,
      description: "Symmetric/asymmetric encryption, hashing, digital signatures, all implemented in Python."
    },
    {
      code: "PGDCS 104",
      title: "Database Management Systems (with Security)",
      credits: 3,
      description: "SQL basics, database security, Python-DB integration."
    },
    {
      code: "PGDCS 105",
      title: "Computer Networks & Operating Systems",
      credits: 3,
      description: "Basics of networking, OSI/TCP-IP, routing, OS functions, file systems, and scripting for security tasks."
    }
  ];

  const semester2Courses: Course[] = [
    {
      code: "PGDCS 201",
      title: "Network Security",
      credits: 3,
      description: "Firewalls, IDS/IPS, VPN, secure protocols, Python network scanning."
    },
    {
      code: "PGDCS 202",
      title: "Wireless Security",
      credits: 3,
      description: "Wi-Fi protocols, attacks, and wireless penetration testing using Python."
    },
    {
      code: "PGDCS 203",
      title: "Malware Analysis & Digital Forensics",
      credits: 3,
      description: "Malware types, forensic techniques, Python for log analysis."
    },
    {
      code: "PGDCS 204",
      title: "Cybersecurity Regulations & Compliance",
      credits: 3,
      description: "Laws, compliance frameworks, and incident reporting."
    },
    {
      code: "PGDCS 205",
      title: "Project Work",
      credits: 3,
      description: "Capstone project integrating knowledge from multiple courses."
    }
  ];

  const handleDownloadSyllabus = () => {
    const element = document.getElementById('downloads');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="courses-title">
            Course Structure
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="courses-subtitle">
            Our curriculum is carefully structured across two semesters, building from fundamentals to advanced applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Semester 1 */}
          <div className="bg-slate-50 rounded-xl p-8" data-testid="semester-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Semester 1: Foundations
            </h3>
            <div className="space-y-4">
              {semester1Courses.map((course, index) => (
                <div key={course.code} className="bg-white rounded-lg p-4 shadow-sm" data-testid={`sem1-course-${index}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-primary">
                      {course.code}: {course.title}
                    </h4>
                    <Button
                      onClick={() => handleCourseDownload(course.code)}
                      disabled={downloadingCourse === course.code}
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 p-1"
                      data-testid={`download-${course.code.replace(/\s/g, '')}`}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{course.credits} Credits</p>
                  <p className="text-slate-700 text-sm">{course.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Semester 2 */}
          <div className="bg-primary/5 rounded-xl p-8" data-testid="semester-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Semester 2: Advanced Applications
            </h3>
            <div className="space-y-4">
              {semester2Courses.map((course, index) => (
                <div key={course.code} className="bg-white rounded-lg p-4 shadow-sm" data-testid={`sem2-course-${index}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-primary">
                      {course.code}: {course.title}
                    </h4>
                    <Button
                      onClick={() => handleCourseDownload(course.code)}
                      disabled={downloadingCourse === course.code}
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary/80 p-1"
                      data-testid={`download-${course.code.replace(/\s/g, '')}`}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-slate-600 mb-2">{course.credits} Credits</p>
                  <p className="text-slate-700 text-sm">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={handleDownloadSyllabus}
            className="btn-primary"
            size="lg"
            data-testid="download-syllabus-btn"
          >
            Download Complete Syllabus
          </Button>
        </div>
      </div>
    </section>
  );
}
