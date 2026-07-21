import { ArrowRight, Dna, ShieldCheck } from 'lucide-react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const sections = [
  ['Research', 'Plan and synthesize genomic research with transparent evidence.'],
  ['Sequences', 'Inspect DNA and RNA sequence material with clear provenance.'],
  ['Nutrigenomics', 'Evaluate nutrition-linked genomic signals and cellular context.'],
];

function Landing() {
  return (
    <main>
      <header className="topbar">
        <Link className="brand" to="/"><span><Dna size={20} /></span><strong>Cyberellum Genomics</strong></Link>
        <nav><Link to="/workspace">Workspace</Link><Link to="/auth">Sign in</Link></nav>
      </header>
      <section className="hero">
        <div>
          <p className="eyebrow">Research intelligence for modern genomics</p>
          <h1>Explore biological complexity with governed AI.</h1>
          <p className="lead">A focused workspace for genomic research, sequence analysis, nutrigenomics, molecular visualization, and evidence-backed collaboration.</p>
          <Link className="button" to="/workspace">Enter research workspace <ArrowRight size={18} /></Link>
        </div>
        <div className="helix" aria-label="Abstract DNA visualization">
          {Array.from({ length: 12 }).map((_, i) => <i key={i} />)}
        </div>
      </section>
      <section className="features">
        {sections.map(([title, body]) => <article key={title}><Dna /><h2>{title}</h2><p>{body}</p></article>)}
      </section>
    </main>
  );
}

function Workspace() {
  return (
    <main>
      <header className="topbar">
        <Link className="brand" to="/"><span><Dna size={20} /></span><strong>Cyberellum Genomics</strong></Link>
      </header>
      <section className="workspace">
        <p className="eyebrow">Genomics workspace</p>
        <h1>Clean implementation in progress</h1>
        <div className="notice"><ShieldCheck /><p>This surface is being rebuilt against verified Cloudflare and AWS contracts.</p></div>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/workspace" element={<Workspace />} />
        <Route path="/auth" element={<Workspace />} />
        <Route path="*" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
