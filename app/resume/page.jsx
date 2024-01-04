import React from "react";
import Link from "next/link";

const ResumePage = () => {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-2xl font-medium mb-6 tracking-tighter">Résumé</h1>
        <h1 className="text-2xl font-medium mb-2 tracking-tighter">Summary</h1>
        <p className="mb-4">
          A graduate lawyer with 2+ years of legal operations experience. Proven
          experience in leading-edge technologies for the future of legal
          practices. I like to run, cook and code in my free time.
        </p>
        <p className="mb-4">
          This resume is a complete record of my professional history. Some
          content may not be relevant to you (the prospective extremely
          high-paying employer), however, I nevertheless detail it for my own
          benefit.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="mb-6">
          <h2 className="text-2xl font-medium mb-2 tracking-tighter">
            Contact
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Email:{" "}
              <Link href="mailto:johnnaoom@gmail.com" className="text-blue-600">
                johnnaoom@gmail.com
              </Link>
            </li>
            <li>Mob: 0416505679</li>
            <li>
              LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/john-naoom-7593a517b/"
                className="text-blue-600"
              >
                John Naoom
              </Link>
            </li>
            <li>
              Website:{" "}
              <Link href="https://johnnaoom.com/" className="text-blue-600">
                johnnaoom.com
              </Link>
            </li>
            <li>
              Github:{" "}
              <Link
                href="https://github.com/eternalBackPain"
                className="text-blue-600"
              >
                eternalBackPain
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="mb-6">
          <h2 className="text-2xl font-medium mb-4 tracking-tighter">
            Professional Experience
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Maddocks</h3>
            <p className="font-semibold">
              Graduate Lawyer | March 2024 – Present
            </p>
            <p className="mb-2">TO COMPLETE</p>

            <p className="font-semibold">
              Summer Law Clerk | November 2022 – February 2023
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Clerked through Construction and Public law practice groups.
              </li>
              <li>
                Conducted legal research and drafted advice/briefs on a range of
                issues including security of payments, expert evidence
                requirements, residential tenancies, disability discrimination,
                planning and development, foreign investments, etc. Co-authored
                a case note published on Maddocks’ NSW Local Government Court
                Reporter 2023 1st Edition. Produced other internal case notes
                regularly.
              </li>
              <li>
                Assisted frontend matters including contract review for
                subcontractors, gap risk review for novation of consultancy
                agreements against head contract, drafting statement of claims,
                and preparing internal file notes.
              </li>
              <li>
                Assisted backend matters including attending the Land and
                Environment Court, attending conciliation, filing documents at
                the Registry, preparing for directions hearings, drafting and
                witnessing affidavits, reviewing expert witness reports,
                converting securities, and general file management.
              </li>
              <li>
                Attended summer clerk training, including sessions on legal
                writing, research bootcamps, and practice area overviews.
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">
              Marrickville Legal Centre
            </h3>
            <p className="font-semibold">
              Intern | August 2023 – November 2023
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Rotated through Family law (divorce, parenting, property) and
                Duty Lawyer (local court crime/AVO) services providing research,
                drafting and admin assistance.
              </li>
              <li>Triaged new client inquiries at the front desk.</li>
            </ul>
          </div>

          {/* Lendlease */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Lendlease</h3>
            <p className="font-semibold">
              Automation Paralegal | September 2021 – February 2024
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Collaboratively drove the establishment of the Automation,
                Precedents & Processes (APP) team at Lendlease Australia in
                September 2021, later evolving into a global role in July 2023
                despite group-wide capital contraction.
              </li>
              <li>
                Scaled Lendlease's Self Service Contracting platform, Contract
                Express, to 500 users with over 200 templates, producing ~5000
                contracts annually.
              </li>
              <li>
                Contributed to the strategic development of the Lendlease Legal
                Ops strategy, focusing on supporting, enabling, and optimising
                workflow processes, knowledge management, external lawyer
                management, self-service capabilities, and staff development.
              </li>
              <li>
                Project managed the automation of precedent contracts and legal
                team processes by planning, consulting, drafting, coding and
                training to drive efficiency, compliance and data capture. This
                included automating:
                <ul className="list-disc pl-5">
                  <li>
                    40+ Professional Service Agreements, resulting in ~150 PSAs
                    generated per month and an estimated annual cost saving of
                    $740,000;
                  </li>
                  <li>
                    70+ Works Contracts, including Works Orders, providing both
                    legal and technical oversight;
                  </li>
                  <li>
                    Construction Subcontracts, requiring bespoke project suites
                    and provision for special conditions, warranty deeds, and
                    other unique contract elements, resulting in ~100
                    subcontracts generated per month across 50+ projects;
                  </li>
                  <li>
                    many others (Legal invoicing, Confidentiality Agreements,
                    Power of Attorneys, MASC for Defence, Execution Requests,
                    etc.)
                  </li>
                </ul>
              </li>
              <li>
                Co-led the technical development of legal technology at
                Lendlease. This includes web-dev programming (JS, HTML, CSS),
                developing within Microsoft's Power Suite (Power Automate, Power
                Apps, PowerBI), creating SharePoint architecture, interacting
                with APIs, onboarding and integrating applications (SharePoint,
                DocuSign) using Azure, enabling SSO, handling authentication,
                creating database schemas, engaging with vendors, etc.
              </li>
              <li>
                Performed legal work in connection with Lendlease contracts
                (e.g. drafting special conditions, advising on execution),
                legislation updates, and reviewing external firm advice.
              </li>
              <li>
                Analysed data using Excel and PowerBI to construct dashboards
                for C-suite executives to inform strategy by visualising
                business unit volume, effort and trends.
              </li>
            </ul>
          </div>

          {/* Rawson Homes */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Rawson Homes</h3>
            <p className="font-semibold">
              Guest Relations | December 2019 – September 2021
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Relationship management for customers building new homes,
                including advising on floor plans, drafting variations, and
                providing estimates while balancing client budgets and lifestyle
                needs.
              </li>
              <li>
                Client Relationship Management (CRM) skills using Salesforce to
                track visitor feedback and providing meaningful advice.
              </li>
            </ul>
          </div>

          {/* Crossmark */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Crossmark</h3>
            <p className="font-semibold">
              Merchandiser | January 2021 – February 2021
            </p>
            <ul className="list-disc pl-5 mb-4">
              {/* ... list items for Crossmark ... */}
            </ul>
          </div>

          {/* Australian Shareholders Association */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">
              Australian Shareholders Association
            </h3>
            <p className="font-semibold">
              Economics/Finance Intern | August 2020 – November 2020
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Published an article for EQUITY magazine on interpreting current
                macroeconomic indicators.
              </li>
              <li>
                Reported on financials and drafted voting intentions of
                ASX-listed companies by analysing annual shareholder reports and
                half-yearly accounts.
              </li>
            </ul>
          </div>

          {/* Alpha Hotels and Resorts */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">
              Alpha Hotels and Resorts
            </h3>
            <p className="font-semibold">
              Food and Beverage Attendant | March 2019 – December 2019
            </p>
          </div>

          {/* Target */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">Target</h3>
            <p className="font-semibold">
              Customer Service Assistant | March 2017 – March 2019
            </p>
          </div>

          {/* KFC */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">KFC</h3>
            <p className="font-semibold">Crew Member | February 2017</p>
          </div>

          {/* Reserve Bank of Australia */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">
              Reserve Bank of Australia
            </h3>
            <p className="font-semibold">Work Experience | September 2016</p>
          </div>

          {/* McDonald's */}
          <div className="mb-6">
            <h3 className="text-xl font-medium mb-2">McDonald's</h3>
            <p className="font-semibold">
              Crew Member | June 2015 – October 2016
            </p>
          </div>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="mb-6">
          <h2 className="text-2xl font-medium mb-3 tracking-tighter">
            Education
          </h2>
          <div className="mb-4">
            <h3 className="text-xl font-medium mb-2">
              University of Technology Sydney
            </h3>
            <p className="font-semibold">
              Bachelor of Laws / Bachelor of Economics | 2019 – 2023
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Distinction Average (5.76 GPA, 77.98 WAM).</li>
              <li>
                Drafted for publication: Causal effect of amendments to the
                Gambling Machine Act (NSW) on domestic households by use of a
                difference-in-difference framework.
              </li>
              <li>
                Nudgethon 2022 UTS representative: Representing UTS in the
                annual national Nudgethon event hosted by QUT Centre for
                Behavioural Economics, Society and Technology (BEST Centre) &
                the ANU Crawford School of Public Policy.
              </li>
              <li>Mentor for first-year economics students.</li>
            </ul>
          </div>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <div className="mb-6">
          <h2 className="text-2xl font-medium mb-3 tracking-tighter">
            Languages
          </h2>
          <ul className="list-disc pl-5">
            <li>English (fluent)</li>
            <li>Arabic (conversational)</li>
          </ul>
        </div>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </section>
    </div>
  );
};

export default ResumePage;
