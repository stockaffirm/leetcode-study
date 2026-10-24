#!/bin/bash
# Mirror the site + pipeline into the repo clone, commit and push. Usage: push.sh "message"
set -e
R=~/Claude/leetcode-study-repo
cd $R && git pull -q
rsync -a --delete --exclude .git --exclude tools ~/Claude/leetcode-study/ $R/
rsync -a ~/Claude/leetcode-study-tools/gen/ $R/tools/gen/ && cp ~/Claude/leetcode-study-tools/lessons.js $R/tools/
cp ~/Claude/leetcode-study-tools/push.sh $R/tools/ 2>/dev/null || true
git add -A && git commit -q -m "$1

Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>" && git push -q origin main && git log --oneline | head -1
