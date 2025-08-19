import React from 'react'
import Hero from '../../components/Hero'
import Calculator from '../../components/Calculator'
import {Section, LogosStrip, MetricCard} from '../../components/Blocks'

export default function Page(){ 
  return (
    <div>
      <Hero label="IT" h1="IT‑команды, которые ускоряют релизы и делают продукты надёжнее" h2="Инженеры, архитекторы и лиды: подбираем под дорожную карту продукта и SLA" color="bg-slate-950 text-white" />
      <Section title="Нам доверяют">
        <LogosStrip />
      </Section>
      <Section title="Калькулятор стоимости">
        <Calculator vertical="it" />
      </Section>
      <Section title="Быстрые результаты">
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="card p-4"><div className="text-sm opacity-80">Первые CV</div><div className="text-2xl font-semibold text-cyan-300">7–10 дней</div></div>
          <div className="card p-4"><div className="text-sm opacity-80">Средний срок</div><div className="text-2xl font-semibold text-cyan-300">18 дней</div></div>
          <div className="card p-4"><div className="text-sm opacity-80">Retention</div><div className="text-2xl font-semibold text-cyan-300">> 1 года</div></div>
        </div>
      </Section>
      <Section title="Социальное доказательство">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard v="-30%" k="MTTR кейс" accent="text-cyan-300" />
          <MetricCard v="×2" k="стабильность релизов" accent="text-cyan-300" />
          <MetricCard v="18 дн." k="средний срок" accent="text-cyan-300" />
          <MetricCard v="90%" k="остаются > 1 года" accent="text-cyan-300" />
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
