import { premiumCopy } from '../content/premium'

type Props = {
  /** טקסט בהיר על רקע כהה (Hero / MidCta) */
  variant?: 'onDark' | 'onLight'
  className?: string
  compact?: boolean
  /**
   * standard, מענה מהיר + לוקח פחות מדקה
   * heroPhoto, מענה מהיר + לוקח פחות מדקה לשלוח תמונה (Hero / PhotoLead)
   */
  tone?: 'standard' | 'heroPhoto'
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="inline-block h-3.5 w-3.5 align-[-0.15em]"
      fill="none"
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.75v4.75l3.1 1.85" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** שורות מתחת ל־CTA מרכזי, לפי tone */
export function WaMicroLine({
  variant = 'onLight',
  className = '',
  compact = false,
  tone = 'standard',
}: Props) {
  const { conversion } = premiumCopy
  const text = variant === 'onDark' ? 'text-white' : 'text-neutral-600'
  const top = compact ? 'mt-2' : 'mt-3'

  const secondLine =
    tone === 'heroPhoto' ? conversion.microPhotoLong : conversion.microPhoto

  return (
    <div
      className={`${top} space-y-0.5 text-xs font-light leading-relaxed md:text-[13px] ${text} ${className}`.trim()}
    >
      <p>
        <ClockIcon /> {conversion.microQuick}
      </p>
      <p>{secondLine}</p>
    </div>
  )
}
