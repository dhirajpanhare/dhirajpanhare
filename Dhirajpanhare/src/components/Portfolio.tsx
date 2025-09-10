import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import project1Image from '@/assets/projectt.png';
import project2Image from '@/assets/project2.jpg';
import project3Image from '@/assets/project2.png';
import project4Image from '@/assets/project4.png';
import project5Image from '@/assets/project5.png';
const Portfolio = () => {
  const projects = [
    {
      title: 'OYEFILL',
      description: 'OYEFILL is a full-stack platform for easy form-filling and real-time exam alerts for jobs, admissions, and entrance exams ',
      image: project1Image,
      technologies: ['React', 'Javascript', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: 'https://oyefill.vercel.app/',
      githubUrl: 'https://github.com/dhirajpanhare/oyefill',
      category: 'Web Application'
    },
    {
      title: 'Bhartiya Baazar',
      description: 'Full-featured e-commerce platform with payment integration, user authentication, and responsive design.',
      image: project2Image,
       technologies: ['React', 'Javascript', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Application'
    },
    {
      title: 'MyMusic',
      description: 'As a passionate programmer, I independently designed and developed a music web app.',
      image: project3Image,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: 'https://github.com/dhirajpanhare/mymusic',
      githubUrl: 'https://github.com/dhirajpanhare/mymusic',
      category: 'Web Application'
    },
    {
      title: 'Dhiraj Personal Portfolio',
      description: ' As a passionate programmer, I independently designed and developed a portfolio web app.',
      image: project4Image,
         technologies: ['React', 'Typescript', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: 'https://dhirajpanhare.github.io/dhirajpanhare/',
      githubUrl: 'https://github.com/dhirajpanhare/dhirajpanhare',
      category: 'Web Application'
    },
    {
      title: 'SkillNest',
      description: 'SkillNest is an LMS for managing tasks, online exams, and submissions with role-based access and progresstracking . ',
      image: project5Image,
     technologies: ['React', 'Javascript', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      category: 'Web Appication'
    },
 
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              A showcase of my recent projects and accomplishments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card/50 hover:bg-card transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start a Project
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;