import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionBar, Item } from "@/components/SiteLayout";
import { HeroSlider } from "@/components/HeroSlider";
import hero from "@/assets/hero-rig.jpg";
import offshore from "@/assets/slide-offshore.jpg";
import landrig from "@/assets/slide-landrig.jpg";
import reservoir from "@/assets/svc-reservoir.jpg";
import data from "@/assets/svc-data.jpg";
import intelligent from "@/assets/svc-intelligent.jpg";
import tools from "@/assets/svc-completions.jpg";
import tubular from "@/assets/svc-tubular.jpg";
import wellhead from "@/assets/svc-wellhead.jpg";

const slides = [
  { img: hero, alt: "Petmidon crew at an offshore wellhead", caption: "Providing our Customers with Best in Class Oilfield Services" },
  { img: offshore, alt: "Offshore oil platform at sunset", caption: "Onshore, Offshore and Deep Water Operations" },
  { img: landrig, alt: "Land rig in the Niger Delta", caption: "Serving the Niger Delta Since 2000" },
  { img: wellhead, alt: "Engineers maintaining a wellhead", caption: "Wellhead Supply, Installation and Maintenance" },
  { img: tubular, alt: "Oilfield tubulars in a pipe yard", caption: "OCTG Procurement and Tubular Services" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Petmidon Nigeria Limited | Geophysical & Well Completion Services" },
      { name: "description", content: "Petmidon Nigeria Limited provides geophysical instrumentation, well completion, tubular and wellhead services." },
      { property: "og:title", content: "Petmidon Nigeria Limited" },
      { property: "og:description", content: "Geophysical instrumentation and well completion services for oil and gas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout title="Home">
      <HeroSlider slides={slides} />
      <div className="mt-4 grid gap-6 md:grid-cols-2">
        <section>
          <SectionBar>Geophysical Instrumentation</SectionBar>
          <Item img={reservoir} name="Reservoir Monitoring">
            delivers accurate downhole pressure, temperature and production data so operators can understand and optimise reservoir performance.
          </Item>
          <Item img={data} name="Data Management & Maintenance">
            keeps your acquired well data secure, organised and accessible, backed by routine maintenance of instrumentation.
          </Item>
        </section>
        <section>
          <SectionBar>Well Completion Services</SectionBar>
          <Item img={intelligent} name="Intelligent & Standard Completions">
            designed and installed to suit each well, from conventional completions to remotely controlled smart systems.
          </Item>
          <Item img={tools} name="Completion Tools & Accessories">
            procurement of quality completion tools and accessories from trusted manufacturers.
          </Item>
        </section>
        <section>
          <SectionBar>Tubular Services</SectionBar>
          <Item img={tubular} name="Tubular Services">
            covering supply, inspection, handling and running of tubing and casing.
          </Item>
        </section>
        <section>
          <SectionBar>Wellhead Services</SectionBar>
          <Item img={wellhead} name="Wellhead & Accessories">
            supply, installation and maintenance of wellheads and accessories for land and offshore wells.
          </Item>
        </section>
      </div>
    </SiteLayout>
  );
}
