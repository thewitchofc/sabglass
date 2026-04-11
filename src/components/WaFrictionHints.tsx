import { premiumCopy } from '../content/premium'

type Props = {
  /** טקסט בהיר על רקע כהה (Hero / MidCta) */
  variant?: 'onDark' | 'onLight'
  className?: string
  compact?: boolean
  /**
   * standard, ⏱️ מענה מהיר + לוקח פחות מדקה
   * heroPhoto, ⏱️ מענה מהיר + לוקח פחות מדקה לשלוח תמונה (Hero / PhotoLead)
   */
  tone?: 'standard' | 'heroPhoto'
}

/** שורות מתחת ל־CTA מרכזי, לפי tone */
export function WaMicroLine({
  variant = 'onLight',
  className = '',
  compact = false,
  tone = 'standard',
}: Props) {
  const { conversion } = premiumCopy
  const text = variant === 'onDark' ? 'text-white/65' : 'text-neutral-500'
  const top = compact ? 'mt-2' : 'mt-3'

  const secondLine =
    tone === 'heroPhoto' ? conversion.microPhotoLong : conversion.microPhoto

  return (
    <div
      className={`${top} space-y-0.5 text-xs font-light leading-relaxed md:text-[13px] ${text} ${className}`.trim()}
    >
      <p>
        <span aria-hidden>⏱️</span> {conversion.microQuick}
      </p>
      <p>{secondLine}</p>
    </div>
  )
}
