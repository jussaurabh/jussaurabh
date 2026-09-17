export function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white px-24">
      {/* Brand */}
      <div className="flex flex-col">
        <h1 className="text-[14px] font-bold leading-none text-slate-900">
          Saurabh Pawar
        </h1>
        <p className="mt-1 text-[11px] font-medium leading-none text-slate-500">
          Senior Software Engineer
        </p>
      </div>

      {/* Links */}
      <nav className="flex items-center gap-6">
        <button className="flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-[13px] font-bold text-slate-900 transition-colors hover:bg-slate-100">
          01. Skills
        </button>
        <button className="flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-[13px] font-bold text-slate-900 transition-colors hover:bg-slate-100">
          02. Experience
        </button>
        <button className="flex items-center justify-center rounded-md bg-slate-50 px-3 py-2 text-[13px] font-bold text-slate-900 transition-colors hover:bg-slate-100">
          03. Certifications
        </button>
      </nav>

    </header>
  );
}
