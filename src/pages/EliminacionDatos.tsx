import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';

/**
 * Instrucciones de eliminación de datos.
 *
 * URL pública configurada como "Data Deletion Instructions URL" en el
 * panel de Meta Developers:
 *   https://automatizagc.xyz/eliminacion-datos
 *
 * Cumple el requisito de Meta Platform Terms y el derecho de supresión
 * del art. 17 RGPD.
 */
export default function EliminacionDatos() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E] print:bg-white print:text-black">
      <Navbar />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24 print:pt-12 print:pb-12">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5 print:text-black/60">
          Legal · Derecho de supresión (art. 17 RGPD)
        </p>

        <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black uppercase tracking-tight leading-[0.92] text-white mb-8 print:text-black">
          ELIMINACIÓN<br />DE DATOS
        </h1>

        <p className="text-sm text-white/40 mb-6 print:text-black/60">
          Última actualización: 31 de mayo de 2026
        </p>

        <div className="mb-12 p-4 rounded-lg border border-white/10 bg-white/5 text-xs text-white/60 leading-relaxed print:border-black/20 print:bg-transparent print:text-black/70">
          <p>
            Esta página explica cómo solicitar la eliminación completa de los
            datos personales que Automatiza GC trate sobre ti a través de
            cualquiera de nuestros canales (web, Instagram Direct, Facebook
            Messenger o WhatsApp Business).
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
            </ul>
          </section>

          {/* 2. MÉTODOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              2. Cómo solicitar la eliminación (tres métodos válidos)
            </h2>
            <p>
              Puedes solicitar la supresión de tus datos por cualquiera de
              las siguientes vías. Todas tienen la misma validez:
            </p>

            <div className="mt-5 space-y-5">
              <div className="p-4 rounded-lg border border-white/10 bg-white/5 print:border-black/20 print:bg-transparent">
                <p className="text-[11px] uppercase tracking-[0.12em] text-white/80 font-semibold mb-2 print:text-black">
                  Método A — En la propia conversación
                </p>
                <p className="text-white/60 print:text-black/80">
                  Escribe en cualquier momento, en la misma conversación con
                  nuestro bot (Instagram Direct, Facebook Messenger,
                  WhatsApp o chat web), cualquiera de estas frases:
                </p>
                <ul className="mt-3 space-y-1 list-disc list-inside text-white/50 print:text-black/70">
                  <li><span className="text-white/80 print:text-black">"BAJA"</span></li>
                  <li><span className="text-white/80 print:text-black">"BORRAR"</span></li>
                  <li><span className="text-white/80 print:text-black">"ELIMINAR MIS DATOS"</span></li>
                  <li><span className="text-white/80 print:text-black">"BAJA RGPD"</span></li>
                </ul>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/5 print:border-black/20 print:bg-transparent">
                <p className="text-[11px] uppercase tracking-[0.12em] text-white/80 font-semibold mb-2 print:text-black">
                  Método B — Email
                </p>
                <p className="text-white/60 print:text-black/80">
                  Envía un correo electrónico a{' '}
                  <a href="mailto:automatizagc@gmail.com?subject=Solicitud%20de%20eliminaci%C3%B3n" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                    automatizagc@gmail.com
                  </a>{' '}
                  con el asunto{' '}
                  <span className="text-white/80 print:text-black">"Solicitud de eliminación"</span>{' '}
                  indicando, si los conoces, el identificador o nombre de
                  usuario con el que interactuaste y el canal (IG, FB,
                  WhatsApp, web).
                </p>
              </div>

              <div className="p-4 rounded-lg border border-white/10 bg-white/5 print:border-black/20 print:bg-transparent">
                <p className="text-[11px] uppercase tracking-[0.12em] text-white/80 font-semibold mb-2 print:text-black">
                  Método C — WhatsApp directo
                </p>
                <p className="text-white/60 print:text-black/80">
                  Escríbenos a{' '}
                  <a href="https://wa.me/34696859840?text=Solicitud%20de%20eliminaci%C3%B3n%20de%20datos" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                    +34 696 859 840
                  </a>{' '}
                  indicando que solicitas la eliminación de tus datos.
                </p>
              </div>
            </div>
          </section>

          {/* 3. PLAZO */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              3. Plazo de respuesta
            </h2>
            <p>
              Conforme al artículo 12.3 del RGPD respondemos a las
              solicitudes de supresión en un plazo máximo de{' '}
              <span className="text-white/80 print:text-black">30 días naturales</span> desde su
              recepción, ampliable a dos meses adicionales en supuestos de
              especial complejidad debidamente justificados.
            </p>
            <p className="mt-3">
              En la práctica procesamos la mayoría de solicitudes en menos
              de 48 horas.
            </p>
          </section>

          {/* 4. QUÉ SE ELIMINA */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              4. Qué datos se eliminan
            </h2>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Historial completo de la conversación (texto, audio, imágenes, vídeo, adjuntos)</li>
              <li>Perfil app-scoped y/o nombre público asociado a tu interacción con nuestra app de Meta</li>
              <li>Metadatos técnicos vinculados a tus mensajes (timestamps, identificadores internos, idioma detectado, tipo de mensaje)</li>
              <li>Datos de contacto que nos hubieras facilitado voluntariamente (nombre, email, teléfono adicional, empresa)</li>
              <li>Cualquier nota interna o resumen asociado a tu interacción</li>
            </ul>
          </section>

          {/* 5. QUÉ SE CONSERVA */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              5. Qué se conserva (y por qué)
            </h2>
            <p>
              Por imperativo legal o como garantía del propio ejercicio del
              derecho de supresión, conservamos los siguientes datos
              mínimos:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>
                <span className="text-white/70 print:text-black">Lista técnica de supresión (suppression list):</span> tu
                identificador mínimo (email o teléfono) y la fecha de la
                solicitud, con el único fin de garantizar que no volvamos a
                contactarte. Sin este registro no podríamos cumplir tu
                propia voluntad de no recibir más comunicaciones.
              </li>
              <li>
                <span className="text-white/70 print:text-black">Datos contables y de facturación</span> si has sido cliente:
                6 años por exigencia del artículo 66 de la Ley General
                Tributaria, y 10 años para prevención de blanqueo de
                capitales cuando aplique (Ley 10/2010).
              </li>
              <li>
                <span className="text-white/70 print:text-black">Pruebas de la solicitud y de su atención:</span> hasta el
                vencimiento del plazo de prescripción de acciones
                administrativas correspondientes.
              </li>
            </ul>
          </section>

          {/* 6. VERIFICACIÓN */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              6. Verificación de identidad
            </h2>
            <p>
              Para evitar el ejercicio fraudulento de derechos por terceros
              (art. 12.6 RGPD), antes de proceder a la eliminación podemos
              pedirte una confirmación adicional respondiendo al canal por
              el que recibimos la solicitud (mismo número de WhatsApp, mismo
              email, misma cuenta de Instagram/Facebook). Si la solicitud
              llega por un canal distinto al que originó los datos, podemos
              pedirte información razonable de verificación.
            </p>
            <p className="mt-3">
              En ningún caso te solicitaremos el DNI completo, copia del
              pasaporte ni datos sensibles para verificar tu identidad.
            </p>
          </section>

          {/* 7. CONFIRMACIÓN */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              7. Confirmación
            </h2>
            <p>
              Una vez completada la eliminación recibirás una confirmación
              por escrito (por el mismo canal por el que solicitaste la baja
              o por email, según corresponda) indicando qué datos han sido
              eliminados y cuáles han quedado en el registro de supresión
              conforme a la sección anterior.
            </p>
          </section>

          {/* 8. AEPD */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              8. Reclamación ante la AEPD
            </h2>
            <p>
              Si consideras que no hemos atendido correctamente tu derecho
              de supresión, puedes presentar una reclamación ante la Agencia
              Española de Protección de Datos:
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

          {/* 9. META DATA DELETION */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              9. Estado del Meta Data Deletion Callback
            </h2>
            <p>
              Actualmente, conforme a las opciones que ofrece la Plataforma
              Meta, atendemos las solicitudes de eliminación mediante esta
              URL pública de instrucciones (Data Deletion Instructions URL),
              de acuerdo con las Meta Platform Terms.
            </p>
            <p className="mt-3">
              Cualquier solicitud puede realizarse por los tres métodos
              descritos en la sección 2, con total efectividad y dentro
              de los plazos del RGPD.
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
