import { LegislationSearch } from "./legislation-search";

export const metadata = {
  title: "Legification | John Naoom",
  description:
    "Search Commonwealth Acts and legislative instruments from legislation.gov.au.",
};

export default function LegificationPage() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-medium tracking-tighter">
        Legification
      </h1>
      <LegislationSearch />
      <div className="space-y-4">
        <p>
          Legification helps you quickly identify the most authoritative version
          of Australian legislation. It is inspired by the former Legify.com.au,
          which serviced the Australian legal community for more than 13 years.
        </p>
        <p>
          Currently, Legification supports principal and in-force Commonwealth
          Acts and legislative instruments.  Legislation from states and territories will be implemented soon. For any support issues, please contact myself at johnnaoom@gmail.com.
        </p>
      </div>
    </div>
  );
}
