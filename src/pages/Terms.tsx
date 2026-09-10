import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';

/**
 * Terms of Service (English version).
 *
 * Under Spanish Law 34/2002 (LSSI), Royal Legislative Decree 1/2007
 * on Consumers and Users and related regulations.
 */
export default function Terms() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E] print:bg-white print:text-black">
      <Navbar />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24 print:pt-12 print:pb-12">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5 print:text-black/60">
          Legal
        </p>

        <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black uppercase tracking-tight leading-[0.92] text-white mb-8 print:text-black">
          TERMS OF<br />SERVICE
        </h1>

        <p className="text-sm text-white/40 mb-14 print:text-black/60">
          Last updated: 31 May 2026
        </p>

        <div className="space-y-12 text-sm text-white/60 leading-relaxed print:text-black/80">

          {/* 1. PROVIDER IDENTITY */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              1. Service provider identity (Art. 10 LSSI)
            </h2>
            <ul className="space-y-1 text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Name:</span> Alexander Jose Medina Arevalo</li>
              <li><span className="text-white/70 print:text-black">Tax ID (NIF):</span> 60707445A</li>
              <li><span className="text-white/70 print:text-black">Trading as:</span> Automatiza GC</li>
              <li><span className="text-white/70 print:text-black">Postal address:</span> Calle Teseguite 40, 2nd floor door 2A, 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas, Spain</li>
              <li><span className="text-white/70 print:text-black">Email:</span>{' '}
                <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>
              </li>
              <li><span className="text-white/70 print:text-black">Phone:</span> +34 603 317 697</li>
              <li><span className="text-white/70 print:text-black">Website:</span>{' '}
                <a href="https://automatizagc.xyz" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  https://automatizagc.xyz
                </a>
              </li>
            </ul>
          </section>

          {/* 2. SERVICE */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              2. Service description
            </h2>
            <p>
              Automatiza GC provides an AI-powered conversational assistant
              accessible through the following channels:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Web chat on automatizagc.xyz</li>
              <li>Instagram Direct (account @automatiza.gc)</li>
              <li>Facebook Messenger</li>
              <li>WhatsApp Business (+34 696 859 840)</li>
            </ul>
            <p className="mt-3">
              The service includes AI-driven automated responses, meeting
              scheduling, quote generation and handover to a human team
              member upon request.
            </p>
          </section>

          {/* 3. ACCEPTANCE */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              3. Acceptance of these Terms
            </h2>
            <p>
              By initiating a conversation with our assistant through any of
              the channels listed above, as well as by using the website,
              you declare that you have read and accepted these Terms of
              Service and the{' '}
              <a href="/privacy-policy" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                Privacy Policy
              </a>. This acceptance is legally binding under Article 23 LSSI
              (electronic contracting).
            </p>
            <p className="mt-3">
              If you do not agree with any part of these Terms, please
              refrain from starting the conversation or cease use immediately.
            </p>
          </section>

          {/* 4. ACCEPTABLE USE */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              4. Acceptable use
            </h2>
            <p>You agree not to use the service to:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Send unsolicited commercial communications (spam) or bulk messages</li>
              <li>Disseminate unlawful, defamatory, discriminatory, violent, pornographic content or content infringing third-party rights</li>
              <li>Use bots, scripts or any other form of abusive automation against our channels</li>
              <li>Reverse engineer, perform mass scraping or extract data without authorisation</li>
              <li>Attempt to access restricted parts of the system, bypass security measures or deliberately overload the infrastructure</li>
              <li>Impersonate any person or provide false information</li>
              <li>Induce the AI model to generate content that breaches the policies of Anthropic, OpenAI or Meta</li>
            </ul>
            <p className="mt-3">
              Failure to comply may result in immediate suspension of the
              service and, where appropriate, in any legal action that may
              apply.
            </p>
          </section>

          {/* 5. IP */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              5. Intellectual and industrial property
            </h2>
            <p>
              All elements of the website and the service (source code,
              texts, graphics, design, trademarks, domain name, prompt
              library and assistant configuration) are owned by Alexander
              Jose Medina Arevalo or its licensors and are protected by the
              Spanish Intellectual Property Law (RDL 1/1996) and any other
              applicable regulations.
            </p>
            <p className="mt-3">
              Reproduction, distribution, public communication or
              transformation, in whole or in part, is prohibited without
              the prior written consent of the owner, except for uses
              permitted by law.
            </p>
          </section>

          {/* 6. AI + LIABILITY */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              6. Nature of the AI assistant and limitation of liability
            </h2>
            <p>
              Pursuant to Article 50 of Regulation (EU) 2024/1689 on
              Artificial Intelligence, we inform you that the conversational
              assistant is an AI system, not a human being. It uses
              third-party language models (primarily Claude by Anthropic
              PBC) and, by its very nature, may produce inaccurate,
              incomplete or outdated answers.
            </p>
            <p className="mt-3">
              The assistant's answers do not constitute legal, tax, medical,
              financial or any other qualified professional advice. Always
              verify critical information with a competent professional and
              with the official documentation before making any decision.
            </p>
            <p className="mt-3">
              To the maximum extent permitted by law, Automatiza GC shall
              not be liable for:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Decisions made by the user based on the assistant's answers</li>
              <li>Indirect or consequential damages, loss of profit or loss of opportunity</li>
              <li>Service interruptions caused by third parties (cloud providers, Meta, telecom operators)</li>
              <li>Content published by third parties on our social channels</li>
            </ul>
            <p className="mt-3">
              Nothing in this section limits any liability that cannot be
              excluded by mandatory law, particularly vis-à-vis consumers
              and users.
            </p>
          </section>

          {/* 7. PRICING */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              7. Pricing and economic terms
            </h2>
            <p>
              Access to the conversational assistant as an end user is{' '}
              <span className="text-white/80 print:text-black">free of charge</span>, without prejudice
              to any cost your telecom or internet provider may apply for
              sending messages.
            </p>
          </section>

          {/* 8. TERMINATION */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              8. Cessation of use and opt-out
            </h2>
            <p>
              You may stop using the service at any time, without prior
              notice. To request deletion of your data please see{' '}
              <a href="/data-deletion" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                /data-deletion
              </a>.
            </p>
            <p className="mt-3">
              We may suspend or terminate access to the service in the event
              of use contrary to these Terms, request from a competent
              authority, or breach of the Meta platform policies under which
              the service is provided.
            </p>
          </section>

          {/* 9. CHANGES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              9. Changes to these Terms
            </h2>
            <p>
              We may modify these Terms to reflect regulatory, technical or
              service changes. The "last updated" date at the top of the
              document reflects the current version. Material changes will
              be notified with reasonable advance to users with an active
              conversation. Continued use of the service after the changes
              take effect constitutes acceptance of those changes.
            </p>
          </section>

          {/* 10. LAW + JURISDICTION */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              10. Governing law and dispute resolution
            </h2>
            <p>
              These Terms are governed by Spanish law. Any dispute shall be
              submitted to the Courts of Las Palmas de Gran Canaria, unless
              consumer protection rules establish a different jurisdiction,
              in which case the latter shall prevail.
            </p>
            <p className="mt-3">
              If you are a consumer residing in the European Union you are
              entitled to use the European Commission's Online Dispute
              Resolution platform:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                https://ec.europa.eu/consumers/odr
              </a>. You may also turn to the Consumer Arbitration Board of
              the Canary Islands or to that of your place of residence. We
              encourage you, however, to first seek an amicable resolution
              by writing to automatizagc@gmail.com.
            </p>
          </section>

          {/* 11. CONTACT */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              11. Contact
            </h2>
            <ul className="mt-3 space-y-2 text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Email: </span>
                <a href="mailto:automatizagc@gmail.com" className="hover:text-white transition-colors underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>
              </li>
              <li>
                <span className="text-white/70 print:text-black">WhatsApp: </span>
                <a href="https://wa.me/34696859840" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-2 print:text-black">
                  +34 696 859 840
                </a>
              </li>
              <li>
                <span className="text-white/70 print:text-black">Phone: </span>
                +34 603 317 697
              </li>
            </ul>
          </section>

        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto print:hidden">
        <Footer />
      </div>
    </main>
  );
}
