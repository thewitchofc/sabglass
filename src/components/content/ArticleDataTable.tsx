import type { ArticleSectionTable } from '../../content/seoContent'

function PriceColHeader({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <svg
        className="size-3.5 shrink-0 text-emerald-800/80"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.872l-3.236 4.53L7.53 10.53a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
      {label}
    </span>
  )
}

export function ArticleDataTable({ table }: { table: ArticleSectionTable }) {
  const [h1, h2] = table.headers
  return (
    <div className="mt-6">
      <div className="-mx-5 max-h-[min(70vh,22rem)] max-w-none overflow-auto px-5 md:mx-0 md:max-h-none md:overflow-x-auto md:overflow-y-visible md:px-0">
        <table className="w-full min-w-[min(100%,20rem)] border-collapse border border-neutral-200 text-start text-sm md:text-base">
          <thead className="sticky top-0 z-10 bg-neutral-100 shadow-[0_1px_0_rgba(0,0,0,0.08)]">
            <tr>
              <th
                scope="col"
                className="border-b border-neutral-200 px-4 py-3 font-medium text-neutral-950 md:px-5"
              >
                {h1}
              </th>
              <th
                scope="col"
                className="border-b border-neutral-200 px-4 py-3 font-medium text-neutral-950 md:px-5"
              >
                <PriceColHeader label={h2} />
              </th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr
                key={row.left}
                className="border-b border-neutral-100 transition-colors duration-150 last:border-b-0 odd:bg-white even:bg-neutral-50/90 hover:bg-emerald-50/45"
              >
                <td className="px-4 py-3 font-light text-neutral-700 md:px-5">{row.left}</td>
                <td className="px-4 py-3 font-semibold tabular-nums text-emerald-900 md:px-5">{row.right}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.footnote ? (
        <p className="mt-3 text-pretty text-center text-sm font-medium leading-relaxed text-neutral-600 md:text-start">
          {table.footnote}
        </p>
      ) : null}
      {table.trustNotes && table.trustNotes.length > 0 ? (
        <ul className="mt-3 space-y-1.5 text-pretty text-center text-xs font-light leading-relaxed text-neutral-600 md:text-start md:text-sm">
          {table.trustNotes.map((line) => (
            <li key={line} className="flex items-start justify-center gap-2 md:justify-start">
              <span className="mt-0.5 shrink-0 text-emerald-800" aria-hidden>
                ✔
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
