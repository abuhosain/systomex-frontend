# SystomeX

Official marketing website for **SystomeX** — robotics, automation, IoT solutions, engineering projects, and professional training.

**Tagline:** Building the Future with Robotics & Automation

## Features

- Single-page marketing site with smooth scroll sections (Hero, Services, Products, Courses, Projects, About, Contact, and more)
- Dark synthwave UI aligned with the SystomeX brand (magenta, purple, cyan on black)
- Internationalization via `next-intl`
- Auth pages (login / signup) and protected dashboard
- Contact form and company info in footer
- Responsive layout for mobile, tablet, and desktop
- Animations with Framer Motion and scroll-reveal effects

## Project Structure

```
src/
├── app/[locale]/              # App Router with i18n
│   ├── (public)/              # Home / marketing page
│   ├── (auth)/                # Login & signup
│   └── (private)/             # Protected dashboard
├── components/
│   ├── website/               # Landing page sections & shared UI
│   ├── siteSettings/          # Navbar & footer
│   ├── ui/                    # Button, Input, etc.
│   └── common/                # Shared utilities (loading, focus guard)
├── contexts/                  # React Context
├── data/                      # Static site content (services, products, contact)
├── i18n/                      # Internationalization config
├── services/                  # Auth & API helpers
├── types/                     # TypeScript definitions
└── utils/                     # Helper utilities
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

For Turbopack dev mode:

```bash
npm run dev:turbo
```

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Internationalization:** next-intl 4.6
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Notifications:** sonner

## Routes

| Route        | Description              |
| ------------ | ------------------------ |
| `/`          | Home / marketing page    |
| `/login`     | Sign in                  |
| `/signup`    | Create account           |
| `/dashboard` | User dashboard (private) |

## Contact

- **Email:** systomex@gmail.com
- **Phone:** 01732247599
- **Location:** Colony, Bogura, Bangladesh

## License

MIT
