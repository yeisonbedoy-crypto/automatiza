import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';

/**
 * Política de Privacidad para prospección comercial B2B.
 *
 * Documenta el tratamiento de datos de contacto profesional B2B obtenidos
 * de fuentes públicas (QDQ, OpenStreetMap, webs propias de los negocios)
 * para comunicación comercial bajo la base lícita de interés legítimo
 * (art. 6.1.f RGPD).
 *
 * Esta página es complementaria — no sustituye — a `/politica-de-privacidad`,
 * que aplica al tratamiento de datos de visitantes que contactan
 * voluntariamente (base lícita: consentimiento / ejecución contractual).
 */
export default function Privacidad() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E] print:bg-white print:text-black">
      <Navbar />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24 print:pt-12 print:pb-12">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5 print:text-black/60">
          Legal · Prospección B2B
        </p>

        <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black uppercase tracking-tight leading-[0.92] text-white mb-8 print:text-black">
          POLÍTICA DE<br />PRIVACIDAD
        </h1>

        <p className="text-sm text-white/40 mb-6 print:text-black/60">
          Última actualización: 20 de mayo de 2026
        </p>

        <div className="mb-12 p-4 rounded-lg border border-white/10 bg-white/5 text-xs text-white/60 leading-relaxed print:border-black/20 print:bg-transparent print:text-black/70">
          <p>
            Esta política describe el tratamiento de datos de contacto profesional
            recogidos de fuentes públicas para comunicación comercial B2B.
            Si nos has contactado tú voluntariamente a través de un formulario o
            mensaje, consulta también nuestra{' '}
            <a href="/politica-de-privacidad" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
              política de privacidad general
            </a>.
          </p>
        </div>

        <div className="space-y-12 text-sm text-white/60 leading-relaxed print:text-black/80">

          {/* 1. RESPONSABLE */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              1. Responsable del tratamiento
            </h2>
            <ul className="space-y-1 text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Titular:</span> Alexander Jose Medina Arevalo</li>
              <li><span className="text-white/70 print:text-black">NIF / DNI:</span> 60707445A</li>
              <li><span className="text-white/70 print:text-black">Nombre comercial:</span> Automatiza GC</li>
              <li><span className="text-white/70 print:text-black">Dirección:</span> Calle Teseguite 40, piso 2 puerta 2A, 35110 Santa Lucía de Tirajana, Las Palmas, Canarias, España</li>
              <li><span className="text-white/70 print:text-black">Email privacidad:</span>{' '}
                <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>
              </li>
              <li><span className="text-white/70 print:text-black">Web:</span> automatizagc.xyz</li>
            </ul>
          </section>

          {/* 2. DATOS TRATADOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              2. Datos que tratamos
            </h2>
            <p>
              Tratamos exclusivamente datos de contacto profesional B2B
              vinculados a la actividad económica del negocio, no a la esfera
              personal o privada de la persona:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Nombre comercial del negocio o establecimiento</li>
              <li>Dirección postal del establecimiento</li>
              <li>Teléfono profesional publicado por el propio negocio</li>
              <li>Email profesional publicado por el propio negocio</li>
              <li>Sector de actividad y categoría comercial</li>
              <li>Sitio web y perfiles públicos en redes sociales</li>
              <li>Horario de apertura, si es público</li>
            </ul>
            <p className="mt-3">
              No tratamos datos de categorías especiales (art. 9 RGPD) ni
              datos de personas físicas no relacionadas con la actividad del
              negocio.
            </p>
          </section>

          {/* 3. ORIGEN */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              3. Origen de los datos
            </h2>
            <p>
              Los datos se obtienen exclusivamente de fuentes públicas de
              acceso libre, donde el propio negocio ha decidido publicar su
              información de contacto profesional:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Directorio QDQ</span> —
                directorio público de empresas (qdq.com)
              </li>
              <li>
                <span className="text-white/70 print:text-black">OpenStreetMap</span> —
                base de datos cartográfica abierta bajo licencia ODbL
                (openstreetmap.org)
              </li>
              <li>
                <span className="text-white/70 print:text-black">Sitios web propios del negocio</span> —
                información de contacto que el negocio publica en su web
                pública
              </li>
              <li>
                <span className="text-white/70 print:text-black">Formularios de contacto</span> —
                cuando un negocio o representante nos escribe voluntariamente
              </li>
            </ul>
          </section>

          {/* 4. FINALIDAD */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              4. Finalidad del tratamiento
            </h2>
            <p>
              La única finalidad es la prospección comercial B2B: ponernos en
              contacto puntual con responsables de negocios locales para
              ofrecerles servicios de automatización con inteligencia
              artificial (agentes de WhatsApp, gestión automatizada de
              correo, presencia digital) relacionados directamente con su
              sector y actividad.
            </p>
            <p className="mt-3">
              No realizamos perfilados automatizados con efectos jurídicos,
              no vendemos los datos, no los cedemos para fines publicitarios
              de terceros y no los empleamos para campañas masivas
              indiscriminadas.
            </p>
          </section>

          {/* 5. BASE LÍCITA */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              5. Base lícita: interés legítimo (art. 6.1.f RGPD)
            </h2>
            <p>
              El tratamiento se ampara en el <span className="text-white/80 print:text-black">interés legítimo</span> previsto
              en el artículo 6.1.f del Reglamento (UE) 2016/679 (RGPD), en
              concordancia con la Ley Orgánica 3/2018 (LOPDGDD) y el
              considerando 47 RGPD, que reconoce expresamente la
              prospección comercial directa como una posible base de
              interés legítimo.
            </p>

            <h3 className="mt-5 text-[11px] uppercase tracking-[0.12em] text-white/70 font-semibold mb-2 print:text-black">
              Test de ponderación
            </h3>
            <p>
              Hemos realizado un análisis de ponderación entre nuestro
              interés legítimo y los derechos del interesado, con el
              siguiente resultado:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Naturaleza B2B:</span> el
                contacto se dirige al rol profesional, no a la persona
                privada.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Datos públicos:</span> los
                datos han sido publicados por el propio negocio con
                vocación de ser contactado profesionalmente.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Relación material:</span> la
                oferta es relevante y proporcional al sector y actividad
                del destinatario.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Expectativa razonable:</span> un
                negocio que publica su contacto profesional puede
                razonablemente esperar comunicaciones comerciales
                relacionadas con su actividad.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Minimización:</span> tratamos
                únicamente los datos estrictamente necesarios para el
                contacto inicial.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Salvaguardas:</span> opción
                de baja inmediata y gratuita en cada comunicación, registro
                permanente de oposición, ausencia de perfilado.
              </li>
            </ul>
            <p className="mt-3">
              La documentación completa del test de ponderación está
              disponible bajo solicitud a{' '}
              <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                automatizagc@gmail.com
              </a>.
            </p>
          </section>

          {/* 6. CONSERVACIÓN */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              6. Plazo de conservación
            </h2>
            <ul className="space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Datos de prospección:</span> 12
                meses desde la última interacción. Transcurrido ese plazo
                sin respuesta, los datos se eliminan de forma automática.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Solicitudes de baja y oposición:</span> se
                conservan de forma indefinida en un registro técnico de
                supresión ("suppression list") con la única finalidad de
                garantizar que no se vuelva a contactar al titular. Este
                registro contiene exclusivamente el identificador mínimo
                necesario (email o teléfono) y la fecha de la solicitud.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Datos contractuales:</span> si
                el contacto deviene en relación contractual, los datos se
                conservan durante la vigencia del contrato y los plazos
                legales aplicables (mercantil, fiscal).
              </li>
            </ul>
          </section>

          {/* 7. ENCARGADOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              7. Cesiones y encargados del tratamiento
            </h2>
            <p>
              No vendemos ni cedemos datos a terceros con fines comerciales.
              Para prestar el servicio, recurrimos a los siguientes
              encargados del tratamiento (subprocesadores), todos vinculados
              mediante contratos conformes al artículo 28 RGPD:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Supabase Inc.</span> —
                base de datos y almacenamiento. Datos alojados en la UE
                (AWS Frankfurt, eu-north-1 / eu-central-1).
              </li>
              <li>
                <span className="text-white/70 print:text-black">Anthropic PBC</span> —
                procesamiento conversacional con el modelo Claude. EE.UU.
                bajo Cláusulas Contractuales Tipo (SCC) de la Comisión
                Europea.
              </li>
              <li>
                <span className="text-white/70 print:text-black">OpenAI L.L.C.</span> —
                transcripción de audio (Whisper). EE.UU. bajo SCC.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Vercel Inc.</span> —
                hosting del frontend público. Infraestructura global con
                regiones europeas activadas.
              </li>
              <li>
                <span className="text-white/70 print:text-black">360dialog GmbH</span> (cuando se active) —
                envío de mensajes a través de la API de WhatsApp Business.
                Encargado con sede en la UE (Alemania).
              </li>
            </ul>
          </section>

          {/* 8. TRANSFERENCIAS INTERNACIONALES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              8. Transferencias internacionales
            </h2>
            <p>
              Algunos encargados (Anthropic, OpenAI, Vercel) están situados
              en Estados Unidos. Estas transferencias se realizan al amparo
              de las <span className="text-white/80 print:text-black">Cláusulas Contractuales Tipo</span> (SCC)
              aprobadas por la Comisión Europea mediante Decisión de
              Ejecución (UE) 2021/914, y, cuando sea aplicable, del marco
              <span className="text-white/80 print:text-black"> EU-U.S. Data Privacy Framework</span> para
              proveedores certificados.
            </p>
            <p className="mt-3">
              Aplicamos además medidas técnicas y organizativas adicionales:
              cifrado en tránsito (TLS), cifrado en reposo, minimización del
              dato remitido y configuración de retención corta en los
              proveedores que lo permiten.
            </p>
          </section>

          {/* 9. DERECHOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              9. Derechos del interesado
            </h2>
            <p>
              De acuerdo con los artículos 15 a 22 del RGPD, puedes ejercer
              en cualquier momento los siguientes derechos:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Acceso:</span> conocer qué datos tenemos sobre ti</li>
              <li><span className="text-white/70 print:text-black">Rectificación:</span> corregir datos inexactos o incompletos</li>
              <li><span className="text-white/70 print:text-black">Supresión:</span> eliminación de tus datos ("derecho al olvido")</li>
              <li><span className="text-white/70 print:text-black">Oposición:</span> oponerte al tratamiento basado en interés legítimo</li>
              <li><span className="text-white/70 print:text-black">Limitación:</span> restringir el tratamiento en supuestos concretos</li>
              <li><span className="text-white/70 print:text-black">Portabilidad:</span> recibir tus datos en formato estructurado y comúnmente utilizado</li>
              <li><span className="text-white/70 print:text-black">No decisiones automatizadas:</span> no se aplican a este tratamiento</li>
            </ul>
            <p className="mt-4">
              Para ejercerlos, envía un correo a{' '}
              <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                automatizagc@gmail.com
              </a>{' '}
              indicando el derecho que quieres ejercer. No es necesario
              motivar la solicitud cuando ejercitas el derecho de oposición.
              Responderemos en el plazo máximo de un mes desde la recepción,
              ampliable a dos meses adicionales en caso de especial
              complejidad, debidamente justificada.
            </p>
          </section>

          {/* 10. OPT-OUT */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              10. Opt-out: cómo darte de baja
            </h2>
            <p>
              Tienes derecho a oponerte al tratamiento en cualquier momento,
              de forma sencilla, gratuita e inmediata, por cualquiera de
              estas vías:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                Responder <span className="text-white/80 print:text-black">"BAJA"</span>,{' '}
                <span className="text-white/80 print:text-black">"STOP"</span> o{' '}
                <span className="text-white/80 print:text-black">"NO"</span> a
                cualquier mensaje recibido (WhatsApp, email).
              </li>
              <li>
                Enviar un correo a{' '}
                <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>{' '}
                con el asunto "Baja".
              </li>
            </ul>
            <p className="mt-3">
              La solicitud se procesa en un plazo inferior a 24 horas. El
              identificador (email o teléfono) se incorpora a un registro
              técnico de supresión para garantizar que no se vuelva a
              contactar al titular en el futuro.
            </p>
          </section>

          {/* 11. AEPD */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              11. Derecho a reclamar ante la AEPD
            </h2>
            <p>
              Sin perjuicio de los derechos anteriores, tienes derecho a
              presentar una reclamación ante la Agencia Española de
              Protección de Datos (AEPD), autoridad de control competente
              en España, especialmente si consideras que no hemos atendido
              correctamente tus derechos:
            </p>
            <ul className="mt-3 space-y-1 text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Web:</span>{' '}
                <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  www.aepd.es
                </a>
              </li>
              <li><span className="text-white/70 print:text-black">Sede electrónica:</span>{' '}
                <a href="https://sedeagpd.gob.es" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  sedeagpd.gob.es
                </a>
              </li>
              <li><span className="text-white/70 print:text-black">Dirección:</span> C/ Jorge Juan 6, 28001 Madrid</li>
              <li><span className="text-white/70 print:text-black">Teléfono:</span> 901 100 099 / 912 663 517</li>
            </ul>
          </section>

          {/* 12. COOKIES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              12. Cookies
            </h2>
            <p>
              Esta web pública (automatizagc.xyz) utiliza únicamente cookies
              técnicas estrictamente necesarias para el funcionamiento del
              sitio, exentas del deber de consentimiento conforme al
              artículo 22.2 LSSI y la Guía de Cookies de la AEPD.
            </p>
            <p className="mt-3">
              No utilizamos cookies publicitarias ni de seguimiento de
              terceros. Si en el futuro se incorporasen cookies analíticas
              o de terceros, se solicitará el consentimiento previo mediante
              un banner conforme a la normativa vigente y se actualizará
              esta política.
            </p>
          </section>

          {/* 13. CAMBIOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              13. Cambios en la política
            </h2>
            <p>
              Esta política puede actualizarse para reflejar cambios
              normativos, técnicos u operativos. La fecha de "última
              actualización" al inicio del documento indica la versión
              vigente. Los cambios sustanciales se comunicarán a los
              titulares con los que mantengamos comunicación activa por el
              mismo canal habitual.
            </p>
          </section>

          {/* 14. CONTACTO */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              14. Contacto en materia de privacidad
            </h2>
            <p>
              Para cualquier consulta relacionada con esta política o con el
              tratamiento de tus datos:
            </p>
            <ul className="mt-3 space-y-2 text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Email: </span>
                <a href="mailto:automatizagc@gmail.com" className="hover:text-white transition-colors underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>
              </li>
              <li>
                <span className="text-white/70 print:text-black">Web: </span>
                <a href="https://automatizagc.xyz" className="hover:text-white transition-colors underline underline-offset-2 print:text-black">
                  automatizagc.xyz
                </a>
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
