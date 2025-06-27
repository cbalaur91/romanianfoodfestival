'use client';

import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Mail, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function NewsletterSignup() {
  const [state, handleSubmit] = useForm("xkgbkjbq");
  const [email, setEmail] = useState('');
  const [isConsented, setIsConsented] = useState(false);
  const { toast } = useToast();

  const isEmailValid = (email: string): boolean => {
    // More robust email validation regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return email.length <= 254 && emailRegex.test(email.trim());
  };

  // Handle success state changes
  useEffect(() => {
    if (state.succeeded) {
      setEmail('');
      setIsConsented(false);
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter. You'll receive updates about the Romanian Food Festival.",
      });
    }
  }, [state.succeeded, toast]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Client-side validation for immediate feedback
    if (!isEmailValid(email) || !isConsented) {
      toast({
        title: "Missing information",
        description: "Please enter a valid email address and confirm consent to receive emails.",
        variant: "destructive",
      });
      return;
    }

    // Call Formspree's handleSubmit
    await handleSubmit(e);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gray-100 rounded-2xl p-8 sm:p-12 text-gray-900">
          <div className="mb-6">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Get the latest news about the Romanian Food Festival, including
              special events, and menu updates delivered straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value.trim())}
                className="flex-1 bg-white text-gray-900"
                maxLength={254}
                required
              />
              <Button
                type="submit"
                disabled={state.submitting || !isEmailValid(email) || !isConsented}
                className="bg-romanian-blue hover:bg-romanian-blue/80 text-white px-8"
              >
                {state.submitting ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </div>
            
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
            
            <div className="flex items-start space-x-2 text-left">
              <Checkbox
                id="consent"
                name="consent"
                checked={isConsented}
                onCheckedChange={(checked) => setIsConsented(checked === true)}
                disabled={!isEmailValid(email)}
                className="mt-1 bg-white border-gray-300 data-[state=checked]:bg-romanian-blue data-[state=checked]:border-romanian-blue disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <Label
                htmlFor="consent"
                className={`text-sm text-gray-600 leading-relaxed ${isEmailValid(email) ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
              >
                I consent to receive emails from the Romanian Food Festival about upcoming events, 
                special offers, and festival updates. I understand I can unsubscribe at any time.
              </Label>
            </div>
            
            <ValidationError 
              prefix="Consent" 
              field="consent"
              errors={state.errors}
              className="text-red-500 text-sm"
            />
          </form>

          <p className="text-xs text-gray-500 mt-4">
            We respect your privacy and will never share your email with third parties.
          </p>
        </div>
      </div>
    </section>
  );
}