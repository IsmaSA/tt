import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Microscope,
  Globe,
  TrendingUp,
  BookOpen,
  Users,
  Award,
  FileText,
  Quote,
  ExternalLink,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

/**
 * Landing page for the research website.  It highlights the main
 * research areas, achievements, notable publications and provides
 * quick links to other sections.  Tailwind classes are used to
 * produce gradients, shadows and responsive layouts.
 */
const Index = () => {
  const researchAreas = [
    {
      icon: Microscope,
      title: "Species Distribution Modeling",
      description:
        "Advanced computational models to predict invasion patterns and species establishment success.",
      publications: 12,
    },
    {
      icon: Globe,
      title: "Climate Change Impact",
      description:
        "Investigating how changing climate conditions affect biological invasion dynamics.",
      publications: 8,
    },
    {
      icon: TrendingUp,
      title: "Economic Assessment",
      description:
        "Quantifying the economic costs and impacts of biological invasions on ecosystems.",
      publications: 6,
    },
  ];

  const achievements = [
    { icon: BookOpen, value: "45+", label: "Publications" },
    { icon: Users, value: "2,340", label: "Citations" },
    { icon: Award, value: "28", label: "h-index" },
    { icon: Globe, value: "15", label: "Countries" },
  ];

  const bestPublications = [
    {
      title: "Machine Learning Approaches for Predicting Biological Invasion Success",
      journal: "Nature Ecology & Evolution",
      year: "2024",
      citations: 47,
      impact: "High Impact",
    },
    {
      title: "Economic Costs of Biological Invasions in Marine Ecosystems",
      journal: "Conservation Biology",
      year: "2023",
      citations: 89,
      impact: "High Impact",
    },
    {
      title: "Climate Change Amplifies Invasion Risk",
      journal: "Global Change Biology",
      year: "2023",
      citations: 123,
      impact: "High Impact",
    },
  ];

  const sources = [
    {
      type: "Dataset",
      title: "Global Invasive Species Database (GISD)",
      description: "Comprehensive database of invasive species records worldwide",
      url: "#",
    },
    {
      type: "Repository",
      title: "Invasion Biology Research Code",
      description: "Open-source R and Python scripts for invasion modeling",
      url: "#",
    },
    {
      type: "Collaboration",
      title: "International Union for Conservation of Nature",
      description: "Partnership for global conservation research initiatives",
      url: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 glass-effect shadow-glow">
              🔬 Biological Invasions Research
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent mb-8 leading-tight">
              Dr. Ismael Soto
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Leading researcher in biological invasions, climate change impacts, and ecosystem dynamics.
              Advancing our understanding of invasive species through innovative computational approaches and cutting-edge research methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="group shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Explore Research
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-effect hover:bg-primary/10 transition-all duration-300"
              >
                View Publications
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research Focus Areas
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Interdisciplinary research combining ecology, computational biology, and environmental science to address global challenges
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 shadow-card"
                >
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-6 leading-relaxed">
                      {area.description}
                    </CardDescription>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {area.publications} publications
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Measuring the global reach and influence of our scientific contributions to invasion biology
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <Card
                  key={index}
                  className="text-center group hover:shadow-elegant transition-all duration-300 transform hover:scale-105 bg-gradient-card border-0"
                >
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-3">
                      {achievement.value}
                    </div>
                    <div className="text-muted-foreground font-medium">
                      {achievement.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best Publications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Best Publications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Highlighting our most impactful research contributions to the field of invasion biology
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bestPublications.map((pub, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 shadow-card"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {pub.impact}
                    </Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Quote className="h-4 w-4" />
                      <span>{pub.citations}</span>
                    </div>
                  </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {pub.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {pub.journal} • {pub.year}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/sources">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full group-hover:bg-primary/10 transition-colors"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      View Publication
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/sources">
              <Button size="lg" variant="outline" className="glass-effect hover:bg-primary/10">
                View All Publications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research Sources & Collaborations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Key datasets, repositories, and institutional partnerships driving our research forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sources.map((source, index) => (
              <Card
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 bg-gradient-card border-0 shadow-card"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                      {source.type}
                    </Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {source.title}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {source.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary/10 transition-colors"
                  >
                    Access Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/sources">
              <Button
                size="lg"
                className="shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Explore All Sources
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;