export default function MDXLayout({ children }: { children: React.ReactNode }) {
  return <div className="prose prose-sm sm:prose lg:prose-lg mx-auto p-4">{children}</div>
}
