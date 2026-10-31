"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3, Sparkles, MoveUpRight, Phone, MapPin, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  { n:"01", title:"PyStaff — Employee Management", type:"Full-stack web application", desc:"A Flask-powered employee management system with employee records, search, update, delete and validation workflows.", stack:["Python","Flask","SQLite"], link:"https://pystaff-employee-management.onrender.com/", code:"https://github.com/tarekhossain0043-dot/pyStaff-employee-management", tone:"from-emerald-400/20 via-lime-300/5 to-transparent", mark:"PY" },
  { n:"02", title:"T-BAF Educational Website", type:"Education / Web experience", desc:"A responsive educational website experience built to present information clearly across desktop and mobile devices.", stack:["Next.js","React","Tailwind CSS"], link:"https://tibi-af-educationals-site.vercel.app/", code:"", tone:"from-sky-400/20 via-blue-300/5 to-transparent", mark:"EDU" },
  { n:"03", title:"MarketPulse", type:"Data & analytics dashboard", desc:"A Streamlit-based market dashboard focused on presenting market information through a clean, accessible interface.", stack:["Python","Streamlit","Data"], link:"https://marketplusegit-zrct62nqrbqmngcllfadqx.streamlit.app/", code:"", tone:"from-violet-400/20 via-fuchsia-300/5 to-transparent", mark:"MP" }
];

const skills = [
  { title:"Frontend", items:["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Webflow"] },
  { title:"Backend", items:["Python","Flask","Django","PHP","WordPress","REST API","MySQL","SQLite"] },
  { title:"Tools & Workflow", items:["Git","GitHub","GSAP","Figma","VS Code","Postman","Vercel","Render"] }
];

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const orb = useRef<HTMLDivElement>(null);
  const [menuOpen,setMenuOpen] = useState(false);
  const [cursor,setCursor] = useState({x:-100,y:-100,active:false});

  useEffect(() => {
    const move = (e:MouseEvent) => setCursor({x:e.clientX,y:e.clientY,active:!!(e.target as HTMLElement).closest("a,button")});
    window.addEventListener("mousemove",move);
    return () => window.removeEventListener("mousemove",move);
  },[]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *",{y:34,opacity:0,duration:1,stagger:.12,ease:"power3.out",delay:.15});
      gsap.to(".orb-float",{y:-18,rotation:5,duration:4.5,repeat:-1,yoyo:true,ease:"sine.inOut"});
      gsap.to(".orbit",{rotation:"+=360",duration:34,repeat:-1,ease:"none"});
      gsap.to(".orbit.two",{rotation:"-=360",duration:48,repeat:-1,ease:"none"});
      gsap.to(".hero-glow",{scale:1.2,opacity:.75,duration:4,repeat:-1,yoyo:true,ease:"sine.inOut"});
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => gsap.fromTo(el,{y:42,opacity:0},{y:0,opacity:1,duration:.85,ease:"power3.out",scrollTrigger:{trigger:el,start:"top 86%",toggleActions:"play none none reverse"}}));
      gsap.to(".hero-orb",{yPercent:18,ease:"none",scrollTrigger:{trigger:".hero",start:"top top",end:"bottom top",scrub:1}});
    },root);
    return () => { ctx.revert(); };
  },[]);

  const closeMenu = () => setMenuOpen(false);
  const nav = [["About","#about"],["Expertise","#expertise"],["Work","#work"],["Contact","#contact"]];

  return (
    <main ref={root} className="relative overflow-hidden">
      <div className="cursor-dot" style={{left:cursor.x,top:cursor.y}} />
      <div className={`cursor-ring ${cursor.active?"active":""}`} style={{left:cursor.x,top:cursor.y}} />
      <header className="fixed top-0 z-50 w-full border-b border-white/[.07] bg-[#090b10]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5 md:px-8">
          <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime text-sm font-black text-ink">T.</span>
            <span className="text-sm font-semibold tracking-wide">TAREK<span className="text-lime">.</span></span>
          </a>
          <nav className="hidden items-center gap-9 md:flex">{nav.map(([label,href])=><a key={label} href={href} className="text-[13px] text-white/55 transition hover:text-lime">{label}</a>)}</nav>
          <a href="mailto:tarekhossain0043@gmail.com" className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold transition hover:border-lime hover:text-lime md:flex">Let&apos;s talk <ArrowUpRight size={14}/></a>
          <button aria-label="Toggle menu" className="text-white md:hidden" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
        </div>
        {menuOpen && <nav className="glass flex flex-col gap-5 px-6 py-7 md:hidden">{nav.map(([label,href])=><a key={label} href={href} onClick={closeMenu} className="text-lg">{label}</a>)}<a href="mailto:tarekhossain0043@gmail.com" className="text-lime">Let&apos;s talk ↗</a></nav>}
      </header>

      <section id="home" className="hero noise site-grid relative flex min-h-[780px] items-center overflow-hidden px-5 pb-20 pt-32 md:min-h-[900px] md:px-8">
        <div className="hero-glow pointer-events-none absolute right-[4%] top-[12%] h-[560px] w-[560px] rounded-full bg-lime/[.07] blur-[110px]"/>
        <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <div className="hero-copy relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/[.06] px-4 py-2 text-[11px] tracking-[.16em] text-lime"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lime"/> AVAILABLE FOR SELECT PROJECTS</div>
            <p className="mb-4 text-sm tracking-[.2em] text-white/45">HELLO, I&apos;M</p>
            <h1 className="max-w-[760px] text-[clamp(3.1rem,7.2vw,6.7rem)] font-semibold leading-[.98] tracking-[-.075em]">Mohammad<br/><span className="text-lime">Tanvir Hasan</span><br/>Tarek<span className="text-lime">.</span></h1>
            <div className="mt-8 flex items-center gap-4"><span className="h-px w-12 bg-lime"/><p className="text-sm font-medium tracking-wide text-white/75 md:text-base">Full-Stack Web Developer</p></div>
            <p className="mt-6 max-w-[510px] text-sm leading-7 text-white/48 md:text-base md:leading-8">I build purposeful digital experiences — from polished interfaces to reliable backend systems. Focused on clean code, thoughtful details, and products that work beautifully.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="group inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-white">Explore my work <ArrowUpRight size={16} className="transition group-hover:rotate-45"/></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm text-white/80 transition hover:border-lime hover:text-lime">Get in touch <ArrowDownRight size={15}/></a>
            </div>
            <div className="mt-14 flex items-center gap-6 text-white/45"><a aria-label="GitHub" href="https://github.com/tarekhossain0043-dot" target="_blank" rel="noreferrer" className="transition hover:text-lime"><Github size={18}/></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/tanvir-hasan-981952388/" target="_blank" rel="noreferrer" className="transition hover:text-lime"><Linkedin size={18}/></a><a aria-label="Email" href="mailto:tarekhossain0043@gmail.com" className="transition hover:text-lime"><Mail size={18}/></a><span className="h-px w-14 bg-white/15"/><span className="text-[10px] tracking-[.18em]">BOGURA, BANGLADESH</span></div>
          </div>
          <div className="hero-orb relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
            <div className="orb-float relative aspect-square w-[78%]">
              <div className="absolute inset-0 rounded-full bg-lime/10 blur-[70px]"/>
              <div className="orbit"/><div className="orbit two"/><div className="orbit three"/>
              <div className="orb-core absolute inset-[19%] rounded-full"/>
              <div className="absolute left-[15%] top-[18%] h-3 w-3 rounded-full bg-lime shadow-[0_0_25px_#c6f36b]"/>
              <div className="absolute bottom-[16%] right-[8%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_white]"/>
              <div className="glass absolute -right-3 top-[18%] rounded-2xl px-4 py-3 shadow-2xl"><div className="text-[9px] tracking-[.18em] text-white/40">BUILDING WITH</div><div className="mt-1 text-xs font-semibold text-lime">PURPOSE + PRECISION</div></div>
              <div className="glass absolute -bottom-1 left-0 rounded-2xl px-4 py-3"><div className="flex items-center gap-2"><Code2 size={15} className="text-lime"/><span className="text-xs font-medium">Code. Create. Iterate.</span></div></div>
            </div>
            <div className="absolute bottom-[8%] right-[2%] text-right"><div className="text-[10px] tracking-[.25em] text-white/35">SCROLL TO EXPLORE</div><ArrowDown className="ml-auto mt-2 text-lime" size={18}/></div>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-lime/30 to-transparent"/>
      </section>

      <section id="about" className="px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div className="reveal"><p className="section-kicker">01 / ABOUT ME</p><h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-.05em] md:text-5xl">A developer who<br/>cares about the <span className="text-lime">details.</span></h2></div>
          <div className="reveal"><p className="text-lg leading-9 text-white/65">I&apos;m Mohammad Tanvir Hasan Tarek, a Full-Stack Web Developer from Bangladesh. I enjoy turning complex ideas into simple, useful, and engaging web experiences.</p><p className="mt-5 text-sm leading-8 text-white/45">My work spans frontend engineering, backend development, WordPress plugin development, and no-code delivery with Webflow. I value maintainable architecture, responsive interfaces, and continuous learning.</p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"><div className="border-l border-lime/50 pl-4"><div className="text-3xl font-semibold">3<span className="text-lime">+</span></div><div className="mt-1 text-xs text-white/40">Years in development</div></div><div className="border-l border-lime/50 pl-4"><div className="text-3xl font-semibold">Full<span className="text-lime">-</span></div><div className="mt-1 text-xs text-white/40">Stack mindset</div></div><div className="col-span-2 border-l border-lime/50 pl-4 sm:col-span-1"><div className="text-3xl font-semibold">∞</div><div className="mt-1 text-xs text-white/40">Curiosity to learn</div></div></div>
          </div>
        </div>
      </section>

      <section id="expertise" className="border-y border-white/[.06] bg-[#0d1016] px-5 py-28 md:px-8 md:py-32">
        <div className="mx-auto max-w-[1240px]"><div className="reveal mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">02 / WHAT I DO</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] md:text-5xl">My <span className="text-lime">expertise.</span></h2></div><p className="max-w-sm text-sm leading-7 text-white/45">A practical toolkit for shaping ideas into scalable digital products.</p></div>
          <div className="grid gap-4 md:grid-cols-3">{[{icon:<Code2/>,title:"Web Development",desc:"Responsive, accessible, and high-performing web applications with modern frontend and backend technologies."},{icon:<Layers3/>,title:"WordPress Engineering",desc:"Custom plugin development, theme customization, and tailored CMS experiences built for real workflows."},{icon:<Sparkles/>,title:"Webflow & Experience",desc:"Pixel-conscious Webflow builds, interactions, responsive layouts, and polished content experiences."}].map((item,i)=><div key={item.title} className="reveal glass rounded-2xl p-7 md:p-8"><div className="mb-8 grid h-12 w-12 place-items-center rounded-xl bg-lime/10 text-lime">{item.icon}</div><div className="mb-3 text-xs text-white/30">0{i+1} / SERVICE</div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{item.desc}</p></div>)}</div>
          <div className="reveal mt-16"><div className="mb-7 flex items-center gap-3"><span className="h-px w-8 bg-lime"/><span className="text-xs tracking-[.2em] text-white/55">TECHNICAL TOOLKIT</span></div><div className="grid gap-8 md:grid-cols-3">{skills.map(group=><div key={group.title}><h3 className="mb-4 text-sm font-semibold text-white/75">{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map(s=><span key={s} className="skill-pill rounded-full px-3.5 py-2 text-xs text-white/55">{s}</span>)}</div></div>)}</div></div>
        </div>
      </section>

      <section id="work" className="px-5 py-28 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1240px]"><div className="reveal mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="section-kicker">03 / SELECTED WORK</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em] md:text-5xl">Things I&apos;ve <span className="text-lime">built.</span></h2></div><a href="https://github.com/tarekhossain0043-dot" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-lime">Explore GitHub <ArrowUpRight size={15}/></a></div>
          <div className="grid gap-5 md:grid-cols-2">{projects.map((p,i)=><article key={p.n} className={`project-card reveal glass overflow-hidden rounded-2xl ${i===0?"md:col-span-2 md:grid md:grid-cols-[1fr_1fr]":""}`}><div className={`relative flex min-h-[230px] items-center justify-center overflow-hidden bg-gradient-to-br ${p.tone} `}><div className="absolute inset-0 site-grid opacity-50"/><div className="relative grid h-36 w-36 rotate-[-8deg] place-items-center rounded-[2rem] border border-white/15 bg-black/20 text-4xl font-black tracking-[-.08em] text-white/80 shadow-2xl backdrop-blur-xl">{p.mark}<span className="absolute -right-4 -top-4 h-8 w-8 rounded-full border border-lime/50 bg-lime/20"/></div><div className="absolute bottom-5 left-6 text-[10px] tracking-[.2em] text-white/35">FEATURED PROJECT / {p.n}</div></div><div className="flex flex-col justify-center p-7 md:p-9"><p className="text-[10px] tracking-[.18em] text-lime">{p.type.toUpperCase()}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{p.title}</h3><p className="mt-4 text-sm leading-7 text-white/45">{p.desc}</p><div className="mt-6 flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="rounded-full bg-white/[.06] px-3 py-1.5 text-[10px] text-white/55">{s}</span>)}</div><div className="mt-8 flex gap-5">{p.link&&<a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-lime hover:text-white">Live preview <ExternalLink size={13}/></a>}{p.code&&<a href={p.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs text-white/55 hover:text-lime">Source code <Github size={13}/></a>}</div></div></article>)}</div>
        </div>
      </section>

      <section className="border-y border-white/[.06] bg-[#0d1016] px-5 py-24 md:px-8"><div className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-[.7fr_1.3fr]"><div className="reveal"><p className="section-kicker">04 / EXPERIENCE</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.05em]">Where I&apos;ve<br/><span className="text-lime">grown.</span></h2></div><div className="reveal space-y-8"><div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-8 sm:flex-row"><div><h3 className="text-xl font-semibold">WordPress Developer</h3><p className="mt-1 text-sm text-white/45">BoomDevs</p><p className="mt-3 max-w-lg text-sm leading-7 text-white/45">Working on WordPress development with a focus on plugin engineering and building practical product features.</p></div><span className="text-xs text-lime">2026 — PRESENT</span></div><div className="flex flex-col justify-between gap-3 border-b border-white/10 pb-8 sm:flex-row"><div><h3 className="text-xl font-semibold">Frontend Developer</h3><p className="mt-1 text-sm text-white/45">Bogura Web Software Company</p><p className="mt-3 max-w-lg text-sm leading-7 text-white/45">Contributed to frontend development and responsive web interfaces in a collaborative environment.</p></div><span className="text-xs text-white/45">6 MONTHS</span></div></div></div></section>

      <section id="contact" className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36"><div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/[.06] blur-[110px]"/><div className="reveal relative mx-auto max-w-[1000px] text-center"><p className="section-kicker">05 / HAVE A PROJECT IN MIND?</p><h2 className="mt-7 text-[clamp(3rem,8vw,7rem)] font-semibold leading-[.95] tracking-[-.075em]">Let&apos;s make<br/><span className="text-lime">it happen.</span></h2><p className="mx-auto mt-8 max-w-lg text-sm leading-8 text-white/45">Have an idea, a challenge, or an opportunity? I&apos;d love to hear what you&apos;re working on. Let&apos;s build something meaningful together.</p><div className="mt-10 flex flex-wrap justify-center gap-3"><a href="mailto:tarekhossain0043@gmail.com" className="inline-flex items-center gap-3 rounded-full bg-lime px-7 py-4 text-sm font-bold text-ink transition hover:bg-white">Start a conversation <ArrowUpRight size={16}/></a><a href="https://wa.me/8801747295464" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm transition hover:border-lime hover:text-lime"><Phone size={15}/> WhatsApp</a></div><div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs text-white/45"><a className="inline-flex items-center gap-2 hover:text-lime" href="mailto:tarekhossain0043@gmail.com"><Mail size={14}/> tarekhossain0043@gmail.com</a><a className="inline-flex items-center gap-2 hover:text-lime" href="tel:+8801747295464"><Phone size={14}/> +880 1747-295464</a><span className="inline-flex items-center gap-2"><MapPin size={14}/> Bogura, Bangladesh</span></div></div></section>

      <footer className="border-t border-white/[.07] px-5 py-7 md:px-8"><div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 text-[11px] text-white/35 sm:flex-row"><span>© {new Date().getFullYear()} Mohammad Tanvir Hasan Tarek. All rights reserved.</span><span className="flex items-center gap-2">DESIGNED WITH INTENT <span className="text-lime">✳</span></span><a href="#home" className="inline-flex items-center gap-2 transition hover:text-lime">Back to top <MoveUpRight size={12}/></a></div></footer>
    </main>
  );
}
