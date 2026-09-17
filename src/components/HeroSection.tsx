import {
  MapPin,
  Layers,
  Zap,
  Database,
  Layout,
  Sparkles,
  Mail,
  Phone,
  ArrowUpRight,
} from 'lucide-react';

function LinkedInIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function GitHubIcon(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 18.9999C4 20.4999 4 16.4999 2 15.9999M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="flex flex-col gap-8 w-full">
      {/* Hero Status Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Availability Badge */}
        <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs font-bold uppercase tracking-wide text-emerald-800">
            Available for High-Impact Roles
          </span>
        </div>

        {/* Location Badge */}
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2">
          <MapPin className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-xs font-medium text-slate-600">
            Bangalore, India • Open to Global Relocation / Remote
          </span>
        </div>
      </div>

      {/* Hero Title Container */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
          Saurabh Pawar
        </h1>
        <h2 className="text-lg font-bold text-slate-700 sm:text-xl md:text-2xl">
          Senior Software Engineer — Platform, Streaming & FullStack
        </h2>

        {/* Pillars Row */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <Badge
            icon={Layers}
            text="Event-Driven Architecture"
            bg="bg-indigo-50"
            border="border-indigo-200"
            textColor="text-indigo-700"
          />
          <Badge
            icon={Zap}
            text="1M+ msg/sec Streaming"
            bg="bg-sky-50"
            border="border-sky-200"
            textColor="text-sky-700"
          />
          <Badge
            icon={Database}
            text="Distributed Data Platforms"
            bg="bg-emerald-50"
            border="border-emerald-200"
            textColor="text-emerald-700"
          />
          <Badge
            icon={Layout}
            text="Micro-Frontends & Viz"
            bg="bg-purple-50"
            border="border-purple-200"
            textColor="text-purple-700"
          />
          <Badge
            icon={Sparkles}
            text="AWS GenAI Certified"
            bg="bg-rose-50"
            border="border-rose-200"
            textColor="text-rose-700"
          />
        </div>

        {/* Hero Bio Box */}
        <div className="mt-4 flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
          <div className="h-12 w-1 shrink-0 rounded-full bg-indigo-600" />
          <p className="text-[15px] leading-relaxed text-slate-600">
            Senior Engineer with 5+ years driving high-throughput telemetry
            pipelines, microservices on gRPC/REST, and high-performance
            interactive UI suites. Proven track record transforming legacy ETL
            into real-time Kafka/OpenSearch systems at enterprise scale.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="flex flex-wrap items-center gap-2 mt-4">
        <ContactCard
          icon={Mail}
          value="pawar.saurabh95@gmail.com"
          iconBg="bg-indigo-50"
          iconColor="text-indigo-600"
          href="mailto:pawar.saurabh95@gmail.com"
        />
        <ContactCard
          icon={Phone}
          value="+91 9108714988"
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
          href="tel:+919108714988"
        />
        <ContactCard
          icon={LinkedInIcon}
          value="in/pawarsaurabh"
          iconBg="bg-sky-50"
          iconColor="text-sky-600"
          href="https://www.linkedin.com/in/pawarsaurabh/"
        />
        <ContactCard
          icon={GitHubIcon}
          value="github.com/jussaurabh"
          iconBg="bg-slate-100"
          iconColor="text-slate-600"
          href="https://github.com/jussaurabh"
        />
      </div>
    </section>
  );
}

// Simple internal components for repetitive parts
function Badge({ icon: Icon, text, bg, border, textColor }: any) {
  return (
    <div
      className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 ${bg} ${border}`}
    >
      <Icon className={`h-3.5 w-3.5 ${textColor}`} />
      <span className={`text-xs font-bold ${textColor}`}>{text}</span>
    </div>
  );
}

function ContactCard({ icon: Icon, value, iconBg, iconColor, href }: any) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 transition-colors hover:bg-slate-50">
      <div className={`flex h-6 w-6 items-center justify-center rounded-md ${iconBg}`}>
        <Icon className={`h-3.5 w-3.5 ${iconColor}`} />
      </div>
      <span className="text-[13px] font-medium text-slate-800">{value}</span>
      <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
    </a>
  );
}
