"use client";

import type { HomeContent } from "@/lib/content";
import {
  ArrayField,
  Field,
  Input,
  Section,
  Textarea,
} from "@/components/admin/ui";

export default function HomeEditor({
  value,
  onChange,
}: {
  value: HomeContent;
  onChange: (next: HomeContent) => void;
}) {
  return (
    <div className="space-y-8 pb-8">
      <Section title="Hero" description="Le haut de la page d'accueil.">
        <Field label="Pré-titre">
          <Input
            value={value.hero.eyebrow}
            onChange={(v) =>
              onChange({ ...value, hero: { ...value.hero, eyebrow: v } })
            }
          />
        </Field>
        <div className="grid md:grid-cols-3 gap-4">
          <Field label="Titre — début">
            <Input
              value={value.hero.titleStart}
              onChange={(v) =>
                onChange({ ...value, hero: { ...value.hero, titleStart: v } })
              }
            />
          </Field>
          <Field label="Titre — mot accentué">
            <Input
              value={value.hero.titleAccent}
              onChange={(v) =>
                onChange({ ...value, hero: { ...value.hero, titleAccent: v } })
              }
            />
          </Field>
          <Field label="Titre — fin">
            <Input
              value={value.hero.titleEnd}
              onChange={(v) =>
                onChange({ ...value, hero: { ...value.hero, titleEnd: v } })
              }
            />
          </Field>
        </div>
        <Field label="Paragraphe d'introduction">
          <Textarea
            value={value.hero.lead}
            onChange={(v) =>
              onChange({ ...value, hero: { ...value.hero, lead: v } })
            }
          />
        </Field>
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Bouton principal">
            <Input
              value={value.hero.ctaPrimary}
              onChange={(v) =>
                onChange({ ...value, hero: { ...value.hero, ctaPrimary: v } })
              }
            />
          </Field>
          <Field label="Bouton secondaire">
            <Input
              value={value.hero.ctaSecondary}
              onChange={(v) =>
                onChange({
                  ...value,
                  hero: { ...value.hero, ctaSecondary: v },
                })
              }
            />
          </Field>
        </div>
        <Field label="Statistiques">
          <ArrayField
            items={value.hero.stats}
            onChange={(stats) =>
              onChange({ ...value, hero: { ...value.hero, stats } })
            }
            newItem={() => ({ value: "", label: "" })}
            itemLabel="Stat"
            minItems={1}
            renderItem={(stat, update) => (
              <>
                <Field label="Valeur">
                  <Input
                    value={stat.value}
                    onChange={(v) => update({ value: v })}
                  />
                </Field>
                <Field label="Libellé">
                  <Input
                    value={stat.label}
                    onChange={(v) => update({ label: v })}
                  />
                </Field>
              </>
            )}
          />
        </Field>
      </Section>

      <Section title="Philosophie">
        <Field label="Pré-titre">
          <Input
            value={value.philosophy.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                philosophy: { ...value.philosophy, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Citation">
          <Textarea
            value={value.philosophy.quote}
            onChange={(v) =>
              onChange({
                ...value,
                philosophy: { ...value.philosophy, quote: v },
              })
            }
          />
        </Field>
        <Field label="Auteur">
          <Input
            value={value.philosophy.author}
            onChange={(v) =>
              onChange({
                ...value,
                philosophy: { ...value.philosophy, author: v },
              })
            }
          />
        </Field>
      </Section>

      <Section title="Services (3 prestations)">
        <Field label="Pré-titre">
          <Input
            value={value.services.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                services: { ...value.services, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Titre de section">
          <Input
            value={value.services.title}
            onChange={(v) =>
              onChange({
                ...value,
                services: { ...value.services, title: v },
              })
            }
          />
        </Field>
        <Field label="Introduction">
          <Textarea
            value={value.services.intro}
            onChange={(v) =>
              onChange({
                ...value,
                services: { ...value.services, intro: v },
              })
            }
          />
        </Field>
        <Field
          label="Cartes (3 cartes — l'ordre détermine l'icône et le lien)"
          hint="Cartes 1 et 3 → /coaching et /formation ; carte 2 → /coaching"
        >
          <ArrayField
            items={value.services.items}
            onChange={(items) =>
              onChange({
                ...value,
                services: { ...value.services, items },
              })
            }
            newItem={() => ({ title: "", description: "", cta: "Explorer" })}
            itemLabel="Carte"
            minItems={1}
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
                    value={item.description}
                    onChange={(v) => update({ description: v })}
                  />
                </Field>
                <Field label="Libellé du lien">
                  <Input
                    value={item.cta}
                    onChange={(v) => update({ cta: v })}
                  />
                </Field>
              </>
            )}
          />
        </Field>
      </Section>

      <Section title="Approche">
        <Field label="Pré-titre">
          <Input
            value={value.approach.eyebrow}
            onChange={(v) =>
              onChange({
                ...value,
                approach: { ...value.approach, eyebrow: v },
              })
            }
          />
        </Field>
        <Field label="Titre">
          <Input
            value={value.approach.title}
            onChange={(v) =>
              onChange({
                ...value,
                approach: { ...value.approach, title: v },
              })
            }
          />
        </Field>
        <Field label="Paragraphe 1">
          <Textarea
            value={value.approach.paragraph1}
            onChange={(v) =>
              onChange({
                ...value,
                approach: { ...value.approach, paragraph1: v },
              })
            }
          />
        </Field>
        <Field label="Paragraphe 2">
          <Textarea
            value={value.approach.paragraph2}
            onChange={(v) =>
              onChange({
                ...value,
                approach: { ...value.approach, paragraph2: v },
              })
            }
          />
        </Field>
        <Field label="Bouton">
          <Input
            value={value.approach.cta}
            onChange={(v) =>
              onChange({
                ...value,
                approach: { ...value.approach, cta: v },
              })
            }
          />
        </Field>
      </Section>

      <Section title="Citation centrale">
        <Field label="Citation">
          <Textarea
            value={value.citation.quote}
            onChange={(v) =>
              onChange({
                ...value,
                citation: { ...value.citation, quote: v },
              })
            }
          />
        </Field>
        <Field label="Auteur">
          <Input
            value={value.citation.author}
            onChange={(v) =>
              onChange({
                ...value,
                citation: { ...value.citation, author: v },
              })
            }
          />
        </Field>
      </Section>

      <Section title="CTA final">
        <Field label="Titre">
          <Input
            value={value.finalCta.title}
            onChange={(v) =>
              onChange({
                ...value,
                finalCta: { ...value.finalCta, title: v },
              })
            }
          />
        </Field>
        <Field label="Description">
          <Textarea
            value={value.finalCta.description}
            onChange={(v) =>
              onChange({
                ...value,
                finalCta: { ...value.finalCta, description: v },
              })
            }
          />
        </Field>
        <Field label="Bouton">
          <Input
            value={value.finalCta.button}
            onChange={(v) =>
              onChange({
                ...value,
                finalCta: { ...value.finalCta, button: v },
              })
            }
          />
        </Field>
      </Section>
    </div>
  );
}
