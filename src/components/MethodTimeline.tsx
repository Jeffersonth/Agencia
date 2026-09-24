import { methodSteps } from "@/content/method";
import { Icon } from "@/components/Icon";
import { cx } from "@/components/ui";

export function MethodTimeline({ detailed, dark }: { detailed?: boolean; dark?: boolean }) {
  return (
    <ol className="relative grid gap-4 md:grid-cols-5 md:gap-3">
      <span
        aria-hidden
        className={cx("absolute left-6 right-6 top-6 hidden h-px md:block", dark ? "bg-white/15" : "bg-line-strong")}
      />
      {methodSteps.map((s, i) => (
        <li
          key={s.title}
          className={cx(
            "relative flex gap-4 rounded-2xl p-5 md:block md:p-0",
            dark ? "bg-white/[0.04] md:bg-transparent" : "bg-white md:bg-transparent",
          )}
        >
          <span
            className={cx(
              "relative z-10 inline-flex size-12 shrink-0 items-center justify-center rounded-2xl ring-8",
              dark ? "bg-signal text-white ring-navy" : "bg-navy text-white ring-white",
            )}
          >
            <Icon name={s.icon} className="size-5" />
          </span>
          <div className="md:mt-6 md:pr-4">
            <p className={cx("text-xs font-semibold tabular-nums", dark ? "text-white/50" : "text-slate")}>Etapa {i + 1}</p>
            <h3 className={cx("mt-1 text-lg font-semibold", dark && "text-white")}>{s.title}</h3>
            <p className={cx("mt-1.5 text-[0.95rem]", dark ? "text-white/70" : "text-slate")}>{s.text}</p>
            {detailed && <p className={cx("mt-3 text-[0.9rem]", dark ? "text-white/55" : "text-slate/90")}>{s.detail}</p>}
          </div>
        </li>
      ))}
    </ol>
  );
}
