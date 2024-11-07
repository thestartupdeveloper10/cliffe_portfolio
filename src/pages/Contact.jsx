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

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_USER_ID
    )
      .then((result) => {
        console.log('Email sent successfully!');
        setNotification({ show: true, success: true });
        e.target.reset();
        // Hide notification after 5 seconds
        setTimeout(() => setNotification({ show: false, success: true }), 5000);
      }, (error) => {
        console.log('Failed to send email:', error.text);
        setNotification({ show: true, success: false });
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
          Let's collaborate on bringing your next project to life.
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
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" name="first_name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" name="last_name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="user_email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}