# Thesis
Untersuchung der Konfliktmanagementstrategien verschiedener offlinefähiger Systeme


## Installed tex packages
* `texlive texlive-latex-extra texlive-lang-german`
* `texlive-science`
* `texlive-bibtex-extra`
* `biber`
* `texlive-fonts-extra`
* `texlive-generic-extra` (glossaries)

## Create pfd
` pdflatex [tex-filename]`

1. pdflatex filename
2. bibtex filename
3. makeglossaries filename
4. pdflatex filename
5. pdflatex filename

or add the following line to your `~/.bashrc` or `.profile`
``` alias texbib = 'pdflatex thesis.tex && bibtex thesis && makeglossaries thesis && pdflatex thesis.tex && pdflatex thesis.tex' ```


