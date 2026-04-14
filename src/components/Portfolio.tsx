import Image from "next/image";
import { FadeUp, Stagger, StaggerItem } from "@/components/ui/Motion";

// aspect: portrait = 3/4, landscape = 4/3, square ≈ 1/1
const photos = [
  { src: "/images/portfolio/sample1.jpg",  alt: "Nellie hosting a birthday celebration with blue and gold balloon arch", label: "Birthday Celebration",      aspect: "landscape" },
  { src: "/images/portfolio/sample8.jpg",  alt: "Nellie with a newlywed couple at their wedding reception",            label: "Wedding Reception",          aspect: "portrait"  },
  { src: "/images/portfolio/sample9.jpg",  alt: "Guests dancing at a birthday party",                                  label: "Birthday Party",             aspect: "landscape" },
  { src: "/images/portfolio/sample3.png",  alt: "Nellie hosting a cultural pageant on stage with performers",          label: "Cultural Pageant",           aspect: "portrait"  },
  { src: "/images/portfolio/sample10.jpg", alt: "Nellie hosting a Barbie themed birthday event",                       label: "Themed Birthday",            aspect: "portrait"  },
  { src: "/images/portfolio/sample11.jpg", alt: "Group photo at a kids birthday party with colorful balloon backdrop", label: "Kids Birthday",              aspect: "landscape" },
  { src: "/images/portfolio/sample12.jpg", alt: "Nellie in costume at a themed event",                                 label: "Themed Event",               aspect: "portrait"  },
  { src: "/images/portfolio/sample13.jpg", alt: "Nellie standing in a stunning floral venue setup",                    label: "Floral Gala",                aspect: "portrait"  },
  { src: "/images/portfolio/sample4.png",  alt: "Nellie hosting an Easter themed kids party",                          label: "Kids Party",                 aspect: "portrait"  },
  { src: "/images/portfolio/sample14.jpg", alt: "Nellie with guests at a Christmas party",                             label: "Christmas Party",            aspect: "portrait"  },
  { src: "/images/portfolio/sample15.jpg", alt: "Nellie hosting a pink themed debut",                                  label: "Debut",                      aspect: "landscape" },
  { src: "/images/portfolio/sample5.png",  alt: "Nellie with a family at a Barbie themed birthday party",              label: "Birthday Party",             aspect: "portrait"  },
  { src: "/images/portfolio/sample16.jpg", alt: "Nellie hosting a Fibercom corporate presentation",                    label: "Corporate Event",            aspect: "portrait"  },
  { src: "/images/portfolio/sample6.png",  alt: "Nellie hosting in a grand ballroom at a gala event",                  label: "Gala Event",                 aspect: "landscape" },
  { src: "/images/portfolio/sample18.jpg", alt: "Group selfie at an awards night",                                     label: "Awards Night",               aspect: "landscape" },
  { src: "/images/portfolio/sample19.jpg", alt: "Nellie at a Back to Purpose birthday celebration event",              label: "Special Celebration",        aspect: "portrait"  },
  { src: "/images/portfolio/sample7.png",  alt: "Nellie hosting the AFC Employee Annual Awards Night",                 label: "Corporate Awards Night",     aspect: "landscape" },
  { src: "/images/portfolio/sample20.jpg", alt: "Nellie with a family at a baby's first birthday",                    label: "First Birthday",             aspect: "portrait"  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-gold-dark tracking-[0.25em] uppercase text-xs mb-4">Portfolio</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight">Moments Hosted</h2>
            <span className="divider-gold" />
            <p className="text-warm-gray max-w-xl mx-auto">A glimpse into the events Nellie has been honored to host.</p>
          </div>
        </FadeUp>

        <Stagger className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" staggerDelay={0.05}>
          {photos.map((photo) => (
            <StaggerItem key={photo.src}>
              <div className="break-inside-avoid group relative overflow-hidden">
                <div className={`${photo.aspect === "portrait" ? "aspect-[3/4]" : photo.aspect === "square" ? "aspect-square" : "aspect-[4/3]"} relative`}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                  />
                  <div className="absolute inset-0 bg-charcoal/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-ivory text-sm tracking-wide">{photo.label}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
