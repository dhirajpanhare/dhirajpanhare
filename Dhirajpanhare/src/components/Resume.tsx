import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Mechanical',
      school: 'Acropolis Institute Of Technology & Research',
      period: '2021 - 2024',

    },
    {
      degree: 'Diploma in Mechanical',
      school: 'Acropolis Institute Of Technology & Research',
      period: '2018-2021',
  
    }
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Ypsilon IT Solutions Pvt Ltd',
      period: 'DEC 2024 - JUN 2025',
      // description: 'Leading frontend development for enterprise applications using React and TypeScript.',
      achievements: [
        'Development and implementation Full Stack application',
        'Implemented code refactoring practices, improving the application maintainability and reducing potential errors',
        'Understanding of web services & software development process'
      ]
    },
    {
      title: 'Hackathon Participent',
      company: 'Wittyhacks3.0 Datacode',
      period: 'APR 2023-APR 2023',
      achievements: [
        'Delivered 15+ client projects on time',
        'Reduced server response time by 60%',
        'Mentored 2 intern developers'
      ]
    },

  ];

  const certifications = [
    'AWS Certified Developer',
    'Google Cloud Professional',
    'Meta Frontend Developer',
    'MongoDB Certified Developer'
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-primary">Resume</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              My educational background and professional experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="bg-card/50 hover:bg-card transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        {edu.period}
                      </div>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </CardHeader>
                  
                  </Card>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <Card key={index} className="bg-card/50 hover:bg-card transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </CardHeader>
                    <CardContent>
                    
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;