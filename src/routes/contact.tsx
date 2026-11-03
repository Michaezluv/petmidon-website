import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionBar } from "@/components/SiteLayout";

const emails = ["messien@petmidon.com", "messienjr@petmidon.co.uk", "messien@petmidon.co.uk"];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Petmidon Nigeria Limited" },
      {
        name: "description",
        content:
          "Petmidon Nigeria Limited — Km 17 Port Harcourt/ABA Express Way, Port Harcourt, Rivers State, Nigeria. Phone +234 8106376855.",
      },
      { property: "og:title", content: "Contact Petmidon" },
      {
        property: "og:description",
        content: "Contact details for Petmidon Nigeria Limited, Port Harcourt, Rivers State, Nigeria.",
      },
    ],
  }),
  component: () => (
    <SiteLayout title="Contact Us">
      <SectionBar>Contact Us</SectionBar>
      <div className="space-y-3 p-2">
        <p className="font-bold">Petmidon Nigeria Limited</p>
        <div>
          <p className="font-bold">Address</p>
          <p>Km 17 Port Harcourt/ABA Express Way</p>
          <p>Port Harcourt, Rivers State, Nigeria</p>
        </div>
        <div>
          <p className="font-bold">Phone</p>
          <p>
            <a href="tel:+2348106376855" className="underline">
              +234 8106376855
            </a>
          </p>
        </div>
        <div>
          <p className="font-bold">Email</p>
          {emails.map((e) => (
            <p key={e}>
              <a href={`mailto:${e}`} className="underline">
                {e}
              </a>
            </p>
          ))}
        </div>
      </div>
      <h3 className="mt-6 px-2 font-bold">Head Office Location</h3>
      <div className="m-2 overflow-hidden border border-border shadow">
        <iframe
          title="Map of Petmidon head office"
          src="https://maps.google.com/maps?q=Km%2017%20Port%20Harcourt%20Aba%20Expressway%2C%20Port%20Harcourt%2C%20Rivers%20State%2C%20Nigeria&z=13&output=embed"
          className="h-[350px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </SiteLayout>
  ),
});
