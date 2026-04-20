'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Check } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GoldDivider from '@/components/shared/GoldDivider';

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (212) 555-0147',
    href: 'tel:+12125550147',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@tushadesign.com',
    href: 'mailto:info@tushadesign.com',
  },
  {
    icon: MapPin,
    label: 'Atelier',
    value: '158 West 27th Street, New York, NY 10001',
    href: '#map',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = "w-full bg-transparent border-b py-4 font-body text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none transition-colors duration-300 focus:border-neutral-800";
  const inputStyle = { borderBottomColor: '#D4C5A9' };

  return (
    <>
      <section className="pt-40 pb-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase font-body mb-4 block" style={{ color: '#C9A96E' }}>
              Get in Touch
            </span>
            <GoldDivider className="mb-6" />
            <h1 className="font-display text-5xl md:text-6xl font-light mb-6">
              Begin Your
              <br />
              <em>Kitchen Journey</em>
            </h1>
            <p className="font-body text-base text-neutral-500 leading-relaxed">
              Every extraordinary kitchen begins with a conversation. Share your vision and one of our
              senior designers will be in touch within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-28" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
            <AnimatedSection delay={0.1} className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start py-16"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-8"
                    style={{ backgroundColor: '#C9A96E' }}
                  >
                    <Check size={28} color="white" />
                  </div>
                  <h2 className="font-display text-4xl font-light mb-4">Thank You</h2>
                  <p className="font-body text-neutral-500 leading-relaxed max-w-md">
                    Your enquiry has been received. A senior designer will contact you within 24 hours
                    to discuss your project.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <label className="text-xs tracking-widest uppercase font-body text-neutral-400 block mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase font-body text-neutral-400 block mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase font-body text-neutral-400 block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (000) 000-0000"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase font-body text-neutral-400 block mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                        style={inputStyle}
                      >
                        <option value="">Select type</option>
                        <option>New Build</option>
                        <option>Full Renovation</option>
                        <option>Partial Renovation</option>
                        <option>Design Consultation Only</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-xs tracking-widest uppercase font-body text-neutral-400 block mb-2">
                        Approximate Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer`}
                        style={inputStyle}
                      >
                        <option value="">Select range</option>
                        <option>$5,000 – $7,000</option>
                        <option>$7,000 – $10,000</option>
                        <option>$10,000 – $15,000</option>
                        <option>$15,000+</option>
                        <option>To be discussed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-widest uppercase font-body text-neutral-400 block mb-2">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your vision, space dimensions, style preferences, timeline..."
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 group disabled:opacity-60"
                    style={{ backgroundColor: '#C9A96E', color: 'white' }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.backgroundColor = '#b8924d'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.backgroundColor = '#C9A96E'; }}
                  >
                    {loading ? 'Sending...' : 'Send Enquiry'}
                    {!loading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />}
                  </button>
                </form>
              )}
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs tracking-[0.25em] uppercase font-body text-neutral-400 mb-8">
                    Contact Information
                  </h3>
                  <div className="space-y-8">
                    {contactInfo.map((item) => {
                      const Icon = item.icon;
                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className="flex items-start gap-4 group"
                        >
                          <Icon size={16} color="#C9A96E" className="mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs text-neutral-400 font-body tracking-wider uppercase mb-1">
                              {item.label}
                            </p>
                            <p className="font-body text-sm text-neutral-800 group-hover:text-gold transition-colors duration-300" style={{ color: 'inherit' }}>
                              {item.value}
                            </p>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(201,169,110,0.3)', paddingTop: '3rem' }}>
                  <h3 className="text-xs tracking-[0.25em] uppercase font-body text-neutral-400 mb-4">
                    Showroom Hours
                  </h3>
                  <div className="space-y-2 font-body text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Monday – Friday</span>
                      <span className="text-neutral-800">9:00 – 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Saturday</span>
                      <span className="text-neutral-800">10:00 – 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Sunday</span>
                      <span className="text-neutral-400">By appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="map" className="h-96 relative bg-neutral-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.3257627855424!2d-73.99652492346428!3d40.74812037138969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a4d2df7d5d%3A0x62f5d1b7e4a7c7ef!2s158+W+27th+St%2C+New+York%2C+NY+10001!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0.3) contrast(0.9)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="TushaDesign Atelier Location"
        />
      </section>
    </>
  );
}
