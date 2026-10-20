import { useEffect, useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Check,
  Code2,
  Copy,
  Download,
  FileText,
  Gamepad2,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Moon,
  Search,
  Share2,
  Sparkles,
  Sun,
  TerminalSquare,
  Twitter,
  X,
} from 'lucide-react';
import image from './assets/profile.png';

const EMAIL = 'ayazmirza54@gmail.com';

type Icon = typeof Code2;
type Category = 'AI' | 'Dev tools' | 'Web & fun';

type LinkItem = {
  title: string;
  description: string;
  href: string;
  icon: Icon;
};

type Project = LinkItem & { category: Category };

const socials: { label: string; href: string; icon: Icon }[] = [
  { label: 'GitHub', href: 'https://github.com/ayazmirza54', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayazmirza54/', icon: Linkedin },
  { label: 'X / Twitter', href: 'https://x.com/ayazmirza54', icon: Twitter },
  { label: 'Dev.to', href: 'https://dev.to/ayazmirza54', icon: BookOpen },
  { label: 'Email', href: `mailto:${EMAIL}`, icon: Mail },
];

const featured: LinkItem[] = [
  { title: 'Portfolio', description: 'Experience, selected projects and stack', href: 'https://www.ayazmirza54.in/', icon: Briefcase },
  { title: 'Resume', description: 'Download the latest PDF', href: '/AyazResume.pdf', icon: Download },
];

const projects: Project[] = [
  { title: 'QuerySmith', description: 'AI assistant for writing SQL queries', href: 'https://query-smith.streamlit.app/', icon: TerminalSquare, category: 'AI' },
  { title: 'Gen-a-mail', description: 'AI assistant for drafting email messages', href: 'https://gen-email-agent-ai.streamlit.app/', icon: Mail, category: 'AI' },
  { title: 'Text to Content AI', description: 'Generate content from a simple text prompt', href: 'https://texttocontentai.vercel.app/', icon: Sparkles, category: 'AI' },
  { title: 'IntelliSketch', description: 'AI-powered drawing and maths sketch companion', href: 'https://intellisketch.vercel.app/', icon: GraduationCap, category: 'AI' },
  { title: 'Chat2PDF', description: 'Conversational PDF assistant built with Gemini', href: 'https://chat2pdf-using-gemini.streamlit.app/', icon: FileText, category: 'AI' },
  { title: 'StudySensei', description: 'Turn topics into quizzes with Gemini AI', href: 'https://studysensei.vercel.app/', icon: GraduationCap, category: 'AI' },
  { title: 'WebSearch AI', description: 'An AI-assisted web search experiment', href: 'https://websearchai.streamlit.app/', icon: Search, category: 'AI' },
  { title: 'Text/Code Utils.AI', description: 'Google Gemini API competition entry', href: 'https://ai.google.dev/competition/projects/text-code-utilsai', icon: Globe2, category: 'AI' },
  { title: 'UnixBot', description: 'A practical chatbot for Unix commands', href: 'https://unix-bot.streamlit.app/', icon: TerminalSquare, category: 'Dev tools' },
  { title: 'DevOps Script Generator', description: 'Generate Docker, Terraform and Ansible scripts', href: 'https://devopslab.streamlit.app/', icon: Code2, category: 'Dev tools' },
  { title: 'EC2 Manager TUI', description: 'Terminal-based AWS EC2 instance manager', href: 'https://github.com/ayazmirza54/ec2-manager-tui', icon: TerminalSquare, category: 'Dev tools' },
  { title: 'AI Gadgets', description: 'A curated marketplace for AI tools', href: 'https://www.aigadgets.show/', icon: Sparkles, category: 'Web & fun' },
  { title: 'Movie Finder', description: 'Browse films using The Movie Database API', href: 'https://movie-finder-lake-six.vercel.app/', icon: Search, category: 'Web & fun' },
  { title: 'Rock Paper Scissors', description: 'A browser game built for a quick break', href: 'https://rock-paper-scrissors.netlify.app/', icon: Gamepad2, category: 'Web & fun' },
];

const elsewhere: LinkItem[] = [
  { title: 'Google Developer Profile', description: 'g.dev/ayazmirza54', href: 'https://g.dev/ayazmirza54', icon: Globe2 },
  { title: 'Skills archive', description: 'Earlier portfolio — skills', href: 'https://ayazmirza.vercel.app#skills', icon: Code2 },
  { title: 'Experience archive', description: 'Earlier portfolio — work experience', href: 'https://ayazmirza.vercel.app#workexp', icon: Briefcase },
];

const filters: ('All' | Category)[] = ['All', 'AI', 'Dev tools', 'Web & fun'];

type Theme = 'light' | 'dark';

function readStoredTheme(): Theme | null {
  try {
    const value = localStorage.getItem('theme');
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () => readStoredTheme() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#121513' : '#efeadf');
    try {
      localStorage.setItem('theme', theme);
    } catch {
      /* storage unavailable — theme still applies for this visit */
    }
  }, [theme]);

  return [theme, () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))] as const;
}

function hostOf(href: string) {
  if (href.startsWith('/')) return 'PDF';
  return new URL(href).hostname.replace(/^www\./, '');
}

function LinkRow({ item, variant = 'default', index = 0 }: { item: LinkItem; variant?: 'default' | 'featured'; index?: number }) {
  const Icon = item.icon;
  const isLocal = item.href.startsWith('/');

  return (
    <a
      className={`link link--${variant}`}
      style={{ '--i': index } as React.CSSProperties}
      href={item.href}
      {...(isLocal ? { download: 'Ayaz_Mirza_Resume.pdf' } : { target: '_blank', rel: 'noreferrer' })}
    >
      <span className="link__icon" aria-hidden="true"><Icon size={18} strokeWidth={1.8} /></span>
      <span className="link__copy">
        <strong>{item.title}</strong>
        <small>{item.description}</small>
      </span>
      <span className="link__host">{hostOf(item.href)}</span>
      {isLocal ? <Download className="link__arrow" size={17} aria-hidden="true" /> : <ArrowUpRight className="link__arrow" size={17} aria-hidden="true" />}
    </a>
  );
}

function App() {
  const [theme, toggleTheme] = useTheme();
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [query, setQuery] = useState('');
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(id);
  }, [toast]);

  const visibleProjects = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (filter === 'All' || p.category === filter) &&
        (!q || `${p.title} ${p.description} ${p.category}`.toLowerCase().includes(q)),
    );
  }, [filter, query]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setToast('Email copied to clipboard');
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const sharePage = async () => {
    const data = { title: 'Ayaz Mirza — Links', url: window.location.href };
    if (navigator.share) {
      try {
        await navigator.share(data);
      } catch {
        /* share sheet dismissed */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(data.url);
      setToast('Link copied to clipboard');
    } catch {
      setToast(data.url);
    }
  };

  return (
    <div className="page">
      <div className="backdrop" aria-hidden="true" />

      <div className="toolbar">
        <button className="icon-btn" onClick={sharePage} aria-label="Share this page"><Share2 size={17} /></button>
        <button className="icon-btn" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>

      <main className="column">
        <header className="profile">
          <div className="avatar">
            <img src={image} alt="Portrait of Ayaz Mirza" width={96} height={96} />
            <span className="avatar__status" title="Open to opportunities" />
          </div>
          <h1>Ayaz Mirza</h1>
          <p className="profile__role">Data Engineer · Senior Consultant · AI &amp; web builder</p>
          <p className="profile__meta">
            <span><MapPin size={13} aria-hidden="true" /> Lucknow, India</span>
            <span className="pill"><span className="pill__dot" /> Open to opportunities</span>
          </p>

          <nav className="socials" aria-label="Social profiles">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} title={label} {...(!href.startsWith('mailto:') && { target: '_blank', rel: 'noreferrer' })}>
                <Icon size={18} strokeWidth={1.8} />
              </a>
            ))}
          </nav>
        </header>

        <section aria-label="Featured" className="stack">
          {featured.map((item, i) => <LinkRow key={item.title} item={item} variant="featured" index={i} />)}
          <button className="link link--action" style={{ '--i': 2 } as React.CSSProperties} onClick={copyEmail}>
            <span className="link__icon" aria-hidden="true"><Mail size={18} strokeWidth={1.8} /></span>
            <span className="link__copy">
              <strong>Say hello</strong>
              <small>{EMAIL}</small>
            </span>
            <Copy className="link__arrow" size={16} aria-hidden="true" />
          </button>
        </section>

        <section aria-labelledby="projects-title" className="block">
          <div className="block__head">
            <h2 id="projects-title">Projects &amp; experiments</h2>
            <span className="count">{visibleProjects.length}/{projects.length}</span>
          </div>

          <div className="controls">
            <label className="search">
              <Search size={15} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search projects"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search projects"
              />
              {query && (
                <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={14} /></button>
              )}
            </label>
            <div className="chips" role="group" aria-label="Filter by category">
              {filters.map((f) => (
                <button key={f} type="button" className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
              ))}
            </div>
          </div>

          <div className="stack">
            {visibleProjects.map((item, i) => <LinkRow key={item.title} item={item} index={i} />)}
            {visibleProjects.length === 0 && (
              <p className="empty">
                Nothing matches “{query}”.{' '}
                <button type="button" onClick={() => { setQuery(''); setFilter('All'); }}>Show all projects</button>
              </p>
            )}
          </div>
        </section>

        <section aria-labelledby="elsewhere-title" className="block">
          <div className="block__head"><h2 id="elsewhere-title">Elsewhere</h2></div>
          <div className="stack">
            {elsewhere.map((item, i) => <LinkRow key={item.title} item={item} index={i} />)}
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Ayaz Mirza</span>
          <a href={`mailto:${EMAIL}`}>Let’s work together <ArrowUpRight size={13} aria-hidden="true" /></a>
        </footer>
      </main>

      <div className={`toast${toast ? ' toast--show' : ''}`} role="status" aria-live="polite">
        {toast && <><Check size={15} aria-hidden="true" /> {toast}</>}
      </div>
    </div>
  );
}

export default App;
