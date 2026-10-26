window.PROBLEM = {
 "id": "3714",
 "title": "Longest Balanced Substring II",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'abbac' → 'abba' (a and b twice each) → 4.",
 "idea": "A balanced substring has 1, 2 or 3 distinct letters, all with equal counts. One letter: the longest run. Two letters (x,y): split the string at the third letter and find the longest piece where count(x) − count(y) returns to the same prefix value (hash map of first occurrence). Three letters: prefix pairs (a − b, b − c) repeating. Take the maximum.",
 "input": "s = \"abbac\"",
 "output": "4",
 "notes": [],
 "best": "A balanced substring has 1, 2 or 3 distinct letters, all with equal counts. One letter: the longest run. Two letters (x,y): split the string at the third letter and find the longest piece where count(x) − count(y) returns to the same prefix value (hash map of first occurrence). Three letters: prefix pairs (a − b, b − c) repeating. Take the maximum.",
 "variants": [
  {
   "name": "Three cases: one, two or three distinct letters",
   "code": "class Solution:\n    def longestBalanced(self, s):\n        best = 0\n        run = 0\n        for i, c in enumerate(s):\n            run = run + 1 if i and s[i - 1] == c else 1\n            best = max(best, run)\n        for x, y, z in (('a', 'b', 'c'), ('a', 'c', 'b'), ('b', 'c', 'a')):\n            first = {0: -1}\n            diff = 0\n            for i, c in enumerate(s):\n                if c == z:\n                    first = {0: i}\n                    diff = 0\n                    continue\n                diff += 1 if c == x else -1\n                if diff in first:\n                    best = max(best, i - first[diff])\n                else:\n                    first[diff] = i\n        seen = {(0, 0): -1}\n        a = b = c2 = 0\n        for i, ch in enumerate(s):\n            if ch == 'a':\n                a += 1\n            elif ch == 'b':\n                b += 1\n            else:\n                c2 += 1\n            key = (a - b, b - c2)\n            if key in seen:\n                best = max(best, i - seen[key])\n            else:\n                seen[key] = i\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A balanced substring has 1, 2 or 3 distinct letters, all with equal counts. One letter: the longest run. Two letters (x,y): split the string at the third letter and find the longest piece where count(x) − count(y) returns to the same prefix value (hash map of first occurrence). Three letters: prefix pairs (a − b, b − c) repeating. Take the maximum.",
   "frames": []
  }
 ]
};
