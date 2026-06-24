import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Icon from "@/components/ui/icon"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const NAV_LINKS = [
  { label: "О платформе", href: "#about" },
  { label: "Участники", href: "#audience" },
  { label: "Услуги", href: "#services" },
  { label: "Контакты", href: "#contact" },
]

const AUDIENCE = [
  {
    icon: "Cpu",
    title: "Технологические компании",
    desc: "Доступ к спросу, капиталу и совместным предприятиям на рынках БРИКС и Global South — без отвлечения от текущих проектов.",
  },
  {
    icon: "Factory",
    title: "Индустриальные партнёры",
    desc: "Доступ к проверенным инновациям для решения конкретных производственных и стратегических задач.",
  },
  {
    icon: "TrendingUp",
    title: "Финансовые партнёры",
    desc: "Качественный поток проектов с понятной экономикой и глобальным потенциалом для инвесторов и фондов.",
  },
]

const SERVICES = [
  {
    icon: "Globe",
    title: "Поиск локальных партнёров",
    desc: "Находим проверенных партнёров и каналы выхода на рынки стран БРИКС и Global South.",
  },
  {
    icon: "ShieldCheck",
    title: "Защита ИС и юридическая структура",
    desc: "Юридически защищённая структура сотрудничества и защита интеллектуальной собственности на международных рынках.",
  },
  {
    icon: "Handshake",
    title: "Сборка совместных предприятий",
    desc: "Формируем СП и структурируем партнёрства с локальными игроками в целевых странах.",
  },
  {
    icon: "Banknote",
    title: "Привлечение финансирования",
    desc: "Подключаем пул финансовых партнёров и инвесторов под конкретные проекты.",
  },
  {
    icon: "Users",
    title: "Сообщество СМТК",
    desc: "Профессиональное сообщество участников платформы с доступом к экспертизе, нетворку и совместным инициативам.",
  },
  {
    icon: "BarChart3",
    title: "Управляющая компания (success fee)",
    desc: "Управляем сделками и процессами на условиях success fee — платите только за результат.",
  },
]

const STATS = [
  { value: "40+", label: "стран охвата" },
  { value: "3", label: "уровня платформы" },
  { value: "100%", label: "success fee модель" },
  { value: "БРИКС", label: "и Global South" },
]

export default function Index() {
  const { toast } = useToast()
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" })
  const [sending, setSending] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const aboutRef = useRef<HTMLElement>(null)
  const audienceRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    setMenuOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      toast({ title: "Заявка отправлена!", description: "Мы свяжемся с вами в ближайшее время." })
      setForm({ name: "", email: "", company: "", message: "" })
      setSending(false)
    }, 1000)
  }

  const refMap: Record<string, React.RefObject<HTMLElement>> = {
    "#about": aboutRef,
    "#audience": audienceRef,
    "#services": servicesRef,
    "#contact": contactRef,
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-white font-sans">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#080c14]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-heading font-bold text-lg tracking-wide text-white">
            БРИКС<span className="text-[#3b82f6]"> Технологии</span>
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(refMap[l.href])}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollTo(contactRef)}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white border-0"
            >
              Оставить заявку
            </Button>
          </nav>
          <button className="md:hidden text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-[#0d1321] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(refMap[l.href])}
                className="text-left text-sm text-gray-300 hover:text-white transition-colors"
              >
                {l.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollTo(contactRef)}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white border-0 w-full"
            >
              Оставить заявку
            </Button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#1d4ed8]/20 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3b82f6]/40 bg-[#3b82f6]/10 text-[#93c5fd] text-sm font-medium mb-8">
            <Icon name="Globe" size={14} />
            Международная технологическая кооперация
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
            Выход технологий<br />
            <span className="text-[#3b82f6]">на рынки БРИКС</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Прямой, структурированный и юридически защищённый доступ к рынкам стран БРИКС и Global South — без отвлечения от текущих проектов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollTo(contactRef)}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white border-0 px-8 h-12 text-base"
            >
              Стать участником
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo(aboutRef)}
              className="border-white/20 text-white hover:bg-white/10 bg-transparent h-12 text-base"
            >
              Узнать о платформе
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-gray-500" />
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-white/10 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-4xl font-bold text-[#3b82f6] mb-1">{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section ref={aboutRef} id="about" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest mb-4">О платформе</div>
              <h2 className="font-heading text-4xl font-bold mb-6 leading-snug">
                Трёхуровневый механизм международной кооперации
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Платформа «БРИКС Технологии» — системный механизм, который соединяет российские и зарубежные технологические компании с рынками стран БРИКС и Global South.
                </p>
                <p>
                  В основе — три уровня: профессиональное сообщество СМТК, Управляющая компания на условиях success fee и международный консорциум «БРИКС Технологии» с пулом индустриальных и финансовых партнёров.
                </p>
                <p>
                  Мы берём на себя всё: поиск локальных партнёров, защиту интеллектуальной собственности, сборку совместных предприятий и привлечение финансирования.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "Building2", title: "Сообщество СМТК", desc: "Профессиональная сеть участников с доступом к экспертизе и совместным инициативам" },
                { icon: "Briefcase", title: "Управляющая компания", desc: "Координирует сделки и процессы. Работает исключительно на условиях success fee" },
                { icon: "Network", title: "Консорциум БРИКС Технологии", desc: "Пул индустриальных и финансовых партнёров в странах БРИКС и Global South" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center">
                    <Icon name={item.icon} size={18} className="text-[#3b82f6]" />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-white mb-1">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section ref={audienceRef} id="audience" className="py-24 px-6 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest mb-4">Участники</div>
            <h2 className="font-heading text-4xl font-bold">Для кого платформа</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {AUDIENCE.map((a) => (
              <div key={a.title} className="relative p-8 rounded-2xl border border-white/10 bg-[#080c14] hover:border-[#3b82f6]/40 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-[#3b82f6]/20 flex items-center justify-center mb-6 group-hover:bg-[#3b82f6]/30 transition-colors">
                  <Icon name={a.icon} size={22} className="text-[#3b82f6]" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-3">{a.title}</h3>
                <p className="text-gray-400 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest mb-4">Возможности</div>
            <h2 className="font-heading text-4xl font-bold">Что мы берём на себя</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="p-6 rounded-xl border border-white/10 bg-[#0d1321] hover:border-[#3b82f6]/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center mb-4 group-hover:bg-[#3b82f6]/30 transition-colors">
                  <Icon name={s.icon} size={18} className="text-[#3b82f6]" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="absolute inset-0 rounded-3xl bg-[#1d4ed8]/20 blur-3xl pointer-events-none" />
          <div className="relative rounded-3xl border border-[#3b82f6]/30 bg-[#0d1321] px-8 py-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Готовы выйти на рынки БРИКС?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Оставьте заявку — расскажем, как платформа работает для вашего случая, и подберём формат участия.
            </p>
            <Button
              size="lg"
              onClick={() => scrollTo(contactRef)}
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white border-0 px-10 h-12 text-base"
            >
              Оставить заявку
              <Icon name="ArrowRight" size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={contactRef} id="contact" className="py-24 px-6 bg-[#0d1321]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest mb-4">Контакты</div>
              <h2 className="font-heading text-4xl font-bold mb-6">Начать сотрудничество</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Расскажите о вашем проекте или задаче — мы определим оптимальный формат участия в платформе и ответим в течение рабочего дня.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Globe", label: "Рынки", value: "БРИКС, Global South, 40+ стран" },
                  { icon: "BadgeCheck", label: "Модель работы", value: "Success fee — платите за результат" },
                  { icon: "Lock", label: "Юридическая защита", value: "Структурированные соглашения и защита ИС" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon name={item.icon} size={15} className="text-[#3b82f6]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                      <div className="text-sm text-white">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-[#080c14] border border-white/10 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Имя *</label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    placeholder="Иван Петров"
                    className="bg-[#0d1321] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm text-gray-400">Email *</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    placeholder="ivan@company.ru"
                    className="bg-[#0d1321] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6]"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Компания</label>
                <Input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Название компании"
                  className="bg-[#0d1321] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6]"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm text-gray-400">Сообщение *</label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  placeholder="Расскажите о вашем проекте и задаче..."
                  className="bg-[#0d1321] border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6] min-h-[120px] resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-[#3b82f6] hover:bg-[#2563eb] text-white border-0 h-11"
              >
                {sending ? "Отправка..." : "Отправить заявку"}
                {!sending && <Icon name="ArrowRight" size={16} className="ml-2" />}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-heading font-bold text-white">
            БРИКС<span className="text-[#3b82f6]"> Технологии</span>
          </span>
          <span className="text-sm text-gray-600">© 2025 Международный консорциум «БРИКС Технологии»</span>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}
