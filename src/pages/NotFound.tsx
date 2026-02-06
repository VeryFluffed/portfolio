import Link from "@/components/Link";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="main flex h-full flex-col items-center justify-center text-center">
      <div className="space-y-6">
        <h1 className="text-9xl font-extrabold tracking-tight">404</h1>
        <h2 className="text-3xl font-semibold tracking-tight">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button asChild>
            <Link variant="button" to="/">
              Go Home
            </Link>
          </Button>
          <Button variant="secondary" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
