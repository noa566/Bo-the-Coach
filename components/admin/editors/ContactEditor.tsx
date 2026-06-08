"use client";

import type { ContactContent } from "@/lib/content";
import {
  ArrayField,
  Field,
  HeaderFields,
  Input,
  Section,
  Textarea,
} from "@/components/admin/ui";

export default function ContactEditor({
  value,
  onChange,
}: {
  value: ContactContent;
  onChange: (next: ContactContent) => void;
}) {
  return (
    <div className="space-y-8 pb-8">
      <Section title="En-tête de la page">
        <HeaderFields
          value={value.header}
          onChange={(header) => onChange({ ...value, header })}
        />
      </Section>

      <Section title="Bloc « Formulaire »">
        <Field label="Pré-titre">
          <Input
            value={value.form.eyebrow}
            onChange={(v) =>
              onChange({ ...value, form: { ...value.form, eyebrow: v } })
            }
          />
        </Field>
        <Field label="Titre">
          <Input
            value={value.form.title}
            onChange={(v) =>
              onChange({ ...value, form: { ...value.form, title: v } })
            }
          />
        </Field>
      </Section>

      <Section title="Coordonnées">
        <Field label="Titre du bloc">
          <Input
            value={value.details.title}
            onChange={(v) =>
              onChange({
                ...value,
                details: { ...value.details, title: v },
              })
            }
          />
        </Field>
        <Field label="Email" hint="Affiché ET utilisé dans le lien mailto:">
          <Input
            type="email"
            value={value.details.email}
            onChange={(v) =>
              onChange({
                ...value,
                details: { ...value.details, email: v },
              })
            }
          />
        </Field>
        <div className="grid md:grid-cols-2 gap-4">
          <Field
            label="Téléphone (affiché)"
            hint="Ce que les visiteurs verront"
          >
            <Input
              value={value.details.phone}
              onChange={(v) =>
                onChange({
                  ...value,
                  details: { ...value.details, phone: v },
                })
              }
            />
          </Field>
          <Field
            label="Téléphone (lien tel:)"
            hint="Format international sans espaces ni parenthèses, ex. +41792927854"
          >
            <Input
              value={value.details.phoneHref}
              onChange={(v) =>
                onChange({
                  ...value,
                  details: { ...value.details, phoneHref: v },
                })
              }
            />
          </Field>
        </div>
        <Field label="Lieu — ligne principale">
          <Input
            value={value.details.locationTitle}
            onChange={(v) =>
              onChange({
                ...value,
                details: { ...value.details, locationTitle: v },
              })
            }
          />
        </Field>
        <Field label="Lieu — précision (sous la ligne principale)">
          <Input
            value={value.details.locationDetail}
            onChange={(v) =>
              onChange({
                ...value,
                details: { ...value.details, locationDetail: v },
              })
            }
          />
        </Field>
      </Section>

      <Section title="Bloc « Comment je travaille »">
        <Field label="Titre">
          <Input
            value={value.workInfo.title}
            onChange={(v) =>
              onChange({
                ...value,
                workInfo: { ...value.workInfo, title: v },
              })
            }
          />
        </Field>
        <Field label="Liste à puces">
          <ArrayField
            items={value.workInfo.items.map((text) => ({ text }))}
            onChange={(items) =>
              onChange({
                ...value,
                workInfo: {
                  ...value.workInfo,
                  items: items.map((i) => i.text),
                },
              })
            }
            newItem={() => ({ text: "" })}
            itemLabel="Élément"
            renderItem={(item, update) => (
              <Field label="Texte">
                <Textarea
                  value={item.text}
                  rows={2}
                  onChange={(v) => update({ text: v })}
                />
              </Field>
            )}
          />
        </Field>
      </Section>
    </div>
  );
}
