import { useRef, useState, type KeyboardEvent } from 'react';

type Version = 'v1' | 'v2';
type PauseLength = '1 dia' | '1 semana' | '1 mês' | '3 meses';

const PAUSE_OPTIONS: PauseLength[] = ['1 dia', '1 semana', '1 mês', '3 meses'];

const focusRing =
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 dark:focus-visible:ring-zinc-50 dark:focus-visible:ring-offset-zinc-950';

const versions: { id: Version; label: string; panelId: string }[] = [
  { id: 'v1', label: 'v1 — Retenção Persuasiva (Descartada)', panelId: 'comparativo-panel-v1' },
  { id: 'v2', label: 'v2 — Arquitetura de Escolha Graduada (Aprovada)', panelId: 'comparativo-panel-v2' },
];

export function SaidaResponsavelCompare() {
  const [version, setVersion] = useState<Version>('v2');
  const [pause, setPause] = useState<PauseLength>('1 semana');
  const [notice, setNotice] = useState('Nenhuma ação foi enviada. Isto é uma simulação.');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectVersion = (next: Version, shouldFocus: boolean) => {
    setVersion(next);
    if (shouldFocus) {
      const index = versions.findIndex((item) => item.id === next);
      tabRefs.current[index]?.focus();
    }
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + versions.length) % versions.length;
    selectVersion(versions[nextIndex].id, true);
  };

  return (
    <div className="space-y-6">
      <div role="tablist" aria-label="Versões da saída responsável" className="flex flex-col gap-2 sm:flex-row">
        {versions.map((item, index) => {
          const selected = version === item.id;
          return (
            <button
              key={item.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`comparativo-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={item.panelId}
              tabIndex={selected ? 0 : -1}
              onClick={() => selectVersion(item.id, false)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`inline-flex min-h-[44px] items-center justify-center rounded-md border px-4 text-left text-sm font-medium ${focusRing} ${
                selected
                  ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900'
                  : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {version === 'v1' ? (
        <div
          role="tabpanel"
          id="comparativo-panel-v1"
          aria-labelledby="comparativo-tab-v1"
          className="space-y-5 rounded-md border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md border border-rose-200 px-2.5 py-1 text-xs font-medium text-rose-600 dark:border-rose-800 dark:text-rose-400">
              Retenção
            </span>
            <span className="inline-flex items-center rounded-md border border-rose-200 px-2.5 py-1 text-xs font-medium text-rose-600 dark:border-rose-800 dark:text-rose-400">
              Apelo emocional
            </span>
            <span className="inline-flex items-center rounded-md border border-rose-200 px-2.5 py-1 text-xs font-medium text-rose-600 dark:border-rose-800 dark:text-rose-400">
              Descartada
            </span>
          </div>
          <div className="max-w-prose space-y-4">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Vamos sentir sua falta por aqui!
            </h3>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Esperamos te ver de novo em breve.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:max-w-sm">
            <button
              type="button"
              onClick={() => setNotice('Simulação da v1: o botão dominante pedia para ficar. Nada foi enviado.')}
              className={`inline-flex min-h-[44px] items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900 ${focusRing}`}
            >
              Ficar na conta
            </button>
            <button
              type="button"
              onClick={() => setNotice('Simulação da v1: a saída ficava em segundo plano. Nada foi enviado.')}
              className={`inline-flex min-h-[44px] items-center justify-center rounded-md px-4 text-sm font-medium text-zinc-600 underline-offset-2 hover:underline dark:text-zinc-400 ${focusRing}`}
            >
              Encerrar mesmo assim
            </button>
          </div>
        </div>
      ) : (
        <div
          role="tabpanel"
          id="comparativo-panel-v2"
          aria-labelledby="comparativo-tab-v2"
          className="space-y-6 rounded-md border border-zinc-200 p-6 dark:border-zinc-800"
        >
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md border border-emerald-200 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:border-emerald-800 dark:text-emerald-400">
              Aprovada
            </span>
            <span className="inline-flex items-center rounded-md border border-zinc-200 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
              Texto factual
            </span>
          </div>

          <fieldset className="space-y-3">
            <legend className="max-w-prose space-y-2">
              <span className="block text-lg font-semibold text-zinc-900 dark:text-zinc-100">Pausa temporária</span>
              <span className="block text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                1 dia, 1 semana, 1 mês ou 3 meses. A conta volta ao fim do prazo. É a primeira escolha, para conter uma saída impulsiva sem fechar a conta.
              </span>
            </legend>
            <div className="flex flex-col gap-2 sm:max-w-sm">
              {PAUSE_OPTIONS.map((option) => (
                <label
                  key={option}
                  className={`flex min-h-[44px] cursor-pointer items-center gap-3 rounded-md border px-3 text-sm font-medium text-zinc-900 focus-within:ring-2 focus-within:ring-zinc-950 focus-within:ring-offset-2 dark:text-zinc-100 dark:focus-within:ring-zinc-50 dark:focus-within:ring-offset-zinc-950 ${
                    pause === option
                      ? 'border-zinc-900 dark:border-zinc-100'
                      : 'border-zinc-200 dark:border-zinc-800'
                  }`}
                >
                  <input
                    type="radio"
                    name="pausa-temporaria"
                    value={option}
                    checked={pause === option}
                    onChange={() => {
                      setPause(option);
                      setNotice(`Simulação da v2: pausa de ${option} selecionada. Nada foi enviado.`);
                    }}
                    className="h-4 w-4 accent-zinc-900 dark:accent-zinc-100"
                  />
                  {option}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="max-w-prose space-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">Encerrar conta definitivamente</h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              Esta ação é irreversível. O encerramento fica na mesma página, logo abaixo da pausa, e segue em três etapas: o modal de ajuda, a tela para sacar o saldo e o aviso final de que a decisão não volta atrás.
            </p>
            <button
              type="button"
              onClick={() =>
                setNotice('Simulação da v2: o encerramento definitivo seguiria em 3 etapas. Nada foi enviado.')
              }
              className={`inline-flex min-h-[44px] items-center justify-center rounded-md border border-zinc-900 px-4 text-sm font-medium text-zinc-900 dark:border-zinc-100 dark:text-zinc-100 ${focusRing}`}
            >
              Encerrar conta definitivamente
            </button>
          </div>
        </div>
      )}

      <p role="status" aria-live="polite" className="text-sm text-zinc-600 dark:text-zinc-400">
        {notice}
      </p>

      <ol className="space-y-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
        <li className="max-w-prose space-y-1">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">1. Portaria SPA/MF nº 1.231</h3>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Jogo responsável pede um caminho de afastamento. A tela antiga só oferecia fechar a conta, com o aviso de que a ação é irreversível, e sem pausa.
          </p>
        </li>
        <li className="max-w-prose space-y-1">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">2. Contenção sem labirinto</h3>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            A pausa vem primeiro. O encerramento definitivo permanece visível na mesma página, sem submenu.
          </p>
        </li>
        <li className="max-w-prose space-y-1">
          <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">3. Ética da linguagem</h3>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            A v1 se despedia com “Vamos sentir sua falta por aqui!”. A v2 troca isso por “Esta ação é irreversível.”
          </p>
        </li>
      </ol>
    </div>
  );
}
