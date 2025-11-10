import { ThemeToggle } from "./components/ThemeToggle";

export default function Home() {
  return (
    <main>
      <article className="container">
        <header>
          <h1>Ethics at the Heart of the Clinical Laboratory</h1>
          <p>
            Modern health care depends on laboratory data. Every test result can
            influence how a person is diagnosed, treated, and supported, which
            means laboratory professionals carry a profound ethical obligation to
            get it right.
          </p>
        </header>

        <section className="section">
          <h2>Why Accuracy and Care Matter</h2>
          <p>
            Physicians craft treatment plans around the information they receive
            from the lab. When numbers are inaccurate, communicated poorly, or
            misread, the ripple effect can derail care, delay answers, or erode
            trust between patients and clinicians.
          </p>
          <p>
            Ethical lapses are not limited to calculation errors. Sloppy
            handoffs, inconsistent documentation, and rushed conversations can
            cause just as much harm as an incorrect result.
          </p>
        </section>

        <section className="section">
          <h2>Daily Decisions, Real Consequences</h2>
          <div className="key-points">
            <div className="card">
              <h3>Interpreting and Reporting</h3>
              <p>
                Deciding how to flag critical values, provide context, and
                communicate uncertainty requires sound judgment and clear,
                compassionate language.
              </p>
            </div>
            <div className="card">
              <h3>Specimen Stewardship</h3>
              <p>
                How samples are collected, labeled, transported, and stored can
                make or break the validity of a test. Shortcuts risk
                contaminating results and compromising patient safety.
              </p>
            </div>
            <div className="card">
              <h3>Data Access & Privacy</h3>
              <p>
                Digital reports travel quickly. Safeguarding who sees what—and
                when—protects confidentiality and keeps patient stories in the
                right hands.
              </p>
            </div>
            <div className="card">
              <h3>Making Sense of Results</h3>
              <p>
                Reference ranges, trending values, and clinical context are not
                always straightforward. Technologists must collaborate with care
                teams to prevent misinterpretation.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>The Ethical Toolkit</h2>
          <p>
            Mastery of instruments and quality systems is only part of the job.
            Ethical laboratory practice also demands respect for patient
            autonomy, a commitment to do good and avoid harm, a fair approach to
            every individual, and unwavering honesty.
          </p>
          <p>
            As highlighted by Kare, Aggarwal &amp; Datta (2021) and Datta (2020),
            these principles create a moral framework that guides each decision
            from sample intake to final report.
          </p>
        </section>

        <section className="section">
          <h2>What This Exploration Covers</h2>
          <p>
            The full assignment digs into the most common ethical crossroads lab
            technologists encounter across four fronts: reporting and making
            sense of results, specimen management, safeguarding information, and
            collaborating with the clinical team.
          </p>
          <p>
            Understanding these themes empowers laboratory professionals to
            support clinicians, earn the trust of patients, and uphold the
            integrity of modern medicine.
          </p>
        </section>

        <footer>
          <span>Adapted from recent discussions in laboratory ethics.</span>
          <ThemeToggle />
        </footer>
      </article>
    </main>
  );
}
