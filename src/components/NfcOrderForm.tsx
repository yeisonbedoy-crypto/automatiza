import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { NfcCard, NfcButton } from './nfc';
import { PRODUCTS, NFC_COLOR_OPTIONS } from '../data/nfcProducts';

export type NfcFormState = {
  nombre: string;
  negocio: string;
  isla: string;
  whatsapp: string;
  producto: string;
  color: string;
  mensaje: string;
};

const ISLAS = ["Gran Canaria", "Tenerife", "Lanzarote", "Fuerteventura", "La Palma", "La Gomera", "El Hierro", "Península / resto de España"];
const NFC_COLOR_NO_PREFERENCE = "Sin preferencia";

const NFC_INPUT_CLASS = "w-full rounded-xl px-4 py-3 text-sm border-[2px] focus:outline-none";
const NFC_INPUT_STYLE = { borderColor: 'var(--nfc-border)', background: 'var(--nfc-paper)', color: 'var(--nfc-ink)' };
const NFC_LABEL_CLASS = "block font-mono text-[10px] tracking-[0.15em] uppercase mb-2";

export function OrderForm({ preselected = null, presetColor, presetIsla }: { preselected?: string | null; presetColor?: string; presetIsla?: string }) {
  const [form, setForm] = useState<NfcFormState>({
    nombre: '',
    negocio: '',
    isla: presetIsla ?? 'Gran Canaria',
    whatsapp: '',
    producto: preselected ?? PRODUCTS[0].name,
    color: presetColor ?? NFC_COLOR_NO_PREFERENCE,
    mensaje: '',
  });
  const [sent, setSent] = useState(false);
  const LEAD_EMAIL = 'automatizagc@gmail.com';

  useEffect(() => {
    if (preselected) setForm(prev => ({ ...prev, producto: preselected }));
  }, [preselected]);

  useEffect(() => {
    if (presetColor) setForm(prev => ({ ...prev, color: presetColor }));
  }, [presetColor]);

  useEffect(() => {
    if (presetIsla) setForm(prev => ({ ...prev, isla: presetIsla }));
  }, [presetIsla]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `Nuevo pedido NFC Canarias — ${form.nombre || 'sin nombre'}`,
        _template: 'table',
        Nombre: form.nombre,
        Negocio: form.negocio || '—',
        Isla: form.isla,
        WhatsApp: form.whatsapp || '—',
        'Producto de interés': form.producto,
        Color: form.color,
        Mensaje: form.mensaje || '—',
      }),
    }).catch(() => {});

    const lines = [
      `*Nuevo pedido NFC Canarias*`, ``,
      `👤 *Nombre:* ${form.nombre}`,
      form.negocio ? `🏪 *Negocio:* ${form.negocio}` : '',
      `📍 *Isla:* ${form.isla}`,
      form.whatsapp ? `📱 *WhatsApp:* ${form.whatsapp}` : '', ``,
      `🎯 *Producto:* ${form.producto}`,
      `🎨 *Color:* ${form.color}`, ``,
      form.mensaje ? `📝 *Mensaje:*\n${form.mensaje}` : '',
    ].filter(Boolean);
    window.open(`https://wa.me/34696859840?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');

    setSent(true);
  };

  if (sent) {
    return (
      <NfcCard tabColor="var(--nfc-green)" className="p-8 text-center">
        <p className="text-lg font-bold mb-2" style={{ color: 'var(--nfc-ink)' }}>¡Pedido recibido!</p>
        <p className="text-[13px]" style={{ color: 'var(--nfc-ink2)' }}>Te escribimos por WhatsApp en menos de 24h para confirmar los detalles.</p>
      </NfcCard>
    );
  }

  return (
    <NfcCard tabColor="var(--nfc-yellow)" shadow="lg" className="p-7 md:p-8">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nfc-nombre" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Nombre</label>
            <input id="nfc-nombre" name="nombre" type="text" required value={form.nombre} onChange={handleChange} placeholder="Tu nombre" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
          </div>
          <div>
            <label htmlFor="nfc-negocio" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Negocio</label>
            <input id="nfc-negocio" name="negocio" type="text" value={form.negocio} onChange={handleChange} placeholder="Nombre de tu negocio" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nfc-isla" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Isla / ubicación</label>
            <select id="nfc-isla" name="isla" value={form.isla} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
              {ISLAS.map(i => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="nfc-whatsapp" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>WhatsApp</label>
            <input id="nfc-whatsapp" name="whatsapp" type="tel" value={form.whatsapp} onChange={handleChange} placeholder="+34 000 000 000" className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nfc-producto" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Producto de interés</label>
            <select id="nfc-producto" name="producto" value={form.producto} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
              {PRODUCTS.map(p => <option key={p.name} value={p.name}>{p.name} — {p.price}</option>)}
              <option value="No lo sé todavía">No lo sé todavía</option>
            </select>
          </div>
          <div>
            <label htmlFor="nfc-color" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>Color</label>
            <select id="nfc-color" name="color" value={form.color} onChange={handleChange} className={NFC_INPUT_CLASS} style={NFC_INPUT_STYLE}>
              <option value={NFC_COLOR_NO_PREFERENCE}>{NFC_COLOR_NO_PREFERENCE}</option>
              {NFC_COLOR_OPTIONS.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="nfc-mensaje" className={NFC_LABEL_CLASS} style={{ color: 'var(--nfc-ink3)' }}>
            Mensaje <span className="normal-case font-sans" style={{ color: 'var(--nfc-ink3)' }}>(opcional)</span>
          </label>
          <textarea id="nfc-mensaje" name="mensaje" rows={3} value={form.mensaje} onChange={handleChange} placeholder="Cuéntanos algo más sobre tu negocio o pedido" className={`${NFC_INPUT_CLASS} resize-none`} style={NFC_INPUT_STYLE} />
        </div>
        <NfcButton type="submit" className="w-full justify-center">Enviar pedido</NfcButton>
      </form>
    </NfcCard>
  );
}
