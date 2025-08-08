import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, BookOpen, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";

/**
 * Publications page listing recent papers and books.  Each entry shows
 * metadata such as authors, journal, year and impact.  A set of
 * statistics summarises overall output, and books are displayed in a
 * separate section.
 */
const Sources = () => {
  const publications = [
    {
      title:
        "Machine Learning Approaches for Predicting Biological Invasion Success: A Global Meta-Analysis",
      authors: "Soto, I., Johnson, S.M., Thompson, R.L., Chen, X.",
      journal: "Nature Ecology & Evolution",
      year: "2024",
      volume: "8",
      pages: "145-162",
      type: "Research Article",
      impact: "High Impact",
      citations: 47,
      doi: "10.1038/s41559-024-02341-x",
    },
    {
      title:
        "Economic Costs of Biological Invasions in Marine Ecosystems: A Systematic Review",
      authors: "Soto, I., Martinez, P., Williams, K.J.",
      journal: "Conservation Biology",
      year: "2023",
      volume: "37",
      pages: "892-905",
      type: "Review",
      impact: "High Impact",
      citations: 89,
      doi: "10.1111/cobi.14082",
    },
    {
      title: "Climate Change Amplifies Invasion Risk: Evidence from Mediterranean Ecosystems",
      authors: "Rodriguez, C., Soto, I., Brown, A.L., Davis, M.K.",
      journal: "Global Change Biology",
      year: "2023",
      volume: "29",
      pages: "2341-2356",
      type: "Research Article",
      impact: "High Impact",
      citations: 123,
      doi: "10.1111/gcb.16687",
    },
    {
      title:
        "Predictive Models for Aquatic Invasive Species Distribution Under Future Climate Scenarios",
      authors: "Soto, I., Thompson, M.J., Lee, S.H.",
      journal: "Journal of Applied Ecology",
      year: "2022",
      volume: "59",
      pages: "1456-1470",
      type: "Research Article",
      impact: "High Impact",
      citations: 156,
      doi: "10.1111/1365-2664.14195",
    },
    {
      title: "Invasion Biology in the Anthropocene: Challenges and Opportunities",
      authors: "Soto, I., Garcia, L.M.",
      journal: "Trends in Ecology & Evolution",
      year: "2022",
      volume: "37",
      pages: "789-801",
      type: "Review",
      impact: "High Impact",
      citations: 201,
      doi: "10.1016/j.tree.2022.05.008",
    },
    {
      title:
        "Genetic Diversity and Invasion Success: A Case Study of Pacific Island Ecosystems",
      authors: "Kim, J.Y., Soto, I., Roberts, P.T., Wilson, D.A.",
      journal: "Molecular Ecology",
      year: "2021",
      volume: "30",
      pages: "3421-3436",
      type: "Research Article",
      impact: "High Impact",
      citations: 178,
      doi: "10.1111/mec.15968",
    },
  ];

  const books = [
    {
      title: "Biological Invasions in a Changing World: Patterns, Processes, and Predictions",
      authors: "Soto, I. (Editor)",
      publisher: "Cambridge University Press",
      year: "2023",
      pages: "456",
      isbn: "978-1-316-51234-7",
      type: "Edited Volume",
    },
    {
      title: "Invasion Ecology: Methods and Applications",
      authors: "Soto, I., Johnson, S.M., Brown, R.K.",
      publisher: "Academic Press",
      year: "2021",
      pages: "328",
      isbn: "978-0-12-821456-9",
      type: "Textbook",
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High Impact":
        return "default";
      case "Medium Impact":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Publications & Sources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed publications and scholarly contributions to invasion biology research
          </p>
        </div>
        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground">Publications</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">2,340</div>
              <div className="text-sm text-muted-foreground">Total Citations</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">28</div>
              <div className="text-sm text-muted-foreground">h-index</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Countries Studied</div>
            </CardContent>
          </Card>
        </div>
        {/* Recent Publications */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Recent Publications</h2>
          </div>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg leading-tight mb-2">
                      {pub.title}
                    </CardTitle>
                    <div className="flex space-x-2">
                      <Badge variant={getImpactColor(pub.impact)}>{pub.impact}</Badge>
                      <Badge variant="outline">{pub.type}</Badge>
                    </div>
                  </div>
                  <CardDescription>{pub.authors}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm">
                        <strong>Journal:</strong> {pub.journal}
                      </p>
                      <p className="text-sm">
                        <strong>Year:</strong> {pub.year}
                      </p>
                      <p className="text-sm">
                        <strong>Volume:</strong> {pub.volume}, {pub.pages}
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Quote className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">{pub.citations} citations</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">DOI: {pub.doi}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Publication</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Books */}
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Books & Volumes</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{book.title}</CardTitle>
                  <CardDescription>{book.authors}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm">
                      <strong>Publisher:</strong> {book.publisher}
                    </p>
                    <p className="text-sm">
                      <strong>Year:</strong> {book.year}
                    </p>
                    <p className="text-sm">
                      <strong>Pages:</strong> {book.pages}
                    </p>
                    <p className="text-sm">
                      <strong>ISBN:</strong> {book.isbn}
                    </p>
                    <Badge variant="secondary">{book.type}</Badge>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 flex items-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Book</span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources;