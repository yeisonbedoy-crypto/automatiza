import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';

/**
 * Data Deletion Instructions (English version).
 *
 * Public URL configured as "Data Deletion Instructions URL" in the
 * Meta Developers dashboard. Fulfils Meta Platform Terms and the right
 * to erasure under Article 17 GDPR.
 */
export default function DataDeletion() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E] print:bg-white print:text-black">
      <Navbar />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24 print:pt-12 print:pb-12">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5 print:text-black/60">
          Legal · Right to erasure (Art. 17 GDPR)
        </p>

        <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black uppercase tracking-tight leading-[0.92] text-white mb-8 print:text-black">
          DATA<br />DELETION
        </h1>

        <p className="text-sm text-white/40 mb-6 print:text-black/60">
          Last updated: 31 May 2026
        </p>

        <div className="mb-12 p-4 rounded-lg border border-white/10 bg-white/5 text-xs text-white/60 leading-relaxed print:border-black/20 print:bg-transparent print:text-black/70">
          <p>
            This page explains how to request the complete deletion of any
            personal data Automatiza GC processes about you across any of
            our channels (website, Instagram Direct, Facebook Messenger or
            WhatsApp Business).
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
            </ul>
          </section>

          {/* 2. METHODS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              2. How to request deletion (three valid methods)
            </h2>
            <p>
              You can request the deletion of your data through any of the
              following channels. All have the same validity:
            </p>

            <div className="mt-5 space-y-5">
              <div className="p-4 rounded-lg border border-white/10 bg-white/5 print:border-black/20 print:bg-transparent">
                <p className="text-[11px] uppercase tracking-[0.12em] text-white/80 font-semibold mb-2 print:text-black">
                  Method A — Within the conversation
                </p>
                <p className="text-white/60 print:text-black/80">
                  Type at any time, in the conversation with our bot
                  (Instagram Direct, Facebook Messenger, WhatsApp or web
                  chat), any of these phrases:
                </p>
                <ul className="mt-3 space-y-1 list-disc list-inside text-white/50 print:text-black/70">
                  <li><span className="text-white/80 print:text-black">"DELETE MY DATA"</span></li>
                  <li><span className="text-white/80 print:text-black">"ERASE"</span></li>
                  <li><span className="text-white/80 print:text-black">"OPT OUT"</span></li>
                  <li><span className="text-white/80 print:text-black">"GDPR DELETE"</span></li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/5 print:border-black/20 print:bg-transparent">
                <p className="text-[11px] uppercase tracking-[0.12em] text-white/80 font-semibold mb-2 print:text-black">
                  Method B — Email
                </p>
                <p className="text-white/60 print:text-black/80">
                  Send an email to{' '}
                  <a href="mailto:automatizagc@gmail.com?subject=Data%20Deletion%20Request" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                    automatizagc@gmail.com
                  </a>{' '}
                  with the subject{' '}
                  <span className="text-white/80 print:text-black">"Data Deletion Request"</span>,
                  indicating, if you know it, the identifier or username you
                  used and the channel (IG, FB, WhatsApp, web).
                </p>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/5 print:border-black/20 print:bg-transparent">
                <p className="text-[11px] uppercase tracking-[0.12em] text-white/80 font-semibold mb-2 print:text-black">
                  Method C — WhatsApp direct
                </p>
                <p className="text-white/60 print:text-black/80">
                  Write to{' '}
                  <a href="https://wa.me/34696859840?text=Data%20deletion%20request" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                    +34 696 859 840
                  </a>{' '}
                  stating that you want your data deleted.
                </p>
              </div>
            </div>
          </section>

          {/* 3. TIMEFRAME */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              3. Response timeframe
            </h2>
            <p>
              Pursuant to Article 12(3) GDPR, we answer deletion requests
              within a maximum of{' '}
              <span className="text-white/80 print:text-black">30 calendar days</span> from
              receipt, extendable by two additional months in cases of
              particular complexity, duly justified.
            </p>
            <p className="mt-3">
              In practice we process most requests within 48 hours.
            </p>
          </section>

          {/* 4. WHAT IS DELETED */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              4. What data we delete
            </h2>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>The full conversation history (text, audio, images, video, attachments)</li>
              <li>The app-scoped profile and/or public name associated with your interaction with our Meta app</li>
              <li>Technical metadata linked to your messages (timestamps, internal IDs, detected language, message type)</li>
              <li>Contact data you voluntarily provided (name, email, additional phone, company)</li>
              <li>Any internal note or summary associated with your interaction</li>
            </ul>
          </section>

          {/* 5. WHAT IS KEPT */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              5. What we keep (and why)
            </h2>
            <p>
              By legal obligation or as a guarantee of the very exercise of
              your right of erasure, we keep the following minimum data:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Technical suppression list:</span> your minimum identifier (email or phone) and the date of the request, for the sole purpose of ensuring that we do not contact you again. Without this record we could not honour your own request to no longer receive any communications.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Accounting and invoicing data</span> if you have been a customer: 6 years as required by Article 66 of the Spanish General Tax Law, and 10 years for anti-money-laundering purposes where applicable (Spanish Law 10/2010).
              </li>
              <li>
                <span className="text-white/70 print:text-black">Evidence of the request and of its handling:</span> until the statute of limitations for any corresponding administrative actions expires.
              </li>
            </ul>
          </section>

          {/* 6. VERIFICATION */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              6. Identity verification
            </h2>
            <p>
              To prevent fraudulent exercise of rights by third parties (Art.
              12(6) GDPR) we may, before proceeding with deletion, ask you
              for an additional confirmation by reply through the same
              channel from which the request originated (same WhatsApp
              number, same email, same Instagram/Facebook account). If the
              request comes through a channel different from the one that
              originated the data, we may ask you for reasonable
              verification information.
            </p>
            <p className="mt-3">
              In no event will we ask for a full copy of your national ID
              or passport, nor for any sensitive data, to verify your
              identity.
            </p>
          </section>

          {/* 7. CONFIRMATION */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              7. Confirmation
            </h2>
            <p>
              Once the deletion is completed, you will receive written
              confirmation (through the same channel from which you
              requested the deletion or by email, as applicable) stating
              which data have been deleted and which have been kept in the
              suppression record as described above.
            </p>
          </section>

          {/* 8. AEPD */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              8. Complaint to the AEPD
            </h2>
            <p>
              If you believe we have not properly honoured your right of
              erasure, you may lodge a complaint with the Spanish Data
              Protection Agency:
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

          {/* 9. META DATA DELETION */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              9. Status of the Meta Data Deletion Callback
            </h2>
            <p>
              We currently handle deletion requests through this public
              Data Deletion Instructions URL, as allowed by the Meta
              Platform options and in accordance with the Meta Platform
              Terms.
            </p>
            <p className="mt-3">
              Any request can be submitted through the three methods
              described in section 2, with full effectiveness and within
              GDPR deadlines.
            </p>
          </section>

        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto print:hidden">
        <Footer />
      </div>
    </main>
  );
}
