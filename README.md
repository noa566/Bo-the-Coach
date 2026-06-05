# Bo Coaching — Site web

Site vitrine de Boris Lazzarotto, coach professionnel et formateur à Genève.

Stack : **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**.

---

## 🚀 Démarrage rapide

### 1. Installer Node.js

Si Node.js n'est pas installé sur votre Mac, deux options :

**Option A — Avec Homebrew (recommandé) :**

```bash
# Installer Homebrew si pas déjà fait
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Installer Node.js
brew install node
```

**Option B — Téléchargement direct :**

Aller sur [https://nodejs.org](https://nodejs.org) et télécharger la version LTS.

Vérifier l'installation :

```bash
node --version   # devrait afficher v20.x ou plus
npm --version
```

### 2. Installer les dépendances du projet

Depuis le dossier `bo-coaching` :

```bash
cd ~/Desktop/bo-coaching
npm install
```

### 3. Lancer le site en local

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Le site se recharge automatiquement à chaque modification.

---

## 📁 Structure du projet

```
bo-coaching/
├── app/                    # Pages (App Router de Next.js)
│   ├── layout.tsx          # Layout global (Navbar + Footer)
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux + tokens
│   ├── coach/              # Votre coach et formateur
│   ├── le-coaching/        # Le coaching ?
│   ├── coaching/           # Coaching personnel et d'équipe
│   ├── formation/          # Formation
│   ├── temoignages/        # Témoignages
│   ├── tarifs/             # Tarifs
│   ├── contact/            # Contact
│   └── api/contact/        # Endpoint API du formulaire
├── components/             # Composants réutilisables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PageHeader.tsx
│   ├── QuoteBlock.tsx
│   └── ContactForm.tsx
├── public/                 # Fichiers statiques
│   ├── logo.svg
│   ├── logo-white.svg
│   └── illustrations/      # Illustrations générées
├── tailwind.config.ts      # Configuration Tailwind (palette, typo, animations)
├── tsconfig.json
└── package.json
```

---

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

- `sand-*` : nuances de beige/sable (fond principal)
- `bo` / `bo-dark` / `bo-light` : couleur signature de la marque
- `accent-*` : nuances de violet (accents, citations)
- `ink-*` : nuances de texte

### Typographie

- **Titres :** Cormorant Garamond (serif élégant)
- **Corps :** Inter (sans-serif moderne)

Les polices sont chargées depuis Google Fonts dans `app/globals.css`.

### Photo de Boris

La page `/coach` contient actuellement un placeholder avec les initiales « BL ».
Pour mettre la vraie photo :

1. Placer la photo dans `public/boris.jpg` (format JPG ou WebP recommandé)
2. Dans `app/coach/page.tsx`, remplacer le bloc placeholder par :

```tsx
import Image from "next/image";

<div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-sand-200">
  <Image
    src="/boris.jpg"
    alt="Portrait de Boris Lazzarotto"
    width={800}
    height={1000}
    priority
    className="w-full h-full object-cover"
  />
</div>
```

### Illustrations

4 illustrations sont disponibles dans `public/illustrations/` :

- `hero.png` — Paysage avec chemin (page d'accueil)
- `coaching.png` — Conversation (page d'accueil)
- `team.png` — Équipe (page Coach)
- `growth.png` — Croissance (page Formation)

Elles ont été générées sur mesure dans la palette du site et peuvent être
remplacées librement (mêmes noms de fichiers pour ne rien changer dans le code).

---

## ✉️ Formulaire de contact

Le formulaire poste vers `/api/contact` qui pour l'instant **logge la
demande dans la console** du serveur Next.js. Pour activer l'envoi
d'emails réels, brancher un service comme **Resend**, **SendGrid** ou
**Nodemailer** dans `app/api/contact/route.ts`.

**Exemple rapide avec Resend :**

```bash
npm install resend
```

```ts
// app/api/contact/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Bo Coaching <noreply@bo-coaching.ch>",
  to: "lazzarotto.coaching@gmail.com",
  subject: `Nouveau message : ${subject}`,
  text: `De ${firstname} ${lastname} (${email})\n\n${message}`,
});
```

Variables d'environnement à mettre dans un fichier `.env.local` :

```
RESEND_API_KEY=re_xxx
```

---

## 📦 Commandes utiles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Compile pour la production
npm run start    # Lance le serveur de production (après build)
npm run lint     # Vérifie le code
```

---

## 🌍 Déploiement

Le moyen le plus simple est [Vercel](https://vercel.com) (créateur de Next.js) :

1. Créer un compte sur vercel.com (gratuit)
2. Pousser le projet sur GitHub
3. Cliquer "Import Project" et sélectionner le repo
4. Vercel déploie automatiquement

Pour brancher le domaine `bo-coaching.ch`, suivre la doc Vercel.

---

## 📝 Contenu à compléter

- [ ] Ajouter la photo de Boris dans `public/boris.jpg`
- [ ] Configurer un vrai service d'envoi d'email (Resend, SendGrid, etc.)
- [ ] Ajouter des mentions légales / politique de confidentialité si nécessaire
- [ ] Configurer Google Analytics ou Plausible si souhaité
- [ ] Vérifier et adapter le SEO (titres, descriptions) dans chaque page

---

**Contact :** lazzarotto.coaching@gmail.com · +41 (0)79 292 78 54
