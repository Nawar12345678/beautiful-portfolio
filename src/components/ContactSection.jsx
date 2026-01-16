import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 scroll-mt-24"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              <InfoItem icon={<Mail />} title="Email">
                <a href="mailto:nawwaralissa1997@gmail.com">
                  nawwaralissa1997@gmail.com
                </a>
              </InfoItem>

              <InfoItem icon={<Phone />} title="Phone">
                <a href="tel:+963984695648">+963 984 695 648</a>
              </InfoItem>

              <InfoItem icon={<MapPin />} title="Location">
                Syria, Damascus
              </InfoItem>
            </div>

            <div>
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <SocialLink href="https://www.linkedin.com/in/nawar-alissa-31175b244">
                  <LinkedinIcon />
                </SocialLink>
                <SocialLink href="https://www.instagram.com/nawar.alissa/">
                  <InstagramIcon />
                </SocialLink>
                <SocialLink href="https://github.com/Nawar12345678">
                  <GithubIcon />
                </SocialLink>
                <SocialLink href="mailto:nawwaralissa1997@gmail.com">
                  <MailIcon />
                </SocialLink>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input label="Your Name" placeholder="Nawar Alissa..." />
              <Input label="Your Email" type="email" placeholder="john@gmail.com" />
              <Textarea label="Your Message" />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Helpers */

const InfoItem = ({ icon, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <div>
      <h4 className="font-medium">{title}</h4>
      <div className="text-muted-foreground">{children}</div>
    </div>
  </div>
);

const SocialLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-primary transition-colors"
  >
    {children}
  </a>
);

const Input = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      required
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
    />
  </div>
);

const Textarea = ({ label }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <textarea
      required
      rows={4}
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      placeholder="Hello, I'd like to talk about..."
    />
  </div>
);
