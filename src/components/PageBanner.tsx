import { ScrollReveal } from "./ScrollReveal";
import { BgImage } from "./BgImage";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  /** Responsive srcset for the banner background image */
  imageSrcSet?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export const PageBanner = ({
  title,
  subtitle,
  imageSrcSet,
  imageSrc,
  imageAlt = "",
}: PageBannerProps) => (
  <section className="relative overflow-hidden bg-primary pt-32 pb-16 md:pt-40 md:pb-24">
    {imageSrcSet && imageSrc ? (
      <>
        <div className="absolute inset-0">
          <BgImage
            srcSet={imageSrcSet}
            src={imageSrc}
            alt={imageAlt}
            eager
            className="object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-primary/40" />
      </>
    ) : (
      <>
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </>
    )}
    <div className="container relative z-10 mx-auto px-4 text-center">
      <ScrollReveal>
        <h1 className="mb-4 text-3xl font-extrabold text-primary-foreground drop-shadow-md md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/85 drop-shadow md:text-xl">
            {subtitle}
          </p>
        )}
      </ScrollReveal>
    </div>
  </section>
);
