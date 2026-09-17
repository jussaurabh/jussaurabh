import { Mail, Phone } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import linkedinSvg from '../assets/linkedin.svg'
import githubSvg from '../assets/github.svg'

type LinkItem = {
  label: string
  href: string
  bg: string
  border: string
  textColor: string
} & ({ icon: LucideIcon; iconColor: string; svg?: never } | { svg: string; icon?: never; iconColor?: never })

const LINKS: LinkItem[] = [
  {
    icon: Mail,
    label: 'pawar.saurabh95@gmail.com',
    href: 'mailto:pawar.saurabh95@gmail.com',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    iconColor: 'text-indigo-600',
    textColor: 'text-indigo-700',
  },
  {
    icon: Phone,
    label: '+91 9108714988',
    href: 'tel:+919108714988',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconColor: 'text-emerald-600',
    textColor: 'text-emerald-700',
  },
  {
    svg: linkedinSvg,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/saurabhpawar',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    textColor: 'text-blue-700',
  },
  {
    svg: githubSvg,
    label: 'GitHub',
    href: 'https://github.com/jussaurabh',
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    textColor: 'text-violet-700',
  },
]

export function Footer() {
  return (
    <footer className="flex w-full flex-col lg:flex-row items-center justify-between border-t border-slate-200 bg-white px-6 py-8 gap-6 lg:gap-0 lg:px-24 lg:h-24">
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
        <span className="text-[12px] md:text-[13px] font-medium text-slate-500">© {new Date().getFullYear()} Saurabh Pawar</span>
        <div className="hidden sm:block h-3.5 w-px bg-slate-200" />
        <span className="text-[12px] md:text-[13px] text-center font-medium text-slate-900">Senior FullStack, Platform & Data Systems Engineer</span>
        <div className="hidden sm:block h-3.5 w-px bg-slate-200" />
        <span className="flex items-center gap-2 rounded bg-emerald-50 px-2.5 py-1.5 w-fit">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[10px] md:text-[11px] font-bold text-emerald-900">Available for Opportunities</span>
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors hover:opacity-80 ${l.bg} ${l.border}`}
          >
            {l.icon ? (
              <l.icon className={`h-3.5 w-3.5 ${l.iconColor}`} strokeWidth={1.17} />
            ) : (
              <img src={l.svg} alt={l.label} className="h-3.5 w-3.5" />
            )}
            <span className={`text-[11px] md:text-xs font-bold ${l.textColor} hidden sm:block`}>{l.label}</span>
          </a>
        ))}
      </div>
    </footer>
  )
}
