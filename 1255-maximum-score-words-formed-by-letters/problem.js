window.PROBLEM = {
 "id": "1255",
 "title": "Maximum Score Words Formed by Letters",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "Choose a set of words that can be spelled using the given letters (each letter at most as often as it appears, shared across all chosen words); each letter has a score. Return the maximum total score of the chosen words. Example: words ['dog','cat','dad','good'], letters [a,a,c,d,d,d,g,o,o], the sample scores → 23.",
 "why": "words ['dog','cat','dad','good'] with the given letters: choose 'dad' and 'good' → score 23.",
 "idea": "Each letter can be used only as many times as it appears in letters. Try every subset of words with DFS (take or skip each word), subtracting the letter counts when taking it and abandoning the branch if a letter runs out. Score = sum of letter scores of the chosen words; keep the best.",
 "input": "words = [\"dog\",\"cat\",\"dad\",\"good\"], letters = [\"a\",\"a\",\"c\",\"d\",\"d\",\"d\",\"g\",\"o\",\"o\"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]",
 "output": "23",
 "notes": [],
 "best": "Each letter can be used only as many times as it appears in letters. Try every subset of words with DFS (take or skip each word), subtracting the letter counts when taking it and abandoning the branch if a letter runs out. Score = sum of letter scores of the chosen words; keep the best.",
 "variants": [
  {
   "name": "Backtrack over subsets of words with a letter budget",
   "code": "class Solution:\n    def maxScoreWords(self, words, letters, score):\n        avail = Counter(letters)\n        def value(w):\n            return sum(score[ord(c) - 97] for c in w)\n        def go(i):\n            if i == len(words):\n                return 0\n            best = go(i + 1)\n            need = Counter(words[i])\n            if all(avail[c] >= n for c, n in need.items()):\n                for c, n in need.items():\n                    avail[c] -= n\n                best = max(best, value(words[i]) + go(i + 1))\n                for c, n in need.items():\n                    avail[c] += n\n            return best\n        return go(0)",
   "time": "O(2ⁿ·L)",
   "space": "O(n)",
   "explain": "Each letter can be used only as many times as it appears in letters. Try every subset of words with DFS (take or skip each word), subtracting the letter counts when taking it and abandoning the branch if a letter runs out. Score = sum of letter scores of the chosen words; keep the best.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bitmask over word subsets",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxScoreWords(self, words, letters, score):\n        have = Counter(letters)\n        best = 0\n        n = len(words)\n        for mask in range(1 << n):\n            need = Counter()\n            total = 0\n            for i in range(n):\n                if mask >> i & 1:\n                    need.update(words[i])\n                    total += sum(score[ord(c) - 97] for c in words[i])\n            if all(have[c] >= v for c, v in need.items()):\n                best = max(best, total)\n        return best",
   "time": "O(2ⁿ·L)",
   "space": "O(26)",
   "explain": "Enumerate every subset of words with a bitmask and test the letter budget.",
   "frames": [],
   "alt": true
  }
 ]
};
