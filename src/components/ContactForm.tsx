
import { useState } from 'react';
import Button from './Button';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="form-input"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-input resize-none"
        />
      </div>
      
      <div className="flex justify-center">
        <Button 
          type="submit" 
          variant="accent" 
          className={cn(
            "w-full md:w-auto",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? "SENDING..." : "SUBMIT"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
