"use client";

import type { CoachingContent } from "@/lib/content";
import {
  ArrayField,
  Field,
  HeaderFields,
  Input,
  Section,
  Textarea,
} from "@/components/admin/ui";

export default function CoachingEditor({
  value,
  onChange,
}: {
  value: CoachingContent;
  onChange: (next: CoachingContent) => void;
}) {
  return (
    <div className="space-y-8 pb-8">
      <Section title="En-tête de la page">
        <HeaderFields
          value={value.header}
          onChange={(header) => onChange({ ...value, header })}
        />
      </Section>

      <Section title="Introduction">
        <Field label="Texte d'introduction (sous le titre)">
          <Textarea
            value={value.intro}
            onChange={(v) => onChange({ ...value, intro: v })}
          />
        </Field>
      </Section>

      <Section
        title="Orientations"
        description="Les blocs (par défaut 4 cartes) avec citation et liste de thématiques."
      >
        <ArrayField
          items={value.orientations}
          onChange={(orientations) => onChange({ ...value, orientations })}
          newItem={() => ({
            number: "",
            title: "",
            subtitle: "",
            quote: { text: "", author: "" },
            items: [{ strong: "", text: "" }],
          })}
          itemLabel="Orientation"
          renderItem={(o, update) => (
            <>
              <div className="grid md:grid-cols-3 gap-3">
                <Field label="Numéro (ex. « 01 »)">
                  <Input
                    value={o.number}
                    onChange={(v) => update({ number: v })}
                  />
                </Field>
                <Field label="Titre">
                  <Input
                    value={o.title}
                    onChange={(v) => update({ title: v })}
                  />
                </Field>
                <Field label="Sous-titre">
                  <Input
                    value={o.subtitle}
                    onChange={(v) => update({ subtitle: v })}
                  />
                </Field>
              </div>
              <Field label="Citation">
                <Textarea
                  value={o.quote.text}
                  onChange={(v) =>
                    update({ quote: { ...o.quote, text: v } })
                  }
                />
              </Field>
              <Field label="Auteur de la citation">
                <Input
                  value={o.quote.author}
                  onChange={(v) =>
                    update({ quote: { ...o.quote, author: v } })
                  }
                />
              </Field>
              <Field label="Thématiques de cette orientation">
                <ArrayField
                  items={o.items}
                  onChange={(items) => update({ items })}
                  newItem={() => ({ strong: "", text: "" })}
                  itemLabel="Thématique"
                  renderItem={(it, updateIt) => (
                    <>
                      <Field label="Titre (mots en gras)">
                        <Input
                          value={it.strong}
                          onChange={(v) => updateIt({ strong: v })}
                        />
                      </Field>
                      <Field label="Description">
                        <Textarea
                          value={it.text}
                          onChange={(v) => updateIt({ text: v })}
                        />
                      </Field>
                    </>
                  )}
                />
              </Field>
            </>
          )}
        />
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
