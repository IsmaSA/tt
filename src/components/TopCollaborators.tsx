import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from "lucide-react";

// If you don't have Avatar yet, run once:
// npx shadcn-ui@latest add avatar

type Collaborator = {
  name: string;
  role?: string;
  pubs?: number;          // number of co-authored papers (for sorting/badge)
  avatarUrl?: string;     // local import or full https URL
  profileUrl?: string;    // Scholar/ORCID/website (optional)
};

// Example images (optional):
// import haubrockImg from "@/assets/collaborators/haubrock.jpg";
// import cuthbertImg from "@/assets/collaborators/cuthbert.jpg";
// import martinForesImg from "@/assets/collaborators/martin-fores.jpg";

const COLLABORATORS: Collaborator[] = [
  {
    name: "Phillip J. Haubrock",
    role: "Invasion science; supervisor",
    pubs: 60,
    avatarUrl: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=fwHUGm0AAAAJ&citpid=5",              // e.g., haubrockImg or https://...
    profileUrl: "https://scholar.google.com/citations?user=fwHUGm0AAAAJ&hl=es",             // paste Scholar/ORCID if you want the button
  },
  {
    name: "Ross N. Cuthbert",
    role: "Risk & biosecurity",
    pubs: 50,
    avatarUrl: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=VFcC3CsAAAAJ&citpid=19",
    profileUrl: "https://scholar.google.com/citations?user=VFcC3CsAAAAJ&hl=es",
  },
  {
    name: "Antonín Kouba",
    role: "Crayfish; invasion science; co-supervisor",
    pubs: 60,
    avatarUrl: "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=yjDiU9QAAAAJ&citpid=2",
    profileUrl: "https://scholar.google.com/citations?user=yjDiU9QAAAAJ&hl=es",
  },
  // Add more…
];

const toInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(p => p[0]!.toUpperCase())
    .join("");

export default function TopCollaborators() {
  const collaborators = [...COLLABORATORS].sort((a, b) => (b.pubs ?? 0) - (a.pubs ?? 0));

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Top Collaborators</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Frequent co-authors and ongoing research partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collaborators.map((c) => (
            <Card
              key={c.name}
              className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 shadow-card"
            >
              <CardHeader className="pb-2 text-center">
                <div className="flex justify-center">
                  <Avatar className="h-16 w-16 ring-2 ring-primary/20">
                    <AvatarImage src={c.avatarUrl} alt={c.name} />
                    <AvatarFallback>{toInitials(c.name)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle className="mt-4">{c.name}</CardTitle>
                {c.role && (
                  <CardDescription className="leading-relaxed">{c.role}</CardDescription>
                )}
              </CardHeader>

              <CardContent className="text-center">
                {typeof c.pubs === "number" && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {c.pubs}+ co-authored papers
                  </Badge>
                )}

                {c.profileUrl && (
                  <div className="mt-4">
                    <a href={c.profileUrl} target="_blank" rel="noreferrer">
                      <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary/10">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View profile
                      </Button>
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
