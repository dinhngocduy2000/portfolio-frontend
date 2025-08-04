import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Techvify Software",
      period: "April 2024 - Present",
      location: "Hanoi, Vietnam",
      description: [
        "Develop and maintain web applications for global clients using ReactJS and NextJS, ensuring high performance and scalability",
        "Collaborate on back-end tasks using Python FastAPI, integrating PostgreSQL databases and Docker containers for deployment",
        "Participate in business planning by providing UI/UX suggestions and contributing innovative ideas to enhance project outcomes",
        "Work in an outsourcing environment, delivering solutions tailored to international client requirements",
        "Contribute to code reviews, optimizing front-end architecture and ensuring best practices",
        "Collaborate with R&D department to support building, enhancing their products",
      ],
      achievements: [
        "Employee of the Month in June 2024",
        "Praised by a Singaporean top client for outstanding performance",
        "Contributed as a key frontend developer to a project that was flawlessly delivered to the Singaporean government",
      ],
    },
    {
      title: "Front-End Developer & Mobile Developer",
      company: "Hyperlogy",
      period: "June 2022 - March 2024",
      location: "Hanoi, Vietnam",
      description: [
        "Designed and implemented user-friendly web applications using ReactJS and TypeScript",
        "Built cross-platform mobile applications with React Native and developed native Android features using Java (6 months)",
        "Integrated RESTful APIs and WebSocket for real-time functionalities, enhancing user experience",
        "Actively engaged in business planning, offering UI design ideas and strategic suggestions to improve application usability",
        "Collaborated with cross-functional teams to deliver projects on time in an Agile environment",
      ],
      achievements: [
        "Reviewed as one of the top performers of the year",
        "Developed a product management website that has hundreds of users daily",
      ],
    },
    {
      title: "Front-End Intern",
      company: "MonstarLab",
      period: "November 2021 - April 2022",
      location: "Hanoi, Vietnam",
      description: [
        "Assisted in developing front-end features using ReactJS under senior developer supervision",
        "Participated in debugging and testing to ensure application functionality and performance",
      ],
      achievements: [],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">{exp.company}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {exp.achievements.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-gray-900 dark:text-white">
                          <Award className="w-4 h-4 text-yellow-500" />
                          Achievements:
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <Badge key={achievementIndex} variant="outline" className="mr-2 mb-2">
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
