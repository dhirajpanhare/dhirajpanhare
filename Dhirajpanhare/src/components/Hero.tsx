import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/hero-image.png';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhirajpanhare', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhirajpanhare/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dhirajpanhare08@gmail.com', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-52 h-52 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
             Dhiraj Panhare
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full Stack Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about creating beautiful, functional, and user-friendly applications
            with modern technologies and best practices.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Button
                key={label}
                variant="outline"
                size="icon"
                asChild
                className="bg-card/50 hover:bg-card hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-card/50 hover:bg-card shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;