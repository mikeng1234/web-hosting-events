import Image from "next/image";

const photos = [
  {
    src: "/images/portfolio/sample1.jpg",
    alt: "Nellie hosting a birthday celebration with blue and gold balloon arch",
    label: "Birthday Celebration",
    aspect: "landscape",
  },
  {
    src: "/images/portfolio/sample2.png",
    alt: "Nellie hosting a wedding reception",
    label: "Wedding Reception",
    aspect: "landscape",
  },
  {
    src: "/images/portfolio/sample3.png",
    alt: "Nellie hosting a cultural pageant on stage with performers",
    label: "Cultural Pageant",
    aspect: "portrait",
  },
  {
    src: "/images/portfolio/sample4.png",
    alt: "Nellie hosting an Easter themed kids party in front of a balloon arch",
    label: "Kids Party",
    aspect: "portrait",
  },
  {
    src: "/images/portfolio/sample5.png",
    alt: "Nellie with a family at a Barbie themed birthday party",
    label: "Birthday Party",
    aspect: "portrait",
  },
  {
    src: "/images/portfolio/sample6.png",
    alt: "Nellie hosting in a grand ballroom at a gala event",
    label: "Gala Event",
    aspect: "landscape",
  },
  {
    src: "/images/portfolio/sample7.png",
    alt: "Nellie hosting the AFC Employee Annual Awards Night on a grand stage",
    label: "Corporate Awards Night",
    aspect: "landscape",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold tracking-[0.25em] uppercase text-xs mb-4">
            Portfolio
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">
            Moments Hosted
          </h2>
          <span className="divider-gold" />
          <p className="text-warm-gray max-w-xl mx-auto">
            A glimpse into the events Nellie has been honored to host.
          </p>
        </div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div key={photo.src} className="break-inside-avoid group relative overflow-hidden">
              <div
                className={
                  photo.aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]"
                }
                style={{ position: "relative" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                />
                {/* Hover label */}
                <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-ivory text-sm tracking-wide">{photo.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
