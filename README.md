# Kim Xyro Sernal — Virtual Assistant Portfolio

A responsive, static portfolio website built with HTML, CSS, and vanilla JavaScript. It can be hosted free with GitHub Pages.

## Files
- `index.html` — all page sections and editable portfolio copy
- `styles.css` — responsive layout, colors, typography, and visual design
- `script.js` — mobile navigation, project detail dialogs, current year, and email-form behavior
- `assets/favicon.svg` — simple brand favicon
- `assets/portfolio-page-01.jpg` through `assets/portfolio-page-11.jpg` — rendered pages from your original portfolio PDF; project sample pages are shown in the Projects gallery

## Preview locally
1. Download and unzip the project.
2. Open `index.html` in a modern browser. For the closest hosting behavior, use a local static server or the VS Code Live Server extension.
3. Update the content in `index.html` and project descriptions in `script.js` as needed.

## Publish with GitHub Pages
1. Sign in to GitHub or create an account at https://github.com.
2. Create a **public** repository named `kim-xyro-sernal-portfolio` (or another name you prefer).
3. Upload `index.html`, `styles.css`, `script.js`, `README.md`, and the `assets` folder to the repository's root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for GitHub Pages to publish the site. The published URL appears in the Pages settings. For a project repository, it typically resembles `https://YOUR-USERNAME.github.io/kim-xyro-sernal-portfolio/`.
8. Open that exact URL on desktop and mobile. Test the menu, all section links, project detail buttons, email link, telephone link, and contact form.

## Contact form behavior
The contact form uses a `mailto:` link. It prepares an email in the visitor's email application; it does **not** send, store, or transmit messages through the website. If you want a form that submits directly from the page, connect a real form provider or backend and configure spam protection before publishing.

## Customize after publishing
- **Colors and fonts:** edit the CSS variables at the top of `styles.css`.
- **Text and dates:** edit the relevant sections in `index.html`.
- **Project details:** edit the `projects` object in `script.js`.
- **LinkedIn:** add a real profile URL to the contact section once confirmed; do not use a guessed URL.
- **Photo:** the hero currently uses a typography-based monogram, not a generated portrait. If you want to add your actual photo, add your image to `assets/` and update the hero markup and CSS.
- **Portfolio links:** replace practice-project descriptions or add links when the real sample files are ready.
- **Contact form:** the email recipient is set to `kimxyrosernal@gmail.com` in `index.html` and `script.js`. Update both if your contact address changes.

## Before sharing publicly
- Confirm all job dates and titles match your resume.
- Confirm the email address and telephone number are correct.
- Add your actual LinkedIn profile URL if you want it linked.
- Your original portfolio PDF samples are embedded in the Projects gallery. The sample cards open larger images in a new browser tab. Review each page for accuracy before publishing.
- Review the public exposure of your phone number and email before publishing.
- Confirm whether you want the optional "open to remote opportunities" wording displayed; it is not asserted by default.
- Review tool names and training status to make sure they remain current.
