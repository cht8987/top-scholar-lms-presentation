import { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Database,
  Cpu,
  Layers,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ExternalLink,
  Maximize2,
  Minimize2,
  Clock,
  Calendar,
  Compass,
  LineChart,
  Bot
} from 'lucide-react';

export function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeTab, setActiveTab] = useState<'compare' | 'flow'>('compare');

  const TOTAL_SLIDES = 5;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev < TOTAL_SLIDES - 1 ? prev + 1 : prev));
  }, [TOTAL_SLIDES]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Trigger celebration on Slide 5
  useEffect(() => {
    if (currentSlide === 4) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffd700', '#d4af37', '#ffffff', '#e5a93c']
      });
    }
  }, [currentSlide]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const slidesMeta = [
    { title: '启幕 · 全新升级', subtitle: 'TOP SCHOLAR 智能进化' },
    { title: '洞察 · 现状之痛', subtitle: '信息孤岛与工作枷锁' },
    { title: '重塑 · 数据底座', subtitle: '单一真相与一体化中台' },
    { title: '赋能 · 团队效益', subtitle: '极简提效与无限可能' },
    { title: '启航 · 实时体验', subtitle: '进入全新 LMS 业务系统' },
  ];

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#e6edf3] flex flex-col justify-between overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Top Navbar */}
      <header className="px-6 py-4 border-b border-[#d4af37]/15 bg-[#0a0a0f]/80 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#d4af37] to-[#8c6b16] p-[1px] shadow-[0_0_15px_rgba(212,175,55,0.3)]">
            <div className="w-full h-full bg-[#0c0c0f] rounded-lg flex items-center justify-center font-bold text-[#ffd700] text-sm tracking-wider">
              TS
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm tracking-wider gold-gradient-text uppercase">TOP SCHOLAR</span>
              <span className="px-2 py-0.5 text-[10px] font-semibold bg-[#d4af37]/10 text-[#ffd700] border border-[#d4af37]/30 rounded-full">
                LMS 2.0 + AI
              </span>
            </div>
            <p className="text-[11px] text-gray-400">全新学生管理系统 · 内部赋能培训</p>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="hidden md:flex items-center gap-2">
          {slidesMeta.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`group flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                currentSlide === idx
                  ? 'bg-[#d4af37]/20 border border-[#d4af37]/60 text-[#ffd700] shadow-[0_0_12px_rgba(212,175,55,0.25)]'
                  : 'bg-white/5 border border-white/5 text-gray-400 hover:text-gray-200 hover:border-white/10'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${currentSlide === idx ? 'bg-[#ffd700]' : 'bg-gray-500'}`} />
              <span>{idx + 1}. {s.title.split(' · ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-[#d4af37]/40 transition-colors"
            title="全屏演示 (F)"
          >
            {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
          <a
            href="https://lms.topscholar.edu.my"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-medium border border-[#d4af37]/40 text-[#ffd700] bg-[#d4af37]/10 hover:bg-[#d4af37]/20 transition-all shadow-[0_0_10px_rgba(212,175,55,0.15)]"
          >
            <span>Live LMS</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </header>

      {/* Main Slide Deck Canvas */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8 max-w-7xl mx-auto w-full">
        <div className="w-full">
          {/* SLIDE 1: Title & Hero */}
          {currentSlide === 0 && (
            <div className="animate-in fade-in zoom-in-95 duration-500 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#ffd700] text-xs font-semibold tracking-wide">
                  <Sparkles size={14} className="text-[#ffd700] animate-spin" style={{ animationDuration: '8s' }} />
                  <span>内部专项战略升级培训 · 2026</span>
                </div>

                <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-[1.15]">
                  全新学生管理系统
                  <br />
                  <span className="gold-gradient-text text-5xl sm:text-7xl">LMS + AI 时代</span>
                </h1>

                <p className="text-lg text-gray-300 leading-relaxed font-light max-w-xl">
                  打破部门数据孤岛，重塑标准化招生与排课业务流。
                  从<strong className="text-[#ffd700] font-medium"> 繁琐的手工割裂 </strong>走向
                  <strong className="text-[#ffd700] font-medium"> 智能驱动的单一真相底座</strong>。
                </p>

                {/* Speaker Cards */}
                <div className="pt-2 grid grid-cols-2 gap-4 max-w-lg">
                  <div className="glass-gold-card p-4 rounded-xl border border-[#d4af37]/30 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center font-bold text-[#ffd700] text-base">
                      EL
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">ELSON</div>
                      <div className="text-xs text-[#d4af37]">IT & Marketing</div>
                    </div>
                  </div>

                  <div className="glass-gold-card p-4 rounded-xl border border-[#d4af37]/30 flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 flex items-center justify-center font-bold text-[#ffd700] text-base">
                      AR
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Aaron 老师</div>
                      <div className="text-xs text-[#d4af37]">IT & 国语教师</div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#d4af37]" /> 内部培训专场</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#d4af37]" /> 10:00am - 11:30am</span>
                  <span className="flex items-center gap-1.5"><Compass size={14} className="text-[#d4af37]" /> 6B / Zoom 线上同步</span>
                </div>
              </div>

              {/* Visual Side: Event Poster Frame */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-sm rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-[#d4af37]/40 via-[#d4af37]/10 to-transparent shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                  <div className="relative rounded-xl overflow-hidden bg-black">
                    <img
                      src="/poster.jpg"
                      alt="Top Scholar LMS Training Poster"
                      className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                      <div className="text-xs text-[#d4af37] font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        全新系统现已就绪 · Ready for Launch
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 2: Pain Points (痛点深度剖析) */}
          {currentSlide === 1 && (
            <div className="animate-in fade-in zoom-in-95 duration-500 space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#f87171] bg-[#7f1d1d]/30 border border-[#f87171]/30 px-3 py-1 rounded-full">
                  Phase 1 · 现状审视
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  为什么过去的模式 <span className="text-[#f87171]">必须改变？</span>
                </h2>
                <p className="text-sm text-gray-400">
                  缺乏统一步调的割裂系统，正成为 Top Scholar 迈向下一阶段增长的隐形枷锁。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                {/* Pain Card 1 */}
                <div className="glass-dark-card p-6 rounded-2xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl group-hover:bg-red-500/10 transition-all" />
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-5">
                    <Database size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span>资料数据割裂与分散</span>
                    <AlertTriangle size={16} className="text-red-400" />
                  </h3>
                  <ul className="text-xs text-gray-300 space-y-2.5 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>学生学籍、付费记录、排课考勤散落在 Excel、聊天记录与多套工具中。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>无全局「单一真实档案」，家长信息重复录入，版本不一，难以核对。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">•</span>
                      <span>跨部门查证耗时耗力，历史资料流失严重。</span>
                    </li>
                  </ul>
                </div>

                {/* Pain Card 2 */}
                <div className="glass-dark-card p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-all" />
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5">
                    <Layers size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span>工作流程繁琐低效</span>
                    <AlertTriangle size={16} className="text-amber-400" />
                  </h3>
                  <ul className="text-xs text-gray-300 space-y-2.5 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>销售开单、开课权限、排课点名需多人层层手工转交，流程冗长。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>传统「期制 (Term)」计算复杂，手工对账易漏单、漏开课或错算期数。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>行政和教师大量精力被重复性杂务消耗，无法聚焦核心教学。</span>
                    </li>
                  </ul>
                </div>

                {/* Pain Card 3 */}
                <div className="glass-dark-card p-6 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl group-hover:bg-orange-500/10 transition-all" />
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-5">
                    <Cpu size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span>AI与数据分析遭遇瓶颈</span>
                    <AlertTriangle size={16} className="text-orange-400" />
                  </h3>
                  <ul className="text-xs text-gray-300 space-y-2.5 leading-relaxed">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>数据脏乱不流通，AI 无法读取有效上下文，智能助教与自动化沦为空谈。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>管理层无法实时查看留存率、续费率、学生流失预警等核心商业图谱。</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold">•</span>
                      <span>难以横向扩展新校区或新业务，技术底座面临升级天花板。</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 flex items-center justify-between text-xs text-red-200">
                <span className="font-semibold flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-400" />
                  结论：如果数据底座不打通，未来无论引入多强大的 AI 工具，都无法真正落地发挥价值！
                </span>
              </div>
            </div>
          )}

          {/* SLIDE 3: Solution & Core Value (数据整合中台) */}
          {currentSlide === 2 && (
            <div className="animate-in fade-in zoom-in-95 duration-500 space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#ffd700] bg-[#d4af37]/20 border border-[#d4af37]/40 px-3 py-1 rounded-full">
                  Phase 2 · 破局之道
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  统一业务中台：<span className="gold-gradient-text">单一真相底座</span>
                </h2>
                <p className="text-sm text-gray-400">
                  为 Top Scholar 独家定制专属期制引擎，打通「线索 ➔ 录单 ➔ 排课 ➔ 履约 ➔ 续费」全链路。
                </p>
              </div>

              {/* Tab Selector */}
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setActiveTab('compare')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'compare'
                      ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  新旧模式对比 (Before / After)
                </button>
                <button
                  onClick={() => setActiveTab('flow')}
                  className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === 'flow'
                      ? 'bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  全流程业务闭环 (The Core Flow)
                </button>
              </div>

              {activeTab === 'compare' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Before */}
                  <div className="glass-dark-card p-6 rounded-2xl border border-red-500/20 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-red-500/20">
                      <span className="text-sm font-bold text-red-400 flex items-center gap-2">
                        <span>❌ 过去：多端孤岛 · 人工拼凑</span>
                      </span>
                      <span className="text-[11px] text-gray-400">耗时且易错</span>
                    </div>
                    <ul className="text-xs space-y-3 text-gray-300">
                      <li className="flex items-center gap-2.5">
                        <span className="text-red-400">✕</span>
                        <span>微信/WhatsApp 聊完，再手动复制到 Excel</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-red-400">✕</span>
                        <span>开课需人工通知、人工算期数、人工改权限</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-red-400">✕</span>
                        <span>换一个老师或行政，历史档案全乱套</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="text-red-400">✕</span>
                        <span>数据割裂，无法实现自动化流转与智能分析</span>
                      </li>
                    </ul>
                  </div>

                  {/* After */}
                  <div className="glass-gold-card p-6 rounded-2xl border border-[#d4af37]/40 space-y-4 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                    <div className="flex items-center justify-between pb-2 border-b border-[#d4af37]/30">
                      <span className="text-sm font-bold text-[#ffd700] flex items-center gap-2">
                        <span>✨ 现在：全栈自建 · 一屏掌控</span>
                      </span>
                      <span className="text-[11px] text-[#ffd700] bg-[#d4af37]/20 px-2 py-0.5 rounded">高效协同</span>
                    </div>
                    <ul className="text-xs space-y-3 text-gray-200">
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#ffd700]" />
                        <span><strong>一屏录单 (Intake Flow)：</strong>15秒极速完成开单与学员绑定</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#ffd700]" />
                        <span><strong>期制原生引擎 (Term Engine)：</strong>自动精确计算期数与开课权限</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#ffd700]" />
                        <span><strong>单一学生档案 (Master Profile)：</strong>学籍、兄弟姐妹、成绩终身追溯</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <CheckCircle2 size={15} className="text-[#ffd700]" />
                        <span><strong>智能对账与续费预警：</strong>自动生成对账单与到期提醒</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                /* Flow Map */
                <div className="glass-gold-card p-6 rounded-2xl border border-[#d4af37]/30 grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                  {[
                    { step: '01', title: 'Leads 线索录入', desc: '统一来源与意向跟进' },
                    { step: '02', title: '一屏快速录单', desc: '选期/选科/算费一次搞定' },
                    { step: '03', title: '期制引擎履约', desc: '毫秒级自动分发课程权限' },
                    { step: '04', title: '排课与课堂点名', desc: '老师一键点名记录学情' },
                    { step: '05', title: '智能续费与分析', desc: '自动续费提醒与数据报表' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-black/40 border border-[#d4af37]/20 flex flex-col justify-between">
                      <div className="text-[10px] font-bold text-[#ffd700] tracking-wider mb-2">STEP {item.step}</div>
                      <div className="font-bold text-sm text-white mb-1">{item.title}</div>
                      <div className="text-[11px] text-gray-400">{item.desc}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-[#ffd700]">100%</div>
                  <div className="text-[11px] text-gray-400">数据资产归集</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-[#ffd700]">70%+</div>
                  <div className="text-[11px] text-gray-400">跨部门沟通成本降低</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xl sm:text-2xl font-black text-[#ffd700]">0 漏单</div>
                  <div className="text-[11px] text-gray-400">期制财务精准闭环</div>
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 4: Future Possibility & AI Empowerment (未来发展与团队效益) */}
          {currentSlide === 3 && (
            <div className="animate-in fade-in zoom-in-95 duration-500 space-y-6">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#ffd700] bg-[#d4af37]/20 border border-[#d4af37]/40 px-3 py-1 rounded-full">
                  Phase 3 · 价值倍增
                </span>
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                  未来发展与 <span className="gold-gradient-text">AI 赋能蓝图</span>
                </h2>
                <p className="text-sm text-gray-400">
                  数据底座打通后，Top Scholar 将从「工具驱动」跃升为「智能驱动」的教育科技组织。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* Value 1 */}
                <div className="glass-gold-card p-6 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700] mb-4">
                    <Bot size={24} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">AI 智能助教与个性化辅导</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    基于干净的学生学籍与课堂档案，AI 可自动分析学生答题弱项、生成定制练习题并一键推送给家长，实现千人千面的教学体验。
                  </p>
                </div>

                {/* Value 2 */}
                <div className="glass-gold-card p-6 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700] mb-4">
                    <LineChart size={24} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">管理层数据驾驶舱</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    实时透视各科目招生转化、各校区营收分布、学生流失早期预警及教师排课负荷，让每一次战略决策都有真实数据支撑。
                  </p>
                </div>

                {/* Value 3 */}
                <div className="glass-gold-card p-6 rounded-2xl border border-[#d4af37]/30 hover:border-[#d4af37]/60 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/40 flex items-center justify-center text-[#ffd700] mb-4">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">极简协作 · 彻底解放人力</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    老师专注好课堂，销售专注好客户，行政告别繁琐对账。自动化流程跑通后，团队人均效能提升 300% 以上。
                  </p>
                </div>
              </div>

              {/* Future Potential Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#d4af37]/15 via-black/60 to-[#d4af37]/15 border border-[#d4af37]/40 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37] text-black flex items-center justify-center font-black">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">让一切变得更简单，让成长变得可规模化</h4>
                    <p className="text-xs text-gray-300">系统不仅是一套软件，更是 Top Scholar 迈向未来教育集团的数字化基石。</p>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentSlide(4)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs gold-button text-black flex items-center gap-2 whitespace-nowrap"
                >
                  <span>立即体验系统</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* SLIDE 5: Live Demo Entry & Grand Finale (进入系统) */}
          {currentSlide === 4 && (
            <div className="animate-in fade-in zoom-in-95 duration-500 text-center space-y-8 max-w-3xl mx-auto py-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#ffd700] text-xs font-semibold">
                <ShieldCheck size={16} />
                <span>Top Scholar 专属数字化系统 · 已全面上线</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl sm:text-6xl font-black tracking-tight">
                  开启全新
                  <br />
                  <span className="gold-gradient-text text-5xl sm:text-7xl">智慧教学管理之旅</span>
                </h2>
                <p className="text-base text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
                  所有的准备，只为让团队更轻松、教学更高效、学生更出彩。
                  现在，让我们一起进入系统现场实操！
                </p>
              </div>

              {/* Portal Launch Card */}
              <div className="glass-gold-card p-8 rounded-3xl border border-[#d4af37]/50 max-w-xl mx-auto shadow-[0_0_50px_rgba(212,175,55,0.25)] relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 w-28 h-28 bg-[#d4af37]/20 rounded-full blur-2xl" />
                
                <div className="space-y-6">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffd700] to-[#b38b14] p-[1px] shadow-lg">
                      <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center text-[#ffd700] font-black text-xl">
                        TS
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-extrabold text-white text-lg tracking-wide">TOP SCHOLAR LMS</div>
                      <div className="text-xs text-[#d4af37]">https://lms.topscholar.edu.my</div>
                    </div>
                  </div>

                  <a
                    href="https://lms.topscholar.edu.my"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-4 px-8 rounded-2xl font-extrabold text-base gold-button text-black flex items-center justify-center gap-3 group shadow-2xl"
                  >
                    <span>点击进入 LMS 系统现场展示</span>
                    <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                  </a>

                  <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-gray-400">
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      ✓ 一屏录单演示
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      ✓ 期制权限即时生效
                    </div>
                    <div className="p-2 rounded-lg bg-black/40 border border-white/5">
                      ✓ 学员档案与对账
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xs text-gray-500 pt-2">
                主讲人：Elson & Aaron 老师 · 感谢大家的聆听与支持
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Presentation Controller Bar (Bottom) */}
      <footer className="px-6 py-4 border-t border-[#d4af37]/15 bg-[#0a0a0f]/90 backdrop-blur-md sticky bottom-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xs text-gray-400 hidden sm:block">
            按 <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-200 border border-white/20 text-[10px]">←</kbd>{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-200 border border-white/20 text-[10px]">→</kbd> 或{' '}
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-200 border border-white/20 text-[10px]">Space</kbd> 切换页面
          </div>

          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                currentSlide === 0
                  ? 'opacity-30 cursor-not-allowed border-white/5 bg-white/5 text-gray-500'
                  : 'border-white/10 bg-white/5 text-gray-200 hover:border-[#d4af37]/40 hover:text-white'
              }`}
            >
              <ChevronLeft size={16} />
              <span>上一页</span>
            </button>

            <span className="text-xs font-bold text-[#ffd700] px-3 py-1 bg-[#d4af37]/10 rounded-full border border-[#d4af37]/30">
              {currentSlide + 1} / {TOTAL_SLIDES}
            </span>

            <button
              onClick={handleNext}
              disabled={currentSlide === TOTAL_SLIDES - 1}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                currentSlide === TOTAL_SLIDES - 1
                  ? 'opacity-30 cursor-not-allowed border-white/5 bg-white/5 text-gray-500'
                  : 'gold-button text-black font-bold border-transparent'
              }`}
            >
              <span>下一页</span>
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="text-xs text-[#d4af37] font-medium hidden sm:block">
            {slidesMeta[currentSlide].subtitle}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
