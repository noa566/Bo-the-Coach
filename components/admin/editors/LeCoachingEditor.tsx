"use client";

import type { LeCoachingContent } from "@/lib/content";
import {
  ArrayField,
  Field,
  HeaderFields,
  Input,
  Section,
  Textarea,
} from "@/components/admin/ui";

export default function LeCoachingEditor({
  value,
  onChange,
}: {
  value: LeCoachingContent;
  onChange: (next: LeCoachingContent) => void;
}) {
  return (
    <div className="space-y-8 pb-8">
      <Section title="En-tête de la page">
        <HeaderFields
          value={value.header}
          onChange={(header) => onChange({ ...value, header })}
        />
      </Section>

      <Section title="« C'est quoi ? »">
        <Field label="Pré-titre">
          <Input
            value={value.whatIs.eyebrow}
            onChange={(v) =>
              onChange({ ...value, whatIs: { ...value.whatIs, eyebrow: v } })
            }
          />
        </Field>
        <Field label="Texte">
          <Textarea
            value={value.whatIs.text}
            onChange={(v) =>
              onChange({ ...value, whatIs: { ...value.whatIs, text: v } })
            }
          />
        </Field>
      </Section>

      <Section title="Domaines de prédilection">
        <Field label="Pré-titre">
          <Input
            value={value.domains.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                domains: { ...value.domains, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Titre">
          <Input
            value={value.domains.title}
            onChange={(v) =>
              onChange({
                ...value,
                domains: { ...value.domains, title: v },
              })
            }
          />
        </Field>
        <Field label="Domaines">
          <ArrayField
            items={value.domains.items}
            onChange={(items) =>
              onChange({
                ...value,
                domains: { ...value.domains, items },
              })
            }
            newItem={() => ({ title: "", text: "" })}
            itemLabel="Domaine"
            renderItem={(item, update) => (
              <>
                <Field label="Titre">
                  <Input
                    value={item.title}
                    onChange={(v) => update({ title: v })}
                  />
                </Field>
                <Field label="Description">
                  <Textarea
                    value={item.text}
                    onChange={(v) => update({ text: v })}
                  />
                </Field>
              </>
            )}
          />
        </Field>
      </Section>

      <Section title="Déontologie">
        <Field label="Pré-titre">
          <Input
            value={value.deontology.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                deontology: { ...value.deontology, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Phrase d'accroche (mise en évidence)">
          <Textarea
            value={value.deontology.headline}
            onChange={(v) =>
              onChange({
                ...value,
                deontology: { ...value.deontology, headline: v },
              })
            }
          />
        </Field>
        <Field label="Paragraphe explicatif">
          <Textarea
            rows={5}
            value={value.deontology.paragraph}
            onChange={(v) =>
              onChange({
                ...value,
                deontology: { ...value.deontology, paragraph: v },
              })
            }
          />
        </Field>
      </Section>

      <Section title="Déroulement du processus">
        <Field label="Pré-titre">
          <Input
            value={value.process.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                process: { ...value.process, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Titre">
          <Input
            value={value.process.title}
            onChange={(v) =>
              onChange({
                ...value,
                process: { ...value.process, title: v },
              })
            }
          />
        </Field>
        <Field label="Étapes" hint="L'ordre détermine la numérotation 1, 2, 3…">
          <ArrayField
            items={value.process.steps}
            onChange={(steps) =>
              onChange({
                ...value,
                process: { ...value.process, steps },
              })
            }
            newItem={() => ({ title: "", text: "" })}
            itemLabel="Étape"
            renderItem={(step, update) => (
              <>
                <Field label="Titre de l'étape">
                  <Input
                    value={step.title}
                    onChange={(v) => update({ title: v })}
                  />
                </Field>
                <Field label="Texte">
                  <Textarea
                    value={step.text}
                    onChange={(v) => update({ text: v })}
                  />
                </Field>
              </>
            )}
          />
        </Field>
      </Section>

      <Section title="Citation">
        <Field label="Texte">
          <Textarea
            value={value.quote.text}
            onChange={(v) =>
              onChange({
                ...value,
                quote: { ...value.quote, text: v },
              })
            }
          />
        </Field>
        <Field label="Auteur">
          <Input
            value={value.quote.author}
            onChange={(v) =>
              onChange({
                ...value,
                quote: { ...value.quote, author: v },
              })
            }
          />
        </Field>
      </Section>

      <Section title="Bloc CTA (bas de page)">
        <Field label="Titre">
          <Input
            value={value.cta.title}
            onChange={(v) =>
              onChange({ ...value, cta: { ...value.cta, title: v } })
            }
          />
        </Field>
        <Field label="Description">
          <Textarea
            value={value.cta.lead}
            onChange={(v) =>
              onChange({ ...value, cta: { ...value.cta, lead: v } })
            }
          />
        </Field>
        <Field label="Bouton principal">
          <Input
            value={value.cta.primaryButton}
            onChange={(v) =>
              onChange({
                ...value,
                cta: { ...value.cta, primaryButton: v },
              })
            }
          />
        </Field>
        <Field label="Bouton secondaire">
          <Input
            value={value.cta.secondaryButton}
            onChange={(v) =>
              onChange({
                ...value,
                cta: { ...value.cta, secondaryButton: v },
              })
            }
          />
        </Field>
      </Section>
    </div>
  );
}
