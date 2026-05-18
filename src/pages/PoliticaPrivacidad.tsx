import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';

export default function PoliticaPrivacidad() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E]">
      <Navbar />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5">
          Legal
        </p>

        <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black uppercase tracking-tight leading-[0.92] text-white mb-8">
          POLÍTICA DE<br />PRIVACIDAD
        </h1>

        <p className="text-sm text-white/40 mb-14">
          Última actualización: mayo de 2026
        </p>

        <div className="space-y-12 text-sm text-white/60 leading-relaxed">

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              1. Responsable del tratamiento
            </h2>
            <p>
              <strong className="text-white/80">Automatiza</strong> es el responsable del tratamiento de los datos personales recogidos a través de este sitio web.
            </p>
            <ul className="mt-3 space-y-1 text-white/50">
              <li><span className="text-white/70">Correo electrónico:</span> automatizagc@gmail.com</li>
              <li><span className="text-white/70">WhatsApp:</span> +34 696 859 840</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              2. Datos que recopilamos
            </h2>
            <p>Podemos recopilar los siguientes tipos de datos personales:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono o WhatsApp</li>
              <li>Nombre de empresa o negocio</li>
              <li>Datos de navegación (cookies técnicas y analíticas)</li>
            </ul>
            <p className="mt-3">
              Solo recopilamos los datos que nos proporcionas voluntariamente al contactar con nosotros, solicitar información o contratar nuestros servicios.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              3. Finalidad del tratamiento
            </h2>
            <p>Utilizamos tus datos para:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50">
              <li>Responder a tus consultas y solicitudes de información</li>
              <li>Gestionar la relación comercial y prestación de servicios</li>
              <li>Enviar comunicaciones relacionadas con nuestros servicios, si nos has dado tu consentimiento</li>
              <li>Mejorar nuestro sitio web y la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales aplicables</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              4. Base legal del tratamiento
            </h2>
            <p>
              El tratamiento de tus datos se basa en:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50">
              <li><span className="text-white/70">Consentimiento:</span> cuando nos contactas o aceptas recibir comunicaciones comerciales</li>
              <li><span className="text-white/70">Ejecución de contrato:</span> cuando contratás nuestros servicios</li>
              <li><span className="text-white/70">Interés legítimo:</span> para mejorar nuestros servicios y mantener la seguridad del sitio</li>
              <li><span className="text-white/70">Obligación legal:</span> cuando la ley lo exige</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              5. Conservación de datos
            </h2>
            <p>
              Conservamos tus datos durante el tiempo necesario para cumplir con las finalidades descritas o mientras exista una relación comercial activa. Una vez finalizada dicha relación, los datos se conservarán por los plazos legalmente exigidos y luego serán eliminados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              6. Comunicación a terceros
            </h2>
            <p>
              No vendemos, alquilamos ni cedemos tus datos personales a terceros con fines comerciales. Podemos compartir datos con proveedores de servicios tecnológicos (alojamiento, analítica, automatización) que actúan como encargados del tratamiento bajo los términos del Reglamento General de Protección de Datos (RGPD).
            </p>
            <p className="mt-3">
              Todos los proveedores con los que trabajamos ofrecen garantías adecuadas de protección de datos conforme a la normativa vigente.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              7. Tus derechos
            </h2>
            <p>De acuerdo con el RGPD, tienes derecho a:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50">
              <li><span className="text-white/70">Acceso:</span> conocer qué datos tenemos sobre ti</li>
              <li><span className="text-white/70">Rectificación:</span> corregir datos incorrectos o incompletos</li>
              <li><span className="text-white/70">Supresión:</span> solicitar la eliminación de tus datos</li>
              <li><span className="text-white/70">Oposición:</span> oponerte al tratamiento de tus datos</li>
              <li><span className="text-white/70">Limitación:</span> solicitar que limitemos el uso de tus datos</li>
              <li><span className="text-white/70">Portabilidad:</span> recibir tus datos en formato estructurado</li>
            </ul>
            <p className="mt-4">
              Para ejercer cualquiera de estos derechos, escríbenos a{' '}
              <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
                automatizagc@gmail.com
              </a>{' '}
              o contáctanos por WhatsApp al{' '}
              <a href="https://wa.me/34696859840" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
                +34 696 859 840
              </a>.
            </p>
            <p className="mt-3">
              También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) en{' '}
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
                www.aepd.es
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              8. Cookies
            </h2>
            <p>
              Este sitio web utiliza cookies técnicas necesarias para su funcionamiento y cookies analíticas para medir el tráfico y mejorar la experiencia de usuario. No utilizamos cookies publicitarias de terceros.
            </p>
            <p className="mt-3">
              Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar al funcionamiento de algunas partes del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              9. Seguridad
            </h2>
            <p>
              Aplicamos medidas técnicas y organizativas adecuadas para proteger tus datos frente a accesos no autorizados, pérdida, alteración o divulgación. Sin embargo, ninguna transmisión de datos por internet es 100% segura.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              10. Cambios en esta política
            </h2>
            <p>
              Podemos actualizar esta política periódicamente. La fecha de "última actualización" al inicio de este documento refleja cuándo se realizaron los cambios más recientes. Te recomendamos revisarla con regularidad.
            </p>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4">
              11. Contacto
            </h2>
            <p>Si tienes preguntas sobre esta política, contáctanos:</p>
            <ul className="mt-3 space-y-2 text-white/50">
              <li>
                <span className="text-white/70">Email: </span>
                <a href="mailto:automatizagc@gmail.com" className="hover:text-white transition-colors underline underline-offset-2">
                  automatizagc@gmail.com
                </a>
              </li>
              <li>
                <span className="text-white/70">WhatsApp: </span>
                <a href="https://wa.me/34696859840" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline underline-offset-2">
                  +34 696 859 840
                </a>
              </li>
            </ul>
          </section>

        </div>
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-12 lg:px-16 pb-12 mt-auto">
        <Footer />
      </div>
    </main>
  );
}
