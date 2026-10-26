window.PROBLEM = {
 "id": "1307",
 "title": "Verbal Arithmetic Puzzle",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
