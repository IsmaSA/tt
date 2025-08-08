import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Presentation } from "lucide-react";
import Navigation from "@/components/Navigation";

/**
 * Conferences page listing upcoming and past events.  Each event card
 * displays the title, event code, date, location, presentation type
 * and topic.  A helper determines the badge colour based on type.
 */
const Conferences = () => {
  const upcomingConferences = [
    {
      title: "International Conference on Biological Invasions",
      event: "ICBI 2024",
      date: "September 15-18, 2024",
      location: "Vancouver, Canada",
      type: "Keynote Speaker",
      topic: "Climate Change and Invasion Dynamics: A Global Perspective",
    },
    {
      title: "Ecological Society of America Annual Meeting",
      event: "ESA 2024",
      date: "August 4-9, 2024",
      location: "Long Beach, CA",
      type: "Oral Presentation",
      topic: "Predictive Models for Invasion Risk Assessment",
    },
  ];

  const pastConferences = [
    {
      title: "Society for Conservation Biology Congress",
      event: "SCB 2023",
      date: "July 23-27, 2023",
      location: "Kigali, Rwanda",
      type: "Invited Speaker",
      topic: "Economic Impacts of Invasive Species in Developing Countries",
    },
    {
      title: "International Association for Ecology",
      event: "INTECOL 2023",
      date: "August 28 - September 1, 2023",
      location: "Geneva, Switzerland",
      type: "Panel Discussion",
      topic: "Global Patterns in Biological Invasions",
    },
    {
      title: "Neobiota Conference",
      event: "Neobiota 2022",
      date: "September 12-16, 2022",
      location: "Tartu, Estonia",
      type: "Oral Presentation",
      topic: "Machine Learning Applications in Invasion Biology",
    },
    {
      title: "World Conference on Marine Biodiversity",
      event: "WCMB 2022",
      date: "October 3-7, 2022",
      location: "Costa Rica",
      type: "Workshop Leader",
      topic: "Marine Invasive Species Monitoring Protocols",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Keynote Speaker":
        return "default";
      case "Invited Speaker":
        return "secondary";
      case "Oral Presentation":
        return "outline";
      case "Panel Discussion":
        return "secondary";
      case "Workshop Leader":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Conferences & Presentations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing research findings and engaging with the scientific community worldwide
          </p>
        </div>
        {/* Upcoming Conferences */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingConferences.map((conference, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{conference.title}</CardTitle>
                    <Badge variant={getTypeColor(conference.type)}>
                      {conference.type}
                    </Badge>
                  </div>
                  <CardDescription className="font-medium text-primary">
                    {conference.event}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{conference.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{conference.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Presentation className="h-4 w-4 text-primary" />
                    <span className="font-medium">{conference.topic}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Past Conferences */}
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">Past Events</h2>
          </div>
          <div className="space-y-6">
            {pastConferences.map((conference, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{conference.title}</CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {conference.event}
                      </CardDescription>
                    </div>
                    <Badge variant={getTypeColor(conference.type)}>
                      {conference.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{conference.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{conference.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Presentation className="h-4 w-4 text-primary" />
                      <span className="font-medium">{conference.topic}</span>
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