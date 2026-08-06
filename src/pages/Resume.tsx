import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <main className="main">
      <div className="mb-2 flex justify-center">
        <Button asChild>
          <a href="/Danh Tran Resume (Full).pdf" download="Danh_Resume.pdf">
            Download Resume
          </a>
        </Button>
      </div>
      <embed
        src="/Danh Tran Resume (Full).pdf"
        type="application/pdf"
        className="h-[calc(100vh-8rem)] w-full md:h-[calc(100vh-6rem)]"
      />
    </main>
  );
};

export default Resume;
