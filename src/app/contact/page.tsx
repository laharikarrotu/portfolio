'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { sendEmail } from 'C:/Users/santh/portfolio/src/lib/emailjs.ts';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await sendEmail(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const renderField = (
    fieldName: keyof FormData,
    label: string,
    type: string = 'text',
    isTextarea: boolean = false
  ) => {
    const Component = isTextarea ? 'textarea' : 'input';
    
    return (
      <div>
        <label htmlFor={fieldName} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
        <Component
          id={fieldName}
          name={fieldName}
          type={type}
          value={formData[fieldName]}
          onChange={handleChange}
          className={`block w-full rounded-md shadow-sm transition-colors
            ${errors[fieldName] 
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            }`}
          {...(isTextarea ? { rows: 4 } : {})}
        />
        {errors[fieldName] && (
          <p className="mt-1 text-sm text-red-600">{errors[fieldName]}</p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
          <p className="mt-4 text-lg text-gray-600">
            Have a project in mind? Let's discuss how I can help you with your data engineering needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <a 
                    href="mailto:laharikarrothu@gmail.com"
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    laharikarrothu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <a 
                    href="tel:321-367-9669"
                    className="text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    321-367-9669
                  </a>
                </div>
              </div>
              </div>

              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="text-gray-900">Melbourne, Florida 32901</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/laharikarrotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                >
                  <Github className="w-6 h-6 text-gray-700" />
                </a>
                <a
                  href="https://www.linkedin.com/in/laharikarrotu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                >
                  <Linkedin className="w-6 h-6 text-gray-700" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {renderField('name', 'Name')}
              {renderField('email', 'Email', 'email')}
              {renderField('subject', 'Subject')}
              {renderField('message', 'Message', 'text', true)}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 rounded-lg text-white transition-colors ${
                  isSubmitting 
                    ? 'bg-blue-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-md">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md">
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}