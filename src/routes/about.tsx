import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionBar } from "@/components/SiteLayout";

const values = [
  ["Our Mission", "To provide our customers with real value-for-money services by executing every job promptly, efficiently, safely and without any rig down time."],
  ["Our Vision", "To maintain and develop our existing business relationships with our numerous customers, while exploring new technology by deploying new skills and strategies."],
  ["Our Values", "Our people are our most important asset. We give them the motivation, resources and skills to deliver 100% customer satisfaction on every project."],
];

const clients = ["ExxonMobil", "Shell (SPDC)", "Total E&P", "Pan Ocean Oil Corp.", "Oando PLC", "Nembe"];

const team = [
  ["Mike Essien", "Chairman / Managing Director"],
  ["Barr. Mrs. Victoria Inemesit", "Admin / Technical Assistant"],
  ["Author Albert", "QHSE Manager"],
  ["Grace Eterigho", "Procurement"],
  ["Soji John", "Finance Control"],
  ["Barr. John Lebo", "Legal / Contracts"],
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Petmidon Nigeria Limited" },
      { name: "description", content: "Founded in 2000, Petmidon Nigeria Limited provides wellhead, completion, reservoir monitoring and tubular services." },
      { property: "og:title", content: "About Petmidon Nigeria Limited" },
      { property: "og:description", content: "Our history, mission, vision, values and team." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <SiteLayout title="About">
      <SectionBar>Our Company</SectionBar>
      <div className="space-y-3 p-2">
        <p>Petmidon Nigeria Limited was founded in 2000 by seasoned industry professionals. It is a well-established limited liability company that has grown steadily by maintaining a first-class level of customer satisfaction.</p>
        <p>We represent international original equipment manufacturers in the region, including our technical partner <b>Spartek Systems</b> (USA and Canada). We are also a local technical partner to Schlumberger and work with Poseidon Energy Resources Nigeria Limited.</p>
        <p>Our core services are wellhead services, well services, wellbore and reservoir monitoring, completion services, and OCTG procurement and deployment. We specialise in well optimisation and in recovering reservoir data that helps operators diagnose and manage their wells.</p>
      </div>

      <div className="my-4 grid gap-4 md:grid-cols-3">
        {values.map(([t, d]) => (
          <div key={t} className="border border-border bg-card shadow-sm">
            <div className="bg-primary px-3 py-1.5 font-bold text-primary-foreground">{t}</div>
            <p className="p-3 text-sm">{d}</p>
          </div>
        ))}
      </div>

      <SectionBar>Health, Safety & Environment</SectionBar>
      <div className="space-y-3 p-2">
        <p>Oilfield work carries real hazards, so safety comes first in everything we do. Through our <b>CASHES</b> programme, no work starts on any site until all hazards have been removed and every staff member has been fully briefed.</p>
        <ul className="list-disc pl-6">
          <li>Annual medical examination and fitness certificate for every staff member</li>
          <li>Well-equipped first aid boxes at all work sites</li>
          <li>Strict drug, alcohol and weapons policy on and offshore</li>
          <li>Oil spill response capability for inland, river, shallow offshore and shoreline incidents</li>
        </ul>
      </div>

      <SectionBar>Some of Our Clients</SectionBar>
      <div className="flex flex-wrap gap-2 p-2">
        {clients.map((c) => (
          <span key={c} className="border border-border bg-muted px-3 py-1 text-sm font-semibold">{c}</span>
        ))}
      </div>

      <SectionBar>Management Team</SectionBar>
      <div className="grid gap-2 p-2 sm:grid-cols-2">
        {team.map(([n, r]) => (
          <div key={n} className="border-l-4 border-primary bg-card px-3 py-2">
            <div className="font-bold">{n}</div>
            <div className="text-sm text-muted-foreground">{r}</div>
          </div>
        ))}
      </div>
    </SiteLayout>
  ),
});
