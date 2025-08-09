import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Presentation, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";

type EventType =
  | "Keynote Speaker"
  | "Invited Speaker"
  | "Oral Presentation"
  | "Poster"
  | "Panel Discussion"
  | "Workshop Leader"
  | "Talk"
  | "Conference";

type Conf = {
  title: string;
  event: string;
  date: string;
  location: string;
  type: EventType;
  topic: string;
  year: number;
  url?: string;
};

const getTypeColor = (type: EventType) => {
  switch (type) {
    case "Keynote Speaker":
      return "default" as const;
    case "Invited Speaker":
    case "Panel Discussion":
      return "secondary" as const;
    case "Oral Presentation":
    case "Poster":
    case "Workshop Leader":
    case "Talk":
    case "Conference":
      return "outline" as const;
    default:
      return "secondary" as const;
  }
};

const Conferences = () => {
  // ————— UPCOMING —————
  const upcomingConferences: Conf[] = [
    {
      title: "International Conference on Aquatic Invasive Species (ICAIS)",
      event: "ICAIS",
      date: "See website",
      location: "Global (rotating venue)",
      type: "Conference",
      topic: "Aquatic invasive species – science, policy, and management",
      year: 2025,
      url: "https://icais.org/",
    },
    {
      title: "1st International GUARDIANS/AGuARDIAS Conference",
      event: "GUARDIAS 2025",
      date: "See website",
      location: "Europe",
      type: "Conference",
      topic: "Governance & risk of aquatic invasive species",
      year: 2025,
      url: "https://guardias.eu/welcome-to-the-first-guardias-conference/",
    },
  ];

  // ————— PAST (from your list) —————
  const pastConferences: Conf[] = [
    // 2024
    {
      title: "Economic impact disharmony in global biological invasions",
      event: "23rd ICAIS",
      date: "May 12–16, 2024",
      location: "Halifax, Nova Scotia, Canada",
      type: "Oral Presentation",
      topic:
        "Cuthbert, R. N.; Dick, J. T. A.; Haubrock, P. J.; Pincheiro-Donoso, D.; Soto, I.; Briski, E.",
      year: 2024,
    },
    {
      title: "The faunal Ponto-Caspianization of central and western European waterways",
      event: "23rd ICAIS",
      date: "May 12–16, 2024",
      location: "Halifax, Nova Scotia, Canada",
      type: "Oral Presentation",
      topic: "Soto, I.; Cuthbert, R. N.; Haubrock, P. J.; Briski, E.",
      year: 2024,
    },
    {
      title: "The DOSI assessment scheme",
      event: "23rd ICAIS",
      date: "May 12–16, 2024",
      location: "Halifax, Nova Scotia, Canada",
      type: "Oral Presentation",
      topic: "Haubrock, P. J.; Soto, I.; Bradshaw, C.",
      year: 2024,
    },
    {
      title: "Taming the terminological tempest in invasion science",
      event: "IV Int. Young Researchers Conference on Invasive Species",
      date: "July 15–16, 2024",
      location: "Online",
      type: "Talk",
      topic: "Soto, I.; Bradshaw, C.; Haubrock, P. J.",
      year: 2024,
    },
    {
      title:
        "Potential distribution, observed impacts, and invasion risk of two non-native snapping turtles",
      event: "NEOBIOTA 2024",
      date: "Sept 3–6, 2024",
      location: "Lisbon, Portugal",
      type: "Oral Presentation",
      topic:
        "Nerozzi, I.; Soto, I.; Vimercati, G.; Capinha, C.; Tarkan, A. S.; Kraus, F.; …; Balzani, P.",
      year: 2024,
    },
    {
      title:
        "Burgeoning non-native species production hinders sustainable aquaculture",
      event: "NEOBIOTA 2024",
      date: "Sept 3–6, 2024",
      location: "Lisbon, Portugal",
      type: "Oral Presentation",
      topic:
        "Oficialdegui, F. J.; Soto, I.; Balzani, P.; Cuthbert, R. N.; Haubrock, P. J.; …; Kouba, A.",
      year: 2024,
    },

    // 2023
    {
      title:
        "Effects of chemical cues and prior experience on predator avoidance in crayfish",
      event: "IAA 2023",
      date: "2023",
      location: "Pavia, Italy",
      type: "Oral Presentation",
      topic: "Kaur, D.; Iqbal, A.; Soto, I.; Kubec, J.; Buřič, M.",
      year: 2023,
    },
    {
      title:
        "Effect of psychoactive substances on cardiac and locomotory activity of juvenile marbled crayfish",
      event: "IAA 2023",
      date: "2023",
      location: "Pavia, Italy",
      type: "Poster",
      topic:
        "Iqbal, A.; Ložek, F.; Soto, I.; Kaur, D.; Grabicová, K.; Kuklina, I.; Randák, T.; Malinovska, V.; Buřič, M.; Kozák, P.",
      year: 2023,
    },

    // 2022
    {
      title:
        "Long-term trends of non-native crayfish in Europe: a meta-analysis",
      event: "ICAIS 2022",
      date: "2022",
      location: "Oostende, Belgium",
      type: "Oral Presentation",
      topic: "Soto, I.",
      year: 2022,
    },
    {
      title:
        "Methamphetamine, sertraline, and mixtures influence marbled crayfish biological parameters",
      event: "IAA 2022",
      date: "2022",
      location: "Hluboká nad Vltavou, Czech Republic",
      type: "Poster",
      topic:
        "Iqbal, A.; Ložek, F.; Soto, I.; Kuklina, I.; Kaur, D.; Malinovska, V.; Grabicová, K.; Randák, T.; Buřič, M.; Kozák, P.",
      year: 2022,
    },
    {
      title:
        "Effects of alien crustaceans on compositional and functional β-diversity",
      event: "IAA 2022",
      date: "2022",
      location: "Hluboká nad Vltavou, Czech Republic",
      type: "Oral Presentation",
      topic: "Soto, I.",
      year: 2022,
    },
    {
      title:
        "Economic costs of invasive species facilitated by canals & Ponto-Caspianization of European freshwater fauna",
      event: "NEOBIOTA 2022",
      date: "Sept 12–16, 2022",
      location: "Tartu, Estonia",
      type: "Poster",
      topic:
        "Balzani, P.; Soto, I.; Cuthbert, R. N.; Kouba, A.; Briski, E.; Haubrock, P.",
      year: 2022,
    },
  ].sort((a, b) => b.year - a.year);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Conferences & Presentations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing research findings and engaging with the invasion science community.
          </p>
        </div>

        {/* Upcoming */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingConferences.map((c, i) => (
              <Card key={i} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{c.title}</CardTitle>
                    <Badge variant={getTypeColor(c.type)}>{c.type}</Badge>
                  </div>
                  <CardDescription className="font-medium text-primary">
                    {c.event}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{c.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{c.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Presentation className="h-4 w-4 text-primary" />
                    <span className="font-medium">{c.topic}</span>
                  </div>
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Website
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past */}
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Past Events</h2>
          </div>
          <div className="space-y-6">
            {pastConferences.map((c, i) => (
              <Card key={`${c.event}-${i}`} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{c.title}</CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {c.event}
                      </CardDescription>
                    </div>
                    <Badge variant={getTypeColor(c.type)}>{c.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{c.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{c.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Presentation className="h-4 w-4 text-primary" />
                      <span className="font-medium">{c.topic}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conferences;
