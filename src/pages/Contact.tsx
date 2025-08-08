import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Building,
  MessageSquare,
  Send,
} from "lucide-react";
import Navigation from "@/components/Navigation";

/**
 * Contact page providing office information, office hours, research
 * interests and a contact form.  A separate section lists media
 * enquiry details.  Form submission is currently logged to the
 * console; in a production application this could be wired to a
 * backend service.
 */
const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch for research collaborations, speaking opportunities, or academic inquiries
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span>Office Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Department of Ecology</p>
                    <p className="text-muted-foreground">University of California, Davis</p>
                    <p className="text-muted-foreground">One Shields Avenue</p>
                    <p className="text-muted-foreground">Davis, CA 95616</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">isoto@ucdavis.edu</p>
                    <p className="text-sm text-muted-foreground">Primary email</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">(530) 752-1234</p>
                    <p className="text-sm text-muted-foreground">Office phone</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
                <CardDescription>Available for student consultations and meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Tuesday</span>
                    <span className="text-muted-foreground">2:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thursday</span>
                    <span className="text-muted-foreground">10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="text-muted-foreground">1:00 PM - 3:00 PM</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  *Please email to schedule an appointment outside regular hours
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p>• Biological invasion patterns and predictions</p>
                  <p>• Climate change impacts on ecosystem dynamics</p>
                  <p>• Machine learning applications in ecology</p>
                  <p>• Conservation biology and biodiversity</p>
                  <p>• Economic impacts of invasive species</p>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span>Send a Message</span>
                </CardTitle>
                <CardDescription>I'll respond to your inquiry within 48 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="Research collaboration, speaking opportunity, etc."
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your inquiry in detail..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>For Media Inquiries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  For media interviews, press releases, or public speaking requests, please
                  contact the UC Davis Media Relations team:
                </p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Media Relations:</strong> media@ucdavis.edu
                  </p>
                  <p>
                    <strong>Phone:</strong> (530) 752-1932
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;