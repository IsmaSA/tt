import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText } from "lucide-react";
import Navigation from "@/components/Navigation";

type Pub = {
  title: string;
  authors: string;
  journal: string;
  year: string;
  volume?: string;
  pagesOrArticle?: string;
  type: "Research Article" | "Review" | "Commentary" | "Invasion Note";
  doi?: string;
  url: string;
  openAccess?: boolean;
};

const publications: Pub[] = [
  {
    title: "Taming the terminological tempest in invasion science",
    authors: "Soto I., Bradshaw C.J.A., Haubrock P.J., et al.",
    journal: "Biological Reviews",
    year: "2024",
    volume: "99(4)",
    pagesOrArticle: "1357–1390",
    type: "Review",
    doi: "10.1111/brv.13071",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/brv.13071",
    // openAccess: ?  (leave undefined if unsure)
  },
  {
    title: "Economic impact disharmony in global biological invasions",
    authors: "Cuthbert R.N., Dick J.T.A., Haubrock P.J., Pincheira-Donoso D., Soto I., Briski E.",
    journal: "Science of The Total Environment",
    year: "2024",
    volume: "913",
    pagesOrArticle: "169622",
    type: "Research Article",
    doi: "10.1016/j.scitotenv.2023.169622",
    url: "https://www.sciencedirect.com/science/article/pii/S0048969723082529",
    openAccess: true,
  },
  {
    title:
      "Tracking long-term shifts in non-native freshwater macroinvertebrates across three European countries",
    authors: "Toutain M., Soto I., Rasmussen J.J., Csabai Z., Várbíró G., Murphy J.F., et al.",
    journal: "Science of The Total Environment",
    year: "2024",
    volume: "906",
    pagesOrArticle: "167402",
    type: "Research Article",
    doi: "10.1016/j.scitotenv.2023.167402",
    url: "https://doi.org/10.1016/j.scitotenv.2023.167402",
    // OA status unclear
  },
  {
    title: "Alien species and climate change drive shifts in a riverine fish community and trait compositions over 35 years",
    authors: "Le Hen G., Balzani P., Haase P., Kouba A., Liu C., Nagelkerke L.A.J., … Soto I., Haubrock P.J.",
    journal: "Science of The Total Environment",
    year: "2023",
    volume: "867",
    pagesOrArticle: "161486",
    type: "Research Article",
    doi: "10.1016/j.scitotenv.2023.161486",
    url: "https://doi.org/10.1016/j.scitotenv.2023.161486",
  },
  {
    title: "Sigmoidal curves reflect impacts and dynamics of aquatic invasive species",
    authors: "Soto I., Ahmed D.A., Balzani P., Cuthbert R.N., Haubrock P.J.",
    journal: "Science of The Total Environment",
    year: "2023",
    volume: "872",
    pagesOrArticle: "161818",
    type: "Research Article",
    doi: "10.1016/j.scitotenv.2023.161818",
    url: "https://doi.org/10.1016/j.scitotenv.2023.161818",
  },
  {
    title: "Monetary impacts should be considered in biological invasion research",
    authors: "Soto I.",
    journal: "Journal of Applied Ecology",
    year: "2023",
    type: "Commentary",
    doi: "10.1111/1365-2664.14510",
    url: "https://besjournals.onlinelibrary.wiley.com/doi/10.1111/1365-2664.14510",
    openAccess: true,
  },
  {
    title: "Valuing the information hidden in true long-term data for invasion science",
    authors: "Haubrock P.J., Soto I.",
    journal: "Biological Invasions",
    year: "2023",
    volume: "25(8)",
    pagesOrArticle: "2385–2394",
    type: "Invasion Note",
    doi: "10.1007/s10530-023-03091-7",
    url: "https://link.springer.com/article/10.1007/s10530-023-03091-7",
    openAccess: true,
  },
  {
    title: "Global economic costs of herpetofauna invasions",
    authors: "Soto I., Cuthbert R.N., Kouba A., Capinha C., Turbelin A., Hudgins E.J., Diagne C., Courchamp F., Haubrock P.J.",
    journal: "Scientific Reports",
    year: "2022",
    volume: "12",
    pagesOrArticle: "10829",
    type: "Research Article",
    doi: "10.1038/s41598-022-15079-9",
    url: "https://www.nature.com/articles/s41598-022-15079-9",
    openAccess: true,
  },
];

const Sources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Publications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Random selected papers from my full publication list.                                    
            Use the links to access the publisher/DOI.
          </p>
        </div>

        {/* Live metrics card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center md:col-span-1">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">
                {publications.length}
              </div>
              <div className="text-sm text-muted-foreground">
                Publications listed here
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Live metrics</CardTitle>
              <CardDescription>
                For current totals (citations, h-index), see Google Scholar.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <a
                href="https://scholar.google.com/citations?user=y3nT7tkAAAAJ&hl=es&sortby=pubdate"
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" size="sm" className="space-x-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Open Google Scholar</span>
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Publications list */}
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-wrap justify-between gap-3">
                  <CardTitle className="text-lg leading-snug">
                    {pub.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">{pub.type}</Badge>
                    {pub.openAccess && <Badge variant="outline">Open access</Badge>}
                  </div>
                </div>
                <CardDescription className="mt-1">{pub.authors}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-sm">
                    <p>
                      <strong>Journal:</strong> {pub.journal}
                    </p>
                    <p>
                      <strong>Year:</strong> {pub.year}
                    </p>
                  </div>
                  <div className="text-sm">
                    {pub.volume && (
                      <p>
                        <strong>Volume:</strong> {pub.volume}
                      </p>
                    )}
                    {pub.pagesOrArticle && (
                      <p>
                        <strong>Pages/Article:</strong> {pub.pagesOrArticle}
                      </p>
                    )}
                  </div>
                  <div className="text-sm">
                    {pub.doi && (
                      <p className="break-all">
                        <strong>DOI:</strong> {pub.doi}
                      </p>
                    )}
                  </div>
                </div>
                <a href={pub.url} target="_blank" rel="noreferrer">
                  <Button variant="outline" size="sm" className="space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>View publication</span>
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sources;
