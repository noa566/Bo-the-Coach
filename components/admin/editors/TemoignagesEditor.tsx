"use client";

import type { TemoignagesContent } from "@/lib/content";
import {
  ArrayField,
  Field,
  HeaderFields,
  Input,
  Section,
  Textarea,
  Toggle,
} from "@/components/admin/ui";

export default function TemoignagesEditor({
  value,
  onChange,
}: {
  value: TemoignagesContent;
  onChange: (next: TemoignagesContent) => void;
}) {
  return (
    <div className="space-y-8 pb-8">
      <Section title="En-tête de la page">
        <HeaderFields
          value={value.header}
          onChange={(header) => onChange({ ...value, header })}
        />
      </Section>

      <Section
        title="Témoignages"
        description="Coche « format large » pour qu'un témoignage prenne toute la largeur."
      >
        <ArrayField
          items={value.testimonials}
          onChange={(testimonials) => onChange({ ...value, testimonials })}
          newItem={() => ({ text: "", author: "", long: false })}
          itemLabel="Témoignage"
          renderItem={(t, update) => (
            <>
              <Field label="Texte du témoignage">
                <Textarea
                  rows={5}
                  value={t.text}
                  onChange={(v) => update({ text: v })}
                />
              </Field>
              <div className="grid md:grid-cols-2 gap-4 items-end">
                <Field label="Auteur">
                  <Input
                    value={t.author}
                    onChange={(v) => update({ author: v })}
                    placeholder="ex. A.D. ou C.J. — Club sportif"
                  />
                </Field>
                <Field label="Affichage">
                  <Toggle
                    checked={t.long}
                    onChange={(checked) => update({ long: checked })}
                    label="Format large (pleine largeur)"
                  />
                </Field>
              </div>
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
