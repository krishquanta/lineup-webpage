# Lineup — For the Idea Nation™

India's first youth-focused crowdfunding platform designed for students, teens, and young innovators (ages 16–30).

## Overview

Lineup allows young builders to raise funds for their ideas, research projects, or startups directly from peers, mentors, and supporters who believe in their vision.

- **Trademark**: For the Idea Nation™
- **Slogan**: “We don’t need a nation of workers. We need a nation of thinkers.”
- **Core Vision**: Make it normal for an Indian student with an idea to think: *“I can try to fund this with Lineup.”*

---

## Pages

- **`/` (`index.html`)**: Overview of Lineup, core advantages, how it works, live campaign preview, Lineup Socials, vision, and team.
- **`/waitlist` (`waitlist/index.html`)**: Hidden early-access page (mail-in waitlist directed to `lineup.groups@gmail.com`).
- **`/submit` (`submit/index.html`)**: Creator idea proposal form (connected to Supabase).

---

## Tech Stack

- **Vanilla HTML5 & CSS3**: Fast, responsive, minimal white mode design with warm terracotta accents.
- **Vanilla JavaScript (ES Modules)**: No build step or bundler needed.
- **Database**: [Supabase](https://supabase.com) (PostgreSQL) for storing project proposals.

---

## Local Setup

1. Clone or download the repository.
2. Open `index.html` directly in any web browser, or serve locally:
   ```bash
   python -m http.server 3000
   ```
3. Navigate to:
   - Homepage: `http://localhost:3000/`
   - Waitlist: `http://localhost:3000/waitlist/`
   - Submit Idea: `http://localhost:3000/submit/`

---

## Supabase Database Configuration

1. In your Supabase dashboard, open the **SQL Editor** and run the contents of `supabase_schema.sql` to create the `ideas` table and setup Row Level Security (RLS).
2. Open `js/config.js` and replace the placeholder credentials:
   ```javascript
   export const SUPABASE_URL = "https://your-project-id.supabase.co";
   export const SUPABASE_ANON_KEY = "your-anon-public-key";
   ```
3. Submitted project ideas will be saved directly to your Supabase `ideas` table.

---

## Connect

- **Instagram**: [@lineup.groups](https://www.instagram.com/lineup.groups)
- **Email**: lineup.groups@gmail.com
- **LinkedIn**: Coming soon
