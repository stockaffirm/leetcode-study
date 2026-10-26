window.PROBLEM = {
 "id": "3389",
 "title": "Minimum Operations to Make Character Frequencies Equal",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A string is good if all its letters occur the same number of times. You may delete a letter, insert a letter, or change a letter to the next one in the alphabet ('z' cannot change). Return the minimum operations to make s good. Example: 'aaabc' → 2.",
 "why": "'aaabc': change one 'a' to 'b' and insert a 'c' so every letter appears twice → 2.",
 "idea": "Pick the common frequency f (1 … n). Walk the letters a…z. A letter can end with f copies or with 0. Extra copies cost 1 each whether deleted or turned into the next letter, but turning them into the next letter can fill that letter's deficit for free later. Keep a small DP (Dynamic Programming) over the 'carry' of extra copies passed to the next letter (carry 0 or exactly what the next letter needs); a deficit costs one insertion per missing copy. Take the best over all f.",
 "input": "s = \"aaabc\"",
 "output": "2",
 "notes": [],
 "best": "Pick the common frequency f (1 … n). Walk the letters a…z. A letter can end with f copies or with 0. Extra copies cost 1 each whether deleted or turned into the next letter, but turning them into the next letter can fill that letter's deficit for free later. Keep a small DP (Dynamic Programming) over the 'carry' of extra copies passed to the next letter (carry 0 or exactly what the next letter needs); a deficit costs one insertion per missing copy. Take the best over all f.",
 "variants": [
  {
   "name": "Try every target frequency; DP over letters with a carry",
   "code": "class Solution:\n    def makeStringGood(self, s):\n        cnt = Counter(s)\n        c = [cnt.get(chr(97 + i), 0) for i in range(26)]\n        n = len(s)\n        best = n\n        for f in range(1, n + 1):\n            dp = {0: 0}\n            for i in range(26):\n                need = max(0, f - c[i + 1]) if i < 25 else 0\n                new = {}\n                for x, cost in dp.items():\n                    t = c[i] + x\n                    if t >= f:\n                        ex = t - f\n                        for carry in {0, min(ex, need)}:\n                            if i == 25 and carry:\n                                continue\n                            v = cost + ex\n                            if v < new.get(carry, 10**9):\n                                new[carry] = v\n                    else:\n                        v = cost + f - t\n                        if v < new.get(0, 10**9):\n                            new[0] = v\n                    for carry in {0, min(t, need)}:\n                        if i == 25 and carry:\n                            continue\n                        v = cost + t\n                        if v < new.get(carry, 10**9):\n                            new[carry] = v\n                dp = new\n            best = min(best, dp.get(0, 10**9))\n        return best",
   "time": "O(n·26)",
   "space": "O(26)",
   "explain": "Pick the common frequency f (1 … n). Walk the letters a…z. A letter can end with f copies or with 0. Extra copies cost 1 each whether deleted or turned into the next letter, but turning them into the next letter can fill that letter's deficit for free later. Keep a small DP (Dynamic Programming) over the 'carry' of extra copies passed to the next letter (carry 0 or exactly what the next letter needs); a deficit costs one insertion per missing copy. Take the best over all f.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Full carry range DP",
   "tag": "Brute force",
   "code": "class Solution:\n    def makeStringGood(self, s):\n        cnt = Counter(s)\n        c = [cnt.get(chr(97 + i), 0) for i in range(26)]\n        n = len(s)\n        best = n\n        for f in range(1, n + 1):\n            dp = {0: 0}\n            for i in range(26):\n                new = {}\n                for x, cost in dp.items():\n                    t = c[i] + x\n                    for fin in (0, f):\n                        if t >= fin:\n                            ex = t - fin\n                            for carry in range(ex + 1):\n                                if i == 25 and carry:\n                                    continue\n                                if cost + ex < new.get(carry, 10**9):\n                                    new[carry] = cost + ex\n                        elif cost + fin - t < new.get(0, 10**9):\n                            new[0] = cost + fin - t\n                dp = new\n            best = min(best, dp.get(0, 10**9))\n        return best",
   "time": "O(n·26·n)",
   "space": "O(n)",
   "explain": "Same idea but try every possible carry (any number of excess copies moved to the next letter).",
   "frames": [],
   "alt": true
  }
 ]
};
