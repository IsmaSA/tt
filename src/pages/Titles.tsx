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
 * Titles page tailored to Isma: education, short courses/certifications,
 * current position, awards, and memberships (with external links).
 */
const Titles = () => {
  // —— Education (from your list) ——
  const education = [
    {
      degree: "Ph.D. in Ecology",
      institution: "University of South Bohemia",
      location: "Vodňany, Czechia",
      year: "2025",
      thesis: "",
      advisor: "",
    },
    {
      degree: "M.Sc. in Ecology",
      institution: "Universidad Autónoma de Madrid (UAM)",
      location: "Madrid, Spain",
      year: "2021",
      thesis: "",
      advisor: "",
    },
    {
      degree: "Erasmus+ (1-year), Environmental Science",
      institution: "Universidade do Porto",
      location: "Porto, Portugal",
      year: "2018",
      thesis: "",
      advisor: "",
    },
    {
      degree: "B.Sc. in Environmental Sciences",
      institution: "Universidad Autónoma de Madrid (UAM)",
      location: "Madrid, Spain",
      year: "2019",
      thesis: "",
      advisor: "",
    },
  ];

  // —— Short courses / certifications ——
  const trainings = [
    {
      name: "PH525.1x: Statistics and R",
      provider: "HarvardX (edX)",
      year: "2018",
    },
    {
      name: "Global Warming I: The Science and Modeling of Climate Change",
      provider: "University of California (Coursera)",
      year: "2018",
    },
  ];

  // —— Current & past positions ——
  const positions: Array<{
    title: string;
    institution: string;
    period: string;
    type: "Academic" | "Research" | "Industry";
  }> = [
    {
      title: "Postdoctoral Researcher",
      institution: "University of South Bohemia",
      period: "2025 – present",
      type: "Research",
    },
  ];

  // —— Awards ——
  const awards: Array<{ name: string; organization: string; year: string; description?: string }> = [
    {
      name: "Best PhD Presentation",
      organization: "—",
      year: "2022",
      description: "",
    },
    {
      name: "Best PhD Presentation",
      organization: "—",
      year: "2024",
      description: "",
    },
    {
      name: "Best Student Publication",
      organization: "—",
      year: "2024",
      description:
        "Sigmoidal curves reflect impacts and dynamics of aquatic invasive species.",
    },
  ];

  // —— Memberships with links ——
  const memberships: Array<{ name: string; url: string }> = [
    { name: "InvaCost", url: "https://invacost.fr/en/accueil/" },
    {
      name: "Asociación Ibérica de Limnología (AIL)",
      url: "https://www.limnetica.net/es/limnologia-iberoamericana",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Academic Titles & Credentials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Formal education and complementary training relevant to invasion science and quantitative ecology.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <Card key={i} className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg">
                    {edu.institution} • {edu.location} • {edu.year}
                  </CardDescription>
                </CardHeader>
                {(edu.thesis || edu.advisor) && (
                  <CardContent>
                    {edu.thesis && (
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>Thesis:</strong> {edu.thesis}
                      </p>
                    )}
                    {edu.advisor && (
                      <p className="text-sm text-muted-foreground">
                        <strong>Advisor:</strong> {edu.advisor}
                      </p>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Short Courses & Certifications */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Short Courses & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trainings.map((t, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <Star className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <CardTitle className="text-lg">{t.name}</CardTitle>
                      <CardDescription>
                        {t.provider} • {t.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
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
          {positions.length > 0 ? (
            <div className="space-y-6">
              {positions.map((p, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{p.title}</CardTitle>
                        <CardDescription className="text-lg">{p.institution}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant={p.type === "Academic" ? "default" : "secondary"}>
                          {p.type}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-1">{p.period}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-6 text-muted-foreground">
              </CardContent>
            </Card>
          )}
        </div>

        {/* Awards & Honors */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Awards & Honors</h2>
          </div>
          {awards.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((a, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <Star className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <CardTitle className="text-lg">{a.name}</CardTitle>
                        <CardDescription>
                          {a.organization} • {a.year}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  {a.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{a.description}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="py-6 text-muted-foreground">
              </CardContent>
            </Card>
          )}
        </div>

        {/* Professional Memberships */}
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-foreground mb-8">Professional Memberships</h2>
          {memberships.length > 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {memberships.map((m, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full"></div>
                      <a
                        href={m.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground underline underline-offset-2"
                      >
                        {m.name}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="py-6 text-muted-foreground">
                Add memberships (e.g., IAA, ESA) when you’re ready.
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Titles;
