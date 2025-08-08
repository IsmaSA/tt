import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

/**
 * Fallback page rendered when no matching route is found.  Provides a
 * friendly 404 message and a link back to the home page.  It still
 * includes the navigation bar so users can access other sections.
 */
const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex flex-col items-center justify-center flex-grow text-center px-4">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8 text-muted-foreground">
          The page you're looking for could not be found.
        </p>
        <Link to="/">
          <Button>Go back home</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;