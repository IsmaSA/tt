import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight, Microscope, Globe, TrendingUp, BookOpen, Users, Award, FileText, Quote, ExternalLink,
} from "lucide-react";
import { Github, Twitter, Mail, GraduationCap, Link as LinkIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import TopCollaborators from "@/components/TopCollaborators";
import bgHero from "@/assets/Bg.jpeg";

const Index = () => {
  // --- Edit these numbers anytime (they’re shown on the homepage) ---
  const achievements = [
    { icon: BookOpen, value: "60+", label: "Publications" },   // update from Scholar if desired
    { icon: Users,   value: "747", label: "Citations" },      // "
    { icon: Award,   value: "14",    label: "h-index" },        // "
    { icon: Globe,   value: "20",    label: "i10" },
  ];

  // Research areas aligned with your profile
  const researchAreas = [
    {
      icon: Microscope,
      title: "Spatio-temporal dynamics of invasions",
      description: "Global and regional trends in establishment, spread velocity, and shifting hotspots.",
      publications: 20,
    },
    {
      icon: Globe,
      title: "Species Distribution Models (SDMs)",
      description: "SDMs and cross-validation for forecasting invasion risk under climate change.",
      publications: 15,
    },
    {
      icon: TrendingUp,
      title: "Economic impacts (InvaCost)",
      description: "Synthesis of economic costs and impact disharmony across taxa and regions.",
      publications: 10,
    },
  ];
  const profiles = [
    {
      type: "Google Scholar",
      title: "Google Scholar",
      description: "Publications & citation metrics.",
      url: "https://scholar.google.com/citations?user=y3nT7tkAAAAJ&hl=es",
      icon: GraduationCap,
    },
    {
      type: "ORCID",
      title: "ORCID: 0000-0002-7288-6336",
      description: "Persistent researcher identifier.",
      url: "https://orcid.org/0000-0002-7288-6336",
      icon: LinkIcon,
    },
    {
      type: "GitHub",
      title: "github.com/ismasa",
      description: "Code & reproducible analyses.",
      url: "https://github.com/ismasa",
      icon: Github,
    },

  ];
  // Curated, representative publications (examples)
  const bestPublications = [
    {
      title: "Using species ranges and macroeconomic data to fill the gap in costs of biological invasions",
      journal: "Nature Ecology & Evolution",
      year: "2025",
      citations: 5,               // as of Aug 2025
      impact: "Interpolation",
      url: "https://www.nature.com/articles/s41559-025-02697-5",
    },
    {
      title: "Taming the terminological tempest in invasion science",
      journal: "Biological Reviews",
      year: "2024",
      citations: 0,                // update from Scholar if desired
      impact: "Conceptual",
      url: "https://onlinelibrary.wiley.com/doi/10.1111/brv.13071",
    },
    {
      title: "Divergent temporal responses of native macroinvertebrate communities to biological invasions",
      journal: "Global Change Biology",
      year: "2024",
      citations: 15,               // SSRN / early citations
      impact: "Meta-analysis",
      url: "https://doi.org/10.1111/gcb.17521",
    },
  ];

  // External sources & profiles
  const sources = [
    {
      type: "Profile",
      title: "GitHub",
      description: "/IsmaSA",
      url: "https://github.com/IsmaSA",
    },
    {
      type: "Profile",
      title: "Twitter",
      description: "@ismasoto",
      url: "https://x.com/ismasoto",
    },
    {
      type: "Profile",
      title: "Google Scholar",
      description: "Up-to-date publications, citations and metrics.",
      url: "https://scholar.google.com/citations?user=y3nT7tkAAAAJ&hl=es",
    },
    {
      type: "Identifier",
      title: "ORCID: 0000-0002-7288-6336",
      description: "Persistent researcher identifier and works.",
      url: "https://orcid.org/0000-0002-7288-6336",
    },
  ];

  const topCollaborators = [
    {
      name: "Phillip J. Haubrock",
      role: "Invasion ecology; supervisor",
      pubs: 20,
      avatarUrl: "",       // e.g., haubrockImg or full https URL
      profileUrl: "",      // e.g., Scholar/ORCID/website
    },
    {
      name: "Ross N. Cuthbert",
      role: "Risk & biosecurity",
      pubs: 18,
      avatarUrl: "",
      profileUrl: "",
    },
    {
      name: "Irene Martín-Forés",
      role: "Plant invasions",
      pubs: 12,
      avatarUrl: "",
      profileUrl: "",
    },
    // add more as needed…
  ];
  
  const toInitials = (name: string) =>
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0]!.toUpperCase())
      .join("");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

     {/* Hero */}
<section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background image */}
  <div className="absolute inset-0 z-0">
    <img
      src={bgHero}
      alt=""
      aria-hidden="true"
      className="h-full w-full object-cover opacity-80"
    />
  </div>

  {/* Green tint overlay */}
  <div
  className="absolute inset-0 z-10 bg-gradient-to-b
             from-emerald-200/20 via-emerald-100/10 to-transparent
             pointer-events-none"                      // was /60 and /40
/>
  {/* Existing gradient accents */}
  <div className="absolute inset-0 z-20 bg-gradient-hero opacity-10 pointer-events-none" />
  <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-20 pointer-events-none" />
  <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-20 pointer-events-none" />

  {/* Content */}
  <div className="max-w-7xl mx-auto relative z-30">
    <div className="text-center">
      <Badge variant="secondary" className="mb-6 glass-effect shadow-glow">
        🔬 Biological Invasions • SDMs • Climate change • Spatio-temporal modelling
      </Badge>
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-br from-foreground via-primary to-accent bg-clip-text text-transparent mb-8 leading-tight">
        PhD Ismael Soto
      </h1>
      <p className="text-xl md:text-2xl text-black dark:text-black mb-12 max-w-4xl mx-auto leading-relaxed">
  I study the spatio-temporal patterns and impacts of non-native species, integrating
  ecological theory with data science (GLMs, GAMs, SDMs) to forecast risk and inform
  management.
</p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Link to="/research">
          <Button size="lg" className="group shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
            Explore Research
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
        <Link to="/sources">
          <Button variant="outline" size="lg" className="glass-effect hover:bg-primary/10 transition-all duration-300">
            View Publications
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>


{/* Research Profiles */}
<section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Research Profiles</h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
   Main research lines
      </p>
    </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {researchAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <Card key={i} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-card">
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
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                      {area.publications}+ publications
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      <TopCollaborators />

      {/* Achievements */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Research Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Metrics summarizing publication volume, influence, and international collaboration.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((it, i) => {
              const Icon = it.icon;
              return (
                <Card key={i} className="text-center group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card border-0">
                  <CardContent className="pt-8 pb-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-3">
                      {it.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{it.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Publications */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Selected Publications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Top-3 best publication (IMO!)
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {bestPublications.map((pub, i) => (
              <Card key={i} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">{pub.impact}</Badge>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Quote className="h-4 w-4" />
                      <span>{pub.citations}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                    {pub.title}
                  </CardTitle>
                  <CardDescription className="text-sm">{pub.journal} • {pub.year}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={pub.url} target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 transition-colors">
                      <FileText className="h-4 w-4 mr-2" />
                      View Publication
                    </Button>
                  </a>
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

      {/* Sources & Profiles */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Research Profiles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Key datasets and profiles supporting transparent, reproducible research.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sources.map((s, i) => (
              <Card key={i} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">{s.type}</Badge>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{s.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{s.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <a href={s.url} target="_blank" rel="noreferrer">
                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10 transition-colors">
                      Access
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/sources">
              <Button size="lg" className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
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
