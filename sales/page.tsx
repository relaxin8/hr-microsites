import React from 'react'
import Hero from '../../components/Hero'
import Calculator from '../../components/Calculator'
import {Section, LogosStrip, MetricCard} from '../../components/Blocks'

export default function Page(){ 
  return (
    <div>
      <Hero label="Sales" h1="Коммерческие лиды, которые закрывают план и строят предсказуемый pipeline" h2="Комдиры, Heads of Sales/BD, руководители каналов: подбирать, развивать, масштабировать" color="bg-neutral-900 text-white" />
      <Section title="Нам доверяют">
        <LogosStrip />
      </Section>
      <Section title="Калькулятор стоимости">
        <Calculator vertical="sales" />
      </Section>
      <Section title="Быстрые результаты">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="card p-4"><div className="text-sm opacity-80">Первые кандидаты</div><div className="text-2xl font-semibold text-red-400">7–10 дней</div></div>
          <div className="card p-4"><div className="text-sm opacity-80">Выполнение плана</div><div className="text-2xl font-semibold text-red-400">87%</div></div>
          <div className="card p-4"><div className="text-sm opacity-80">Pipeline</div><div className="text-2xl font-semibold text-red-400">+ предсказуемость</div></div>
        </div>
      </Section>
      <Section title="Социальное доказательство">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard v="+28%" k="выручка 9 мес" accent="text-red-400" />
          <MetricCard v="-20%" k="цикл сделки" accent="text-red-400" />
          <MetricCard v="+15 п.п." k="SQL конверсия" accent="text-red-400" />
          <MetricCard v="+30%" k="новые логотипы" accent="text-red-400" />
        </div>
      </Section>
      <Section title="Гарантии">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="card p-5 flex items-center gap-3"><div>📅</div><div className="text-base">Минимум 3 месяца</div></div>
          <div className="card p-5 flex items-center gap-3"><div>🛡️</div><div className="text-base">До 6 мес. на Executive</div></div>
          <div className="card p-5 flex items-center gap-3"><div>🔁</div><div className="text-base">Бесплатная замена</div></div>
          <div className="card p-5 flex items-center gap-3"><div>💳</div><div className="text-base">Финансовая ответственность</div></div>
        </div>
      </Section>
      <Section title="Готовы обсудить?">
        <div className="flex flex-wrap gap-3">
          <a href="#calc" className="btn bg-white text-black hover:bg-neutral-200">Рассчитать стоимость</a>
          <a href="https://wa.me/79178818228" className="btn btn-ghost">Написать в WhatsApp</a>
          <a href="https://t.me/RELAXIN8" className="btn btn-ghost">Написать в Telegram</a>
        </div>
        <div className="text-xs opacity-70 mt-2">Наши HR — с ебейшей экспертизой. Конфиденциально. Быстро. Результативно.</div>
      </Section>
    </div>
  )
}
