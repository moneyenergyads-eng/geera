import React, { useState } from 'react';
import { Palette, X, ChevronRight, Building, Zap, ShieldCheck } from 'lucide-react';

const BRAND_COLORS = [
  { name: 'Emerald 600', hex: '#059669', label: 'اللون الرئيسي' },
  { name: 'Slate 900', hex: '#0f172a', label: 'اللون الداكن' },
  { name: 'Slate 50', hex: '#f8fafc', label: 'الخلفية الفاتحة' },
  { name: 'Emerald 50', hex: '#ecfdf5', label: 'الخلفية الزمردية' },
  { name: 'Rose 500', hex: '#f43f5e', label: 'التحذير' },
  { name: 'Amber 400', hex: '#fbbf24', label: 'التنبيه' },
];

const BRAND_PILLARS = [
  {
    icon: <Building className="w-4 h-4" />,
    title: 'ثقة وأمان',
    desc: 'نصمم لثقة الجار في الجار — بشفافية مالية راقية.',
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: 'سرعة وبساطة',
    desc: 'لمسة واحدة تكفي — لا تعقيد ولا حواجز تقنية.',
  },
  {
    icon: <ShieldCheck className="w-4 h-4" />,
    title: 'خصوصية وحياء',
    desc: 'الطلب الهادئ أكثر فاعلية من المطالبة المباشرة.',
  },
];

export default function BrandIdentityDeck() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="هوية العلامة التجارية"
        className="fixed bottom-6 left-6 z-40 w-11 h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-full shadow-lg shadow-slate-900/20 flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
      >
        <Palette className="w-4.5 h-4.5" />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Slide-in drawer */}
      <div
        className={`fixed bottom-0 left-0 z-50 w-full max-w-sm bg-white border-t border-l border-slate-200/70 rounded-tr-3xl shadow-2xl transition-transform duration-400 ease-out ${
          open ? 'translate-y-0' : 'translate-y-full'
        }`}
        dir="rtl"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-slate-100">
          <button
            onClick={() => setOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4 text-slate-500" />
          </button>
          <div className="text-right">
            <h3 className="text-sm font-black text-slate-900">هوية جيرة البصرية</h3>
            <p className="text-[10px] text-slate-400">GEERA Brand Identity Deck</p>
          </div>
        </div>

        <div className="px-6 py-5 space-y-6 overflow-y-auto max-h-[70vh]">

          {/* Typography */}
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">الطباعة</p>
            <div className="space-y-1.5">
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] text-slate-400 font-mono">font-black / 6xl</span>
                <span className="text-2xl font-black text-slate-900 leading-none">جيرة</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] text-slate-400 font-mono">font-bold / sm</span>
                <span className="text-sm font-bold text-slate-700">منصة التحصيل الذكي</span>
              </div>
              <div className="flex items-baseline justify-between">
                <span className="text-[10px] text-slate-400 font-mono">font-mono / xs</span>
                <span className="text-xs font-mono text-emerald-600">GEERA.SA</span>
              </div>
            </div>
          </div>

          {/* Colors */}
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">لوحة الألوان</p>
            <div className="grid grid-cols-3 gap-2">
              {BRAND_COLORS.map(c => (
                <div key={c.hex} className="text-center">
                  <div
                    className="w-full h-10 rounded-lg mb-1 shadow-sm border border-slate-100"
                    style={{ background: c.hex }}
                  />
                  <p className="text-[9px] text-slate-500 font-mono">{c.hex}</p>
                  <p className="text-[9px] text-slate-400">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brand pillars */}
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">ركائز العلامة</p>
            <div className="space-y-2.5">
              {BRAND_PILLARS.map((p, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">{p.title}</span>
                    <span className="text-[10px] text-slate-500 leading-relaxed">{p.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logo lockup */}
          <div className="bg-slate-900 rounded-2xl p-5 flex items-center justify-center gap-3">
            <div className="text-right">
              <span className="text-lg font-black text-white block leading-none">جيرة</span>
              <span className="text-[9px] text-emerald-400 font-mono font-bold tracking-widest">GEERA.SA</span>
            </div>
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-600/30">
              <Building className="w-5 h-5 text-white stroke-[2]" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
