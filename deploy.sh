#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m "$1"

git push -f https://github.com/Minsoo-web/my-blog.git master:gh-pages

cd -