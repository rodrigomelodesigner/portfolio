import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const MIN_SCORE = 0;
const MAX_SCORE = 20;

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950';

const stepperClass = `inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-900 hover:border-zinc-400 disabled:cursor-not-allowed disabled:text-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-500 dark:disabled:text-zinc-600 ${focusRing}`;

type ScoreStepperProps = {
  team: string;
  value: number;
  onAdjust: (delta: number) => void;
  onSet: (next: number) => void;
};

function clampScore(value: number) {
  return Math.min(MAX_SCORE, Math.max(MIN_SCORE, value));
}

function ScoreStepper({ team, value, onAdjust, onSet }: ScoreStepperProps) {
  const inputId = `placar-${team.toLowerCase().replace(/\s+/g, '-')}`;

  return (
    <div className="flex items-center justify-between gap-3">
      <label htmlFor={inputId} className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {team}
      </label>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className={stepperClass}
          aria-label={`Diminuir placar de ${team}`}
          disabled={value <= MIN_SCORE}
          onClick={() => onAdjust(-1)}
        >
          <Minus className="h-4 w-4" aria-hidden="true" />
        </button>
        <input
          id={inputId}
          inputMode="numeric"
          pattern="[0-9]*"
          aria-label={`Placar de ${team}`}
          value={value}
          onChange={(event) => {
            const parsed = Number.parseInt(event.target.value, 10);
            onSet(clampScore(Number.isNaN(parsed) ? 0 : parsed));
          }}
          className={`h-11 w-14 rounded-md border border-zinc-200 bg-white text-center font-mono text-base text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 ${focusRing}`}
        />
        <button
          type="button"
          className={stepperClass}
          aria-label={`Aumentar placar de ${team}`}
          disabled={value >= MAX_SCORE}
          onClick={() => onAdjust(1)}
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

const callouts = [
  {
    title: 'Input base 0×0',
    body: 'O placar nasce em 0×0. O campo já mostra o formato aceito e reduz a digitação no teclado do celular. Leitura validada com Adir Filho.',
  },
  {
    title: 'Touch targets',
    body: 'Os botões de mais e menos medem 44×44px, área de polegar, em vez de um controle miúdo no fim do card.',
  },
  {
    title: 'Feedback de estado',
    body: 'Ao alterar o placar, a borda do card passa ao estado ativo. O palpite fica só neste simulador.',
  },
];

export function BolaoPalpiteInteractive() {
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);
  const [doubled, setDoubled] = useState(false);
  const [saved, setSaved] = useState(false);

  const adjustHome = (delta: number) => {
    setHome((current) => clampScore(current + delta));
    setSaved(true);
  };
  const adjustAway = (delta: number) => {
    setAway((current) => clampScore(current + delta));
    setSaved(true);
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
      <div
        className={`space-y-5 rounded-md border p-5 ${
          saved
            ? 'border-zinc-900 bg-zinc-50 dark:border-zinc-100 dark:bg-zinc-900'
            : 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950'
        }`}
      >
        <div className="space-y-1">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
            Copa do Mundo 2026 · simulador
          </p>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Brasil × Sérvia</h3>
        </div>

        <ScoreStepper team="Brasil" value={home} onAdjust={adjustHome} onSet={(next) => { setHome(next); setSaved(true); }} />
        <ScoreStepper team="Sérvia" value={away} onAdjust={adjustAway} onSet={(next) => { setAway(next); setSaved(true); }} />

        <button
          type="button"
          aria-pressed={doubled}
          onClick={() => {
            setDoubled((current) => !current);
            setSaved(true);
          }}
          className={`inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium ${focusRing} ${
            doubled
              ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
              : 'border-zinc-200 bg-white text-zinc-900 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100'
          }`}
        >
          <span className="font-mono text-sm font-semibold">2x</span>
          Pontos em dobro
        </button>

        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {doubled
            ? 'Palpite dobrado: se o placar fechar, os pontos deste jogo valem o dobro. A estrela saiu depois do teste interno, porque era lida como favoritar a partida.'
            : 'Palpite simples. Ative 2x Pontos em dobro para duplicar a pontuação deste acerto. A estrela foi trocada por esta tag.'}
        </p>

        <p
          role="status"
          aria-live="polite"
          className="font-mono text-xs font-medium text-zinc-900 dark:text-zinc-100"
        >
          {saved ? 'Estado: salvo neste simulador' : 'Estado: aguardando palpite'} · Brasil {home}×{away} Sérvia
          {doubled ? ' · 2x' : ''}
        </p>
      </div>

      <ol className="space-y-4">
        {callouts.map((item, index) => (
          <li key={item.title} className="max-w-prose space-y-1">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {index + 1}. {item.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.body}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
