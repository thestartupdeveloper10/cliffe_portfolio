import { useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle2, XCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [notification, setNotification] = useState({ show: false, success: false });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (formData) => {
    const newErrors = {};
    
    // First Name validation
    if (!formData.get('first_name').trim()) {
      newErrors.first_name = 'First name is required';
    }

    // Last Name validation
    if (!formData.get('last_name').trim()) {
      newErrors.last_name = 'Last name is required';
    }

    // Email validation
    const email = formData.get('user_email').trim();
    if (!email) {
      newErrors.user_email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.user_email = 'Invalid email address';
    }

    // Subject validation
    if (!formData.get('subject').trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.get('message').trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.get('message').trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(e.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_USER_ID
    )
      .then(() => {
        setNotification({ show: true, success: true });
        e.target.reset();
        setIsSubmitting(false);
        // Hide notification after 5 seconds
        setTimeout(() => setNotification({ show: false, success: true }), 5000);
      }, (error) => {
        console.error('Failed to send email:', error.text);
        setNotification({ show: true, success: false });
        setIsSubmitting(false);
        setTimeout(() => setNotification({ show: false, success: false }), 5000);
      });
  };

  return (
    <div className="p-4 mx-auto h-auto z-30" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-h1-sm md:text-h1-md lg:text-h1-lg font-bold text-gray-900 dark:text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          Let&apos;s collaborate on bringing your next project to life.
        </p>
      </div>

      {/* Notification Alert */}
      {notification.show && (
        <div className="max-w-md mx-auto mb-4">
          <Alert className={`${notification.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
            {notification.success ? (
              <CheckCircle2 className="h-4 w-4 text-green-600" />
            ) : (
              <XCircle className="h-4 w-4 text-red-600" />
            )}
            <AlertTitle className={notification.success ? 'text-green-800' : 'text-red-800'}>
              {notification.success ? 'Success!' : 'Error'}
            </AlertTitle>
            <AlertDescription className={notification.success ? 'text-green-700' : 'text-red-700'}>
              {notification.success
                ? 'Your message has been sent successfully.'
                : 'Failed to send message. Please try again.'}
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="flex justify-center items-start">
        <div className="">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="first_name" 
                      placeholder="John"
                      className={errors.first_name ? 'border-red-500' : ''} 
                    />
                    {errors.first_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.first_name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="last_name" 
                      placeholder="Doe"
                      className={errors.last_name ? 'border-red-500' : ''} 
                    />
                    {errors.last_name && (
                      <p className="text-red-500 text-sm mt-1">{errors.last_name}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="user_email" 
                    type="email" 
                    placeholder="john@example.com"
                    className={errors.user_email ? 'border-red-500' : ''} 
                  />
                  {errors.user_email && (
                    <p className="text-red-500 text-sm mt-1">{errors.user_email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    placeholder="Project Inquiry"
                    className={errors.subject ? 'border-red-500' : ''} 
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className={`min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}