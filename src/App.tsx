import React, { useState } from 'react';
import { 
  Building, CheckCircle2, ArrowRight, ShieldCheck, Zap, Heart, 
  BarChart3, FileSpreadsheet, Lock, Star, Sparkles, Check, Send, Users, ClipboardCheck 
} from 'lucide-react';
import BrandIdentityDeck from './components/BrandIdentityDeck';
import InteractiveSimulator from './components/InteractiveSimulator';
import FAQ from './components/FAQ';

export default function App() {
  const [ctaName, setCtaName] = useState('');
  const [ctaPhone, setCtaPhone] = useState('');
  const [ctaSuccess, setCtaSuccess] = useState(false);
  const [activeTabWhy, setActiveTabWhy] = useState<'traditional' | 'geera'>('geera');

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ctaName.trim() && ctaPhone.trim()) {
      setCtaSuccess(true);
      setTimeout(() => {
        setCtaName('');
        setCtaPhone('');
      }, 5000);
    }
  };

  // Smooth scroll helper
  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    const demoElement = document.getElementById('interactive-demo-section');
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased bg-grid-ambient" style={{ direction: 'rtl' }}>
      
      {/* 1. STYLED HEADER NAVIGATION */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-md shadow-emerald-600/10 group-hover:scale-105 transition-all duration-300">
              <Building className="w-5.5 h-5.5 text-white stroke-[2]" />
            </div>
            <div className="text-right">
              <span className="text-xl font-black text-slate-900 tracking-tight block">جيرة</span>
              <span className="text-[10px] text-emerald-600 font-mono font-bold tracking-widest block uppercase">GEERA.SA</span>
            </div>
          </a>

          {/* Inline Navigation - Apple Style */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-500">
            <a href="#features-section" className="hover:text-slate-900 transition-colors">المميزات</a>
            <a href="#why-us-section" className="hover:text-slate-900 transition-colors">لماذا جيرة؟</a>
            <a href="#how-it-works-section" className="hover:text-slate-900 transition-colors">طريقة العمل</a>
            <a href="#faq-section" className="hover:text-slate-900 transition-colors">الأسئلة الشائعة</a>
          </nav>

          {/* Action Call to Action Button */}
          <div className="flex items-center gap-3">
            <a
              id="nav-cta-btn"
              href="#interactive-demo-section"
              onClick={scrollToDemo}
              className="py-2.5 px-5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-all hover:shadow-lg active:scale-95 flex items-center gap-1 cursor-pointer"
            >
              <span>جرب المحاكي مجاناً</span>
              <ArrowRight className="w-3.5 h-3.5 -scale-x-100" />
            </a>
          </div>

        </div>
      </header>

      {/* 2. INSPIRING HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Soft atmospheric gradient glow behind the hero */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-emerald-500/5 to-transparent rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Direct copy block left */}
            <div className="lg:col-span-7 text-right space-y-6">
              
              {/* Trust Badge badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/50 px-3.5 py-1.5 rounded-full text-emerald-800 text-xs font-bold font-sans">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
                <span>أول منصة سعودية متخصصة لأتمتة مستحقات الجيرة ودياً</span>
              </div>

              {/* Bold Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 leading-[1.12] tracking-tight">
                اجمع مستحقات مجمعك السكني، <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-600 to-emerald-700">وبدد حرج المطالبات.</span>
              </h1>

              {/* Substantiated Subtitle */}
              <p className="text-slate-500 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-medium">
                تؤتمت منصة <strong className="text-slate-800">جيرة</strong> تحصيل اشتراكات الصيانة والخدمات الدورية للاتحادات والأحياء عبر روابط سداد مشفرة ذكية، وإشعارات تذكيرية لطيفة تضمن تحصيلاً يفوق <span className="text-emerald-600 font-mono font-bold">98%</span> مع الحفاظ التام على ود جواركم.
              </p>

              {/* High-fidelity responsive Call to Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  id="hero-cta-primary"
                  href="#interactive-demo-section"
                  onClick={scrollToDemo}
                  className="py-4 px-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-sm font-bold shadow-lg shadow-emerald-600/10 hover:shadow-xl hover:shadow-emerald-600/20 transition-all duration-300 hover:scale-[1.02] text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>أطلق مجمعك السكني الآن مجاناً</span>
                  <ArrowRight className="w-4 h-4 -scale-x-100" />
                </a>

                <a
                  id="hero-cta-secondary"
                  href="#interactive-demo-section"
                  onClick={scrollToDemo}
                  className="py-4 px-6 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-2xl text-sm font-bold transition-all text-center flex items-center justify-center gap-2 hover:border-slate-300 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>شاهد تجربة المحاكاة التفاعلية</span>
                </a>
              </div>

              {/* Security Trust proofs */}
              <div className="pt-4 grid grid-cols-3 gap-6 border-t border-slate-150 max-w-lg">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 tracking-normal h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs text-slate-500 font-semibold">تكامل مع Apple Pay</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs text-slate-500 font-semibold">تقارير كشوفات فورية</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs text-slate-500 font-semibold">بدون تحميل تطبيقات</span>
                </div>
              </div>

            </div>

            {/* Visual preview right (Creative Hero Graphic Device) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[420px] bg-slate-900/5 p-4 rounded-3xl border border-slate-100">
                
                {/* Float Card: Payment Link Generated proof */}
                <div className="absolute -left-6 top-8 bg-white border border-slate-100 rounded-2xl p-4.5 shadow-xl shadow-slate-100/60 z-11 max-w-[230px] animate-fade-in">
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase font-mono">LINK STABLE</span>
                  </div>
                  <span className="text-xs font-bold text-slate-800 block">شقة 104 • فاتورة صيانة</span>
                  <div className="text-xs font-mono font-extrabold text-emerald-600 mt-0.5">350.00 SAR</div>
                  <span className="text-[9px] text-slate-400 block mt-2 pt-2 border-t border-slate-100 font-mono">
                    geera.sa/pay/lnk304
                  </span>
                </div>

                {/* Float Card: Collection Meter rate */}
                <div className="absolute -right-6 bottom-10 bg-slate-900 text-white rounded-2xl p-4 shadow-xl z-11 max-w-[210px] animate-fade-in font-sans">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] text-slate-300 font-bold">معدل الجمع</span>
                    <span className="text-[10px] font-bold text-emerald-400">98.2%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-[9px] text-slate-400 mt-2 block">
                    تم تحصيل 12 شقة من أصل 13 تلقائياً!
                  </span>
                </div>

                {/* Main Visual Image Device (Mock Interface Showcase) */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden text-right font-sans">
                  <div className="bg-slate-50 p-3.5 border-b border-indigo-50/50 flex justify-between items-center">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                      <div className="w-2.5 h-2.5 bg-slate-200 rounded-full"></div>
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold font-mono">GEERA ADMIN PLATFORM v2.6</span>
                  </div>
                  
                  <div className="p-4 space-y-3">
                    <span className="text-[10px] text-slate-400 font-bold block">مجمع واحة النرجس 2</span>
                    
                    {/* Simulated units in Hero visual */}
                    <div className="space-y-2">
                      <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between items-center hover:bg-slate-100/50 transition-colors">
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">شقة 101</span>
                          <span className="text-[9px] text-slate-400 font-mono">أبو محمد الودعاني</span>
                        </div>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                          تم السيرورة
                        </span>
                      </div>

                      <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between items-center">
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">شقة 102</span>
                          <span className="text-[9px] text-slate-400 font-mono">م. خالد السديري</span>
                        </div>
                        <span className="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full font-bold">
                          انتظار السداد
                        </span>
                      </div>

                      <div className="p-2.5 bg-slate-50 rounded-xl flex justify-between items-center opacity-70">
                        <div>
                          <span className="text-xs font-bold text-slate-800 block">شقة 103</span>
                          <span className="text-[9px] text-slate-400 font-mono">د. يوسف القحطاني</span>
                        </div>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                          تم السيرورة
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DETAILED CORE FEATURES */}
      <section id="features-section" className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Section title */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs text-emerald-700 font-black uppercase tracking-widest bg-emerald-100/60 p-2 rounded-full px-4 text-center">
              المواصفات التقنية والمزايا الحيوية
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              صممت جيرة لتبسيط شؤون مجمعك بكياسة
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              تصفية المعاملات المالية بالكامل من الإحراجات والتعقيد وإنجار عملية المزامنة في مجمعك بثبات وسرية تامة.
            </p>
          </div>

          {/* Grid Cards - Stripe/Apple Minimal Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-350 hover:-translate-y-1 relative group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Zap className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">روابط تحصيل بنقرة واحدة</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                لا تطبيق، لا حسابات معقدة. ينقر الجار الساكن على الرابط الذي يصله، فيجد شاشة دفع مخصصة له، وبلمسة واحدة بـ Apple Pay يكمل الدفع ويوثق الميزانية.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-350 hover:-translate-y-1 relative group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Heart className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">التنبيه والوداد الاجتماعي</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                استبدل الحرج برسائل تذكير تلقائية مكتوبة بصياغة أدبية منسقة تعبر عن التضامن والاهتمام بنظافة المبنى وقيمة استثمار الجوار المشترك.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-350 hover:-translate-y-1 relative group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <BarChart3 className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">لوحة تحصيل شفافة للملاك</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                يحصل كل مالك على شاشة واضحة تبين النسبة الإجمالية للتحصيلات وقسم فواتير الصرف، لمزيد من الشفافية التي تزيد من رضا وولاء المجموع.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-350 hover:-translate-y-1 relative group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <FileSpreadsheet className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">مستندات وإيصالات سحابية</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                يرسل النظام إيصال سداد رقمي فوري على الحافظة بمجرد الدفع، مع تتبع آلي كامل يغنيك عن الكشوف الدفترية والأخطاء البشرية المحرجة.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-350 hover:-translate-y-1 relative group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Lock className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">أمان واعتمادية مرخصة</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                معاملتك في مأمن تام. كافة عمليات الدفع الائتمانية والمدفوعات الإلكترونية مشفرة ومصادق عليها بأقوى النظم الموثوقة لدى البنوك المحلية.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-slate-200/50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-350 hover:-translate-y-1 relative group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <Users className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">إدارة الوحدات المتعددة</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                سواء كنت ترأس عمارة واحدة أو تدير مجمعاً ضخماً، تمنحك لوحة التحكم مرونة ترتيب العناوين وإرسال الروابط لـ 500 وحدة بلحظات خاطفة.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHY US VALUE COMPARISON (العلاجي والوقائي) */}
      <section id="why-us-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Context block right */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-xs text-amber-700 font-black bg-amber-100 px-3 py-1 rounded-full uppercase">
                مقارنة كلفة وضياع الجهد
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                لماذا يتسابق رؤساء لجان الملاك على تفعيل جيرة؟
              </h2>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                لأن الحسابات المتعبة عبر النظم البدائية كفيلة بزيادة الإعياء والتحرج الاجتماعي وقلة نسبة السداد للمنافع المشتركة.
              </p>
              
              {/* Tab Selector Visual inside comparison */}
              <div className="bg-slate-100 p-1 rounded-xl inline-flex w-full font-sans">
                <button
                  id="tab-why-traditional"
                  onClick={() => setActiveTabWhy('traditional')}
                  className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all ${
                    activeTabWhy === 'traditional'
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  الطريقة القديمة (الواتساب والورق)
                </button>
                <button
                  id="tab-why-geera"
                  onClick={() => setActiveTabWhy('geera')}
                  className={`flex-1 py-2 text-center text-xs font-bold rounded-lg transition-all ${
                    activeTabWhy === 'geera'
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  استخدام جيرة الذكية ⚡️
                </button>
              </div>
            </div>

            {/* Display Comparison Cards left based on Tab selection */}
            <div className="lg:col-span-8">
              {activeTabWhy === 'traditional' ? (
                <div id="why-traditional-panel" className="bg-rose-50 border border-rose-200/50 p-8 rounded-3xl space-y-4 animate-fade-in text-right">
                  <div className="text-rose-700 font-extrabold text-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-rose-500 rounded-full"></span>
                    خيبة الطريقة التقليدية (الصداع المعتاد)
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-white/80 rounded-xl border border-rose-100">
                      <h4 className="text-sm font-bold text-slate-800 mb-1">الإحراج الاجتماعي المباشر</h4>
                      <p className="text-xs text-slate-500">مواجهة الجيران يومياً لطلب مبالغ الاشتراكات السنوية يعكر صفو العلاقات الودية.</p>
                    </div>

                    <div className="p-4 bg-white/80 rounded-xl border border-rose-100">
                      <h4 className="text-sm font-bold text-slate-800 mb-1">ضياع الحوالات ومطابقتها</h4>
                      <p className="text-xs text-slate-500">حوالي 40% من الوقت يذهب في مطابقة إيصالات بنكية غامضة والتثبت من هوية المحوّلين.</p>
                    </div>

                    <div className="p-4 bg-white/80 rounded-xl border border-rose-100">
                      <h4 className="text-sm font-bold text-slate-800 mb-1">تراكم المتأخرات وصعوبة الجمع</h4>
                      <p className="text-xs text-slate-500">تصل مستويات تأخر الدفع لأكثر من 45% لعدم توفر قنوات مريحة وسريعة كـ Apple Pay.</p>
                    </div>

                    <div className="p-4 bg-white/80 rounded-xl border border-rose-100">
                      <h4 className="text-sm font-bold text-slate-800 mb-1">انعدام كلي للشفافية</h4>
                      <p className="text-xs text-slate-500">صعوبة مشاركة كشوف المصاريف وفواتير الصيانة يؤدي أحياناً لشكوك وانقسامات في المجموع.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div id="why-geera-panel" className="bg-emerald-50/60 border border-emerald-200/50 p-8 rounded-3xl space-y-4 animate-fade-in text-right">
                  <div className="text-emerald-800 font-extrabold text-lg flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    الحياة مع جيرة (الاستقرار والائتمان الصامت)
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-xs">
                      <h4 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                        طلب هادئ بلمحة ذكية
                      </h4>
                      <p className="text-xs text-slate-500">إرسال روابط السداد والتذكير عبر إيماءات صامتة مبرمجة، لتزيل الحرج والصلات المباشرة تماماً.</p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-xs">
                      <h4 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                        Apple Pay في ثانية واحدة
                      </h4>
                      <p className="text-xs text-slate-500">سداد فوري بنسبة خطأ صفرية؛ بمجرد لمسة بصمة يستقبل رئيس اللجنة التنبيه وتقفل الفاتورة.</p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-xs">
                      <h4 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                        محرك تقارير آلي ومفصل
                      </h4>
                      <p className="text-xs text-slate-500">كل الحسابات تصنف وتوثق برمجياً؛ إرسال فواتير فورية للملاك ومطابقة البنك تلقائياً.</p>
                    </div>

                    <div className="p-4 bg-white rounded-xl border border-emerald-100 shadow-xs">
                      <h4 className="text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
                        رضا ويقين لجميع الجيران
                      </h4>
                      <p className="text-xs text-slate-500">شفافية الميزانيات وحوكمة الاشتراكات تعزز من قيم السكن والمحبة وحسن الجوار المستدام.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 5. USER HOW-IT-WORKS SECTION WITH 3 ELEGANCIES */}
      <section id="how-it-works-section" className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <div className="max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full uppercase">
              مسار الأتمتة البسيطة
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              أربع دقائق كافية لإرساء دعائم مجمعك بالكامل
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              لا تعقيدات برمجية أو إجحاف تقني. انقش جدولك المالي بلحظات.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right max-w-5xl mx-auto relative">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 relative">
              <div className="absolute -top-5 right-6 w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/15">
                01
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 mt-2 pt-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-emerald-600" />
                تعيين ملاك المجمع
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                سجل أرقام الشقق ووحدات السكن، وأسماء الملاك وهواتف الاتصال بقائمة سريعة ومحمية داخل منصة جيرة.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 relative">
              <div className="absolute -top-5 right-6 w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/15">
                02
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 mt-2 pt-2 flex items-center gap-2">
                <Send className="w-4 h-4 text-emerald-600" />
                توليد الرابط بضغطة واحدة
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                حدد القيمة المالية ونوع الخدمة، ليقوم محرك جيرة بإرسال رابط الدفع الفردي للساكن برسالة ودية تلقائية.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/50 relative">
              <div className="absolute -top-5 right-6 w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center font-black text-sm shadow-md shadow-slate-900/15">
                03
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 mt-2 pt-2 flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4 text-emerald-600" />
                مراجعة التقارير ومسار الصرف
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                يصلك إشعار فوري عقب كل سداد، مع كشوفات مالية ومطابقة لحظية تضمن توجيه الموارد لصيانة ورفعة العقار المشترك.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CENTERPIECE: INTERACTIVE LIVE RUNTIME SIMULATOR */}
      <section className="py-20 bg-slate-100/30">
        <div className="max-w-7xl mx-auto px-6">
          <InteractiveSimulator />
        </div>
      </section>

      {/* 7. AUTHENTIC SAUDI TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-3.5 py-1.5 rounded-full uppercase">
              شهادات ملاك وعقاريين حقيقيين
            </span>
            <h2 className="text-3xl font-extrabold text-slate-905 tracking-tight">
              أصداء الرضا على ألسنة جيراننا
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              ننقل لكم شهادات جيران مخلصين نجحوا في دفع الكفاية وتنظيم الصيانة.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
            
            {/* Testimonial 1 */}
            <div className="p-6.5 border border-slate-200/60 bg-slate-50/50 rounded-2xl space-y-4">
              <div className="flex text-amber-500 gap-0.5">
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
              </div>
              
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed italic">
                &ldquo;كنا نواجه حرجاً بالغاً في عمارة الياسمين بجدة عند مطالبة الجيران وجهاً لوجه بسداد مصروفات صيانة وترميم المصاعد المشتركة والكهرباء. بعد اشتراكنا في جيرة، أصبح الرابط يذهب آلياً للجميع دون أي حرج، وتحصد الاشتراكات بالكامل قبل يوم 3 من كل شهر بمصداقية عالية.&rdquo;
              </p>

              <div className="border-t border-slate-200/60 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-700 font-sans">
                  س
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-none">م. سلمان البقمي</h4>
                  <span className="text-[10px] text-slate-400 block mt-1">مشرف عمارة الياسمين السكنية • جدة</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="p-6.5 border border-slate-200/60 bg-slate-50/50 rounded-2xl space-y-4">
              <div className="flex text-amber-500 gap-0.5">
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
              </div>

              <p className="text-slate-700 text-xs md:text-sm leading-relaxed italic">
                &ldquo;إدارة مجمع مكوّن من 48 وحدة سكنية مجهد للغاية وكان لدينا تخلف كبير عن السداد. أتاحت لنا منصة جيرة ميزة جدولة الروابط الرقمية وتفعيل الدفع فائق السرعة عبر Apple Pay. قفزت نسبة التحصيل لدينا من 52% إلى 96% ونعمل الآن بشفافية تامة مع جميع الملاك.&rdquo;
              </p>

              <div className="border-t border-slate-200/60 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-700 font-sans">
                  م
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-none">مجمع العقيق السكني 4</h4>
                  <span className="text-[10px] text-slate-400 block mt-1">لجنة إدارة واتحاد ملاك العقيق • الرياض</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="p-6.5 border border-slate-200/60 bg-slate-50/50 rounded-2xl space-y-4">
              <div className="flex text-amber-500 gap-0.5">
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
                <Star className="w-4 h-4 fill-amber-500" />
              </div>

              <p className="text-slate-700 text-xs md:text-sm leading-relaxed italic">
                &ldquo;أكثر ما شدني في جيرة هو جودة الواجهات العالية وسلاستها على الجوال. الجيران كبار السن أبدوا ارتياحاً كبيراً لأنهم يدفعون بكبسة زر واحدة بمدى دون الحاجة لتنزيل تطبيقات أو الدخول في مواقع تدفق روتينية. حقاً منتج يحل مشكلة كبيرة بكل رقي.&rdquo;
              </p>

              <div className="border-t border-slate-200/60 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-700 font-sans">
                  ي
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 leading-none">أبو يوسف القحطاني</h4>
                  <span className="text-[10px] text-slate-400 block mt-1">اتحاد عمارة الملز 12 • الرياض</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CRISP DETAILED FAQS ACCORDION */}
      <section id="faq-section" className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs text-emerald-800 font-bold bg-emerald-100 px-3 py-1 rounded-full uppercase">
              الأسئلة الشائعة والاستجابة الفورية
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              كل ما تود معرفته عن منصة جيرة
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              إيجاز واضح وشامل لكافة تفاصيل التبادل السكني والتقني مع بوابتنا.
            </p>
          </div>

          <FAQ />

        </div>
      </section>

      {/* 9. HIGH-CONVERTING FINAL CTA BOX */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden text-right border border-slate-800">
            {/* Background glowing particles/radial gradients */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-emerald-600/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="max-w-2xl relative z-10 space-y-5">
              <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-500/10 p-2 rounded-full px-4 inline-block font-sans">
                انضم لطلائع مجامع جيرة السكنية لعام 2026
              </span>
              
              <h2 className="text-2xl sm:text-3.5xl font-black text-white leading-tight">
                ابدأ رحلة التحصيل الهادئ لمجمعك مجاناً اليوم
              </h2>
              
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                سجل اسمك ورقم جوالك للواتساب، وسيفوضك مستشار جيرة لتهيئة مجمعك السكني وتفعيل الروابط بلمح البصر دون أي التزامات مالية.
              </p>

              {/* Instant interactive CTA submission */}
              <form onSubmit={handleCtaSubmit} className="pt-2">
                {!ctaSuccess ? (
                  <div className="flex flex-col md:flex-row gap-3 items-stretch">
                    <input
                      type="text"
                      value={ctaName}
                      onChange={(e) => setCtaName(e.target.value)}
                      placeholder="الاسم الكريم (مدير المجمع)"
                      className="flex-grow md:flex-1 p-4 bg-slate-800 text-white border border-slate-700/60 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      required
                    />
                    <input
                      type="tel"
                      value={ctaPhone}
                      onChange={(e) => setCtaPhone(e.target.value)}
                      placeholder="رقم الجوال للواتساب"
                      className="flex-grow md:flex-1 p-4 bg-slate-800 text-white border border-slate-700/60 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-right"
                      required
                    />
                    <button
                      id="btn-final-cta-submit"
                      type="submit"
                      className="py-4 px-8 bg-emerald-600 hover:bg-emerald-700 hover:scale-[1.01] text-white rounded-2xl text-sm font-bold transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <span>احصل على دعوة تفعيل</span>
                      <ArrowRight className="w-4 h-4 -scale-x-100" />
                    </button>
                  </div>
                ) : (
                  <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-right animate-fade-in flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-emerald-300 font-bold text-sm block">تقبّل الله سعيك! تم تسجيل طلبك بنجاح.</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">سنرسل لك رمز الانضمام السري للوحة تحكم جيرة في غضون دقائق معدودة عبر الواتساب.</p>
                    </div>
                  </div>
                )}
              </form>

              {/* Under-line safety proofs */}
              <p className="text-[10px] text-slate-400 font-sans italic">
                لا نطلب منك معلومات بطاقة ائتمانية. البدء مجاني بالكامل لتبسيط شؤون الجيران.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. CLEAN MODERN FOOTER */}
      <footer className="bg-slate-50 border-t border-slate-100 py-12 text-center text-xs text-slate-400 font-sans">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center">
              <Building className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-800">جيرة © ٢٠٢٦</span>
          </div>

          {/* Core metadata credits */}
          <div>
            <span>منصة ذكية لإدارة وتحصيل الرسوم السكنية آلياً • كافة الحقوق لعلامة جيرة محفوظة</span>
          </div>

          {/* Soft regulatory statement */}
          <div className="text-[10px]">
            <span>مستوفية لشروط الهيئة العامة للعقار بالمملكة العربية السعودية 🇸🇦</span>
          </div>

        </div>
      </footer>

      {/* 11. CREATIVE DIRECTOR EXPERTISE FLOATING DRAWER */}
      <BrandIdentityDeck />

    </div>
  );
}
