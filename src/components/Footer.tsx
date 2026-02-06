import Link from "@/components/Link";
import { Separator } from "@/components/ui/separator";
import { footerSocials } from "@/data/footer";

const Footer = () => {
  return (
    <footer className="relative bottom-0 mt-auto pt-16">
      <div className="bg-accent border border-t px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:items-start sm:text-left">
          <div>
            <h2 className="text-lg font-bold tracking-widest">DANH TRAN</h2>
            <p className="text-accent-foreground/70">Mechatronics Engineer</p>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-widest">SOCIAL</h2>
            <div className="mt-1 flex items-center justify-center gap-4 sm:justify-start">
              {footerSocials.map((social, index) => (
                <>
                  {index > 0 && (
                    <Separator
                      className="bg-accent-foreground/50 h-4!"
                      orientation="vertical"
                    />
                  )}
                  <Link
                    href={social.link}
                    className="text-accent-foreground/70 hover:text-foreground transition-colors hover:no-underline"
                  >
                    {social.label}
                  </Link>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="text-accent-foreground/60 mt-6 text-center text-sm">
          © {new Date().getFullYear()} Danh Tran
        </div>
      </div>
    </footer>
  );
};

export default Footer;
