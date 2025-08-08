import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";
import Navigation from "@/components/Navigation";

/**
 * Page detailing educational background, professional positions, awards
 * and memberships.  Structured into discrete sections for clarity and
 * readability.  Uses cards and lists to organise information.
 */
const Titles = () => {
  const education = [
    {
      degree: "Ph.D. in Ecology and Evolutionary Biology",
      institution: "University of California, Davis",
      year: "2018",
      thesis: "Predictive Modeling of Biological Invasions in Mediterranean Ecosystems",
      advisor: "Dr. Sarah Johnson",
    },
    {
      degree: "M.Sc. in Environmental Science",
      institution: "Stanford University",
      year: "2014",
      thesis: "Impact Assessment of Invasive Plant Species on Native Biodiversity",
      advisor: "Dr. Michael Thompson",
    },
    {
      degree: "B.Sc. in Biology",
      institution: "Universidad de Chile",
      year: "2012",
      thesis: "Ecological Interactions in Coastal Ecosystems",
      advisor: "Dr. Carmen Rodriguez",
    },
  ];

  const positions = [
    {
      title: "Associate Professor",
      institution: "Department of Ecology, University of California, Davis",
      period: "2023 - Present",
      type: "Academic",
    },
    {
      title: "Assistant Professor",
      institution: "Department of Ecology, University of California, Davis",
      period: "2019 - 2023",
      type: "Academic",
    },
    {
      title: "Postdoctoral Research Fellow",
      institution: "Institute for Biodiversity Science, Yale University",
      period: "2018 - 2019",
      type: "Research",
    },
  ];

  const awards = [
    {
      name: "Early Career Excellence Award",
      organization: "International Association for Ecology",
      year: "2023",
      description: "For outstanding contributions to invasion biology research",
    },
    {
      name: "NSF CAREER Award",
      organization: "National Science Foundation",
      year: "2022",
      description: "Supporting research on predictive models for biological invasions",
    },
    {
      name: "Young Investigator Award",
      organization: "Society for Conservation Biology",
      year: "2021",
      description: "Recognition for innovative research in conservation science",
    },
    {
      name: "Best Paper Award",
      organization: "Journal of Applied Ecology",
      year: "2020",
      description: "For the paper 'Machine Learning in Invasion Risk Assessment'",
    },
  ];

  const memberships = [
    "International Association for Ecology (IAE)",
    "Society for Conservation Biology (SCB)",
    "Ecological Society of America (ESA)",
    "Association for Tropical Biology and Conservation (ATBC)",
    "International Union for Conservation of Nature (IUCN)",
    "Society for the Study of Evolution (SSE)",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Academic Titles & Credentials</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey and professional achievements in ecological research
          </p>
        </div>
        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg">
                    {edu.institution} • {edu.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Thesis:</strong> {edu.thesis}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Advisor:</strong> {edu.advisor}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Academic Positions */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Academic Positions</h2>
          </div>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <CardDescription className="text-lg">{position.institution}</CardDescription>
                    </div>
                    <div className="text-right">
                      <Badge variant={position.type === "Academic" ? "default" : "secondary"}>
                        {position.type}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">{position.period}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        {/* Awards and Honors */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Awards & Honors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <CardTitle className="text-lg">{award.name}</CardTitle>
                      <CardDescription>
                        {award.organization} • {award.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Professional Memberships */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8">Professional Memberships</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {memberships.map((membership, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{membership}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Titles;