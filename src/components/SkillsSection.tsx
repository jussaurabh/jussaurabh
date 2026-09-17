import { Code2, Server, Layout, Database, Cloud, BrainCircuit } from 'lucide-react';

const SKILLS = [
  {
    title: 'CORE LANGUAGES',
    icon: Code2,
    main: 'JavaScript, TypeScript, Python',
    tags: ['Node.js', 'Type Safety', 'AsyncIO'],
    colorMap: {
      cardBorder: 'border-amber-200',
      badgeBg: 'bg-amber-100',
      tagBg: 'bg-amber-50',
      textAlert: 'text-amber-800',
      shadowColor: 'shadow-amber-100',
    },
  },
  {
    title: 'BACKEND & APIS',
    icon: Server,
    main: 'NestJS, REST APIs, gRPC, Microservices',
    tags: ['Protobuf / gRPC', 'Event Driven', 'RBAC'],
    colorMap: {
      cardBorder: 'border-sky-200',
      badgeBg: 'bg-sky-100',
      tagBg: 'bg-sky-50',
      textAlert: 'text-sky-800',
      shadowColor: 'shadow-sky-100',
    },
  },
  {
    title: 'FRONTEND & DATA VIZ',
    icon: Layout,
    main: 'React, Micro-apps, Highcharts, Angular',
    tags: ['Module Fed', 'Realtime Charts', 'Angular'],
    colorMap: {
      cardBorder: 'border-purple-200',
      badgeBg: 'bg-purple-100',
      tagBg: 'bg-purple-50',
      textAlert: 'text-purple-800',
      shadowColor: 'shadow-purple-100',
    },
  },
  {
    title: 'DATA & STREAMING',
    icon: Database,
    main: 'MongoDB, Postgres, Kafka, Spark, OpenSearch',
    tags: ['1M+ msg/s', 'PySpark', 'Redis'],
    colorMap: {
      cardBorder: 'border-emerald-200',
      badgeBg: 'bg-emerald-100',
      tagBg: 'bg-emerald-50',
      textAlert: 'text-emerald-800',
      shadowColor: 'shadow-emerald-100',
    },
  },
  {
    title: 'CLOUD & DEVOPS',
    icon: Cloud,
    main: 'AWS, Azure, GCP, Kubernetes, Docker, CI/CD, Git',
    tags: ['K8s', 'CI/CD', 'Multi-Cloud'],
    colorMap: {
      cardBorder: 'border-blue-200',
      badgeBg: 'bg-blue-100',
      tagBg: 'bg-blue-50',
      textAlert: 'text-blue-800',
      shadowColor: 'shadow-blue-100',
    },
  },
  {
    title: 'AI & ML SYSTEMS',
    icon: BrainCircuit,
    main: 'AWS Bedrock, SageMaker, LLMs & RAG Systems',
    tags: ['LLMs', 'GenAI', 'RAG'],
    colorMap: {
      cardBorder: 'border-rose-200',
      badgeBg: 'bg-rose-100',
      tagBg: 'bg-rose-50',
      textAlert: 'text-rose-800',
      shadowColor: 'shadow-rose-100',
    },
  },
];

export function SkillsSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row w-full sm:items-center justify-between pb-4 border-b border-slate-200 gap-2 sm:gap-0">
        <div className="flex items-center gap-3">
          <div className="flex h-6 w-9 items-center justify-center rounded-md bg-indigo-600 shrink-0">
            <span className="text-xs font-bold text-white">01</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
            Technical Skills & Core Competencies
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-indigo-50 px-2.5 py-1">
            <span className="text-[10px] md:text-[11px] font-bold text-indigo-600 uppercase">
              6 Domains
            </span>
          </div>
          <span className="text-[11px] md:text-[13px] font-medium text-slate-500">
            Platform, Streaming, FullStack & AI Systems
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        {SKILLS.map((skill, i) => {
          const Icon = skill.icon;
          const map = skill.colorMap;

          return (
            <div
              key={i}
              className={`flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-sm ${map.cardBorder} ${map.shadowColor}`}
            >
              {/* Card Meta Row */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-2 overflow-hidden">
                <div
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 w-fit ${map.badgeBg}`}
                >
                  <Icon className={`h-3.5 w-3.5 ${map.textAlert}`} />
                  <span className={`text-[11px] font-bold tracking-wide ${map.textAlert}`}>
                    {skill.title}
                  </span>
                </div>
                <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                  {skill.tags.map((tag) => (
                    <div
                      key={tag}
                      className={`whitespace-nowrap rounded-md border px-1.5 py-0.5 ${map.tagBg} ${map.cardBorder}`}
                    >
                      <span className={`text-[10px] font-medium ${map.textAlert}`}>
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Info */}
              <p className="text-[13px] font-bold leading-relaxed text-slate-900 line-clamp-1">
                {skill.main}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
