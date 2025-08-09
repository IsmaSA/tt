import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Microscope,
  Globe,
  Map,
  Route,
  Ship,
  Landmark,
  Database,
  BarChart3,
} from "lucide-react";
import Navigation from "@/components/Navigation";

/**
 * Research: aligned with Isma's work on spatio-temporal dynamics of invasions,
 * SDMs under climate change, pathways/vectors (incl. Ponto-Caspian),
 * economic costs (InvaCost), and freshwater connectivity/barrier removal.
 */
const Research = () => {
  const researchAreas = [
    {
      icon: <Map className="h-8 w-8 text-primary" />,
      title: "Spatio-temporal dynamics & hotspots",
      description:
        "Global and regional analyses of establishment, spread velocity, shifting hotspots, and sender–recipient realm patterns using GBIF and allied sources.",
      keywords: ["GBIF", "α-hulls", "Hotspot shifts", "Realm flows"],
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "SDMs & climate risk forecasting",
      description:
        "Species distribution models with robust cross-validation to map current/future invasion risk and uncertainty.",
      keywords: ["SDM", "Block CV", "GLM/GAM", "Climate scenarios"],
    },
    {
      icon: <Route className="h-8 w-8 text-primary" />,
      title: "Pathways & vectors",
      description:
        "Quantifying introductions via shipping, canals, and trade networks, with emphasis on Ponto-Caspian corridors to North/Baltic seas.",
      keywords: ["Shipping", "Canals", "Trade", "Ponto-Caspian"],
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Economic costs & impact disharmony",
      description:
        "Synthesis of invasion costs across taxa/regions (InvaCost) and mismatches between biodiversity change and economic impacts.",
      keywords: ["InvaCost", "Costs synthesis", "Impact disharmony"],
    },
    {
      icon: <Landmark className="h-8 w-8 text-primary" />,
      title: "Urban & heritage site risk",
      description:
        "Assessing threats to cities and World Heritage Sites via local species pools and trait–environment interactions.",
      keywords: ["Cities", "World Heritage", "Exposure", "Risk scoring"],
    },
    {
      icon: <Ship className="h-8 w-8 text-primary" />,
      title: "Freshwater connectivity & barriers",
      description:
        "Effects of barrier removals and hydrological connectivity on spread dynamics in river networks.",
      keywords: ["Barrier removal", "Spread velocity", "Rivers"],
    },
  ];

  const currentProjects = [
    {
      title: "Temporal shift of global invasion hotspots",
      description:
        "30k-species GBIF synthesis at ~0.08° to map historical hotspots (1950–2025) and identify emerging regions.",
      status: "Analysis",
      funding: "—",
    },
    {
      title: "SDMs of invasive threats to World Heritage Sites",
      description:
        "Presence within 50-km buffers, multi-species SDMs, and aggregation of risk around UNESCO sites.",
      status: "Modelling",
      funding: "—",
    },
    {
      title: "Native range database for non-native species (~37k spp.)",
      description:
        "Standardising native ranges (focus on spiders & molluscs) to improve pathway inference and SDM transferability.",
      status: "Data curation",
      funding: "—",
    },
    {
      title: "Spread dynamics of EU concern species in Iberia",
      description:
        "GBIF-based α-convex hulls and GAMs to estimate range expansion, velocity and effective range radius for 63 species.",
      status: "Manuscript",
      funding: "—",
    },
    {
      title: "Riverine barrier removals & invasion proliferation",
      description:
        "Evaluating how connectivity restoration may accelerate freshwater invasions; guidance for mitigation.",
      status: "In prep",
      funding: "—",
    },
    {
      title: "Ponto-Caspian pathways to North/Baltic seas",
      description:
        "Integrating pathway mapping, literature-based genetics, and tolerance experiments to forecast future waves.",
      status: "Design",
      funding: "Proposal",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Research Areas</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quantifying and forecasting biological invasions through spatio-temporal analyses,
            SDMs, pathway inference, and synthesis of economic impacts.
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
                  {area.keywords.map((kw: string, i: number) => (
                    <Badge key={i} variant="secondary">
                      {kw}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Current Projects */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Database className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Current Projects</h2>
          </div>
          <div className="space-y-6">
            {currentProjects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === "Analysis" || project.status === "Modelling" || project.status === "Design" ? "secondary" : "default"}>
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
