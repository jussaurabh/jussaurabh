import { Sparkles, CheckCircle2 } from 'lucide-react'
import awsCertLogo from '../assets/aws-ai-foundational.png'

const TAGS = [
  { label: 'AWS Bedrock', bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700' },
  { label: 'Amazon SageMaker', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800' },
  { label: 'Foundational ML', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
  { label: 'Generative AI', bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700' },
  { label: 'Foundation Models & RAG', bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-slate-500' },
]

export function CertSection() {
  return (
    <section className="flex w-full flex-col gap-6">
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
          <div className="flex items-center gap-3">
            <span className="rounded-md bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white">03</span>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-slate-900">Certifications & AI Specializations</h2>
          </div>
          <span className="text-[12px] md:text-[13px] font-medium text-slate-500">Cloud & Generative AI Systems Specialization</span>
        </div>
        <div className="h-px w-full bg-slate-200" />
      </div>

      <div className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-[0_1px_3px_#0f172a08]">
        <div className="flex flex-col sm:flex-row grow items-start sm:items-center gap-4 sm:gap-6">
          <div className="flex shrink-0 items-center justify-center rounded-[14px]">
            <img src={awsCertLogo} alt="AWS Certified AI Practitioner Badge" className="h-16 w-16 md:h-20 md:w-20 object-contain drop-shadow-sm" />
          </div>
          <div className="flex grow flex-col gap-3 md:gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <a
                href="https://www.credly.com/badges/cc9152cc-e3a1-478c-9726-e55c493dffac/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg md:text-[19px] font-bold text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer"
              >
                AWS Certified AI Practitioner
              </a>
              <span className="flex w-fit items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1">
                <Sparkles className="h-3 w-3 text-amber-600" />
                <span className="text-[10px] md:text-[11px] font-bold text-amber-900">OFFICIAL AWS CERTIFICATION</span>
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {TAGS.map((t) => (
                <span key={t.label} className={`rounded-md border px-2 py-1 text-[10px] md:text-xs font-medium ${t.bg} ${t.border} ${t.text}`}>
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-row md:flex-col items-center md:items-end w-full md:w-auto justify-between md:justify-start gap-2 pt-2 md:pt-0 border-t border-slate-100 md:border-0">
          <span className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 md:px-4 py-1.5 md:py-2">
            <CheckCircle2 className="h-3.5 w-3.5 md:h-[15px] md:w-[15px] text-emerald-600" strokeWidth={1.25} />
            <span className="text-[11px] md:text-xs font-bold text-emerald-900">Verified Credential</span>
          </span>
          <span className="text-[11px] md:text-xs font-medium text-slate-500">Amazon Web Services (AWS)</span>
        </div>
      </div>
    </section>
  )
}
