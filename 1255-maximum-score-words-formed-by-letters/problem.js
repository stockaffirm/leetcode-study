window.PROBLEM = {
 "id": "1255",
 "title": "Maximum Score Words Formed by Letters",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
