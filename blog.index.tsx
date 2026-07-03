import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, Calendar, Clock, Search, Tag, X } from "lucide-react";
import { blogPosts, allCategories, readingTime } from "@/data/blogData";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Aflix Infotech" },
      {
        name: "description",
        content:
          "Field notes on AI, engineering, design, and building modern software — from the Aflix Infotech team.",
      },
      { property: "og:title", content: "Blog — Aflix Infotech" },
      {
        property: "og:description",
        content: "Deep dives on AI, engineering, design, and product from the Aflix team.",
      },
    ],
  }),
  component: BlogIndex,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function BlogIndex() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return blogPosts.filter((p) => {
      const catOk = category === "All" || p.category === category;
      if (!q) return catOk;
      const hay = `${p.title} ${p.description} ${p.tags.join(" ")} ${p.category}`.toLowerCase();
      return catOk && hay.includes(q);
    });
  }, [query, category]);

  const [featured, ...rest] = filtered;

  return (
    <main className="relative min-h-screen bg-[#f6f8fb] pb-24 pt-28 sm:pt-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,70,229,0.18),transparent_70%)]" />
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-indigo backdrop-blur">
            Tech Blog
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Ideas that ship <span className="bg-gradient-to-r from-indigo to-fuchsia-500 bg-clip-text text-transparent">products</span>.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
            Field notes on AI, engineering, design, and building modern software — from the Aflix team.
          </p>
        </motion.div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <div className="glass-strong flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-5 py-3 shadow-[0_10px_40px_-20px_rgba(15,23,42,0.35)] backdrop-blur">
            <Search className="h-5 w-5 shrink-0 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles, topics, tags…"
              aria-label="Search blog posts"
              className="w-full bg-transparent text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="rounded-full p-1 text-slate-500 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {["All", ...allCategories].map((c) => {
              const active = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active ? "text-white" : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-slate-950"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                    />
                  )}
                  {c}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Featured */}
        {featured && (
          <motion.div
            key={`featured-${featured.slug}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-14"
          >
            <Link
              to="/blog/$slug"
              params={{ slug: featured.slug }}
              className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)] backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_40px_100px_-40px_rgba(79,70,229,0.4)] lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
                <img
                  src={featured.cover}
                  alt=""
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-indigo/10 px-2.5 py-1 font-semibold text-indigo">
                    {featured.category}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {formatDate(featured.date)}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {readingTime(featured.content)} min read
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                  {featured.title}
                </h2>
                <p className="text-base leading-relaxed text-slate-600">{featured.description}</p>
                <div className="flex items-center gap-3 pt-2">
                  <img src={featured.author.avatar} alt="" className="h-9 w-9 rounded-full border border-slate-200 bg-white" />
                  <div className="text-sm">
                    <div className="font-semibold text-slate-900">{featured.author.name}</div>
                    <div className="text-xs text-slate-500">{featured.author.role}</div>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 text-sm font-semibold text-indigo transition group-hover:gap-2">
                    Read <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Grid */}
        <div className="mt-14">
          <AnimatePresence mode="popLayout">
            {rest.length === 0 && !featured ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white/70 p-10 text-center backdrop-blur"
              >
                <p className="text-lg font-semibold text-slate-900">No articles found</p>
                <p className="mt-2 text-sm text-slate-600">Try a different search or category.</p>
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                {rest.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    layout
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.2)] backdrop-blur transition hover:shadow-[0_30px_60px_-25px_rgba(79,70,229,0.35)]"
                  >
                    <Link to="/blog/$slug" params={{ slug: post.slug }} className="block">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={post.cover}
                          alt=""
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-slate-900 backdrop-blur">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex flex-col gap-3 p-6">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="h-3 w-3" /> {formatDate(post.date)}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" /> {readingTime(post.content)} min
                          </span>
                        </div>
                        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-950 transition group-hover:text-indigo">
                          {post.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-slate-600">{post.description}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {post.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                            >
                              <Tag className="h-2.5 w-2.5" /> {t}
                            </span>
                          ))}
                        </div>
                        <div className="mt-2 flex items-center gap-2 border-t border-slate-100 pt-4">
                          <img src={post.author.avatar} alt="" className="h-7 w-7 rounded-full border border-slate-200 bg-white" />
                          <span className="text-xs font-medium text-slate-700">{post.author.name}</span>
                          <ArrowUpRight className="ml-auto h-4 w-4 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
