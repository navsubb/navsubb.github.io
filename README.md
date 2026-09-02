# CS 180 Project 0 website

A responsive, print-friendly static site for “Becoming Friends with Your
Camera.”

## Add your work

1. Put your photos in `images/` using these exact names:
   - `portrait-close.jpg`
   - `portrait-zoom.jpg`
   - `building-zoom.jpg`
   - `building-close.jpg`
   - `dolly-zoom.gif`
2. Replace `Your Name` near the bottom of `index.html`.
3. Update the observations in `index.html` so they describe your own results.

Missing images display as labeled placeholders, so you can work on the page
before every photo is ready.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish with GitHub Pages

1. Create a new GitHub repository and add these files.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select your default branch and the `/ (root)` folder, then save.

GitHub will provide the public URL to submit to the course gallery.

## Export the required PDF

Open the published page in Chrome, choose **Print → Save as PDF**, expand
**More settings**, and enable **Headers and footers** so the public URL appears
in the PDF.
