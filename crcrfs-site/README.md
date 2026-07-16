# CRCRFS LLC Website — Local Build

This is a plain HTML/CSS/JS website — no frameworks, no build tools, no npm required.
That means you can preview it on your own computer with almost no setup.

## What's in this folder

```
crcrfs-site/
├── index.html          Home
├── about.html           About
├── services.html        Services
├── speaking.html        Speaking
├── media.html            Media & Videos
├── writing.html          Writing
├── podcast.html          Podcast
├── contact.html          Contact / Work With Me
├── css/style.css         All styling (colors, fonts, layout)
├── js/main.js            Mobile menu + contact form behavior
└── README.md             This file
```

---

## Step 1 — Preview it on your computer (local test)

You have two easy options. **Use Option A first** — it's the simplest.

### Option A: Just open the file
1. Unzip/download this `crcrfs-site` folder onto your computer.
2. Double-click `index.html`.
3. It opens in your default browser. Click through the nav links to browse all 8 pages.

This works fine for browsing, but a couple of very small things (browser security rules) can behave slightly differently than they will once hosted. That's normal — Option B avoids it entirely if you want to be thorough.

### Option B: Run a tiny local server (recommended once you're ready to fine-tune)
This mimics a real hosted site more closely.

**On Mac:**
1. Open the **Terminal** app (Spotlight search → "Terminal").
2. Type `cd ` (with a space after), then drag the `crcrfs-site` folder into the Terminal window, and press Enter.
3. Type: `python3 -m http.server 8000` and press Enter.
4. Open your browser and go to: `http://localhost:8000`

**On Windows:**
1. Open **PowerShell** (Start menu → search "PowerShell").
2. Type `cd ` (with a space after), then drag the `crcrfs-site` folder into the window, and press Enter.
3. Type: `python -m http.server 8000` and press Enter. (If that errors, try `py -m http.server 8000`.)
4. Open your browser and go to: `http://localhost:8000`

To stop the server later, click back into that Terminal/PowerShell window and press `Ctrl+C`.

> If you'd rather not touch the command line at all, a free tool called **VS Code** with the **"Live Server"** extension does this with one click — just install VS Code, open this folder in it, right-click `index.html`, and choose "Open with Live Server." I'm happy to walk you through that setup if you'd prefer it.

---

## Step 2 — What still needs your input before this is client-ready

The site is fully built and styled, but I intentionally left a few things as clearly-marked **placeholders** rather than guessing:

| Item | Where | What to do |
|---|---|---|
| Photos | Every page — dashed-border boxes labeled "Professional photo," "Portrait photo," etc. | Replace with your real photos (see Step 3) |
| Client/org logos | Home, About, Speaking pages — grey dashed boxes | Add real logos once you decide who to feature |
| Video clips | Home, Speaking, Media pages | Replace placeholder video boxes with real embeds (YouTube/Rumble embed code) |
| Testimonials | Home page | Add real quotes once you have them — I did not invent any |
| Substack links | Writing page, Home page | Currently point to `#` — replace with your real Substack URL |
| Social links | Footer, Contact page | Currently point to your X/Instagram handles from memory — double check these are correct |
| Contact form | Contact page | Currently opens the visitor's email app pre-filled to `crcrfs@gmail.com` (works immediately, no backend needed). We can upgrade this to submit silently from the page later — see note below. |

## Step 3 — Adding your own photos/logos
1. Save your image files (JPG or PNG, ideally under 1MB each) into the `images/` folder — I created it for you, it's currently empty.
2. In the HTML file for that page, find the `<div class="hero-visual">...</div>` block you want to replace, and swap the inner `<div class="placeholder-note">...</div>` for an `<img src="images/your-photo.jpg" alt="Mailyn Salabarria">` tag.
3. Refresh your browser to see the change.

I'm happy to do this swap for you directly — just upload the images in our next chat and tell me which page/section each goes on.

---

## Step 4 — Going live on GitHub Pages (free, works with your domain + plain Gmail)

### Part 1 — Create your GitHub account & repository
1. Go to **github.com** and sign up using your plain Gmail — no Workspace needed, a free personal GitHub account works fine.
2. Once logged in, click the **+** icon top-right → **New repository**.
3. Name it something like `crcrfs-website` (the name doesn't matter for the final URL once your domain is connected).
4. Set it to **Public** (GitHub Pages requires this on the free tier).
5. Leave "Add a README" unchecked. Click **Create repository**.

### Part 2 — Upload your site files
1. On your new (empty) repo page, click **"uploading an existing file"** (a link right in the middle of the page).
2. Drag in everything **inside** your `crcrfs-site` folder — `index.html`, all the other `.html` files, plus the `css` and `js` folders, and `images` if you've added photos. (Don't upload the outer `crcrfs-site` folder itself — the files need to sit at the top level of the repo.)
3. Scroll down, click **Commit changes**.

### Part 3 — Turn on Pages
1. In your repo, click **Settings** (top nav) → **Pages** (left sidebar).
2. Under "Build and deployment" → Source, choose **Deploy from a branch**.
3. Branch: select **main**, folder: **/ (root)**. Click **Save**.
4. Wait 1–2 minutes, then refresh — GitHub shows you a live URL like `https://yourusername.github.io/crcrfs-website/`. Click it to confirm the site loads.

### Part 4 — Connect your own domain
1. Still in **Settings → Pages**, find the **Custom domain** field. Type your domain (e.g. `crcrfs.com` or `www.crcrfs.com`) and click **Save**. GitHub creates a `CNAME` file in your repo automatically.
2. Go to wherever you bought your domain (GoDaddy, Namecheap, etc.) and open its **DNS settings**.
3. Add these records (GitHub shows the exact values on that same Pages settings screen, in a "DNS check in progress" box):
   - If using the **root domain** (`crcrfs.com`): add four **A records** pointing to GitHub's IP addresses (listed on the Pages settings page).
   - If using **www** (`www.crcrfs.com`): add a **CNAME record** pointing to `yourusername.github.io`.
4. Back in GitHub Pages settings, check **Enforce HTTPS** once the checkbox becomes available (can take a few hours for DNS to propagate — that wait is normal).

### Making updates later
Go to the file in your GitHub repo, click the pencil (✏️) icon to edit directly in the browser, or delete and re-upload a file — no command line required.

> The DNS step (Part 4) is where beginners usually get stuck, mostly because every domain registrar's dashboard looks different. When you get there, send a screenshot of your registrar's DNS page and I'll tell you exactly which fields to fill in.

### Contact form note
The current form uses `mailto:` (opens the visitor's email app, pre-filled to crcrfs@gmail.com) — zero setup needed and works immediately on GitHub Pages. If you ever want submissions to arrive silently in your Gmail instead, a free service like **Formspree** (formspree.io) can do that with about 5 minutes of setup — just say the word.
