window.PROBLEM = {
 "id": "1307",
 "title": "Verbal Arithmetic Puzzle",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "You are given a list of words and a result word. Assign a DIFFERENT digit 0–9 to each different letter so that the sum of the numbers spelled by the words equals the number spelled by the result (like SEND + MORE = MONEY). No number may start with a zero (unless it is a single digit). Return true if such an assignment exists. Example: ['AB','BA'] and 'CC' → A=1, B=2, C=3 gives 12 + 21 = 33 → true; ['AB','AB'] and 'AC' → false.",
 "why": "Letters stand for different digits so that the words add up to the result (like SEND + MORE = MONEY); no word may start with 0. Is there an assignment?",
 "idea": "Give every letter a weight: +10^position in each summed word, −10^position in the result. A valid assignment makes the weighted sum zero. Backtrack over letters trying unused digits (not 0 for leading letters).",
 "input": "words [AB, BA], result CC",
 "output": "True",
 "notes": [],
 "best": "Give every letter a weight: +10^position in each summed word, −10^position in the result. A valid assignment makes the weighted sum zero. Backtrack over letters trying unused digits (not 0 for leading letters).",
 "variants": [
  {
   "name": "Backtracking with letter weights",
   "code": "class Solution:\n    def isSolvable(self, words, result):\n        weight = defaultdict(int)\n        leading = set()\n        for w in words:\n            for i, ch in enumerate(reversed(w)): weight[ch] += 10 ** i\n            if len(w) > 1: leading.add(w[0])\n        for i, ch in enumerate(reversed(result)): weight[ch] -= 10 ** i\n        if len(result) > 1: leading.add(result[0])\n        letters = list(weight)\n        used = [False] * 10\n        def go(k, total):\n            if k == len(letters): return total == 0\n            ch = letters[k]\n            for d in range(10):\n                if used[d] or (d == 0 and ch in leading): continue\n                used[d] = True\n                if go(k + 1, total + weight[ch] * d): return True\n                used[d] = False\n            return False\n        return go(0, 0)",
   "time": "O(10!)",
   "space": "O(10)",
   "explain": "Give every letter a weight: +10^position in each summed word, −10^position in the result. A valid assignment makes the weighted sum zero. Backtrack over letters trying unused digits (not 0 for leading letters).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every digit assignment",
   "tag": "Brute force",
   "code": "class Solution:\n    def isSolvable(self, words, result):\n        letters = sorted({c for w in words + [result] for c in w})\n        if len(letters) > 10: return False\n        lead = {w[0] for w in words + [result] if len(w) > 1}\n        def val(w, m): return int(''.join(str(m[c]) for c in w))\n        for perm in permutations(range(10), len(letters)):\n            m = dict(zip(letters, perm))\n            if any(m[c] == 0 for c in lead): continue\n            if sum(val(w, m) for w in words) == val(result, m): return True\n        return False",
   "time": "O(10!/(10−k)!)",
   "space": "O(k)",
   "explain": "Try every way of giving distinct digits to the letters (fine for few letters).",
   "frames": [],
   "alt": true
  }
 ]
};
