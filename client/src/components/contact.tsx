import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  qualification: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    qualification: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit inquiry');
      }

      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Inquiry Submitted",
          description: "Thank you for your inquiry! We will contact you soon.",
        });
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          qualification: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Failed to submit inquiry');
      }
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: ["Department of Computer Science", "University Campus", "Kathmandu, Nepal"]
    },
    {
      icon: Phone,
      title: "Phone",
      content: ["+977-1-XXXXXXX", "+977-98XXXXXXXX"]
    },
    {
      icon: Mail,
      title: "Email",
      content: ["pgdcs@university.edu.np", "admissions@university.edu.np"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="contact-title">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="contact-subtitle">
            Ready to start your cybersecurity journey? Contact us for more information or to begin your application
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8" data-testid="contact-form">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    data-testid="input-firstName"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    data-testid="input-lastName"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  data-testid="input-email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  data-testid="input-phone"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="qualification" className="block text-sm font-medium text-slate-700 mb-2">
                  Educational Background
                </label>
                <Select value={formData.qualification} onValueChange={(value) => handleInputChange('qualification', value)}>
                  <SelectTrigger data-testid="select-qualification">
                    <SelectValue placeholder="Select your background" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="business">Business/Management</SelectItem>
                    <SelectItem value="arts">Arts/Humanities</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us about your interest in the PGDCS program..."
                  rows={4}
                  data-testid="textarea-message"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary"
                data-testid="submit-inquiry-btn"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div data-testid="contact-info">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start" data-testid={`contact-info-${index}`}>
                    <div className="flex-shrink-0 w-6 h-6 text-primary mt-1">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-slate-900">{info.title}</h4>
                      {info.content.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-slate-600">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-primary/5 rounded-lg" data-testid="contact-cta">
              <h4 className="font-semibold text-slate-900 mb-2">Ready to Apply?</h4>
              <p className="text-slate-600 mb-4">
                Start your application process today and join the next cohort of cybersecurity professionals.
              </p>
              <Button className="btn-primary" data-testid="start-application-btn">
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
