# Thesis

## Installed tex packages

* `texlive texlive-latex-extra texlive-lang-german`
* `texlive-science`
* `texlive-bibtex-extra`
* `biber`
* `texlive-fonts-extra`
* `texlive-generic-extra` (glossaries)

## Create pfd
` pdflatex [tex-filename]`

1. pdflatex filename (with or without extensions)
2. bibtex filename (without extensions)
3. makeglossaries filename
4. pdflatex filename (with or without extensions)
5. pdflatex filename (with or without extensions)

or add the following line to your `~/.bashrc`
``` alias texbib = 'pdflatex main.tex && bibtex main && pdflatex main.tex && pdflatex main.tex' ```


