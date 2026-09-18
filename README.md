# CS 180 project portfolio

A GitHub Pages portfolio for CS 180 coursework.

## Structure

- `/` — Original CS 180 course portfolio (kept during migration)
- `/cs180/` — CS 180 course portfolio
- `/cs180/proj0/` — Project 0: Becoming Friends with Your Camera
- `/cs180/proj1/` — Project 1: Colorizing the Prokudin-Gorskii Collection

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open:

- <http://localhost:8000/>
- <http://localhost:8000/cs180/>
- <http://localhost:8000/cs180/proj0/>
- <http://localhost:8000/cs180/proj1/>

## Export the required PDF

Open the published project page in Chrome, choose **Print → Save as PDF**, expand
**More settings**, and enable **Headers and footers** so the public URL appears
in the PDF.

Only report pages and result images belong in this public repository. Keep the
Python implementation, original scans, and virtual environment outside it.
