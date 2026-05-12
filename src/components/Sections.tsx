import { motion } from 'motion/react';
import { Target, Cpu, TrendingUp, Lightbulb, Users, Globe, Shield, Zap, Music2, Facebook, Twitter, Youtube, Instagram, MessageCircle, Sparkles } from 'lucide-react';
import AnimatedHeading from './AnimatedHeading';
import FadeIn from './FadeIn';
import SeamlessVideo from './SeamlessVideo';
import TiltedCard from './TiltedCard';
import { HoverBorderGradient } from './ui/hover-border-gradient';

export function StorySection() {
  return (
    <section 
      id="story"
      className="relative z-10 w-full py-16 px-6 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center overflow-x-hidden"
    >
      {/* Fondo Absoluto Vertical con Degradado robot-gray para fundir con la imagen */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(180deg, #94999E 0%, #A3A8AD 35%, #B5B9BD 70%, #D1D4D7 100%)'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Layout de dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          
          {/* Parte Izquierda: Agente IA */}
          <div className="relative flex justify-center w-full">
            {/* Efecto Glow (Resplandor) detrás del agente para darle profundidad */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-white/40 blur-[100px] rounded-full pointer-events-none" />
            
            <FadeIn className="relative z-10 w-full flex justify-center">
              {/* Contenedor ajustado al video. Máscara lineal suave en los laterales para que no se note el corte */}
              <div 
                className="inline-flex max-w-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)'
                }}
              >
                <SeamlessVideo 
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260505_191300_39deecab-865f-4097-a681-191fb316f04b.mp4"
                  containerClassName="relative pointer-events-none"
                  videoClassName="w-auto object-contain h-[60vh] md:h-[80vh] max-h-[800px]"
                  videoStyle={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                  }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Parte Derecha: Contenido (Alineado a la derecha) */}
          <div className="flex flex-col items-end text-right px-4 md:px-0">
            <FadeIn>
              <h3 className="text-sm font-medium tracking-widest uppercase text-gray-700/80 mb-4 block">
                CERO RUIDO, MÁS FOCO.
              </h3>
            </FadeIn>
            <AnimatedHeading
              as="h2"
              text="BANDEJA EN PAZ."
              variant="blur"
              className="text-[clamp(2.25rem,6vw,6rem)] font-black uppercase tracking-tight mb-5 pb-3 leading-[0.95] bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent"
              highlights={{ "PAZ.": "oklch(52% 0.22 68)" }}
            />
            <FadeIn delay={400}>
              <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-lg md:max-w-xl">
                Lee, prioriza y responde en tu nombre — con tu tono, con tu criterio, 24/7. Tú solo revisas lo que importa.
              </p>
            </FadeIn>
            <FadeIn delay={500} className="mt-8 flex flex-wrap justify-end gap-4 w-full">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="text-gray-900 font-semibold text-sm flex items-center gap-2 bg-white/20 hover:bg-white/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Simular un correo</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="text-gray-900 font-semibold text-sm flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Hablar con un experto</span>
              </HoverBorderGradient>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn delay={200} className="h-full">
            <TiltedCard>
              <div className="liquid-glass glass-hover p-5 rounded-xl text-left bg-white/20 border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-md h-full w-full">
                <h3 className="text-sm font-semibold mb-2 text-gray-900">Clasificación Inteligente</h3>
                <p className="text-sm text-gray-800">Analiza el contexto de cada correo para priorizar y delegar sin intervención manual.</p>
              </div>
            </TiltedCard>
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <TiltedCard>
              <div className="liquid-glass glass-hover p-5 rounded-xl text-left bg-white/20 border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-md h-full w-full">
                <h3 className="text-sm font-semibold mb-2 text-gray-900">Respuestas Autónomas</h3>
                <p className="text-sm text-gray-800">Redacta respuestas precisas y empáticas al instante, garantizando atención continua 24/7.</p>
              </div>
            </TiltedCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function WhatsappSection() {
  return (
    <section 
      id="whatsapp"
      className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center overflow-x-hidden"
    >
      {/* Fondo Absoluto con Grading Verde (WhatsApp) en la zona baja izquierda fundiéndose al Gris Neutro de la animación */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at bottom left, rgba(37, 211, 102, 0.35) 0%, rgba(37, 211, 102, 0) 55%), linear-gradient(180deg, #94999E 0%, #A3A8AD 35%, #B5B9BD 70%, #D1D4D7 100%)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Layout de dos columnas invertido */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          
          {/* Parte Izquierda: Contenido (Alineado a la izquierda) */}
          <div className="flex flex-col items-start text-left px-4 md:px-0 order-2 lg:order-1">
            <FadeIn>
              <h3 className="text-sm font-medium tracking-widest uppercase text-gray-700/80 mb-4 block">
                TU EQUIPO 24/7.
              </h3>
            </FadeIn>
            <AnimatedHeading
              as="h2"
              text="VENTAS SIN SUEÑO."
              variant="blur"
              className="text-[clamp(2.25rem,6vw,6rem)] font-black uppercase tracking-tight mb-5 pb-3 leading-[0.95] bg-gradient-to-b from-gray-900 to-gray-700 bg-clip-text text-transparent"
              highlights={{ "VENTAS": "#25D366" }}
            />
            <FadeIn delay={400}>
              <p className="text-base md:text-lg lg:text-xl text-gray-800 leading-relaxed max-w-lg md:max-w-xl">
                Un agente que conoce tu negocio responde cada consulta, agenda cada cita y empuja cada venta — en el canal donde ya están tus clientes.
              </p>
            </FadeIn>
            <FadeIn delay={500} className="mt-8 flex flex-wrap justify-start gap-4 w-full">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="text-gray-900 font-semibold text-sm flex items-center gap-2 bg-white/20 hover:bg-white/30"
              >
                <Sparkles className="w-4 h-4" />
                <span>Chatea conmigo ahora</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="text-gray-900 font-semibold text-sm flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Implementar en mi negocio</span>
              </HoverBorderGradient>
            </FadeIn>
          </div>

          {/* Parte Derecha: Agente IA */}
          <div className="relative flex justify-center w-full order-1 lg:order-2">
            
            <FadeIn className="relative z-10 w-full flex justify-center">
              {/* Restauramos SeamlessVideo para un bucle infinito fluido (el rebobinado por código da tirones en MP4) */}
              <div 
                className="inline-flex max-w-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)'
                }}
              >
                <SeamlessVideo 
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260508_192606_6e8873c2-3fc2-4331-be35-8d1b17b52588.mp4"
                  containerClassName="relative pointer-events-none"
                  videoClassName="w-auto object-contain h-[60vh] md:h-[80vh] max-h-[800px]"
                  videoStyle={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                  }}
                />
              </div>
            </FadeIn>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn delay={200} className="h-full">
            <TiltedCard>
              <div className="liquid-glass glass-hover p-5 rounded-xl text-left bg-white/20 border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-md h-full w-full">
                <h3 className="text-sm font-semibold mb-2 text-gray-900">Ventas en Caliente</h3>
                <p className="text-sm text-gray-800">Transforma simples consultas en ventas cerradas, aprovechando el canal con mayor tasa de conversión.</p>
              </div>
            </TiltedCard>
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <TiltedCard>
              <div className="liquid-glass glass-hover p-5 rounded-xl text-left bg-white/20 border border-white/40 shadow-[0_4px_16px_rgba(0,0,0,0.12)] backdrop-blur-md h-full w-full">
                <h3 className="text-sm font-semibold mb-2 text-gray-900">Soporte Inteligente</h3>
                <p className="text-sm text-gray-800">Resuelve consultas habituales al instante y escala automáticamente los casos complejos a tu equipo humano.</p>
              </div>
            </TiltedCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function InstagramSection() {
  return (
    <section 
      id="instagram"
      className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center overflow-x-hidden"
    >
      {/* Fondo Absoluto con fundido inferior para conectar con Plan */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 25% 50%, #F5F0EA 0%, #D9CDBF 20%, #8C7A6B 45%, #4A4036 70%, #201A15 100%)'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Layout de dos columnas (Video Izquierda, Texto Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          
          {/* Parte Izquierda: Agente IA */}
          <div className="relative flex justify-center w-full order-1">
            {/* Resplandor cálido sutil */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#E1306C]/15 blur-[100px] rounded-full pointer-events-none" />
            
            <FadeIn className="relative z-10 w-full flex justify-center">
              <div 
                className="inline-flex max-w-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)'
                }}
              >
                <SeamlessVideo 
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260505_192814_3a31f2ab-f39a-46d5-be03-de7129bffef9.mp4"
                  containerClassName="relative pointer-events-none"
                  videoClassName="w-auto object-contain h-[60vh] md:h-[80vh] max-h-[800px]"
                  videoStyle={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
                  }}
                />
              </div>
            </FadeIn>
          </div>

          {/* Parte Derecha: Contenido (Alineado a la derecha) */}
          <div className="flex flex-col items-end text-right px-4 md:px-0 order-2">
            <FadeIn>
              <h3 className="text-sm font-medium tracking-widest uppercase text-white/60 mb-4 block">
                ATENCIÓN REAL.
              </h3>
            </FadeIn>
            <AnimatedHeading
              as="h2"
              text="DM'S QUE MONETIZAN."
              variant="blur"
              className="text-[clamp(2.25rem,6vw,6rem)] font-black uppercase tracking-tight mb-5 pb-3 leading-[0.95] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
              highlights={{ "MONETIZAN.": "oklch(78% 0.20 25)" }}
            />
            <FadeIn delay={400}>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg md:max-w-xl">
                Tu agente convierte conversaciones en ventas, 24/7. Desde el primer mensaje hasta el enlace de pago, todo automatizado.
              </p>
            </FadeIn>
            <FadeIn delay={500} className="mt-8 flex flex-wrap justify-end gap-4 w-full">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="text-white font-semibold text-sm flex items-center gap-2 bg-white/10 hover:bg-white/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Mándame un MD de prueba</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="text-white font-semibold text-sm flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25"
              >
                <MessageCircle className="w-4 h-4 text-[#43E67A]" />
                <span>Asesoría por WhatsApp</span>
              </HoverBorderGradient>
            </FadeIn>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn delay={200} className="h-full">
            <TiltedCard>
              <div className="liquid-glass glass-hover p-5 rounded-xl text-left h-full w-full">
                <h3 className="text-sm font-semibold mb-2 text-white">Engagement Activo</h3>
                <p className="text-sm text-gray-300">Responde historias y comentarios 24/7, cultivando una comunidad fiel sin que inviertas tu tiempo.</p>
              </div>
            </TiltedCard>
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <TiltedCard>
              <div className="liquid-glass glass-hover p-5 rounded-xl text-left h-full w-full">
                <h3 className="text-sm font-semibold mb-2 text-white">Ventas por MD</h3>
                <p className="text-sm text-gray-300">Convierte tus mensajes directos en un embudo de conversión fluido, desde la duda hasta el enlace de pago.</p>
              </div>
            </TiltedCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function BossSection() {
  return (
    <section 
      id="boss"
      className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center overflow-x-hidden"
    >
      {/* Fondo Absoluto: Oscuro a la izquierda para el texto, y gris exacto a la derecha para fundirse con el video */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to right, #0B0C0E 0%, #16181C 25%, transparent 55%), linear-gradient(180deg, #2A2F37 0%, #414751 50%, #585E6A 100%)'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Layout de dos columnas (Texto Izquierda, Video Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-24">
          
          {/* Parte Izquierda: Contenido (Alineado a la izquierda) */}
          <div className="flex flex-col items-start text-left px-4 md:px-0 order-2 lg:order-1">
            <FadeIn>
              <h3 className="text-sm font-medium tracking-widest uppercase text-blue-400/80 mb-4 block">
                El Jefe lo ve todo.
              </h3>
            </FadeIn>
            <AnimatedHeading
              as="h2"
              text="EL CEREBRO CENTRAL."
              variant="blur"
              className="text-[clamp(2.25rem,6vw,6rem)] font-black uppercase tracking-tight mb-5 pb-3 leading-[0.95] bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent"
              highlights={{ "CEREBRO": "oklch(72% 0.18 220)" }}
            />
            <FadeIn delay={400}>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg md:max-w-xl">
                Orquesta los demás agentes, audita procesos y toma decisiones complejas. Tu operación entera, coordinada sin parar.
              </p>
            </FadeIn>
            <FadeIn delay={500} className="mt-8 flex flex-wrap justify-start gap-4 w-full">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="text-white font-semibold text-sm flex items-center gap-2 bg-white/10 hover:bg-white/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Audita tu empresa gratis</span>
              </HoverBorderGradient>
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="text-white font-semibold text-sm flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25"
              >
                <MessageCircle className="w-4 h-4 text-[#43E67A]" />
                <span>Contratar al Jefe</span>
              </HoverBorderGradient>
            </FadeIn>
          </div>

          {/* Parte Derecha: Agente IA Jefe */}
          <div className="relative flex justify-center w-full order-1 lg:order-2">
            
            <FadeIn className="relative z-10 w-full flex justify-center">
              <div 
                className="inline-flex max-w-full"
                style={{
                  WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)',
                  maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)'
                }}
              >
                <SeamlessVideo 
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260508_193218_0521758a-7936-42c6-9c97-6ac6b375933b.mp4"
                  containerClassName="relative pointer-events-none"
                  videoClassName="w-auto object-contain h-[60vh] md:h-[80vh] max-h-[800px]"
                  videoStyle={{
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)'
                  }}
                />
              </div>
            </FadeIn>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FadeIn delay={200} className="h-full">
            <TiltedCard>
              <div className="liquid-glass glass-hover p-5 rounded-xl text-left bg-white/5 border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-md h-full w-full">
                <h3 className="text-sm font-semibold mb-2 text-white">Operaciones Centralizadas</h3>
                <p className="text-sm text-gray-300">Unifica todas las áreas de tu negocio bajo un cerebro digital único que toma decisiones eficientes basadas en datos en tiempo real.</p>
              </div>
            </TiltedCard>
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <TiltedCard>
              <div className="liquid-glass glass-hover p-5 rounded-xl text-left bg-white/5 border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.25)] backdrop-blur-md h-full w-full">
                <h3 className="text-sm font-semibold mb-2 text-white">Autogestión Escalable</h3>
                <p className="text-sm text-gray-300">Delega la supervisión. "El Jefe" audita los procesos, optimiza las conversiones y lidera la operativa sin requerir tu intervención manual.</p>
              </div>
            </TiltedCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function InvestingSection() {
  const values = [
    { icon: <Target className="w-6 h-6" />, title: "Precisión", desc: "Automatización perfecta respaldada por una lógica inteligente." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Escalabilidad", desc: "Sistemas diseñados para crecer contigo sin importar el volumen." },
    { icon: <Shield className="w-6 h-6" />, title: "Confiabilidad", desc: "Garantizamos tiempos de respuesta óptimos las 24 horas del día." },
    { icon: <Globe className="w-6 h-6" />, title: "Omnicanal", desc: "Integración total en WhatsApp, correo, y redes sociales." }
  ];

  return (
    <section id="plan" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center">
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'rgba(0,0,0,0.4)'
        }}
      />
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <FadeIn>
          <span className="text-sm font-medium tracking-widest uppercase text-white/60 mb-4 block">Plan</span>
        </FadeIn>
        <div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
          <AnimatedHeading
            text="Respaldando tu crecimiento."
            className="text-[clamp(2.25rem,4.5vw_+_0.5rem,4.25rem)] font-bold leading-tight tracking-tight"
            highlights={{
              "crecimiento.": "oklch(80% 0.15 68)"
            }}
          />
          <FadeIn delay={300} className="max-w-md">
            <p className="text-gray-300 text-lg">
              Implementamos sistemas de Inteligencia Artificial que trabajan por ti en todas tus plataformas digitales clave.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <FadeIn key={i} delay={100 + i * 100} className="h-full">
              <TiltedCard>
                <div className="liquid-glass glass-hover p-8 rounded-2xl border border-white/10 flex flex-col items-start h-full w-full">
                  <div className="p-3 bg-white/5 rounded-lg mb-6 text-white group-hover:scale-110 transition-transform">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-gray-400 text-sm">{v.desc}</p>
                </div>
              </TiltedCard>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={900} className="mt-16 text-center">
          <button type="button" className="liquid-glass glass-hover border border-white/20 px-8 py-3 rounded-lg font-medium text-white">
            Ver Nuestros Planes
          </button>
        </FadeIn>
      </div>
    </section>
  );
}


export function AdvisorySection() {
  const services = [
    { title: "Automatización en WhatsApp", icon: <Users className="w-5 h-5" />, desc: "Agentes que cierran ventas por ti." },
    { title: "Gestión de Correos", icon: <Cpu className="w-5 h-5" />, desc: "Clasificación inteligente." },
    { title: "Interacción en Redes", icon: <Globe className="w-5 h-5" />, desc: "Monetiza tus DMs y comentarios." },
    { title: "Flujos Inteligentes", icon: <Lightbulb className="w-5 h-5" />, desc: "Lógica avanzada para tu negocio." }
  ];

  return (
    <section id="asesoramiento" className="relative z-10 w-full py-24 px-6 md:px-12 lg:px-16 min-h-screen flex flex-col justify-center">
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'rgba(0,0,0,0.4)'
        }}
      />
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <FadeIn>
            <span className="text-sm font-medium tracking-widest uppercase text-white/60 mb-4 block">Asesoramiento</span>
          </FadeIn>
          <AnimatedHeading
            text={"Tu negocio en\npiloto automático."}
            className="text-[clamp(1.875rem,3.5vw_+_0.5rem,3.25rem)] font-black uppercase tracking-tight leading-[0.95] mb-5 pb-3"
            highlights={{
              "piloto": "oklch(80% 0.15 68)",
              "automático.": "oklch(80% 0.15 68)"
            }}
          />
          <FadeIn delay={400}>
            <p className="text-gray-300 text-lg mb-8">
              Brindamos servicios de asesoría y ejecución para empresas que buscan liderar su sector integrando servicios avanzados de IA y automatización.
            </p>
            <div className="flex flex-wrap gap-4">
              <button type="button" className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100">
                Agenda una Consultoría
              </button>
              <button type="button" className="liquid-glass glass-hover border border-white/20 text-white px-8 py-3 rounded-lg font-medium">
                Formulario de Contacto
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <FadeIn
              key={i}
              delay={100 + i * 100}
              className="h-full"
            >
              <TiltedCard>
                <div className="liquid-glass glass-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between group min-h-[160px] h-full w-full">
                  <div className="mb-4 text-white/40 group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
                    <p className="text-sm text-gray-400">{s.desc}</p>
                  </div>
                </div>
              </TiltedCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="liquid-glass w-full rounded-3xl p-6 md:p-10 text-white/60 mt-16 md:mt-24"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-10">

        {/* Brand */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="text-xl font-black tracking-tighter text-white">AUTOMATIZA</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-white/50">
            Agentes de IA que gestionan WhatsApp, Instagram y email de forma autónoma — captando, calificando y cerrando ventas 24/7 mientras tú descansas.
          </p>
        </div>

        {/* Links */}
        <div className="md:col-span-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-semibold mb-4">Plataforma</h4>
              <ul className="text-xs space-y-2.5">
                <li><a href="/" className="hover:text-white transition-colors block">Inicio</a></li>
                <li><a href="/#story" className="hover:text-white transition-colors block">Ecosistema</a></li>
                <li><a href="/#boss" className="hover:text-white transition-colors block">El Cerebro</a></li>
                <li><a href="/#asesoramiento" className="hover:text-white transition-colors block">Asesoramiento</a></li>
                <li><a href="/precios" className="hover:text-white transition-colors block">Precios</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-semibold mb-4">Empresa</h4>
              <ul className="text-xs space-y-2.5">
                <li><a href="/mision" className="hover:text-white transition-colors block">Misión</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors block">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Trabaja con nosotros</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-white font-semibold mb-4">Contacto</h4>
              <ul className="text-xs space-y-2.5">
                <li><a href="#" className="hover:text-white transition-colors block">Agenda una llamada</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">WhatsApp directo</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">hola@automatiza.ai</a></li>
                <li><a href="#" className="hover:text-white transition-colors block">Política de privacidad</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] uppercase tracking-widest text-white/30">
          © 2026 Automatiza. Todos los derechos reservados.
        </p>
        <div className="flex items-center gap-3">
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <Instagram size={15} />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <Twitter size={15} />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <MessageCircle size={15} />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors">
            <Youtube size={15} />
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
