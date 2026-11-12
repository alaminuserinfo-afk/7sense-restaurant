# DESIGN.md: 7 Sense Premium Restaurant website (current state)

This file describes the website exactly as it is now. Read all of it before changing anything. If a change contradicts this file, update this file in the same task.

## 1. What this is

- A one-page static website for 7 Sense Premium Restaurant, Mohila College Road, Meherpur Sadar, Meherpur 7100, Bangladesh.
- Stack: plain HTML, CSS and JavaScript, split into parts: `index.html` holds only the page structure, `css/` has one file per part, `js/` has one file per feature. No framework, no build step, no server code.
- Goal of the site: show the restaurant, show the full menu, and get people to order or reserve through WhatsApp.
- Preview locally: open `index.html` in a browser. Keep the folders `css/`, `js/` and `images/` next to `index.html`.

## 2. Files and folders

```
index.html            page structure: every section in order, with comments
css/
  tokens.css          colors, radius, shadows (CSS variables)
  base.css            reset, page defaults, buttons, section titles, shared animations
  nav.css             top navigation bar and mobile menu
  hero.css            hero section and the 3D food ring
  menu.css            menu tabs, menu items, badges, combo card
  restaurant.css      the "A table among the green" band
  about.css           About section
  contact.css         contact section and form
  footer.css          footer
  utilities.css       floating WhatsApp button and scroll reveal
js/
  nav.js              navbar scroll state and mobile menu
  menu.js             menu category tabs
  reveal.js           fade-in on scroll
  contact.js          contact form (opens WhatsApp)
images/
  logo.png            round logo, 256x256, transparent corners
  space-1.jpg         840x1063, sofa in front of the round logo wall (About)
  band.jpg            1400x975, green mirror arches (restaurant band background)
  food-1.jpg ... food-8.jpg   412x412 dish photos (3D ring in the hero)
DESIGN.md             this file
```

Which file to open for which change:
- Colors or radius: `css/tokens.css`, then check the part file that uses them.
- Hero text or the 3D ring: `index.html` (the hero section) and `css/hero.css`.
- A menu item or price: `index.html` (the menu section). Tab styling: `css/menu.css`.
- Contact details: `index.html` (the contact section and the footer).

The CSS files are loaded in the order listed above (see the `<link>` tags in `index.html`). A later file wins over an earlier one. Inside a file, a later rule wins over an earlier one.

Files from older versions that are no longer used and can be deleted: `hero.jpg`, `space-2.jpg`, `dish-arch.jpg`, `pizza.webp`, `pizza.mp4`, and any copies of `logo.png`, `space-1.jpg`, `band.jpg`, `food-*.jpg` that sit next to `index.html` (the images now live in `images/`).

The eight dish photos were small (206x206) when received. They were enlarged and sharpened. Replace them with original camera photos as soon as possible (square, at least 800x800), keeping the same names.

## 3. Page structure, top to bottom

| Order | Section | id | Background |
|---|---|---|---|
| 1 | Navigation bar (fixed) | `navbar` | transparent over the hero, cream after 60px of scrolling |
| 2 | Hero | `home` | light cream gradient |
| 3 | Menu ("Our Menu / Explore Our Culinary Collection") | `menu` | off-white |
| 4 | Restaurant band ("A table among the green") | `restaurant` | photo `band.jpg` under a dark teal overlay |
| 5 | About ("7 Sense Premium Restaurant") | `about` | teal gradient |
| 6 | Contact ("Visit Us or Order Directly") | `contact` | cream |
| 7 | Footer | none | dark teal |
| - | Floating green WhatsApp button (bottom right) | none | always visible |

Navigation links, in this order: Home (`#home`), About (`#about`), Menu (`#menu`), Contact (`#contact`), and the button "Order Now" (WhatsApp). The link order does not match the page order (Menu comes before About on the page). This was left as the owner asked.

## 4. Design tokens

Colors come from the logo (deep teal), the cream sofa and walls, and the brass of the lamps. All are CSS variables in `:root`.

- Teal ramp: `--teal-50 #EAF3F2`, `--teal-100 #D3E7E5`, `--teal-200 #B5D8D4`, `--teal-300 #8CC6C0`, `--teal-400 #63ADA7`, `--teal-500 #0F7274`, `--teal-600 #0A6667` (the logo color), `--teal-700 #075253`, `--teal-800 #063F40`, `--teal-900 #042D2E`.
- Warm neutrals: `--gray-50 #F8F4EB` (page cream), `--gray-100 #F1EBDD`, `--gray-200 #E3DACA`, `--gray-300 #D2C7B3`.
- Text neutrals: `--gray-500 #667573`, `--gray-600 #4A5A58`, `--gray-700 #334342`, `--gray-800 #1E2F2E`, `--gray-900 #0E1B1B`.
- Brass accent: `--amber-400 #E0B26A`, `--amber-500 #C8934F`. The script text on the light hero uses `#9A6A28` for enough contrast.
- Radius: `--radius 12px`, `--radius-lg 20px`. Shadows: `--shadow-sm` to `--shadow-xl`.

Where colors are used:
- Hero: cream gradient `#F8F4EB` to `#EFE7D6`, a soft mint glow top right, thin teal circle outlines (an echo of the logo's arcs). Headline `--teal-900`, the italic word "Extraordinary" `--teal-600`, paragraph `--gray-600`.
- About: `linear-gradient(135deg, #063F40, #0A6667)`, white text, glass-style cards (`rgba(255,255,255,.09)` with a thin white border).
- Restaurant band: `band.jpg` under `linear-gradient(rgba(4,45,46,.72), rgba(4,45,46,.82))`.
- Footer: `--teal-900`.
- Primary buttons: `--teal-600` background, white text.

## 5. Typography

- Headings: Playfair Display (400, 600, 700, italic 400).
- Body and interface text: Inter (300 to 700).
- Script accents: Pinyon Script, used for "Premium restaurant" in the hero and "A table among the green" in the band. It echoes the lettering on the restaurant sign. Use it for short phrases only, never for body text or buttons.
- All three come from one Google Fonts `<link>` in the `<head>`.

## 6. Components and behavior

### Navigation
- `navbar` gets the class `scrolled` after 60px of scrolling. On the light hero the links and logo text are dark; after scrolling the bar becomes cream with the same dark text.
- Mobile (900px and below): hamburger button `navToggle` opens `navLinks` as a full panel. Clicking a link closes it.
- Logo: `logo.png` (48px circle) next to the text "Sense Premium".

### Hero
- Left: small label "ASIAN FUSION DINING", script line "Premium restaurant", headline "Taste the *Extraordinary*", one paragraph, two buttons ("Explore Menu" scrolls to `#menu`, "Order on WhatsApp").
- Right: the 3D food ring (`.food3d` > `.ring` > eight `.fcard` figures).
  - Each card has `style="--i:N"` (0 to 7). CSS places it with `rotateY(calc(var(--i) * 45deg)) translateZ(var(--R))`.
  - Size variables on `.ring`: `--w 172px`, `--h 218px`, `--R 232px`. Mobile (900px and below): `--w 112px`, `--h 142px`, `--R 150px`, and `.food3d` is 300px tall.
  - Tilt `rotateX(-7deg)`, perspective `1600px`, one full turn every 40 seconds, paused on hover, off when the visitor prefers reduced motion.
  - Cards are arch-shaped (`border-radius: 999px 999px 18px 18px`), the same shape as the mirror arches in the restaurant.
  - To change the number of cards (N): change `45deg` to `360/N deg`, and set `--R` to about `(--w / 2) / tan(180/N degrees) + 20px`. Keep the whole ring narrower than the right column (about 560px on desktop) so nothing is clipped.
- The floor shadow under the ring is `.food3d::after`.

### Menu
- 13 category tabs: appetizer, chowmein, pasta, soup, pizza, burger, rice, chicken, beef, prawn, veggie, setmenu, indian. 68 items in total.
- A tab is `<button class="menu-tab" data-cat="pizza">`. Its content is `<div class="menu-category" data-cat="pizza">`. The `data-cat` values must match. The script shows one category at a time.
- Item markup: `<div class="menu-item"><div class="menu-item-info"><div class="menu-item-name">NAME</div></div><div class="menu-item-price">৳110</div></div>`. A description line and a `<span class="menu-item-badge badge-special">SPECIAL</span>` are optional.
- A "Friends Combo 1:4" card (`.combo-card`, ৳950 for 4) sits under the appetizers.
- Prices are typed by hand in taka (৳). There are no menu photos.

### Restaurant band
- Script line, headline "Warm light. Soft seating. Plants everywhere.", and a button that opens WhatsApp with the text "Hi 7 Sense! I'd like to reserve a table."

### About
- Left: `space-1.jpg` in an arch frame with the round logo at the bottom. Right: two paragraphs, a "Specialties: Dine-in" tag, and four feature cards (Fresh Ingredients Daily, Expert Thai Chefs, Cozy Dining Space, Fast Home Delivery).

### Contact
- Left: phone, WhatsApp, email, Instagram, opening hours, address and a map link, each with a line icon (inline SVG).
- Right: a short form (name, phone, message). Submitting does not send data to any server. It opens WhatsApp (`wa.me`) with the text filled in, so the visitor sends the message from their own phone.

### Scroll reveal
- Elements with the class `reveal` fade in once when they enter the screen (class `visible` is added). Do not remove the observer without removing the class.

## 7. Facts shown on the site (do not change without the owner)

- Phone and WhatsApp: +880 1789-583996 (`tel:+8801789583996`, `https://wa.me/8801789583996`)
- Email: 7senserestaurant@gmail.com
- Instagram: https://www.instagram.com/7senserestaurant
- Hours: Everyday 12:00 PM to 11:00 PM
- Map link: https://www.google.com/maps/search/?api=1&query=23.773443373702,88.63208
- Cuisine line: Thai, Chinese, Indian and Continental

## 8. How the CSS is organized

Each part has its own file (see section 2). Change a part by editing its own file. The hero, About and restaurant files contain a base rule followed by later rules that give the current look (for example the light hero and the dark About section); the later rule wins. When tidying, merge such pairs into one rule in the same task and check the page again.

## 9. Rules for any AI assistant working on this site

1. Do not invent facts: no new prices, hours, awards, reviews, phone numbers or dish names. If something is missing, leave it out and say so.
2. Keep the palette in section 4. New colors must come from the logo teal, the cream neutrals or the brass accent.
3. Keep it one static page. No frameworks, no build step.
4. Check every change at 375px width (no sideways scroll) and at 1280px width, and make sure there are no errors in the browser console.
5. Keep text readable: at least 4.5:1 contrast for normal text.
6. Respect `prefers-reduced-motion`. Do not add autoplay sound.
7. Keep the folder structure and file names from section 2. If an image is replaced, keep its name or update every reference.
8. Do not push to the main branch without asking. Work on a separate branch and list the files you changed.
9. After a change, update this file if the structure, colors or behavior changed.

## 10. Known issues and next steps

- The eight dish photos are enlarged 206px images. Replace them with originals.
- The brand name: the logo reads "7 Sense Restaurant", the site says "7 Sense Premium". Decide on one.
- The About feature cards and the menu tabs use emoji icons. They look different on different phones.
- The nav link order (Home, About, Menu, Contact) does not match the page order.
- No analytics, no Open Graph image, no favicon sizes beyond `logo.png`.
- Optional: a real pizza video. If wanted, add a short muted looping `pizza.mp4` (portrait, 6 to 10 seconds, under 3 MB) and place it in the hero.
