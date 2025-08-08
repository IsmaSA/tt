import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Microscope, TreePine, Fish, Bug } from "lucide-react";
import Navigation from "@/components/Navigation";

/**
 * Research page detailing the various thematic areas under study and
 * summarising ongoing projects.  Each area is presented in a card
 * highlighting its icon, description and associated keywords.  A
 * second section lists current projects with their status and funding.
 */
const Research = () => {
  const researchAreas = [
    {
      icon: <TreePine className="h-8 w-8 text-primary" />,
      title: "Plant Invasions",
      description:
        "Studying the mechanisms and ecological impacts of invasive plant species on native ecosystems.",
      keywords: ["Ecosystem dynamics", "Species interactions", "Habitat modification"],
    },
    {
      icon: <Fish className="h-8 w-8 text-primary" />,
      title: "Aquatic Invasions",
      description:
        "Research on invasive aquatic species and their effects on freshwater and marine environments.",
      keywords: ["Marine ecology", "Freshwater systems", "Biodiversity loss"],
    },
    {
      icon: <Bug className="h-8 w-8 text-primary" />,
      title: "Insect Invasions",
      description:
        "Investigating the spread patterns and ecological consequences of invasive insect species.",
      keywords: ["Population dynamics", "Agricultural impacts", "Vector ecology"],
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Invasion Genetics",
      description:
        "Genetic analysis of invasion processes and adaptive evolution in introduced species.",
      keywords: ["Population genetics", "Molecular markers", "Evolutionary ecology"],
    },
  ];

  const currentProjects = [
    {
      title: "Global Patterns of Biological Invasions",
      description:
        "A comprehensive analysis of invasion patterns across different biomes and their relationship with climate change.",
      status: "Ongoing",
      funding: "NSF Grant #2024-001",
    },
    {
      title: "Predictive Models for Invasion Risk",
      description:
        "Developing machine learning models to predict invasion success and ecosystem impacts.",
      status: "Data Collection",
      funding: "University Research Grant",
    },
    {
      title: "Economic Impacts of Invasive Species",
      description:
        "Quantifying the economic costs of biological invasions across different sectors.",
      status: "Analysis Phase",
      funding: "EPA Collaborative Research",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Areas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the complex dynamics of biological invasions and their ecological, economic, and social impacts
          </p>
        </div>
        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {researchAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  {area.icon}
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.keywords.map((keyword, idx) => (
                    <Badge key={idx} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Current Projects */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Current Projects
          </h2>
          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    <strong>Funding:</strong> {project.funding}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;