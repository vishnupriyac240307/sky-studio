import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { ContactFormData } from '../../types';
import { Send, CheckCircle2, AlertCircle, Mail, Instagram, MapPin, Loader2, ArrowUpRight } from 'lucide-react';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phoneOrInstagram: '',
    serviceRequired: initialService || 'Website',
    budgetRange: '₹10,000–₹25,000',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const servicesList = [
    'Logo Design',
    'Business Card',
    'Landing Page',
    'Website',
    'Social Media Design',
    'Complete Branding',
    'Other',
  ];

  const budgetList = [
    'Under ₹5,000',
    '₹5,000–₹10,000',
    '₹10,000–₹25,000',
    '₹25,000–₹50,000',
    '₹50,000+',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors && errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please describe your project.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Form submission handling / API simulation
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitting(false);
      setSubmitted(true);

      // Open SKY Studio Instagram DM in a new tab upon successful submission
      window.open('https://ig.me/m/sky._.studio._', '_blank', 'noopener,noreferrer');

      // Reset form data after successful submission
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phoneOrInstagram: '',
        serviceRequired: initialService || 'Website',
        budgetRange: '₹10,000–₹25,000',
        projectDescription: '',
      });
    } catch (err) {
      setIsSubmitting(false);
      setSubmitError('Failed to send enquiry. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-lightBg relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-brand-blue/10 via-brand-purple/10 to-brand-pink/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="START YOUR PROJECT"
          title="Let's Build Something"
          highlightText="Amazing."
          subtitle="Have an idea? Tell us what you're building and we'll help turn it into reality."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Studio Contact Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-soft-md space-y-6">
              <h3 className="text-2xl font-black text-brand-navy">
                Get in Touch Direct
              </h3>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                Prefer direct messaging or quick consultation? Connect with us on Instagram, email, or visit our studio.
              </p>

              <div className="space-y-4 pt-2">
                {/* Clickable Instagram Channel Card */}
                <a
                  href="https://www.instagram.com/sky._.studio._/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit SKY Studio Instagram Profile @sky._.studio._"
                  className="flex items-center justify-between p-4 rounded-2xl bg-pink-50/80 border border-pink-200/80 hover:bg-pink-100/80 transition-all duration-300 group cursor-pointer shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white shadow-md group-hover:scale-110 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-rose-800 uppercase tracking-wider block">Instagram DM</span>
                      <span className="text-base font-extrabold text-rose-950">@sky._.studio._</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-rose-600 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Email Channel Card */}
                <a
                  href="mailto:skytraderstn@gmail.com"
                  aria-label="Send email to skytraderstn@gmail.com"
                  className="flex items-center justify-between p-4 rounded-2xl bg-blue-50/80 border border-blue-200/80 hover:bg-blue-100/80 transition-all duration-300 group cursor-pointer shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-brand-blue text-white shadow-md group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-blue-800 uppercase tracking-wider block">Email Us</span>
                      <span className="text-base font-extrabold text-blue-950">skytraderstn@gmail.com</span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-brand-blue transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-200/80 shadow-xs">
                  <div className="p-3 rounded-xl bg-brand-navy text-white shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Location</span>
                    <span className="text-base font-extrabold text-brand-navy">Coimbatore, Tamil Nadu &amp; Remote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-soft-lg">
              
              {submitted ? (
                /* Success Toast / Notification View */
                <div className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 p-3 mx-auto flex items-center justify-center shadow-soft-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy">
                    Your enquiry has been received!
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto font-medium text-sm sm:text-base leading-relaxed">
                    Let's continue the conversation on Instagram. We've opened Instagram DM in a new tab so you can message us directly!
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      href="https://ig.me/m/sky._.studio._"
                      icon={<Instagram className="w-4 h-4" />}
                    >
                      Open Instagram DM
                    </Button>
                    <Button
                      variant="secondary"
                      size="md"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  
                  {submitError && (
                    <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-sm font-semibold flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-2xl bg-gray-50 border ${
                          errors?.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                        } text-sm font-medium text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all`}
                      />
                      {errors?.fullName && (
                        <span className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Apparel"
                        className={`w-full px-4 py-3 rounded-2xl bg-gray-50 border ${
                          errors?.businessName ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                        } text-sm font-medium text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all`}
                      />
                      {errors?.businessName && (
                        <span className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.businessName}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className={`w-full px-4 py-3 rounded-2xl bg-gray-50 border ${
                          errors?.email ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                        } text-sm font-medium text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all`}
                      />
                      {errors?.email && (
                        <span className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Phone or Instagram Contact (Optional) */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                        Instagram Handle / Phone <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        name="phoneOrInstagram"
                        value={formData.phoneOrInstagram || ''}
                        onChange={handleChange}
                        placeholder="@yourhandle or +91 98765 43210"
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm font-medium text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Required Dropdown */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                        Service Required
                      </label>
                      <select
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm font-semibold text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                      >
                        {servicesList.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Range Dropdown */}
                    <div>
                      <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm font-semibold text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all"
                      >
                        {budgetList.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-extrabold text-brand-navy uppercase tracking-wider mb-2">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="projectDescription"
                      rows={4}
                      value={formData.projectDescription}
                      onChange={handleChange}
                      placeholder="Tell us about your brand goals, project timelines, or specific features you need..."
                      className={`w-full px-4 py-3 rounded-2xl bg-gray-50 border ${
                        errors?.projectDescription ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200'
                      } text-sm font-medium text-brand-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all`}
                    ></textarea>
                    {errors?.projectDescription && (
                      <span className="text-xs text-red-500 mt-1 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.projectDescription}
                      </span>
                    )}
                  </div>

                  {/* Form Actions */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center"
                      icon={isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry & Continue on Instagram'}
                    </Button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
