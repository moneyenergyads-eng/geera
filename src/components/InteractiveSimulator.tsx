import React, { useState } from 'react';
import {
  Send, CheckCircle2, ArrowRight, Zap, Users, FileSpreadsheet,
  RefreshCw, PlusCircle, Trash2, Eye
} from 'lucide-react';
import { Property, PaymentLink, FEE_ARABIC_MAP } from '../types';

const INITIAL_UNITS: Property[] = [
  { id: '1', unitNumber: '101', ownerName: 'أبو محمد الودعاني', phone: '0501234567', status: 'paid', amount: 350, dueDate: '2026-06-01' },
  { id: '2', unitNumber: '102', ownerName: 'م. خالد السديري', phone: '0509876543', status: 'pending', amount: 350, dueDate: '2026-06-01' },
  { id: '3', unitNumber: '103', ownerName: 'د. يوسف القحطاني', phone: '0555544433', status: 'paid', amount: 350, dueDate: '2026-06-01' },
  { id: '4', unitNumber: '104', ownerName: 'عبدالله المطيري', phone: '0566677788', status: 'overdue', amount: 350, dueDate: '2026-05-01' },
  { id: '5', unitNumber: '105', ownerName: 'م. فهد الشمري', phone: '0577788899', status: 'pending', amount: 350, dueDate: '2026-06-01' },
];

const STATUS_MAP = {
  paid: { label: 'تم السداد', cls: 'bg-emerald-100 text-emerald-800' },
  pending: { label: 'انتظار السداد', cls: 'bg-amber-100 text-amber-800' },
  overdue: { label: 'متأخر', cls: 'bg-rose-100 text-rose-800' },
};

type Tab = 'units' | 'generate' | 'links' | 'stats';

export default function InteractiveSimulator() {
  const [tab, setTab] = useState<Tab>('units');
  const [units, setUnits] = useState<Property[]>(INITIAL_UNITS);
  const [links, setLinks] = useState<PaymentLink[]>([]);
  const [generating, setGenerating] = useState(false);
  const [generatedFor, setGeneratedFor] = useState<string | null>(null);

  // Generate form state
  const [genUnit, setGenUnit] = useState('');
  const [genFeeType, setGenFeeType] = useState<keyof typeof FEE_ARABIC_MAP>('maintenance');
  const [genAmount, setGenAmount] = useState('350');

  const paidCount = units.filter(u => u.status === 'paid').length;
  const collectionRate = Math.round((paidCount / units.length) * 100);

  const handleGenerateLink = (e: React.FormEvent) => {
    e.preventDefault();
    const unit = units.find(u => u.unitNumber === genUnit);
    if (!unit) return;

    setGenerating(true);
    setGeneratedFor(null);

    setTimeout(() => {
      const newLink: PaymentLink = {
        id: `lnk${Date.now()}`,
        unitNumber: genUnit,
        ownerName: unit.ownerName,
        amount: parseFloat(genAmount) || 350,
        feeType: genFeeType,
        status: 'active',
        createdAt: new Date().toLocaleDateString('ar-SA'),
      };
      setLinks(prev => [newLink, ...prev]);
      setGenerating(false);
      setGeneratedFor(newLink.id);
      setTab('links');
    }, 1400);
  };

  const handleMarkPaid = (linkId: string, unitNumber: string) => {
    setLinks(prev =>
      prev.map(l => l.id === linkId ? { ...l, status: 'paid' } : l)
    );
    setUnits(prev =>
      prev.map(u => u.unitNumber === unitNumber ? { ...u, status: 'paid' } : u)
    );
  };

  const TABS: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'units', label: 'الوحدات', icon: <Users className="w-3.5 h-3.5" /> },
    { id: 'generate', label: 'توليد رابط', icon: <PlusCircle className="w-3.5 h-3.5" /> },
    { id: 'links', label: `الروابط (${links.length})`, icon: <Send className="w-3.5 h-3.5" /> },
    { id: 'stats', label: 'الإحصائيات', icon: <FileSpreadsheet className="w-3.5 h-3.5" /> },
  ];

  return (
    <div id="interactive-demo-section" className="text-right" dir="rtl">
      {/* Section header */}
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full uppercase">
          تجربة تفاعلية حية
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          جرّب محاكي لوحة تحكم جيرة مجاناً
        </h2>
        <p className="text-slate-500 text-xs md:text-sm">
          استكشف كيف تعمل المنصة بنفسك — أضف وحدات، ولّد روابط دفع، وشاهد نسبة التحصيل ترتفع.
        </p>
      </div>

      {/* Simulator Shell */}
      <div className="max-w-5xl mx-auto bg-white border border-slate-200/70 rounded-3xl shadow-xl overflow-hidden">
        {/* Browser chrome bar */}
        <div className="bg-slate-900 px-5 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="flex-1 bg-slate-800 rounded-lg px-3 py-1 text-[10px] text-slate-400 font-mono text-center">
            geera.sa/dashboard — مجمع واحة النرجس 2
          </div>
          <Zap className="w-3.5 h-3.5 text-emerald-400" />
        </div>

        {/* Tabs */}
        <div className="border-b border-slate-100 bg-slate-50 flex overflow-x-auto">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 px-5 py-3.5 text-xs font-bold whitespace-nowrap transition-colors border-b-2 -mb-px cursor-pointer ${
                tab === t.id
                  ? 'border-emerald-600 text-emerald-700 bg-white'
                  : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {t.icon}
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 min-h-[380px]">

          {/* UNITS TAB */}
          {tab === 'units' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-slate-400 font-mono">{units.length} وحدات مسجلة</span>
                <h3 className="text-sm font-bold text-slate-800">قائمة وحدات المجمع</h3>
              </div>
              {units.map(unit => (
                <div key={unit.id} className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-100 hover:bg-slate-100/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold ${STATUS_MAP[unit.status].cls}`}>
                      {STATUS_MAP[unit.status].label}
                    </span>
                    <span className="text-xs font-mono text-emerald-700 font-bold">{unit.amount} ﷼</span>
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">{unit.ownerName}</span>
                    <span className="text-[10px] text-slate-400 font-mono">شقة {unit.unitNumber}</span>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => setTab('generate')}
                  className="w-full py-3 border-2 border-dashed border-emerald-200 text-emerald-600 text-xs font-bold rounded-xl hover:bg-emerald-50 transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <PlusCircle className="w-4 h-4" />
                  ولّد رابط دفع لوحدة
                </button>
              </div>
            </div>
          )}

          {/* GENERATE LINK TAB */}
          {tab === 'generate' && (
            <div className="max-w-md mx-auto space-y-5">
              <h3 className="text-sm font-bold text-slate-800 mb-4">توليد رابط دفع مخصص</h3>
              <form onSubmit={handleGenerateLink} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1.5">اختر الوحدة السكنية</label>
                  <select
                    value={genUnit}
                    onChange={e => setGenUnit(e.target.value)}
                    required
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">— اختر الشقة —</option>
                    {units.map(u => (
                      <option key={u.id} value={u.unitNumber}>
                        شقة {u.unitNumber} — {u.ownerName}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1.5">نوع الرسوم</label>
                  <select
                    value={genFeeType}
                    onChange={e => setGenFeeType(e.target.value as keyof typeof FEE_ARABIC_MAP)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    {(Object.keys(FEE_ARABIC_MAP) as Array<keyof typeof FEE_ARABIC_MAP>).map(k => (
                      <option key={k} value={k}>{FEE_ARABIC_MAP[k]}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1.5">المبلغ (ريال سعودي)</label>
                  <input
                    type="number"
                    value={genAmount}
                    onChange={e => setGenAmount(e.target.value)}
                    min="1"
                    required
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={generating}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {generating ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      جارٍ التوليد...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      ولّد رابط الدفع وأرسله
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* LINKS TAB */}
          {tab === 'links' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={() => setTab('generate')}
                  className="text-xs text-emerald-600 font-bold flex items-center gap-1 hover:underline cursor-pointer"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  رابط جديد
                </button>
                <h3 className="text-sm font-bold text-slate-800">روابط الدفع المولّدة</h3>
              </div>

              {links.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <Send className="w-8 h-8 mx-auto mb-3 opacity-30" />
                  <p className="text-xs">لا توجد روابط بعد — ولّد رابطاً من تبويب "توليد رابط"</p>
                </div>
              ) : (
                links.map(link => (
                  <div
                    key={link.id}
                    className={`p-4 rounded-xl border transition-all ${
                      generatedFor === link.id
                        ? 'border-emerald-300 bg-emerald-50 ring-2 ring-emerald-200'
                        : 'border-slate-100 bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2">
                        {link.status === 'paid' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        ) : (
                          <button
                            onClick={() => handleMarkPaid(link.id, link.unitNumber)}
                            className="text-[10px] bg-slate-200 hover:bg-emerald-600 hover:text-white text-slate-600 px-2 py-1 rounded-lg font-bold transition-colors cursor-pointer"
                          >
                            محاكاة الدفع
                          </button>
                        )}
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                          link.status === 'paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {link.status === 'paid' ? 'مدفوع' : 'نشط'}
                        </span>
                      </div>
                      <div className="text-left rtl:text-right">
                        <p className="text-xs font-bold text-slate-800">{link.ownerName} — شقة {link.unitNumber}</p>
                        <p className="text-[10px] text-slate-500">{FEE_ARABIC_MAP[link.feeType]} • {link.amount} ﷼</p>
                        <p className="text-[9px] text-emerald-600 font-mono mt-0.5">geera.sa/pay/{link.id.slice(-6)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* STATS TAB */}
          {tab === 'stats' && (
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-slate-800">لوحة الإحصائيات والتحصيل</h3>

              {/* Collection rate */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-black text-emerald-600">{collectionRate}%</span>
                  <span className="text-xs font-bold text-slate-500">معدل التحصيل الإجمالي</span>
                </div>
                <div className="h-2.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                    style={{ width: `${collectionRate}%` }}
                  ></div>
                </div>
                <p className="text-[10px] text-slate-400 mt-2">
                  {paidCount} وحدة مسددة من أصل {units.length}
                </p>
              </div>

              {/* Breakdown grid */}
              <div className="grid grid-cols-3 gap-4">
                {(['paid', 'pending', 'overdue'] as const).map(s => (
                  <div key={s} className={`p-4 rounded-xl border ${
                    s === 'paid' ? 'bg-emerald-50 border-emerald-100' :
                    s === 'pending' ? 'bg-amber-50 border-amber-100' :
                    'bg-rose-50 border-rose-100'
                  }`}>
                    <span className={`text-2xl font-black block ${
                      s === 'paid' ? 'text-emerald-700' :
                      s === 'pending' ? 'text-amber-700' : 'text-rose-700'
                    }`}>
                      {units.filter(u => u.status === s).length}
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 block mt-0.5">
                      {STATUS_MAP[s].label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total collected */}
              <div className="bg-slate-900 text-white rounded-2xl p-5 flex justify-between items-center">
                <span className="text-emerald-400 font-black text-xl font-mono">
                  {units.filter(u => u.status === 'paid').reduce((sum, u) => sum + u.amount, 0).toLocaleString('ar-SA')} ﷼
                </span>
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-300 block">إجمالي المحصّل</span>
                  <span className="text-[10px] text-slate-500">من رسوم {new Date().toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' })}</span>
                </div>
              </div>

              <div className="pt-1">
                <button
                  onClick={() => {
                    setLinks([]);
                    setUnits(INITIAL_UNITS);
                    setTab('units');
                  }}
                  className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  إعادة تعيين المحاكي
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
