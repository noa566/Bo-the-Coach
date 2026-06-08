"use client";

import type { TarifsContent } from "@/lib/content";
import {
  ArrayField,
  Field,
  HeaderFields,
  Input,
  Section,
  Textarea,
  Toggle,
} from "@/components/admin/ui";

export default function TarifsEditor({
  value,
  onChange,
}: {
  value: TarifsContent;
  onChange: (next: TarifsContent) => void;
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
        title="Formules tarifaires"
        description="Une seule formule peut être marquée « mise en avant »."
      >
        <ArrayField
          items={value.plans}
          onChange={(plans) => onChange({ ...value, plans })}
          newItem={() => ({
            title: "",
            duration: "",
            highlight: false,
            highlightLabel: "",
            options: [{ label: "", price: "" }],
            cta: "Demander un rendez-vous",
          })}
          itemLabel="Formule"
          renderItem={(plan, update) => (
            <>
              <Field label="Titre">
                <Input
                  value={plan.title}
                  onChange={(v) => update({ title: v })}
                />
              </Field>
              <Field label="Durée (sous le titre)">
                <Input
                  value={plan.duration}
                  onChange={(v) => update({ duration: v })}
                />
              </Field>
              <div className="grid md:grid-cols-2 gap-4 items-end">
                <Field label="Mise en avant">
                  <Toggle
                    checked={plan.highlight}
                    onChange={(checked) => update({ highlight: checked })}
                    label="Carte mise en avant (style sombre)"
                  />
                </Field>
                {plan.highlight && (
                  <Field label="Libellé du badge">
                    <Input
                      value={plan.highlightLabel}
                      onChange={(v) => update({ highlightLabel: v })}
                      placeholder="ex. Le plus choisi"
                    />
                  </Field>
                )}
              </div>
              <Field label="Tarifs proposés">
                <ArrayField
                  items={plan.options}
                  onChange={(options) => update({ options })}
                  newItem={() => ({ label: "", price: "" })}
                  itemLabel="Tarif"
                  renderItem={(opt, updateOpt) => (
                    <>
                      <Field label="Libellé (ex. 6 séances)">
                        <Input
                          value={opt.label}
                          onChange={(v) => updateOpt({ label: v })}
                        />
                      </Field>
                      <Field label="Prix (ex. CHF 780.–)">
                        <Input
                          value={opt.price}
                          onChange={(v) => updateOpt({ price: v })}
                        />
                      </Field>
                    </>
                  )}
                />
              </Field>
              <Field label="Libellé du bouton">
                <Input
                  value={plan.cta}
                  onChange={(v) => update({ cta: v })}
                />
              </Field>
            </>
          )}
        />
      </Section>

      <Section title="Encadré « Séance fondation »">
        <Field label="Titre">
          <Input
            value={value.founding.title}
            onChange={(v) =>
              onChange({
                ...value,
                founding: { ...value.founding, title: v },
              })
            }
          />
        </Field>
        <Field label="Texte">
          <Textarea
            value={value.founding.text}
            onChange={(v) =>
              onChange({
                ...value,
                founding: { ...value.founding, text: v },
              })
            }
          />
        </Field>
      </Section>
    </div>
  );
}
