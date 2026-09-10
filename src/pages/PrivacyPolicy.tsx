import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';

/**
 * Privacy Policy (English version).
 *
 * Public URL provided to Meta App Review for the permission
 * `instagram_business_manage_messages` and for international users.
 *
 * Covers: GDPR (EU) 2016/679, Spanish LOPDGDD 3/2018, LSSI 34/2002,
 * EU AI Act (Art. 50, effective August 2026) and Meta Platform Terms
 * / Developer Policies (verbatim clauses).
 */
export default function PrivacyPolicy() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E] print:bg-white print:text-black">
      <Navbar />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24 print:pt-12 print:pb-12">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5 print:text-black/60">
          Legal
        </p>

        <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black uppercase tracking-tight leading-[0.92] text-white mb-8 print:text-black">
          PRIVACY<br />POLICY
        </h1>

        <p className="text-sm text-white/40 mb-6 print:text-black/60">
          Last updated: 31 May 2026
        </p>

        <div className="mb-12 p-4 rounded-lg border border-white/10 bg-white/5 text-xs text-white/60 leading-relaxed print:border-black/20 print:bg-transparent print:text-black/70">
          <p>
            This Privacy Policy describes how we process personal data
            collected when you interact with any of our channels: the public
            website, the conversational chat, WhatsApp Business, Instagram
            Direct and Facebook Messenger.
          </p>
          <p className="mt-3">
            The Spanish version available at{' '}
            <a href="/politica-de-privacidad" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
              /politica-de-privacidad
            </a>{' '}
            is the official version for legal purposes in Spain; the English
            version is provided as a courtesy translation. Both versions are
            kept synchronized; any material discrepancy will be resolved in
            favor of the Spanish version.
          </p>
        </div>

        <div className="space-y-12 text-sm text-white/60 leading-relaxed print:text-black/80">

          {/* 1. CONTROLLER */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              1. Data Controller
            </h2>
            <ul className="space-y-1 text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Name:</span> Alexander Jose Medina Arevalo</li>
              <li><span className="text-white/70 print:text-black">Tax ID (NIF):</span> 60707445A</li>
              <li><span className="text-white/70 print:text-black">Trading as:</span> Automatiza GC</li>
              <li><span className="text-white/70 print:text-black">Postal address:</span> Calle Teseguite 40, 2nd floor door 2A, 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas, Spain</li>
              <li><span className="text-white/70 print:text-black">Privacy email:</span>{' '}
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

          {/* 2. DPO */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              2. Data Protection Officer (DPO)
            </h2>
            <p>
              The appointment of a Data Protection Officer is not mandatory
              under Article 37 GDPR, as none of the cases set out in Article
              37(1) GDPR or Article 34 LOPDGDD apply to us. Nevertheless,
              any data-protection matter can be addressed to{' '}
              <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                automatizagc@gmail.com
              </a>.
            </p>
          </section>

          {/* 3. DATA PROCESSED */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              3. Data we process
            </h2>
            <p>
              Depending on the channel you use, we may process the following
              personal data:
            </p>
            <h3 className="mt-5 text-[11px] uppercase tracking-[0.12em] text-white/70 font-semibold mb-2 print:text-black">
              3.1 Our own channels (website, email, phone)
            </h3>
            <ul className="mt-2 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number or WhatsApp number</li>
              <li>Company or business name and sector</li>
              <li>Content of the messages you send us</li>
              <li>Technical browsing data (IP, browser, language, timestamp) via strictly necessary cookies</li>
            </ul>

            <h3 className="mt-5 text-[11px] uppercase tracking-[0.12em] text-white/70 font-semibold mb-2 print:text-black">
              3.2 Conversational bot via Meta (Instagram Direct / Facebook Messenger / WhatsApp)
            </h3>
            <p>
              When you start a conversation with our bot through any Meta
              product we process:
            </p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>The <em>app-scoped</em> identifier provided by Meta (not your national ID or direct phone number; it is an internal identifier issued by Meta for our app)</li>
              <li>Public username or profile name and, where applicable, public profile picture</li>
              <li>Full content of the messages exchanged (text, audio, image, video, attachments)</li>
              <li>Timestamp of each message</li>
              <li>Detected language of the conversation</li>
              <li>Technical message metadata (message type, source platform, message identifier)</li>
              <li>Phone number (only on WhatsApp, transmitted by the API)</li>
            </ul>
            <p className="mt-3">
              We do not process special categories of data (Article 9 GDPR).
              If you voluntarily share sensitive information (health,
              ideology, etc.) in a message, we recommend that you refrain
              from doing so; in no event will we use it for purposes other
              than those described in this Policy.
            </p>
          </section>

          {/* 4. PURPOSES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              4. Purposes of processing
            </h2>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Customer support and real-time answers to your queries through an AI assistant</li>
              <li>Drafting quotes, commercial proposals and scheduling meetings</li>
              <li>Performance of contracted services and management of the commercial relationship</li>
              <li>Internal notification to our team when you request to speak with a human</li>
              <li>Service improvement and assistant tuning (internal review of conversations, with no automated profiling having legal effects)</li>
              <li>Compliance with legal obligations (tax, accounting, defence against claims)</li>
            </ul>
          </section>

          {/* 5. LEGAL BASES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              5. Legal bases (Article 6 GDPR)
            </h2>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Art. 6(1)(b) GDPR — Pre-contractual measures and performance of a contract:</span> processing required to answer your information request, prepare a quote and, where applicable, deliver the contracted service.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Art. 6(1)(f) GDPR — Legitimate interests:</span> service improvement, technical security of the infrastructure, fraud prevention and defence against claims.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Art. 6(1)(a) GDPR — Consent:</span> by starting a conversation with our AI bot you agree to your messages being processed by third-party AI models (see section 7). You may withdraw your consent at any time by requesting a human agent or by ceasing the interaction.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Art. 6(1)(c) GDPR — Legal obligation:</span> retention of invoicing and accounting records where applicable.
              </li>
            </ul>
          </section>

          {/* 6. AI ACT */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              6. Use of artificial intelligence (Art. 50 EU AI Act)
            </h2>
            <p>
              Pursuant to Article 50 of Regulation (EU) 2024/1689 on
              Artificial Intelligence, we inform you in a clear and
              understandable manner that:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                When interacting with our conversational assistant (on the
                website, on WhatsApp, on Instagram Direct or on Facebook
                Messenger) you are interacting with an artificial intelligence
                system, not with a natural person.
              </li>
              <li>
                The primary model in use is <span className="text-white/80 print:text-black">Claude</span>, developed by Anthropic PBC. For audio transcription we use <span className="text-white/80 print:text-black">Whisper</span>, developed by OpenAI L.L.C.
              </li>
              <li>
                You may at any time request to speak with a human member of
                our team by typing{' '}
                <span className="text-white/80 print:text-black">"AGENT"</span>,{' '}
                <span className="text-white/80 print:text-black">"HUMAN"</span>,{' '}
                <span className="text-white/80 print:text-black">"PERSON"</span>,{' '}
                <span className="text-white/80 print:text-black">"AGENTE"</span>,{' '}
                <span className="text-white/80 print:text-black">"HUMANO"</span> or{' '}
                <span className="text-white/80 print:text-black">"PERSONA"</span>{' '}
                during the conversation. The bot will pause and our team
                will take over as soon as possible.
              </li>
              <li>
                The assistant may make mistakes. Its answers do not
                constitute legal, tax or medical professional advice.
              </li>
            </ul>
          </section>

          {/* 7. SUBPROCESSORS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              7. Processors (subprocessors)
            </h2>
            <p>
              To deliver the service we rely on the following processors,
              all bound by GDPR Article 28-compliant agreements:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Meta Platforms Ireland Ltd.</span> — Operator of Instagram, Facebook Messenger and the WhatsApp Cloud API. Based in Ireland (EU).</li>
              <li><span className="text-white/70 print:text-black">Anthropic PBC</span> — Conversational processing with the Claude model. Based in the USA.</li>
              <li><span className="text-white/70 print:text-black">Supabase Inc.</span> — PostgreSQL database and storage. Data hosted in the EU (eu-north-1, Stockholm).</li>
              <li><span className="text-white/70 print:text-black">Vercel Inc.</span> — Hosting of the public front-end. Global infrastructure with European regions enabled.</li>
              <li><span className="text-white/70 print:text-black">OpenAI L.L.C.</span> — Audio transcription (Whisper) and, where applicable, voice synthesis. Based in the USA.</li>
              <li><span className="text-white/70 print:text-black">360dialog GmbH</span> — Official WhatsApp Business API provider (BSP). Based in Germany (EU).</li>
              <li><span className="text-white/70 print:text-black">Cloudflare Inc.</span> — CDN, secure tunnel and attack protection. Based in the USA with EU servers.</li>
              <li><span className="text-white/70 print:text-black">Oracle Cloud Infrastructure</span> — Backend VPS. eu-frankfurt-1 region (Germany).</li>
            </ul>
            <p className="mt-3 text-xs text-white/40 print:text-black/60">
              List updated on 31 May 2026. You can request the current
              version by writing to automatizagc@gmail.com.
            </p>
          </section>

          {/* 8. INTERNATIONAL TRANSFERS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              8. International data transfers
            </h2>
            <p>
              Some processors (Anthropic, OpenAI, Vercel, Cloudflare, Meta
              Platforms for non-EU traffic) may be located in the United
              States. Such transfers take place on the basis of the{' '}
              <span className="text-white/80 print:text-black">Standard Contractual Clauses</span> (SCCs)
              approved by the European Commission in Implementing Decision
              (EU) 2021/914 and, where the provider is certified, of the{' '}
              <span className="text-white/80 print:text-black">EU-U.S. Data Privacy Framework</span>{' '}
              recognised by Adequacy Decision of 10 July 2023.
            </p>
            <p className="mt-3">
              We apply additional safeguards: TLS 1.3 encryption in transit,
              encryption at rest, data minimisation and short retention
              periods at the providers that allow it.
            </p>
          </section>

          {/* 9. META PLATFORM TERMS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              9. Use of data obtained through the Meta Platform
            </h2>
            <p>
              For data obtained through Meta APIs (Instagram Graph API,
              Messenger Platform, WhatsApp Business Platform) we make the
              following commitments in line with the <em>Meta Platform
              Terms</em> and the <em>Developer Policies</em>:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                We do not sell, rent or otherwise transfer Meta Platform
                data to any third party, data broker, ad network, data
                monetisation service or analytics provider that uses such
                data for its own purposes.
              </li>
              <li>
                We only use Meta Platform data for the purposes described
                in this Privacy Policy and in compliance with the Meta
                Platform Terms and Developer Policies.
              </li>
              <li>
                We retain Meta Platform data only for as long as necessary
                for the purpose for which it was collected, unless retention
                is required by law.
              </li>
              <li>
                If a user deletes a message in Instagram Direct or Facebook
                Messenger (the <em>unsend</em> feature), we process the
                <em> message_deletions</em> event sent to us by Meta and
                also remove that message from our systems.
              </li>
              <li>
                If a user revokes the permissions granted to our app from
                their Meta account settings, we delete the data associated
                with their app-scoped identifier.
              </li>
            </ul>
          </section>

          {/* 10. RETENTION */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              10. Retention periods
            </h2>
            <ul className="space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Bot conversations (web, IG, FB, WhatsApp):</span> 24 months from your last interaction. After that period they are deleted automatically.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Commercial contact data:</span> for as long as the relationship or mutual interest lasts, and for up to 24 months after the last communication.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Customer data (invoicing):</span> 6 years as required by the Spanish General Tax Law (Art. 66 LGT) and 10 years for anti-money-laundering purposes (Law 10/2010), where applicable.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Opt-out requests:</span> indefinite technical suppression record for the sole purpose of ensuring that you are not contacted again (email or phone, plus date).
              </li>
            </ul>
          </section>

          {/* 11. RIGHTS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              11. Your rights
            </h2>
            <p>
              Under Articles 15 to 22 GDPR you may exercise the following
              rights at any time:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Access</span> — know what data we hold about you</li>
              <li><span className="text-white/70 print:text-black">Rectification</span> — correct inaccurate data</li>
              <li><span className="text-white/70 print:text-black">Erasure</span> — deletion of your data ("right to be forgotten")</li>
              <li><span className="text-white/70 print:text-black">Objection</span> — object to processing based on legitimate interests</li>
              <li><span className="text-white/70 print:text-black">Portability</span> — receive your data in a structured format</li>
              <li><span className="text-white/70 print:text-black">Restriction</span> — restrict processing in specific situations</li>
              <li><span className="text-white/70 print:text-black">No automated decision-making</span> — we do not apply automated decisions with legal effects</li>
            </ul>
            <p className="mt-4">To exercise these rights you may:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                Type <span className="text-white/80 print:text-black">"DELETE MY DATA"</span>,{' '}
                <span className="text-white/80 print:text-black">"ERASE"</span>,{' '}
                <span className="text-white/80 print:text-black">"OPT OUT"</span> or{' '}
                <span className="text-white/80 print:text-black">"GDPR DELETE"</span> in any
                conversation with our bot (web, IG, FB, WhatsApp).
              </li>
              <li>
                Send an email to{' '}
                <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>{' '}
                with the subject "GDPR Rights Request".
              </li>
              <li>
                See the detailed procedure at{' '}
                <a href="/data-deletion" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  /data-deletion
                </a>.
              </li>
            </ul>
            <p className="mt-3">
              We respond within one month, extendable by two additional
              months in cases of particular complexity, duly justified,
              under Article 12(3) GDPR.
            </p>
          </section>

          {/* 12. AEPD */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              12. Right to lodge a complaint with the AEPD
            </h2>
            <p>
              Without prejudice to the above, you have the right to lodge a
              complaint with the Spanish Data Protection Agency (AEPD), the
              competent supervisory authority in Spain:
            </p>
            <ul className="mt-3 space-y-1 text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Web:</span>{' '}
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  www.aepd.es
                </a>
              </li>
              <li><span className="text-white/70 print:text-black">e-Office:</span>{' '}
                <a href="https://sedeagpd.gob.es" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  sedeagpd.gob.es
                </a>
              </li>
              <li><span className="text-white/70 print:text-black">Address:</span> C/ Jorge Juan 6, 28001 Madrid, Spain</li>
              <li><span className="text-white/70 print:text-black">Phone:</span> +34 901 100 099 / +34 912 663 517</li>
            </ul>
          </section>

          {/* 13. MINORS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              13. Minors
            </h2>
            <p>
              Our services are not directed to children under 14. Pursuant
              to Article 7 LOPDGDD we do not knowingly collect data from
              children under 14 without parental or legal-guardian consent.
              If we detect that a user is under 14 we will immediately
              delete their data.
            </p>
          </section>

          {/* 14. SECURITY */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              14. Security measures
            </h2>
            <p>
              We apply technical and organisational measures in line with
              Article 32 GDPR: TLS encryption in transit, role-based access
              control, multi-factor authentication for administrative
              accounts, encrypted backups, activity logging, environment
              separation and periodic vendor review. We will notify any
              personal-data breach to the AEPD within 72 hours under
              Article 33 GDPR and, where applicable, to the affected data
              subjects.
            </p>
          </section>

          {/* 15. RESERVED — re-enable after App Review approval */}

          {/* 16. COOKIES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              16. Cookies
            </h2>
            <p>
              This website uses only strictly necessary cookies for its
              functioning, exempt from the consent requirement under Article
              22(2) of Spanish Law 34/2002 and the AEPD Cookie Guidelines.
              We do not use advertising or third-party tracking cookies.
            </p>
          </section>

          {/* 17. CHANGES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              17. Changes to this Policy
            </h2>
            <p>
              This Policy may be updated to reflect regulatory, technical or
              operational changes. The "last updated" date at the top of
              this document indicates the current version. Material changes
              will be communicated through the usual channel to users with
              an active conversation.
            </p>
          </section>

          {/* 18. CONTACT */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              18. Privacy contact
            </h2>
            <ul className="mt-3 space-y-2 text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Email: </span>
                <a href="mailto:automatizagc@gmail.com" className="hover:text-white transition-colors underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>
              </li>
              <li>
                <span className="text-white/70 print:text-black">Phone: </span>
                +34 603 317 697
              </li>
              <li>
                <span className="text-white/70 print:text-black">Website: </span>
                <a href="https://automatizagc.xyz" className="hover:text-white transition-colors underline underline-offset-2 print:text-black">
                  https://automatizagc.xyz
                </a>
              </li>
              <li>
                <span className="text-white/70 print:text-black">Postal address: </span>
                Calle Teseguite 40, 2nd floor door 2A, 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas, Spain
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
