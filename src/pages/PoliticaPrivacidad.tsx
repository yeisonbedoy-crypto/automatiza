import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';

/**
 * Política de Privacidad general.
 *
 * URL pública para Meta App Review (instagram_business_manage_messages):
 *   https://automatizagc.xyz/politica-de-privacidad
 *
 * Cubre: RGPD (UE) 2016/679, LOPDGDD 3/2018, LSSI 34/2002,
 * Reglamento UE de IA (Art. 50, vigencia agosto 2026) y
 * Meta Platform Terms / Developer Policies (cláusulas literales).
 */
export default function PoliticaPrivacidad() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E] print:bg-white print:text-black">
      <Navbar />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24 print:pt-12 print:pb-12">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5 print:text-black/60">
          Legal
        </p>

        <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black uppercase tracking-tight leading-[0.92] text-white mb-8 print:text-black">
          POLÍTICA DE<br />PRIVACIDAD
        </h1>

        <p className="text-sm text-white/40 mb-6 print:text-black/60">
          Última actualización: 31 de mayo de 2026
        </p>

        <div className="mb-12 p-4 rounded-lg border border-white/10 bg-white/5 text-xs text-white/60 leading-relaxed print:border-black/20 print:bg-transparent print:text-black/70">
          <p>
            Esta política describe el tratamiento de los datos personales
            recogidos cuando interactúas con nuestros canales: web pública,
            chat conversacional, WhatsApp Business, Instagram Direct y
            Facebook Messenger. Existe una nota informativa específica para
            destinatarios de comunicaciones comerciales B2B disponible en{' '}
            <a href="/privacidad" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
              /privacidad
            </a>{' '}
            que complementa (no sustituye) lo dispuesto en este documento.
          </p>
          <p className="mt-3">
            Esta política está disponible en inglés en{' '}
            <a href="/privacy-policy" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
              /privacy-policy
            </a>{' '}
            como traducción de cortesía; la versión española es la oficial a
            efectos legales.
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
              <li><span className="text-white/70 print:text-black">NIF:</span> 60707445A</li>
              <li><span className="text-white/70 print:text-black">Nombre comercial:</span> Automatiza GC</li>
              <li><span className="text-white/70 print:text-black">Dirección postal:</span> Calle Teseguite 40, piso 2 puerta 2A, 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas, España</li>
              <li><span className="text-white/70 print:text-black">Email privacidad:</span>{' '}
                <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>
              </li>
              <li><span className="text-white/70 print:text-black">Teléfono:</span> +34 603 317 697</li>
              <li><span className="text-white/70 print:text-black">Web:</span>{' '}
                <a href="https://automatizagc.xyz" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  https://automatizagc.xyz
                </a>
              </li>
            </ul>
          </section>

          {/* 2. DPO */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              2. Delegado de Protección de Datos (DPO)
            </h2>
            <p>
              No se requiere la designación obligatoria de un Delegado de
              Protección de Datos conforme al artículo 37 del RGPD, al no
              concurrir ninguno de los supuestos del artículo 37.1 ni del
              artículo 34 LOPDGDD. No obstante, cualquier cuestión relativa
              a la protección de datos puede dirigirse a{' '}
              <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                automatizagc@gmail.com
              </a>.
            </p>
          </section>

          {/* 3. DATOS TRATADOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              3. Datos que tratamos
            </h2>
            <p>
              En función del canal por el que interactúes con nosotros, podemos
              tratar los siguientes datos:
            </p>
            <h3 className="mt-5 text-[11px] uppercase tracking-[0.12em] text-white/70 font-semibold mb-2 print:text-black">
              3.1 Canales propios (web, email, llamada)
            </h3>
            <ul className="mt-2 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Nombre y apellidos</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono o WhatsApp</li>
              <li>Nombre de empresa o negocio y sector</li>
              <li>Contenido de los mensajes que nos envías</li>
              <li>Datos técnicos de navegación (IP, navegador, idioma, timestamp) mediante cookies técnicas</li>
            </ul>

            <h3 className="mt-5 text-[11px] uppercase tracking-[0.12em] text-white/70 font-semibold mb-2 print:text-black">
              3.2 Bot conversacional vía Meta (Instagram Direct / Facebook Messenger / WhatsApp)
            </h3>
            <p>
              Cuando inicias una conversación con nuestro bot a través de
              cualquier producto de Meta tratamos:
            </p>
            <ul className="mt-2 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Identificador <em>app-scoped</em> que Meta nos transmite (no es tu DNI ni tu número directo; es un ID interno generado por Meta para nuestra app)</li>
              <li>Nombre público de usuario o de perfil y, en su caso, foto pública del perfil</li>
              <li>Contenido completo de los mensajes intercambiados (texto, audio, imagen, vídeo, adjuntos)</li>
              <li>Marca temporal (timestamp) de cada mensaje</li>
              <li>Idioma detectado de la conversación</li>
              <li>Metadatos técnicos del envío (tipo de mensaje, plataforma origen, identificador del mensaje)</li>
              <li>Número de teléfono (sólo en WhatsApp, transmitido por la API)</li>
            </ul>
            <p className="mt-3">
              No tratamos categorías especiales de datos (art. 9 RGPD). Si por
              tu propia iniciativa nos compartes información sensible (salud,
              ideología, etc.) en un mensaje, te recomendamos abstenerte; en
              ningún caso la utilizaremos con finalidades distintas a las
              descritas en esta política.
            </p>
          </section>

          {/* 4. FINALIDADES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              4. Finalidades del tratamiento
            </h2>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Atención al cliente y respuesta a tus consultas en tiempo real mediante un asistente de IA</li>
              <li>Elaboración de presupuestos, propuestas comerciales y agendado de reuniones</li>
              <li>Prestación de los servicios contratados y gestión de la relación contractual</li>
              <li>Notificación interna a nuestro equipo cuando solicitas hablar con una persona humana</li>
              <li>Mejora del servicio y del propio asistente (revisión interna de conversaciones, sin perfilado automatizado con efectos jurídicos)</li>
              <li>Cumplimiento de obligaciones legales (fiscales, mercantiles, defensa frente a reclamaciones)</li>
            </ul>
          </section>

          {/* 5. BASES LEGALES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              5. Bases legales (art. 6 RGPD)
            </h2>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Art. 6.1.b RGPD — Medidas precontractuales y ejecución del contrato:</span> tratamiento necesario para atender tu solicitud de información, elaborar presupuesto y, en su caso, prestar el servicio contratado.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Art. 6.1.f RGPD — Interés legítimo:</span> mejora del servicio, seguridad técnica de la infraestructura, prevención del fraude y defensa frente a reclamaciones.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Art. 6.1.a RGPD — Consentimiento:</span> al iniciar una conversación con nuestro bot de IA aceptas que tus mensajes sean procesados por modelos de inteligencia artificial de terceros (ver sección 7). Puedes retirar el consentimiento en cualquier momento solicitando hablar con un humano o cesando la interacción.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Art. 6.1.c RGPD — Obligación legal:</span> conservación de facturación y documentación contable cuando proceda.
              </li>
            </ul>

            <h3 className="mt-6 text-[11px] uppercase tracking-[0.12em] text-white/70 font-semibold mb-2 print:text-black">
              5.1 Prospección comercial B2B
            </h3>
            <p>
              <span className="text-white/70 print:text-black">Prospección comercial B2B (art. 6.1.f RGPD + art. 19 LSSI + art. 21 LSSI a contrario para destinatarios personas jurídicas):</span>{' '}
              Podemos dirigir comunicaciones comerciales no solicitadas a
              personas jurídicas o empresarios individuales en su condición
              profesional cuando los datos provengan de fuentes públicas
              (web corporativa, registros mercantiles, directorios
              sectoriales). Hemos realizado el test de ponderación previsto
              en el Considerando 47 RGPD: el interés legítimo de promoción
              comercial B2B prevalece sobre los intereses del destinatario
              por (i) tratarse de datos profesionales no de esfera privada,
              (ii) referirse a productos directamente relacionados con su
              actividad y (iii) facilitar siempre un mecanismo de baja
              simple en el primer mensaje. Puedes oponerte respondiendo
              "BAJA" o escribiendo a automatizagc@gmail.com. Una vez
              recibida la oposición no volveremos a contactarte.
            </p>
          </section>

          {/* 6. CLÁUSULA AI ACT */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              6. Uso de inteligencia artificial (Art. 50 Reglamento UE de IA)
            </h2>
            <p>
              En cumplimiento del artículo 50 del Reglamento (UE) 2024/1689
              sobre Inteligencia Artificial, te informamos de forma clara y
              comprensible de lo siguiente:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                Cuando interactúas con nuestro asistente conversacional (en la
                web, en WhatsApp, en Instagram Direct o en Facebook Messenger)
                estás interactuando con un sistema de inteligencia artificial,
                no con una persona humana.
              </li>
              <li>
                El modelo principal utilizado es <span className="text-white/80 print:text-black">Claude</span>, desarrollado por Anthropic PBC. Para transcripción de audio utilizamos <span className="text-white/80 print:text-black">Whisper</span>, desarrollado por OpenAI L.L.C.
              </li>
              <li>
                Puedes solicitar en cualquier momento hablar con una persona
                humana de nuestro equipo escribiendo{' '}
                <span className="text-white/80 print:text-black">"AGENTE"</span>,{' '}
                <span className="text-white/80 print:text-black">"HUMANO"</span> o{' '}
                <span className="text-white/80 print:text-black">"PERSONA"</span> en
                cualquier momento de la conversación. El bot pausará su
                actividad y nuestro equipo retomará la conversación lo antes
                posible.
              </li>
              <li>
                El asistente puede cometer errores. Las respuestas no
                constituyen asesoramiento jurídico, fiscal ni médico
                profesional.
              </li>
            </ul>
          </section>

          {/* 7. SUBPROCESADORES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              7. Encargados del tratamiento (subprocesadores)
            </h2>
            <p>
              Para prestar el servicio recurrimos a los siguientes encargados
              del tratamiento, todos vinculados mediante contratos conformes
              al artículo 28 RGPD:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Meta Platforms Ireland Ltd.</span> — Operador de las plataformas Instagram, Facebook Messenger y de la API de WhatsApp Cloud. Sede en Irlanda (UE).</li>
              <li><span className="text-white/70 print:text-black">Anthropic PBC</span> — Procesamiento conversacional con el modelo Claude. Sede en EE. UU.</li>
              <li><span className="text-white/70 print:text-black">Supabase Inc.</span> — Base de datos PostgreSQL y almacenamiento. Datos alojados en la UE (eu-north-1, Estocolmo).</li>
              <li><span className="text-white/70 print:text-black">Vercel Inc.</span> — Alojamiento del frontend público. Infraestructura global con regiones europeas activadas.</li>
              <li><span className="text-white/70 print:text-black">OpenAI L.L.C.</span> — Transcripción de audio (Whisper) y, en su caso, síntesis de voz. Sede en EE. UU.</li>
              <li><span className="text-white/70 print:text-black">360dialog GmbH</span> — Proveedor oficial de la API de WhatsApp Business (BSP). Sede en Alemania (UE).</li>
              <li><span className="text-white/70 print:text-black">Cloudflare Inc.</span> — CDN, túnel seguro y protección frente a ataques. Sede en EE. UU. con servidores en la UE.</li>
              <li><span className="text-white/70 print:text-black">Oracle Cloud Infrastructure</span> — VPS de backend. Región eu-frankfurt-1 (Alemania).</li>
            </ul>
            <p className="mt-3 text-xs text-white/40 print:text-black/60">
              Lista actualizada el 31 de mayo de 2026. Puedes solicitar la
              versión vigente escribiendo a automatizagc@gmail.com.
            </p>
          </section>

          {/* 8. TRANSFERENCIAS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              8. Transferencias internacionales de datos
            </h2>
            <p>
              Algunos encargados (Anthropic, OpenAI, Vercel, Cloudflare, Meta
              Platforms para tráfico fuera de la UE) pueden situarse en
              Estados Unidos. Estas transferencias se realizan al amparo de
              las <span className="text-white/80 print:text-black">Cláusulas Contractuales Tipo</span> (SCC) aprobadas por la
              Comisión Europea mediante Decisión de Ejecución (UE) 2021/914 y,
              cuando el proveedor está certificado, del marco{' '}
              <span className="text-white/80 print:text-black">EU-U.S. Data Privacy Framework</span> reconocido por
              Decisión de Adecuación de 10 de julio de 2023.
            </p>
            <p className="mt-3">
              Aplicamos medidas adicionales: cifrado en tránsito (TLS 1.3),
              cifrado en reposo, minimización de los datos enviados y
              retención corta cuando el proveedor lo permite.
            </p>
          </section>

          {/* 9. CLÁUSULAS META OBLIGATORIAS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              9. Uso de los datos derivados de la Plataforma Meta
            </h2>
            <p>
              Para los datos que obtenemos a través de las APIs de Meta
              (Instagram Graph API, Messenger Platform, WhatsApp Business
              Platform) asumimos los siguientes compromisos en línea con
              las <em>Meta Platform Terms</em> y las <em>Developer Policies</em>:
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                No vendemos, alquilamos ni cedemos los datos derivados de la
                Plataforma Meta a terceros, brokers de datos, redes
                publicitarias, servicios de monetización de datos ni
                proveedores de analítica que los usen para fines propios.
              </li>
              <li>
                Solo usamos los datos derivados de la Plataforma Meta para
                los fines descritos en esta política y de acuerdo con las
                Meta Platform Terms y Developer Policies.
              </li>
              <li>
                Conservamos los datos derivados de la Plataforma Meta solo el
                tiempo necesario para el fin para el que fueron recogidos,
                salvo obligación legal.
              </li>
              <li>
                Si un usuario elimina un mensaje en Instagram Direct o
                Facebook Messenger (función <em>unsend</em>), procesamos el
                evento <em>message_deletions</em> que Meta nos transmite y
                eliminamos también dicho mensaje de nuestros sistemas.
              </li>
              <li>
                Si un usuario revoca los permisos de nuestra app desde la
                configuración de su cuenta Meta, eliminamos los datos
                asociados a su identificador app-scoped.
              </li>
            </ul>
          </section>

          {/* 10. CONSERVACIÓN */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              10. Plazos de conservación
            </h2>
            <ul className="space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Conversaciones del bot (web, IG, FB, WhatsApp):</span> 24 meses desde la última interacción. Transcurrido ese plazo se eliminan automáticamente.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Datos de contacto comercial:</span> mientras dure la relación o el interés mutuo, y hasta 24 meses tras la última comunicación.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Datos de clientes (facturación):</span> 6 años por exigencia de la Ley General Tributaria (art. 66 LGT) y 10 años para prevención de blanqueo de capitales (Ley 10/2010), cuando aplique.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Solicitudes de baja:</span> registro técnico de supresión indefinido, con el único fin de garantizar que no se vuelva a contactar al titular (sólo email o teléfono y fecha).
              </li>
            </ul>
          </section>

          {/* 11. DERECHOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              11. Derechos del interesado (ARSOPL)
            </h2>
            <p>
              De acuerdo con los artículos 15 a 22 del RGPD puedes ejercer en
              cualquier momento los derechos de:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Acceso</span> — saber qué datos tenemos sobre ti</li>
              <li><span className="text-white/70 print:text-black">Rectificación</span> — corregir datos inexactos</li>
              <li><span className="text-white/70 print:text-black">Supresión</span> — eliminación de tus datos ("derecho al olvido")</li>
              <li><span className="text-white/70 print:text-black">Oposición</span> — oponerte al tratamiento basado en interés legítimo</li>
              <li><span className="text-white/70 print:text-black">Portabilidad</span> — recibir tus datos en formato estructurado</li>
              <li><span className="text-white/70 print:text-black">Limitación</span> — restringir el tratamiento en supuestos concretos</li>
              <li><span className="text-white/70 print:text-black">No decisiones automatizadas</span> — no aplicamos decisiones automatizadas con efectos jurídicos</li>
            </ul>
            <p className="mt-4">
              Para ejercerlos puedes:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                Escribir <span className="text-white/80 print:text-black">"BAJA"</span>,{' '}
                <span className="text-white/80 print:text-black">"BORRAR"</span>,{' '}
                <span className="text-white/80 print:text-black">"ELIMINAR MIS DATOS"</span> o{' '}
                <span className="text-white/80 print:text-black">"BAJA RGPD"</span> en cualquier
                conversación con nuestro bot (web, IG, FB, WhatsApp).
              </li>
              <li>
                Enviar un correo a{' '}
                <a href="mailto:automatizagc@gmail.com" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>{' '}
                con el asunto "Ejercicio de derechos RGPD".
              </li>
              <li>
                Consultar el procedimiento detallado en{' '}
                <a href="/eliminacion-datos" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                  /eliminacion-datos
                </a>.
              </li>
            </ul>
            <p className="mt-3">
              Responderemos en el plazo máximo de un mes (ampliable a dos
              meses adicionales en supuestos de especial complejidad,
              debidamente justificada, conforme al art. 12.3 RGPD).
            </p>
          </section>

          {/* 12. AEPD */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              12. Derecho a reclamar ante la AEPD
            </h2>
            <p>
              Sin perjuicio de los derechos anteriores tienes derecho a
              presentar una reclamación ante la Agencia Española de
              Protección de Datos (AEPD), autoridad de control competente
              en España:
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

          {/* 13. MENORES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              13. Menores de edad
            </h2>
            <p>
              Nuestros servicios no están dirigidos a menores de 14 años.
              Conforme al artículo 7 de la LOPDGDD no recogemos
              intencionadamente datos de menores de 14 años sin el
              consentimiento de quien ejerza la patria potestad o tutela.
              Si detectamos que un usuario es menor de 14 años eliminaremos
              de inmediato sus datos.
            </p>
          </section>

          {/* 14. SEGURIDAD */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              14. Medidas de seguridad
            </h2>
            <p>
              Aplicamos medidas técnicas y organizativas conforme al artículo
              32 RGPD: cifrado en tránsito (TLS), control de acceso por roles,
              autenticación reforzada en cuentas administrativas, copias de
              seguridad cifradas, registro de actividad, separación de
              entornos y revisión periódica de proveedores. Notificaremos
              cualquier brecha de seguridad a la AEPD en un plazo máximo de
              72 horas conforme al artículo 33 RGPD y, cuando proceda, a los
              interesados afectados.
            </p>
          </section>

          {/* 15. RESERVADA — reactivar tras App Review aprobado */}

          {/* 16. COOKIES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              16. Cookies
            </h2>
            <p>
              Esta web utiliza únicamente cookies técnicas estrictamente
              necesarias para su funcionamiento, exentas del deber de
              consentimiento conforme al artículo 22.2 LSSI y la Guía de
              Cookies de la AEPD. No utilizamos cookies publicitarias ni
              de seguimiento de terceros.
            </p>
          </section>

          {/* 17. CAMBIOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              17. Cambios en esta política
            </h2>
            <p>
              Esta política puede actualizarse para reflejar cambios
              normativos, técnicos u operativos. La fecha de "última
              actualización" al inicio del documento indica la versión
              vigente. Los cambios sustanciales se comunicarán por el canal
              habitual a las personas con conversación activa.
            </p>
          </section>

          {/* 18. CONTACTO */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              18. Contacto en materia de privacidad
            </h2>
            <ul className="mt-3 space-y-2 text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Email: </span>
                <a href="mailto:automatizagc@gmail.com" className="hover:text-white transition-colors underline underline-offset-2 print:text-black">
                  automatizagc@gmail.com
                </a>
              </li>
              <li>
                <span className="text-white/70 print:text-black">Teléfono: </span>
                +34 603 317 697
              </li>
              <li>
                <span className="text-white/70 print:text-black">Web: </span>
                <a href="https://automatizagc.xyz" className="hover:text-white transition-colors underline underline-offset-2 print:text-black">
                  https://automatizagc.xyz
                </a>
              </li>
              <li>
                <span className="text-white/70 print:text-black">Dirección postal: </span>
                Calle Teseguite 40, piso 2 puerta 2A, 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas, España
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
