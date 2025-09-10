import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Database, Globe, Users, Lightbulb } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript/TypeScript' },
    { name: 'React' },
    { name: 'Node.js/Express' },
    { name: 'Python/Django' },
    { name: 'SQL/NoSQL Databases'},


  ];

  const softSkills = [
    { name: 'Problem Solving'},
    { name: 'Team Collaboration' },
    { name: 'Project Management'},
    { name: 'Leadership'},
    { name: 'Time Management'}
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Firebase'
  ];

  const SkillCategory = ({ title, skills, icon: Icon }) => (
    <Card className="bg-card/20 hover:bg-card transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Icon className="h-5 w-5 text-primary mr-2" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{skill.name}</span>
    
              </div>
             
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="skills" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies and expertise I bring to every project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <SkillCategory 
              title="Technical Skills" 
              skills={technicalSkills} 
              icon={Code}
            />
            <SkillCategory 
              title="Soft Skills" 
              skills={softSkills} 
              icon={Users}
            />
          </div>

          {/* Technologies */}
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Globe className="h-5 w-5 text-primary mr-2" />
                Technologies & Tools
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold mb-6">What I Bring</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Development Excellence</h4>
                <p className="text-muted-foreground">
                  Clean, efficient code using best practices and modern development methodologies.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Design Thinking</h4>
                <p className="text-muted-foreground">
                  User-centered design approach with attention to aesthetics and usability.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-semibold">Collaboration</h4>
                <p className="text-muted-foreground">
                  Strong communication and teamwork skills for successful project delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;