import { ChevronDown } from 'lucide-react';

export function FaqItem({ q, a, isOpen, onToggle, id }: { q: string; a: string; isOpen: boolean; onToggle: () => void; id: string }) {
  return (
    <div className="border-b-[2px] last:border-b-0" style={{ borderColor: 'var(--nfc-divider)' }}>
      <button type="button" onClick={onToggle} aria-expanded={isOpen} aria-controls={id} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="text-[14px] md:text-[15px] font-bold" style={{ color: 'var(--nfc-ink)' }}>{q}</span>
        <ChevronDown
          className="w-5 h-5 shrink-0 transition-transform duration-200"
          style={{ color: 'var(--nfc-ink)', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      {isOpen && <p id={id} className="text-[13px] leading-relaxed pb-5 pr-8" style={{ color: 'var(--nfc-ink2)' }}>{a}</p>}
    </div>
  );
}
