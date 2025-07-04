#!/bin/sh
for a in $(git ls-files '*.html' '*.css' '*.js'); do
  ./ia-to-gh.pl $a > 0;
  mv 0 $a;
done
