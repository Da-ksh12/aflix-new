export function Field({ placeholder, type = "text" }: { placeholder: string; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 shadow-inner placeholder:text-slate-400 focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
    />
  );
}
