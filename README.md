# Bharath JnanaYatra — An Adventure into India's Knowledge Systems

> A gamified learning platform that lets children explore Indian Knowledge Systems (Ayurveda, Yoga, astronomy, stories, ecology, arts) through play instead of rote memorization, while building life skills such as Emotional-Management and self-care.

**Hack For Social Cause submission** · Domain: Education & Skill Development · Status: **front-end prototype (TRL 3)** · License: MIT

---

## The problem

- Only **12%** of teacher-training programs include Indian Knowledge Systems (IKS), and fewer than **5%** of curricula reflect it (Karanwal, 2023).
- Learning is exam-focused. Children get little structured support for resilience, decision-making and self-awareness.
- Government-school children and their teachers have the least access to engaging, culturally rooted learning material.

## What the prototype does

Children enter **Knowledge Worlds** and follow an **Explore → Play → Life Skills** loop.

| Knowledge World | Idea | Life skill |
|---|---|---|
| Forest of Ayurveda | Meet the doshas, identify healing plants, build a daily routine (Dinacharya) | Self-care, observation |
| Valley of Yoga | Movement and breath through guided quests | Focus, calm |
| Kingdom of Stories | Story-based quests with decision points | Decision-making, values |
| Observatory of Aryabhata | Explore Indian astronomy and mathematics | Curiosity, logic |
| Garden of Ecology | Traditional ecological wisdom | Responsibility |
| Temple of Arts | Indian arts and crafts | Creativity |

### Screens in this repository

| Route | Screen |
|---|---|
| `/` | Landing page: hero, problem and solution, worlds preview, how it works, for schools, founder story, waitlist |
| `/knowledge-worlds-hub` | Hub of all six worlds with learner stats and a progress overview |
| `/knowledge-world-adventure` | One world's quest map (Forest of Ayurveda), active quest, badges, lore, activity feed |
| `/sign-up-login-screen` | Sign-up and login for a child learner, parent or teacher |

## Screenshots

### Home page
![Home page](docs/screenshots/Home%20Page.png)

### What we offer
![What we offer](docs/screenshots/What%20we%20offer.png)

### Knowledge Worlds
![Knowledge Worlds](docs/screenshots/Knowledge%20Worlds.png)

### Forest of Ayurveda
![Forest of Ayurveda quest map](docs/screenshots/Forest%20of%20Ayurveda.png)

### Progress tracking
![Progress tracking](docs/screenshots/Progress%20tracking.png)

### Founder's story
![Founder's story](docs/screenshots/Founder%20story.png)

## What is real and what is a demo (honest scope)

This is a **UI prototype**. It has no backend yet.

- The waitlist, login, sign-up and "start quest" actions are **simulated** (a short delay and a success message). The places where a real API goes are marked with `// BACKEND:` comments in the code.
- Learner stats, progress, badges and quests are **sample data** written into the components.
- The demo login accounts shown on the login screen are **fake** and only fill the form.
- Nothing is stored. No personal data is collected or sent anywhere.

## Tech stack

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · react-hook-form · Recharts · Lucide icons · Sonner toasts. The first version was generated with [Rocket.new](https://rocket.new) and then refined by hand.

## Run it locally

Requirements: Node.js 18 or newer.

```bash
git clone https://github.com/harshitha-ome/bharathjnanayatra.git
cd bharathjnanayatra
cp .env.example .env     # no real keys are needed to run the prototype
npm install --legacy-peer-deps
npm run dev
# open http://localhost:4028
```

Other scripts: `npm run build` (production build), `npm run serve` (serve the build), `npm run lint`, `npm run type-check`.

Note: the build downloads the *Plus Jakarta Sans* font from Google Fonts, so it needs internet access.

## Project structure

```
src/
  app/
    page.tsx                         # landing page
    components/                      # landing sections
    knowledge-worlds-hub/            # hub screen
    knowledge-world-adventure/       # quest map screen
    sign-up-login-screen/            # auth screens (simulated)
  components/                        # shared layout and UI (Topbar, Modal, Badge, ...)
  styles/                            # Tailwind and global CSS
public/assets/images/                # images
data/                                # synthetic sample data (see below)
docs/                                # extra documentation
ARCHITECTURE.md                      # current and planned architecture
```

## Sample data

The `data/` folder holds **synthetic** examples that show the shape of the data the real backend will use:

- `sample_quest_honest_woodcutter.json`: one decision-based story quest
- `sample_world_forest_of_ayurveda.json`: a world with its quest map
- `sample_waitlist.csv`: the shape of waitlist and willingness-to-pay responses
- `sample_pilot_feedback.json`: the shape of pilot-session feedback

No real children's data or contact details are included.

## Early evidence (directional only)

- A small offline pilot (under 15 children) at a government school in Andhra Pradesh showed strong curiosity and engagement.
- A survey of 10 people rated problem importance 4.9/5 and concept interest 4.5/5.

These samples are small and are not conclusive.

## Social impact

- Culturally rooted learning for children who rarely get it in school.
- Planned sponsored access for government schools, funded through CSR and NGO licences.
- Ready-made content for teachers, aligned with the goals of NEP 2020.
- Privacy by design: minimal data and no biometric or emotion tracking of children, in line with India's DPDP Act 2023.

## Roadmap

1. **Now:** validate with pilots and a demand test
2. **Next:** working backend (accounts, progress, content) and two playable worlds
3. **Then:** adaptive difficulty
4. **Later:** more worlds, regional languages, an expert-reviewed content library

See `ARCHITECTURE.md` for details.

## Contributing

See `CONTRIBUTING.md`. Content and pilot feedback are as welcome as code.

## License

MIT. See `LICENSE`.

## Contact

Harshitha Saladi, Founder · harshithasaladi1@gmail.com

## AI is used to make this doc
