import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Phone, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhirajpanhare', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhirajpanhare/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dhirajpanhare08@hmail.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Indore ,India' },
    { icon: Phone, text: '+91 9303019119' },
    { icon: Mail, text: 'dhirajpanhare08@gmail.com' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Contact Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can work together on your next project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <Card className="bg-card/50 hover:bg-card transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center">
                      <info.icon className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{info.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-card/50 hover:bg-card transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">Quick Links</h3>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card/50 hover:bg-card transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">Connect With Me</h3>
                <div className="space-y-4">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Button
                      key={label}
                      variant="ghost"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5 mr-3" />
                        {label}
                      </a>
                    </Button>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Available for freelance work
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                    asChild
                  >
                    <a href="mailto:your.email@example.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-muted-foreground text-sm">
                  © 2025 Dhiraj Panhare. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;