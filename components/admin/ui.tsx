"use client";

import type { ChangeEvent, ReactNode } from "react";

export function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
      <header className="mb-6 pb-5 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </header>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700 mb-1.5">
        {label}
      </span>
      {hint && <p className="text-xs text-slate-500 mb-1.5">{hint}</p>}
      {children}
    </label>
  );
}

export function Input({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900"
    />
  );
}

export function Textarea({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        onChange(e.target.value)
      }
      rows={rows}
      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 resize-y"
    />
  );
}

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}) {
  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900"
      />
      <span className="text-sm text-slate-700">{label}</span>
    </label>
  );
}

/**
 * Renders an editable array of items. Each item is rendered via `renderItem`.
 * Provides Add / Remove / Move up / Move down controls.
 */
export function ArrayField<T>({
  items,
  onChange,
  newItem,
  renderItem,
  itemLabel = "Élément",
  minItems = 0,
}: {
  items: T[];
  onChange: (next: T[]) => void;
  newItem: () => T;
  renderItem: (item: T, update: (patch: Partial<T>) => void) => ReactNode;
  itemLabel?: string;
  minItems?: number;
}) {
  function updateItem(index: number, patch: Partial<T>) {
    const next = [...items];
    next[index] = { ...next[index], ...patch } as T;
    onChange(next);
  }
  function removeItem(index: number) {
    if (items.length <= minItems) return;
    const next = items.filter((_, i) => i !== index);
    onChange(next);
  }
  function move(index: number, dir: -1 | 1) {
    const target = index + dir;
    if (target < 0 || target >= items.length) return;
    const next = [...items];
    [next[index], next[target]] = [next[target]!, next[index]!];
    onChange(next);
  }
  function add() {
    onChange([...items, newItem()]);
  }

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="rounded-lg border border-slate-200 bg-slate-50/40 p-4"
        >
          <div className="flex items-center justify-between mb-3">
            <p className="text-xs uppercase tracking-wide text-slate-500 font-medium">
              {itemLabel} {idx + 1}
            </p>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => move(idx, -1)}
                disabled={idx === 0}
                className="rounded p-1 text-slate-500 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Monter"
              >
                ↑
              </button>
              <button
                type="button"
                onClick={() => move(idx, 1)}
                disabled={idx === items.length - 1}
                className="rounded p-1 text-slate-500 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Descendre"
              >
                ↓
              </button>
              <button
                type="button"
                onClick={() => removeItem(idx)}
                disabled={items.length <= minItems}
                className="rounded p-1 text-red-500 hover:bg-red-50 disabled:opacity-30 disabled:cursor-not-allowed"
                title="Supprimer"
              >
                ✕
              </button>
            </div>
          </div>
          <div className="space-y-3">
            {renderItem(item, (patch) => updateItem(idx, patch))}
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={add}
        className="w-full rounded-lg border border-dashed border-slate-300 px-4 py-3 text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
      >
        + Ajouter un {itemLabel.toLowerCase()}
      </button>
    </div>
  );
}

export function HeaderFields({
  value,
  onChange,
}: {
  value: { eyebrow: string; title: string; subtitle: string };
  onChange: (next: { eyebrow: string; title: string; subtitle: string }) => void;
}) {
  return (
    <>
      <Field label="Pré-titre (eyebrow)">
        <Input
          value={value.eyebrow}
          onChange={(v) => onChange({ ...value, eyebrow: v })}
        />
      </Field>
      <Field label="Titre">
        <Input
          value={value.title}
          onChange={(v) => onChange({ ...value, title: v })}
        />
      </Field>
      <Field label="Sous-titre">
        <Textarea
          value={value.subtitle}
          onChange={(v) => onChange({ ...value, subtitle: v })}
        />
      </Field>
    </>
  );
}
