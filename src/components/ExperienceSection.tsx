import { Calendar, MapPin, Cpu, ShieldCheck, Package, Zap, LayoutGrid, TrendingUp, FileText, Award, Clock, Server, Cloud } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import contentstackLogo from '../assets/contentstack.svg'
import meltwaterLogo from '../assets/meltwater.svg'

interface Milestone {
  icon: LucideIcon
  title: string
  tag: string
  desc: string
}

interface Experience {
  company: string
  companyType: string
  role: string
  date: string
  statusLabel: string
  statusType: 'active' | 'duration'
  location: string
  metricLabel?: string
  clients?: string[]
  milestones: Milestone[]
  techStack: string[]
  accentColor: {
    dateBg: string
    dateBorder: string
    dateText: string
    dateIcon: string
    statusBg: string
    statusBorder: string
    statusText: string
    statusDot?: string
    iconBg: string
    tagBg: string
    tagText: string
    metricBg?: string
    metricBorder?: string
    metricText?: string
    metricIcon?: string
  }
  spineLogo: string
}

const EXPERIENCES: Experience[] = [
  {
    company: 'Contentstack',
    companyType: 'Enterprise DXP & CMS',
    role: 'Senior Software Engineer — Analytics & Metering Platform',
    date: 'Nov 2023 – Present',
    statusLabel: 'ACTIVE · 1.5+ YRS',
    statusType: 'active',
    location: 'Bangalore, India',
    metricLabel: '1M+ events/sec',
    milestones: [
      {
        icon: Cpu,
        title: 'Event-Driven Metering & Telemetry Pipeline',
        tag: 'KAFKA · OPENSEARCH',
        desc: 'Re-architected a legacy ETL into an event-driven, distributed metering system on Kafka and OpenSearch, handling over 1M+ events per second with enterprise-grade reliability and observability.',
      },
      {
        icon: ShieldCheck,
        title: 'End-to-End Analytics Platform & API Security',
        tag: 'gRPC · REST · REACT',
        desc: 'Owned the Analytics platform end to end—designing the gRPC/RESTful API design, secure generation and hashing of API keys, and deploying the semantic React UI components.',
      },
      {
        icon: Server,
        title: 'Self-Serve Microservices & RBAC',
        tag: 'MICROSERVICES · RBAC',
        desc: 'Designed the microservices behind self-serve meter onboarding, enabling autonomous role-based access control (RBAC) equivalent metric definitions without engineering bottlenecks.',
      },
      {
        icon: Cloud,
        title: 'CI/CD & Docker Orchestration',
        tag: 'CI/CD · DOCKER',
        desc: 'Maintained CI/CD pipelines to automate build and deployment of the real-time ingestion path, ensuring containerized Docker orchestration across diverse production environments.',
      },
      {
        icon: Package,
        title: 'Enterprise analytics-ui Package',
        tag: 'NPM · MICRO-APP',
        desc: 'Packaged the Analytics micro-app as analytics-ui, a standard drop-in package adopted by multiple product teams for responsive, scalable data visualization.',
      },
    ],
    techStack: ['NestJS', 'React', 'Apache Kafka', 'OpenSearch', 'PySpark', 'MongoDB', 'gRPC', 'Kubernetes', 'Docker'],
    accentColor: {
      dateBg: 'bg-indigo-50',
      dateBorder: 'border-indigo-200',
      dateText: 'text-indigo-700',
      dateIcon: 'text-indigo-600',
      statusBg: 'bg-emerald-50',
      statusBorder: 'border-emerald-300',
      statusText: 'text-emerald-700',
      statusDot: 'bg-emerald-600',
      iconBg: 'bg-indigo-50',
      tagBg: 'bg-indigo-50',
      tagText: 'text-indigo-600',
      metricBg: 'bg-teal-50',
      metricBorder: 'border-teal-300',
      metricText: 'text-teal-700',
      metricIcon: 'text-teal-600',
    },
    spineLogo: contentstackLogo,
  },
  {
    company: 'Meltwater Software Pvt. Ltd.',
    companyType: 'Media Intelligence',
    role: 'Solutions Engineer (Promoted from Junior Engineer) — Custom Dashboards',
    date: 'Jul 2020 – Nov 2023',
    statusLabel: '3.5 YEARS · PROMOTED',
    statusType: 'duration',
    location: 'Bangalore, India',
    clients: ['UNIQLO', 'Xero', 'GE HealthCare', 'DCT Abu Dhabi'],
    milestones: [
      {
        icon: LayoutGrid,
        title: 'Enterprise Custom Dashboards & High-Performance APIs',
        tag: 'REACT · ANGULAR · REST',
        desc: 'Architected and delivered custom analytics dashboards and REST APIs for global enterprise brands (UNIQLO, Xero, GE HealthCare, DCT Abu Dhabi), translating media intelligence feeds into executive insights.',
      },
      {
        icon: TrendingUp,
        title: 'Highcharts Real-Time Visualization & Polling Engine',
        tag: 'HIGHCHARTS · WEB',
        desc: 'Developed Highcharts visualization widgets with 5-minute automated polling and sub-second rendering for mission-critical client campaign tracking.',
      },
      {
        icon: FileText,
        title: 'Automated Intelligence Pipelines & Headless PDF Exports',
        tag: 'PUPPETEER · NODE.JS',
        desc: 'Engineered automated PDF export pipelines via headless Puppeteer and integrated competitor benchmarking feeds, accelerating client reporting cycles.',
      },
      {
        icon: Award,
        title: 'Solutions Engineering Ownership & Career Promotion',
        tag: 'LEADERSHIP · PROMOTED',
        desc: 'Promoted from Junior to Solutions Engineer with end-to-end technical solution ownership, architecture design, and direct global client collaboration.',
      },
    ],
    techStack: ['NestJS', 'Node.js', 'React', 'Angular', 'MongoDB', 'Highcharts', 'Puppeteer', 'Docker'],
    accentColor: {
      dateBg: 'bg-slate-100',
      dateBorder: 'border-slate-300',
      dateText: 'text-slate-700',
      dateIcon: 'text-slate-500',
      statusBg: 'bg-sky-50',
      statusBorder: 'border-sky-200',
      statusText: 'text-sky-700',
      iconBg: 'bg-sky-50',
      tagBg: 'bg-sky-50',
      tagText: 'text-sky-700',
    },
    spineLogo: meltwaterLogo,
  },
]

export function ExperienceSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
        <div className="flex items-center gap-3">
          <span className="flex h-[23px] items-center justify-center rounded-md bg-indigo-600 px-2.5 text-xs font-bold text-white">
            02
          </span>
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-slate-900">
            Professional Work Experience
          </h2>
        </div>
        <span className="text-[12px] md:text-[13px] font-medium text-slate-500">
          5+ Years &bull; High Throughput Systems &amp; Enterprise Solutions
        </span>
      </div>

      <div className="h-px w-full bg-slate-200" />

      <div className="flex flex-col gap-8 md:gap-6">
        {EXPERIENCES.map((exp) => (
          <div key={exp.company} className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-row flex-wrap md:flex-col md:w-[180px] shrink-0 gap-2 pt-1 border-b border-slate-100 pb-3 md:border-0 md:pb-0">
              <div className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 ${exp.accentColor.dateBg} ${exp.accentColor.dateBorder}`}>
                <Calendar className={`h-3.5 w-3.5 ${exp.accentColor.dateIcon}`} />
                <span className={`text-xs font-bold ${exp.accentColor.dateText}`}>{exp.date}</span>
              </div>
              <div className={`flex items-center gap-2 rounded-md border px-2.5 py-1 ${exp.accentColor.statusBg} ${exp.accentColor.statusBorder}`}>
                {exp.statusType === 'active' ? (
                  <span className={`h-1.5 w-1.5 rounded-full ${exp.accentColor.statusDot}`} />
                ) : (
                  <Clock className={`h-[13px] w-[13px] ${exp.accentColor.statusText}`} />
                )}
                <span className={`text-[11px] font-bold ${exp.accentColor.statusText}`}>{exp.statusLabel}</span>
              </div>
              <div className="flex flex-1 md:flex-none items-center gap-2 px-1.5">
                <MapPin className="h-[13px] w-[13px] text-slate-500" />
                <span className="text-xs font-medium text-slate-600">{exp.location}</span>
              </div>
            </div>

            <div className="hidden md:flex w-8 shrink-0 flex-col items-center gap-2 pt-1">
              <img src={exp.spineLogo} alt={exp.company} className="h-8 w-8 shrink-0 object-contain" />
              <div className="w-0.5 flex-1 bg-slate-200" />
            </div>

            <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-3 lg:gap-0">
                <div className="flex flex-col gap-1.5 md:gap-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <div className="flex md:hidden h-6 w-6 items-center justify-center shrink-0">
                      <img src={exp.spineLogo} alt={exp.company} className="h-6 w-6 object-contain" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">{exp.company}</h3>
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                      {exp.companyType}
                    </span>
                  </div>
                  <p className="text-[14px] md:text-[15px] font-bold text-slate-700 leading-snug">{exp.role}</p>
                </div>
                <div className="flex flex-col items-start lg:items-end gap-2">
                  {exp.metricLabel && (
                    <div className={`flex items-center gap-1.5 rounded-md border w-fit px-2.5 py-1 ${exp.accentColor.metricBg} ${exp.accentColor.metricBorder}`}>
                      <Zap className={`h-3.5 w-3.5 ${exp.accentColor.metricIcon}`} />
                      <span className={`text-[11px] font-bold ${exp.accentColor.metricText}`}>{exp.metricLabel}</span>
                    </div>
                  )}
                  {exp.clients && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] md:text-[11px] font-bold text-slate-500">CLIENTS:</span>
                      {exp.clients.map((c) => (
                        <span key={c} className="rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 text-[10px] md:text-[11px] font-bold text-slate-900 whitespace-nowrap">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-5 md:mt-4 flex flex-col gap-3">
                {exp.milestones.map((m) => (
                  <div key={m.title} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3">
                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5 ${exp.accentColor.iconBg}`}>
                      <m.icon className={`h-[13px] w-[13px] ${exp.accentColor.tagText}`} />
                    </div>
                    <div className="flex flex-1 flex-col gap-1 md:gap-0.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                        <span className="text-[12px] md:text-[13px] font-bold text-slate-900 leading-snug">{m.title}</span>
                        <span className={`w-fit whitespace-nowrap rounded px-1.5 py-0.5 text-[9px] md:text-[10px] font-bold tracking-wide ${exp.accentColor.tagBg} ${exp.accentColor.tagText}`}>
                          {m.tag}
                        </span>
                      </div>
                      <p className="text-[11px] md:text-xs leading-[18px] text-slate-600 mt-1 md:mt-0">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 md:mt-4 flex flex-wrap items-center gap-1.5 md:gap-2">
                <span className="text-[10px] md:text-[11px] font-bold text-slate-500 mr-0.5">TECH STACK:</span>
                {exp.techStack.map((t) => (
                  <span key={t} className="rounded bg-slate-100 px-1.5 md:px-2 py-0.5 text-[10px] md:text-[11px] font-medium text-slate-900">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
