"use client";

import type { CoachContent } from "@/lib/content";
import {
  ArrayField,
  Field,
  HeaderFields,
  Input,
  Section,
  Textarea,
} from "@/components/admin/ui";

export default function CoachEditor({
  value,
  onChange,
}: {
  value: CoachContent;
  onChange: (next: CoachContent) => void;
}) {
  return (
    <div className="space-y-8 pb-8">
      <Section title="En-tête de la page">
        <HeaderFields
          value={value.header}
          onChange={(header) => onChange({ ...value, header })}
        />
      </Section>

      <Section title="Introduction (biographie)">
        <Field label="Paragraphes" hint="Chaque entrée = un paragraphe affiché à la suite.">
          <ArrayField
            items={value.intro.paragraphs.map((text) => ({ text }))}
            onChange={(items) =>
              onChange({
                ...value,
                intro: { paragraphs: items.map((i) => i.text) },
              })
            }
            newItem={() => ({ text: "" })}
            itemLabel="Paragraphe"
            minItems={1}
            renderItem={(item, update) => (
              <Field label="Texte">
                <Textarea
                  value={item.text}
                  rows={4}
                  onChange={(v) => update({ text: v })}
                />
              </Field>
            )}
          />
        </Field>
      </Section>

      <Section title="Conviction / Engagement">
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Conviction — pré-titre">
            <Input
              value={value.conviction.eyebrow}
              onChange={(v) =>
                onChange({
                  ...value,
                  conviction: { ...value.conviction, eyebrow: v },
                })
              }
            />
          </Field>
          <Field label="Engagement — pré-titre">
            <Input
              value={value.engagement.eyebrow}
              onChange={(v) =>
                onChange({
                  ...value,
                  engagement: { ...value.engagement, eyebrow: v },
                })
              }
            />
          </Field>
        </div>
        <Field label="Conviction — texte">
          <Textarea
            value={value.conviction.text}
            onChange={(v) =>
              onChange({
                ...value,
                conviction: { ...value.conviction, text: v },
              })
            }
          />
        </Field>
        <Field label="Engagement — texte">
          <Textarea
            value={value.engagement.text}
            onChange={(v) =>
              onChange({
                ...value,
                engagement: { ...value.engagement, text: v },
              })
            }
          />
        </Field>
      </Section>

      <Section title="Inspiration (citation)">
        <Field label="Pré-titre">
          <Input
            value={value.inspiration.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                inspiration: { ...value.inspiration, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Citation">
          <Textarea
            value={value.inspiration.quote}
            onChange={(v) =>
              onChange({
                ...value,
                inspiration: { ...value.inspiration, quote: v },
              })
            }
          />
        </Field>
        <Field label="Auteur">
          <Input
            value={value.inspiration.author}
            onChange={(v) =>
              onChange({
                ...value,
                inspiration: { ...value.inspiration, author: v },
              })
            }
          />
        </Field>
      </Section>

      <Section title="Formations">
        <Field label="Pré-titre">
          <Input
            value={value.formations.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                formations: { ...value.formations, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Titre de section">
          <Input
            value={value.formations.title}
            onChange={(v) =>
              onChange({
                ...value,
                formations: { ...value.formations, title: v },
              })
            }
          />
        </Field>
        <Field label="Liste des formations">
          <ArrayField
            items={value.formations.items.map((text) => ({ text }))}
            onChange={(items) =>
              onChange({
                ...value,
                formations: {
                  ...value.formations,
                  items: items.map((i) => i.text),
                },
              })
            }
            newItem={() => ({ text: "" })}
            itemLabel="Formation"
            renderItem={(item, update) => (
              <Field label="Texte">
                <Textarea
                  value={item.text}
                  onChange={(v) => update({ text: v })}
                />
              </Field>
            )}
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
        <Field label="Bouton">
          <Input
            value={value.cta.button}
            onChange={(v) =>
              onChange({ ...value, cta: { ...value.cta, button: v } })
            }
          />
        </Field>
      </Section>
    </div>
  );
}
