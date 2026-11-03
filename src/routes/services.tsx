import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionBar } from "@/components/SiteLayout";
import banner from "@/assets/slide-offshore.jpg";
import reservoir from "@/assets/svc-reservoir.jpg";
import data from "@/assets/svc-data.jpg";
import intelligent from "@/assets/svc-intelligent.jpg";
import standard from "@/assets/svc-completion.jpg";
import tools from "@/assets/svc-completions.jpg";
import tubular from "@/assets/svc-tubular.jpg";
import wellhead from "@/assets/svc-wellhead.jpg";

type Svc = { name: string; img: string; text: string; points: string[] };
type Group = { t: string; intro: string; services: Svc[] };

const groups: Group[] = [
  {
    t: "Geophysical Instrumentation",
    intro: "Instruments and data services that give operators a clear, continuous picture of what is happening below the surface.",
    services: [
      {
        name: "Reservoir Monitoring",
        img: reservoir,
        text: "Permanent downhole gauges and sensors that track pressure, temperature and flow, so you can manage your reservoir with confidence.",
        points: ["Conventional and retrievable downhole gauges", "Fibre-optic and wireless monitoring", "Memory gauge surveys", "Real-time surface acquisition"],
      },
      {
        name: "Data Management & Maintenance",
        img: data,
        text: "We collect, quality-check and store your well data, and keep the instruments that produce it working reliably.",
        points: ["Data acquisition, QA/QC and archiving", "Reservoir data recovery for decision-making", "Instrument calibration", "Preventive maintenance and repair"],
      },
    ],
  },
  {
    t: "Well Completion Services",
    intro: "Completion equipment and field expertise for single, dual and selective wells — vertical, deviated or horizontal, onshore, offshore and deep water.",
    services: [
      {
        name: "Intelligent Completions",
        img: intelligent,
        text: "Smart-well systems with remotely controlled downhole valves and monitoring, letting you manage multiple zones without intervention.",
        points: ["Interval control valves", "Permanent downhole gauge integration", "Multilateral completions", "Installation and commissioning"],
      },
      {
        name: "Standard Completions",
        img: standard,
        text: "Proven, cost-effective conventional completions for producing and injection wells.",
        points: ["Packers, nipples and sliding sleeves", "Screen installation and sand control", "SCSSV running and pulling", "Field supervision"],
      },
      {
        name: "Completion Tools & Accessories Procurement",
        img: tools,
        text: "Quality completion tools and accessories sourced from trusted OEMs and delivered on time to your location.",
        points: ["Sourcing to client specification", "Inspection and certification", "Spare parts supply", "Logistics and delivery"],
      },
    ],
  },
  {
    t: "Tubular & Wellhead Services",
    intro: "OCTG supply and full wellhead support from procurement through installation and ongoing maintenance.",
    services: [
      {
        name: "Tubular Services",
        img: tubular,
        text: "Supply and handling of oil country tubular goods to keep drilling and completion programmes moving.",
        points: ["Tubing and casing (7\", 9-5/8\", 10-3/4\", 13-3/8\")", "Drill pipe, HWDP and drill collars", "Drilling jars and downhole tools", "Casing scrapers, brushes and magnets"],
      },
      {
        name: "Wellhead & Accessories",
        img: wellhead,
        text: "Supply, installation and maintenance of wellheads and Christmas trees for land and offshore wells.",
        points: ["Wellhead and Xmas tree supply", "Installation and pressure testing", "Wellhead valve repair (WHVR)", "VR plugs, wear bushings and running tools"],
      },
    ],
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Petmidon Nigeria Limited" },
      { name: "description", content: "Reservoir monitoring, data management, intelligent and standard completions, tubular and wellhead services in Nigeria." },
      { property: "og:title", content: "Petmidon Services" },
      { property: "og:description", content: "Our full range of oil and gas services." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SiteLayout title="Services">
      <div className="relative mb-6 h-[180px] overflow-hidden border border-border shadow">
        <img src={banner} alt="Offshore platform" width={1920} height={800} className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-r from-foreground/75 to-transparent px-6 text-primary-foreground">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <p className="mt-1 max-w-md text-sm">Over two decades of oilfield service delivery across onshore, offshore and deep water operations.</p>
        </div>
      </div>

      {groups.map((g) => (
        <section key={g.t} className="mb-8">
          <SectionBar>{g.t}</SectionBar>
          <p className="p-2 text-muted-foreground">{g.intro}</p>
          <div className="grid gap-4 p-2 md:grid-cols-2">
            {g.services.map((s) => (
              <article key={s.name} className="flex flex-col overflow-hidden border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
                <img src={s.img} alt={s.name} loading="lazy" width={992} height={672} className="h-40 w-full object-cover" />
                <div className="border-t-4 border-primary p-3">
                  <h3 className="font-bold text-primary">{s.name}</h3>
                  <p className="mt-1 text-sm">{s.text}</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2"><span className="text-primary">▸</span>{p}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      <div className="flex flex-col items-center gap-3 border border-border bg-muted p-5 text-center">
        <p className="font-semibold">Our services are not limited to the above. Tell us what your project needs.</p>
        <Link to="/contact" className="bg-primary px-5 py-2 font-bold text-primary-foreground hover:opacity-90">Contact Us</Link>
      </div>
    </SiteLayout>
  ),
});
