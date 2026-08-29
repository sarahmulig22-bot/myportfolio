# Sarah Eunice Mulig — Portfolio Site

A simple, static portfolio website. No build tools, no dependencies — just
HTML, CSS, and JavaScript, plus a folder of images.

## Files

```
index.html      the page shell (loads style.css and app.js)
style.css       all styling
app.js          page content, project data, and routing
images/         every picture used on the site
```

## How to change a picture on GitHub

1. Open the `images/` folder in your GitHub repo.
2. Click **Add file → Upload files**, and upload your new image using the
   **exact same filename** as the one you're replacing (e.g. `olivia-1.jpg`).
   GitHub will ask if you want to replace the existing file — say yes.
3. Commit the change. If you're using GitHub Pages, the live site updates
   automatically within a minute or two.

**Filename reference** — which picture is which:

| Project              | Files |
|-----------------------|-------|
| Francine's 1st Birthday | `francine-1.jpg` |
| Olivia's 1st Birthday | `olivia-1.jpg`, `olivia-2.jpg`, `olivia-3.jpg` |
| Jden's 1st Birthday | `jden-birthday-1.jpg`, `jden-birthday-2.jpg`, `jden-birthday-3.jpg` |
| Jden's Baptism | `jden-baptism-1.jpg`, `jden-baptism-2.jpg`, `jden-baptism-3.jpg` |
| Maggy's 2nd Birthday | `maggy-1.jpg`, `maggy-2.jpg`, `maggy-3.jpg` |
| Stella's 60th Birthday | `stella-1.jpg`, `stella-2.jpg` |
| Benly and Sarah Wedding | `wedding-1.jpg`, `wedding-2.jpg`, `wedding-3.jpg`, `wedding-4.jpg` |
| Florante's Event Signage | `signage-1.jpg` through `signage-5.jpg` |
| Florante Cards | `cards-1.jpg`, `cards-2.jpg`, `cards-3.jpg` |

The **first** image listed for each project (e.g. `olivia-1.jpg`) is the one
shown on the homepage grid. The rest appear on that project's detail page.

## Adding a brand-new picture to a project

1. Upload the image file into `images/` with a new filename, e.g. `olivia-4.jpg`.
2. Open `app.js`, find the `PROJECTS` array near the top, locate the project
   (e.g. `key:"olivia"`), and add `"images/olivia-4.jpg"` to its `images` list.
3. Commit. Done — no other code needs to change.

## Adding a whole new project

Copy one of the objects in the `PROJECTS` array in `app.js`, give it a unique
`key`, a `title`, a `desc`, optional `tags`, and an `images` array pointing at
files you've uploaded to `images/`. It will automatically appear on the
homepage grid and get its own detail page.

## Editing text

- Site-wide copy (hero intro, About bio, Services, Contact info) all lives in
  `app.js`.
- Colors, fonts, and spacing live in `style.css` (see the `:root` block at
  the top for the color palette).

## Hosting it for free with GitHub Pages

1. Push this folder to a GitHub repository.
2. Go to the repo's **Settings → Pages**.
3. Under "Build and deployment", set the source to your main branch (root).
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Contact form

The Contact page submits to Formspree (`sarahmulig22@gmail.com`). The first
submission triggers a one-time confirmation email — click the link in it to
activate the form.
