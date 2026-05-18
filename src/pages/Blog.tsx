import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HoverBorderGradient } from '../components/ui/hover-border-gradient';
import FadeIn from '../components/FadeIn';
import AnimatedHeading from '../components/AnimatedHeading';
import SeamlessVideo from '../components/SeamlessVideo';
import TiltedCard from '../components/TiltedCard';
import { LogoIcon } from '../components/LogoIcon';

interface NavItem {
  name: string;
  href: string;
  highlight?: boolean;
}

const BLOG_NAV_ITEMS: NavItem[] = [
  { name: 'INICIO',   href: '/' },
  { name: 'PRECIOS',  href: '/precios' },
  { name: 'BLOG',     href: '/blog', highlight: true },
];

function BlogNavbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 px-6 md:px-12 lg:px-16 pointer-events-none">
      <div className="flex items-center justify-between max-w-7xl mx-auto">

        {/* Left pill — logo */}
        <motion.a
          href="/"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="liquid-glass pointer-events-auto rounded-xl px-4 py-2.5 border border-white/20 backdrop-blur-md text-white hover:text-white/80 transition-colors duration-300"
        >
          <LogoIcon className="h-9 w-auto" />
        </motion.a>

        {/* Right pill — links + CTA (desktop) */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          className="liquid-glass pointer-events-auto hidden md:flex items-center gap-7 rounded-xl px-5 py-3 border border-white/20 backdrop-blur-md"
        >
          {BLOG_NAV_ITEMS.map(item => (
            <a
              key={item.name}
              href={item.href}
              className={[
                'text-[11px] font-medium uppercase tracking-widest transition-colors duration-200',
                item.highlight
                  ? 'text-blue-300/70 hover:text-blue-300'
                  : 'text-white/70 hover:text-white',
              ].join(' ')}
            >
              {item.name}
            </a>
          ))}
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="text-white font-semibold text-[11px] uppercase tracking-widest bg-white/10"
          >
            ACTIVA TU IA
          </HoverBorderGradient>
        </motion.div>

        {/* Hamburger (mobile) */}
        <motion.button
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.05 }}
          onClick={() => setOpen(!open)}
          className="liquid-glass pointer-events-auto md:hidden border border-white/20 backdrop-blur-md rounded-xl w-11 h-11 flex flex-col justify-center items-center gap-[5px]"
          aria-label="Menú"
        >
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }} className="w-5 h-[2px] bg-white rounded-full block" />
          <motion.span animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.15 }} className="w-5 h-[2px] bg-white rounded-full block" />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }} className="w-5 h-[2px] bg-white rounded-full block" />
        </motion.button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{ originY: 0 }}
            className="pointer-events-auto mt-2 liquid-glass rounded-xl border border-white/20 overflow-hidden max-w-7xl mx-auto md:hidden"
          >
            <div className="px-6 pt-2 pb-4">
              {BLOG_NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 + 0.05, duration: 0.2 }}
                  onClick={() => setOpen(false)}
                  className={[
                    'flex items-center py-3.5 text-sm font-medium uppercase tracking-widest transition-colors duration-200',
                    i < BLOG_NAV_ITEMS.length - 1 ? 'border-b border-white/10' : '',
                    item.highlight ? 'text-blue-300/70 hover:text-blue-300' : 'text-white/70 hover:text-white',
                  ].join(' ')}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

interface Article {
  id: number;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  tag: string;
  url: string;
  source: string;
}

const FALLBACK_ARTICLES: Article[] = [
  { id: 1, category: 'TechCrunch', date: '10 May 2025', readTime: '5 min', title: 'GPT-5 and the future of autonomous agents', excerpt: 'Large language models are evolving into systems capable of reasoning, planning and executing complex tasks without human intervention.', tag: 'IA', url: 'https://techcrunch.com/category/artificial-intelligence/', source: 'TechCrunch' },
  { id: 2, category: 'VentureBeat', date: '7 May 2025', readTime: '4 min', title: 'How AI agents are redefining customer service', excerpt: 'Companies that have adopted intelligent conversational assistants report 60% reductions in response times and a notable increase in customer satisfaction.', tag: 'Negocio', url: 'https://venturebeat.com/category/ai/', source: 'VentureBeat' },
  { id: 3, category: 'MIT Tech Review', date: '3 May 2025', readTime: '6 min', title: 'Edge AI: intelligence where it is needed most', excerpt: 'Processing data directly on the device eliminates latency and protects privacy. We discover the use cases that are taking off in 2025.', tag: 'Tecnología', url: 'https://www.technologyreview.com/', source: 'MIT Tech Review' },
  { id: 4, category: 'The Verge', date: '28 Abr 2025', readTime: '3 min', title: 'The 5 most powerful automation platforms right now', excerpt: 'From Make to n8n or Zapier, we compare the leading solutions so you can choose the one that best fits the size and needs of your company.', tag: 'Recursos', url: 'https://www.theverge.com/ai-artificial-intelligence', source: 'The Verge' },
  { id: 5, category: 'TechCrunch', date: '22 Abr 2025', readTime: '7 min', title: 'RAG: how to give real memory to your AI agents', excerpt: 'Retrieval-Augmented Generation allows connecting language models to their own knowledge bases. We explain the architecture and when to use it in production.', tag: 'IA', url: 'https://techcrunch.com/category/artificial-intelligence/', source: 'TechCrunch' },
  { id: 6, category: 'VentureBeat', date: '15 Abr 2025', readTime: '5 min', title: 'Automate your sales funnel with AI: a practical guide', excerpt: 'From acquisition to closing, there are key points where AI can act for you. A step-by-step roadmap to implement it without friction.', tag: 'Negocio', url: 'https://venturebeat.com/category/ai/', source: 'VentureBeat' },
];

// ── RSS helpers ──────────────────────────────────────────────────────────────

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[a-z]+;/gi, ' ').trim();
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
  } catch { return dateStr; }
}

function estimateReadTime(content: string): string {
  const words = stripHtml(content).split(/\s+/).length;
  return `${Math.max(1, Math.ceil(words / 200))} min`;
}

const RSS_SOURCES = [
  { url: 'https://techcrunch.com/category/artificial-intelligence/feed/', source: 'TechCrunch', tag: 'IA',         category: 'TechCrunch'    },
  { url: 'https://venturebeat.com/category/ai/feed/',                     source: 'VentureBeat', tag: 'Negocio',   category: 'VentureBeat'   },
  { url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml', source: 'The Verge', tag: 'Tecnología', category: 'The Verge' },
];

async function fetchNews(): Promise<Article[]> {
  const results = await Promise.allSettled(
    RSS_SOURCES.map(({ url, source, tag, category }) =>
      fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&count=2`)
        .then(r => r.json())
        .then((data: { status: string; items?: { title: string; pubDate: string; link: string; description: string }[] }) => {
          if (data.status !== 'ok' || !data.items) return [];
          return data.items.map((item, i) => ({
            id: Date.now() + i,
            title: item.title,
            excerpt: stripHtml(item.description).slice(0, 160).trimEnd() + '…',
            date: formatDate(item.pubDate),
            readTime: estimateReadTime(item.description),
            category,
            tag,
            url: item.link,
            source,
          } satisfies Article));
        })
    )
  );

  const articles = results
    .filter((r): r is PromiseFulfilledResult<Article[]> => r.status === 'fulfilled')
    .flatMap(r => r.value)
    .slice(0, 6);

  return articles.length >= 3 ? articles : [];
}

const TAG_COLORS: Record<string, string> = {
  IA:          'bg-blue-50 text-blue-600 border-blue-100',
  Negocio:     'bg-emerald-50 text-emerald-600 border-emerald-100',
  Tecnología:  'bg-purple-50 text-purple-600 border-purple-100',
  Recursos:    'bg-orange-50 text-orange-600 border-orange-100',
};

function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 animate-pulse" style={{ minHeight: 260 }}>
      <div className="flex items-center justify-between">
        <div className="h-5 w-16 bg-gray-100 rounded-full" />
        <div className="h-4 w-12 bg-gray-100 rounded" />
      </div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-100 rounded w-full" />
        <div className="h-4 bg-gray-100 rounded w-4/5" />
      </div>
      <div className="space-y-1.5 flex-1">
        <div className="h-3 bg-gray-50 rounded w-full" />
        <div className="h-3 bg-gray-50 rounded w-full" />
        <div className="h-3 bg-gray-50 rounded w-3/4" />
      </div>
      <div className="h-px bg-gray-100 mt-auto" />
      <div className="flex justify-between">
        <div className="h-3 w-24 bg-gray-100 rounded" />
        <div className="h-3 w-12 bg-gray-100 rounded" />
      </div>
    </div>
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <FadeIn delay={index * 80} duration={500} className="h-full">
      <TiltedCard rotateAmplitude={8} scaleOnHover={1.03}>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-2xl p-6 flex flex-col gap-4 cursor-pointer w-full h-full block"
          style={{ textDecoration: 'none' }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between">
            <span className={`text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${TAG_COLORS[article.tag] ?? 'bg-gray-50 text-gray-500 border-gray-100'}`}>
              {article.tag}
            </span>
            <span className="text-[11px] text-gray-400 tracking-wide">{article.readTime} lectura</span>
          </div>

          {/* Title */}
          <h2 className="text-gray-900 font-semibold text-base leading-snug tracking-tight">
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-500 text-sm leading-relaxed flex-1">
            {article.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest">{article.source}</span>
              <span className="text-[11px] text-gray-400">{article.date}</span>
            </div>
            <span className="text-[11px] text-gray-900 font-medium uppercase tracking-widest hover:text-black transition-colors duration-200">
              Leer →
            </span>
          </div>
        </a>
      </TiltedCard>
    </FadeIn>
  );
}

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>(FALLBACK_ARTICLES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews()
      .then(items => { if (items.length > 0) setArticles(items); })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white relative">

      {/* Fixed background video */}
      <div className="fixed inset-0 z-0">
        <SeamlessVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_32bReXqxPyXQZz4TWBrBwLmVgCp/hf_20260512_122759_6c46d427-7071-45de-9a83-18b3d91eea92.mp4"
          containerClassName="absolute inset-0 h-full w-full overflow-hidden"
          videoClassName="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* All content above the video */}
      <div className="relative z-10">
      <BlogNavbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <FadeIn immediate duration={600}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">Actualidad</span>
            <span className="w-8 h-px bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-medium">IA & Tecnología</span>
          </div>
        </FadeIn>

        <AnimatedHeading
          variant="slide"
          text={'BLOG\nDE AUTOMATIZA'}
          className="text-[clamp(2.5rem,5vw+0.5rem,5rem)] font-black tracking-tight leading-none mb-6"
          highlights={{ 'BLOG': 'oklch(80% 0.13 55)' }}
        />

        <FadeIn delay={300} duration={500}>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Noticias, análisis y guías sobre inteligencia artificial, automatización y tecnología para negocios que quieren escalar.
          </p>
        </FadeIn>
      </section>

      {/* Articles grid */}
      <section className="pb-28 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : articles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))
          }
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-white/8 py-10 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <LogoIcon className="h-8 w-auto text-white" />
        <p className="text-[11px] text-white/30 uppercase tracking-widest">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>
      </footer>
      </div>{/* end z-10 wrapper */}
    </div>
  );
}
