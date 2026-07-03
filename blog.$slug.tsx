import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Facebook,
  Link as LinkIcon,
  Tag,
  Twitter,
  Check,
} from "lucide-react";
import { blogPosts, getRelated, readingTime } from "@/data/blogData";
import { Markdown } from "@/components/blog/Markdown";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Article — Aflix Blog" }] };
    return {
      meta: [
        { title: `${post.title} — Aflix Blog` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:image", content: post.cover },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="flex min-h-screen items-center justify-center bg-[#f6f8fb] px-6">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo">404</p>
        <h1 className="mt-4 text-3xl font-extrabold text-slate-950">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-flex items-center gap-2 text-indigo hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to blog
        </Link>
      </div>
    </main>
  ),
  component: BlogArticle,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function BlogArticle() {
  const { post } = Route.useLoaderData();
  const related = getRelated(post.slug);
  const articleRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [post.slug]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl || window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <main className="relative min-h-screen bg-[#f6f8fb] pb-24">
      {/* Reading progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 right-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-indigo via-fuchsia-500 to-sky-400"
        aria-hidden
      />

      {/* Hero */}
      <div className="relative pt-28 sm:pt-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(79,70,229,0.18),transparent_70%)]" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-indigo"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full bg-indigo/10 px-3 py-1 font-semibold text-indigo">
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500">
                <Calendar className="h-3.5 w-3.5" /> {formatDate(post.date)}
              </span>
              <span className="inline-flex items-center gap-1 text-slate-500">
                <Clock className="h-3.5 w-3.5" /> {readingTime(post.content)} min read
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              {post.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt=""
                  className="h-11 w-11 rounded-full border border-slate-200 bg-white"
                />
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">{post.author.name}</div>
                  <div className="text-xs text-slate-500">{post.author.role}</div>
                </div>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <a
                  aria-label="Share on Twitter"
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:text-indigo"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  aria-label="Share on Facebook"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 bg-white/70 p-2 text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:text-indigo"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <button
                  onClick={copyLink}
                  aria-label="Copy link"
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-xs font-medium text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:text-indigo"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <LinkIcon className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy link"}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]"
          >
            <img src={post.cover} alt="" className="aspect-[16/8] w-full object-cover" />
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <article ref={articleRef} className="mx-auto mt-12 max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Markdown>{post.content}</Markdown>
        </motion.div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap gap-2 border-t border-slate-200 pt-8">
          {post.tags.map((t: string) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
            >
              <Tag className="h-3 w-3" /> {t}
            </span>
          ))}
        </div>

        {/* Author card */}
        <div className="mt-10 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/70 p-5 backdrop-blur">
          <img
            src={post.author.avatar}
            alt=""
            className="h-14 w-14 rounded-full border border-slate-200 bg-white"
          />
          <div className="min-w-0">
            <div className="font-semibold text-slate-950">{post.author.name}</div>
            <div className="text-sm text-slate-600">{post.author.role} at Aflix Infotech</div>
          </div>
          <Link
            to="/contact"
            className="ml-auto hidden rounded-full bg-indigo px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(79,70,229,0.8)] transition hover:-translate-y-0.5 sm:inline-flex"
          >
            Get in touch
          </Link>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo">
                Keep reading
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Related articles
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden items-center gap-1 text-sm font-semibold text-indigo hover:gap-2 sm:inline-flex"
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(79,70,229,0.35)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.cover}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="rounded-full bg-indigo/10 px-2 py-0.5 font-semibold text-indigo">
                        {p.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {readingTime(p.content)} min
                      </span>
                    </div>
                    <h3 className="line-clamp-2 text-base font-bold text-slate-950 transition group-hover:text-indigo">
                      {p.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-slate-600">{p.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
