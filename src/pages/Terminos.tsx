import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Sections';

/**
 * Términos de Servicio.
 *
 * Conforme a la Ley 34/2002 de Servicios de la Sociedad de la Información
 * (LSSI), Real Decreto Legislativo 1/2007 de Defensa de Consumidores y
 * Usuarios, y normativa concordante.
 */
export default function Terminos() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden flex flex-col items-center font-sans selection:bg-white/20 selection:text-white bg-[#0A0B0E] print:bg-white print:text-black">
      <Navbar />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 md:px-12 pt-36 pb-24 print:pt-12 print:pb-12">

        <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5 print:text-black/60">
          Legal
        </p>

        <h1 className="text-[clamp(1.6rem,4vw,2.8rem)] font-black uppercase tracking-tight leading-[0.92] text-white mb-8 print:text-black">
          TÉRMINOS DE<br />SERVICIO
        </h1>

        <p className="text-sm text-white/40 mb-14 print:text-black/60">
          Última actualización: 31 de mayo de 2026
        </p>

        <div className="space-y-12 text-sm text-white/60 leading-relaxed print:text-black/80">

          {/* 1. IDENTIDAD LSSI */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              1. Identidad del prestador (art. 10 LSSI)
            </h2>
            <ul className="space-y-1 text-white/50 print:text-black/70">
              <li><span className="text-white/70 print:text-black">Titular:</span> Alexander Jose Medina Arevalo</li>
              <li><span className="text-white/70 print:text-black">NIF:</span> 60707445A</li>
              <li><span className="text-white/70 print:text-black">Nombre comercial:</span> Automatiza GC</li>
              <li><span className="text-white/70 print:text-black">Dirección postal:</span> Calle Teseguite 40, piso 2 puerta 2A, 35110 Vecindario (Santa Lucía de Tirajana), Las Palmas, España</li>
              <li><span className="text-white/70 print:text-black">Email:</span>{' '}
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

          {/* 2. SERVICIO */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              2. Descripción del servicio
            </h2>
            <p>
              Automatiza GC ofrece un servicio de asistente conversacional
              basado en inteligencia artificial, accesible a través de los
              siguientes canales:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Chat web en automatizagc.xyz</li>
              <li>Instagram Direct (cuenta @automatiza.gc)</li>
              <li>Facebook Messenger</li>
              <li>WhatsApp Business (+34 696 859 840)</li>
            </ul>
            <p className="mt-3">
              El servicio incluye respuesta automatizada por IA, agendado de
              reuniones, generación de presupuestos y derivación a una
              persona humana de nuestro equipo cuando se solicite.
            </p>
          </section>

          {/* 3. ACEPTACIÓN */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              3. Aceptación de los términos
            </h2>
            <p>
              Al iniciar una conversación con nuestro asistente a través de
              cualquiera de los canales indicados, así como al utilizar la
              web, declaras haber leído y aceptado estos Términos de Servicio
              y la{' '}
              <a href="/politica-de-privacidad" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                Política de Privacidad
              </a>. Esta aceptación tiene plena validez jurídica con arreglo
              al artículo 23 LSSI (contratación por vía electrónica).
            </p>
            <p className="mt-3">
              Si no estás de acuerdo con alguna parte de estos términos
              abstente de iniciar la conversación o cesa su uso de inmediato.
            </p>
          </section>

          {/* 4. USO ACEPTABLE */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              4. Uso aceptable
            </h2>
            <p>Te comprometes a no utilizar el servicio para:</p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Enviar comunicaciones no solicitadas de carácter comercial (spam) ni mensajes en masa</li>
              <li>Difundir contenido ilícito, difamatorio, discriminatorio, violento, pornográfico o que infrinja derechos de terceros</li>
              <li>Utilizar bots, scripts u otras formas de automatización abusiva contra nuestros canales</li>
              <li>Realizar ingeniería inversa, web scraping masivo o extracción no autorizada de datos del servicio</li>
              <li>Intentar acceder a partes del sistema reservadas, vulnerar medidas de seguridad o sobrecargar deliberadamente la infraestructura</li>
              <li>Suplantar identidad o facilitar datos falsos</li>
              <li>Inducir al modelo de IA a generar contenido contrario a las políticas de Anthropic, OpenAI o Meta</li>
            </ul>
            <p className="mt-3">
              El incumplimiento puede dar lugar a la suspensión inmediata del
              servicio y, en su caso, a las acciones legales que procedan.
            </p>
          </section>

          {/* 5. PROPIEDAD INTELECTUAL */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              5. Propiedad intelectual e industrial
            </h2>
            <p>
              Todos los elementos de la web y del servicio (código fuente,
              textos, gráficos, diseño, marcas, dominio, base de datos de
              prompts y configuración del asistente) son titularidad de
              Alexander Jose Medina Arevalo o de sus licenciantes, y están
              protegidos por la Ley de Propiedad Intelectual (RDL 1/1996) y
              demás normativa aplicable.
            </p>
            <p className="mt-3">
              Queda prohibida la reproducción, distribución, comunicación
              pública o transformación total o parcial sin autorización
              expresa y por escrito del titular, salvo los usos permitidos
              por la ley.
            </p>
          </section>

          {/* 6. LIMITACIÓN RESPONSABILIDAD + IA ACT */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              6. Naturaleza del asistente de IA y limitación de responsabilidad
            </h2>
            <p>
              En cumplimiento del artículo 50 del Reglamento (UE) 2024/1689
              de Inteligencia Artificial te informamos de que el asistente
              conversacional es un sistema de IA, no una persona humana.
              Utiliza modelos de lenguaje desarrollados por terceros
              (principalmente Claude de Anthropic PBC) y, por su propia
              naturaleza, puede generar respuestas inexactas, incompletas o
              desactualizadas.
            </p>
            <p className="mt-3">
              Las respuestas del asistente no constituyen asesoramiento
              jurídico, fiscal, médico, financiero ni profesional cualificado.
              Verifica siempre la información crítica con un profesional
              competente y con la documentación oficial antes de tomar
              decisiones.
            </p>
            <p className="mt-3">
              En la máxima medida permitida por la ley, Automatiza GC no
              responderá por:
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside text-white/50 print:text-black/70">
              <li>Decisiones tomadas por el usuario basándose en respuestas del asistente</li>
              <li>Daños indirectos, consecuenciales, lucro cesante o pérdida de oportunidad</li>
              <li>Interrupciones del servicio debidas a causas ajenas (proveedores cloud, Meta, operadores)</li>
              <li>Contenidos publicados por terceros en nuestros canales sociales</li>
            </ul>
            <p className="mt-3">
              Nada de lo anterior limita las responsabilidades que por
              imperativo legal no puedan excluirse, en particular frente a
              consumidores y usuarios.
            </p>
          </section>

          {/* 7. PRECIOS */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              7. Precios y condiciones económicas
            </h2>
            <p>
              El acceso al asistente conversacional como usuario final es{' '}
              <span className="text-white/80 print:text-black">gratuito</span>, sin coste alguno por
              consulta, sin perjuicio del coste que tu operador de
              telecomunicaciones o de internet pueda aplicarte por el envío
              de mensajes.
            </p>
          </section>

          {/* 8. BAJA */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              8. Cesación de uso y derecho de baja
            </h2>
            <p>
              Puedes dejar de usar el servicio en cualquier momento, sin
              necesidad de preaviso. Para solicitar la eliminación de tus
              datos consulta la página{' '}
              <a href="/eliminacion-datos" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                /eliminacion-datos
              </a>.
            </p>
            <p className="mt-3">
              Por nuestra parte, podemos suspender o resolver el acceso al
              servicio en caso de uso contrario a estos términos, requerimiento
              de autoridad competente o incumplimiento de las políticas de
              las plataformas de Meta sobre las que prestamos el servicio.
            </p>
          </section>

          {/* 9. MODIFICACIONES */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              9. Modificaciones de los términos
            </h2>
            <p>
              Podemos modificar estos Términos para reflejar cambios
              normativos, técnicos o de servicio. La fecha de "última
              actualización" al inicio del documento refleja la versión
              vigente. Los cambios sustanciales serán comunicados con
              antelación razonable a los usuarios con conversación activa.
              El uso continuado del servicio tras la entrada en vigor de los
              cambios implica su aceptación.
            </p>
          </section>

          {/* 10. LEY Y JURISDICCIÓN */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              10. Ley aplicable y resolución de conflictos
            </h2>
            <p>
              Estos Términos se rigen por la legislación española. Para la
              resolución de cualquier controversia, las partes se someten a
              los Juzgados y Tribunales de Las Palmas de Gran Canaria, salvo
              que la normativa de protección de los consumidores y usuarios
              determine un fuero distinto, en cuyo caso prevalecerá éste.
            </p>
            <p className="mt-3">
              Si eres consumidor residente en la Unión Europea, tienes
              derecho a acudir a la plataforma de resolución de litigios en
              línea de la Comisión Europea:{' '}
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-2 print:text-black">
                https://ec.europa.eu/consumers/odr
              </a>. Igualmente, puedes dirigirte a la Junta Arbitral de
              Consumo de Canarias o a la de tu lugar de residencia. Te
              recomendamos, no obstante, intentar primero una solución
              amistosa escribiéndonos a automatizagc@gmail.com.
            </p>
          </section>

          {/* 11. CONTACTO */}
          <section>
            <h2 className="text-xs uppercase tracking-[0.15em] text-white/80 font-semibold mb-4 print:text-black">
              11. Contacto
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
                <span className="text-white/70 print:text-black">Teléfono: </span>
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
