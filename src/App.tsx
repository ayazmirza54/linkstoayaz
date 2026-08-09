import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Code2,
  Download,
  FileText,
  Github,
  Globe2,
  GraduationCap,
  Linkedin,
  Mail,
  Network,
  Search,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';
import image from './assets/profile.png';

type LinkItem = {
  title: string;
  description: string;
  href: string;
  icon: typeof Code2;
  featured?: boolean;
};

const essentials: LinkItem[] = [
  {
    title: 'Portfolio',
    description: 'Experience, selected projects and technical stack',
    href: 'https://www.ayazmirza54.in/',
    icon: Briefcase,
    featured: true,
  },
  {
    title: 'Download resume',
    description: 'Data Engineer and Senior Consultant profile',
    href: '/AyazResume.pdf',
    icon: Download,
    featured: true,
  },
  {
    title: 'GitHub',
    description: 'Code, experiments and open-source work',
    href: 'https://github.com/ayazmirza54',
    icon: Github,
  },
  {
    title: 'LinkedIn',
    description: 'Professional profile and work history',
    href: 'https://www.linkedin.com/in/ayazmirza54/',
    icon: Linkedin,
  },
  {
    title: 'Email me',
    description: 'ayazmirza54@gmail.com',
    href: 'mailto:ayazmirza54@gmail.com',
    icon: Mail,
  },
  {
    title: 'Dev.to',
    description: 'Notes on AI, web development and shipping projects',
    href: 'https://dev.to/ayazmirza54',
    icon: BookOpen,
  },
  {
    title: 'X / Twitter',
    description: 'Short notes and project updates',
    href: 'https://x.com/ayazmirza54',
    icon: Network,
  },
];

const projects: LinkItem[] = [
  { title: 'QuerySmith', description: 'AI assistant for writing SQL queries', href: 'https://query-smith.streamlit.app/', icon: TerminalSquare },
  { title: 'Gen-a-mail', description: 'AI assistant for drafting email messages', href: 'http://gen-email-agent-ai.streamlit.app/', icon: Mail },
  { title: 'Text to Content AI', description: 'Generate content from a simple text prompt', href: 'https://texttocontentai.vercel.app/', icon: Sparkles },
  { title: 'IntelliSketch', description: 'AI-powered drawing and maths sketch companion', href: 'https://intellisketch.vercel.app/', icon: GraduationCap },
  { title: 'Chat2PDF', description: 'Conversational PDF assistant built with Gemini', href: 'https://chat2pdf-using-gemini.streamlit.app/', icon: FileText },
  { title: 'UnixBot', description: 'A practical chatbot for Unix commands', href: 'https://unix-bot.streamlit.app/', icon: TerminalSquare },
  { title: 'DevOps Script Generator', description: 'Generate Docker, Terraform and Ansible scripts', href: 'https://devopslab.streamlit.app/', icon: Code2 },
  { title: 'EC2 Manager TUI', description: 'Terminal-based AWS EC2 instance manager', href: 'https://github.com/ayazmirza54/ec2-manager-tui', icon: TerminalSquare },
  { title: 'WebSearch AI', description: 'An AI-assisted web search experiment', href: 'https://websearchai.streamlit.app/', icon: Search },
  { title: 'StudySensei', description: 'Turn topics into quizzes with Gemini AI', href: 'https://studysensei.vercel.app/', icon: GraduationCap },
  { title: 'Movie Finder', description: 'Browse films using The Movie Database API', href: 'https://movie-finder-lake-six.vercel.app/', icon: Search },
  { title: 'Rock Paper Scissors', description: 'A browser game built for a quick break', href: 'https://rock-paper-scrissors.netlify.app/', icon: Network },
  { title: 'Text/Code Utils.AI', description: 'Featured Google Gemini API competition project', href: 'https://ai.google.dev/competition/projects/text-code-utilsai', icon: Globe2 },
  { title: 'AI Gadgets', description: 'A curated marketplace for AI tools', href: 'https://www.aigadgets.show/', icon: Sparkles },
  { title: 'Google Developer Profile', description: 'Google developer profile and activity', href: 'https://g.dev/ayazmirza54', icon: Globe2 },
  { title: 'Skills archive', description: 'Earlier portfolio skills page', href: 'https://ayazmirza.vercel.app#skills', icon: Code2 },
  { title: 'Experience archive', description: 'Earlier portfolio work experience page', href: 'https://ayazmirza.vercel.app#workexp', icon: Briefcase },
];

function LinkCard({ item }: { item: LinkItem }) {
  const Icon = item.icon;
  const isResume = item.href.startsWith('/');

  return (
    <a
      className={`link-card${item.featured ? ' link-card--featured' : ''}`}
      href={item.href}
      {...(!isResume && { target: '_blank', rel: 'noreferrer' })}
      {...(isResume && { download: 'Ayaz_Mirza_Resume.pdf' })}
    >
      <span className="link-card__icon" aria-hidden="true"><Icon size={20} strokeWidth={1.8} /></span>
      <span className="link-card__copy">
        <strong>{item.title}</strong>
        <small>{item.description}</small>
      </span>
      <ArrowUpRight className="link-card__arrow" size={19} aria-hidden="true" />
    </a>
  );
}

function App() {
  return (
    <main className="page-shell">
      <div className="topographic-field" aria-hidden="true" />
      <section className="content-wrap" aria-labelledby="page-title">
        <header className="hero">
          <p className="eyebrow"><span /> AYAZ MIRZA / LINKS</p>
          <div className="hero__identity">
            <img src={image} alt="Ayaz Mirza" className="portrait" />
            <div>
              <h1 id="page-title">A working index<br />of what I build.</h1>
              <p className="intro">Data Engineer · Senior Consultant · AI &amp; web builder</p>
            </div>
          </div>
          <p className="hero__note">A single place for my work, writing, experiments and ways to get in touch.</p>
        </header>

        <section aria-labelledby="start-here" className="link-section">
          <div className="section-label"><span>01</span><h2 id="start-here">Start here</h2></div>
          <div className="link-grid">{essentials.map((item) => <LinkCard item={item} key={item.title} />)}</div>
        </section>

        <section aria-labelledby="projects" className="link-section">
          <div className="section-label"><span>02</span><h2 id="projects">Projects &amp; experiments</h2><p>Small tools, useful utilities and AI explorations.</p></div>
          <div className="link-grid">{projects.map((item) => <LinkCard item={item} key={item.title} />)}</div>
        </section>

        <footer>
          <span>LUCKNOW, INDIA</span>
          <span>© {new Date().getFullYear()} AYAZ MIRZA</span>
          <a href="mailto:ayazmirza54@gmail.com">LET'S WORK TOGETHER <ArrowUpRight size={14} /></a>
        </footer>
      </section>
    </main>
  );
}

export default App;
