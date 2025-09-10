import { Card, CardContent } from '@/components/ui/card';
import { Code, Heart, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always learning new technologies'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on delivering results'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Love what I do every day'
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Get to know more about who I am and what I do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a Mechanical Engineering graduate from Acropolis Institute of Technology and Research with a Diploma and B-Tech. Though my academic background is in engineering, my true passion lies in software development.
                </p>
                <p>
                  My journey into software began with hackathons like WittyHacks 3.0, which enhanced my problem-solving skills and sparked my interest in coding.
                </p>
                <p>
                  Currently, I am focused on Full Stack Development, building real-world projects, and continuously learning to stay updated with the latest technologies.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">What I Do</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I create full-stack web applications using modern technologies like
                  React, Node.js, and TypeScript. My focus is on building scalable,
                  maintainable applications with great user experiences.
                </p>
                <p>
                  I work closely with designers and stakeholders to transform ideas
                  into functional, beautiful applications. I believe in the power of
                  clean code, testing, and continuous integration.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving
                  to deliver solutions that not only work well but also provide value
                  to users and businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card/50 hover:bg-card transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <highlight.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;