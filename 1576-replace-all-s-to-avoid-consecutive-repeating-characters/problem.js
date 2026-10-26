window.PROBLEM = {
 "id": "1576",
 "title": "Replace All ?'s to Avoid Consecutive Repeating Characters",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "'?zs' → 'azs'.",
 "idea": "At most two neighbours constrain a '?', and three letters are available, so one always works. For each '?' take the first of 'a', 'b', 'c' that differs from the previous character and the next character.",
 "input": "s = \"?zs\"",
 "output": "\"azs\"",
 "notes": [],
 "best": "At most two neighbours constrain a '?', and three letters are available, so one always works. For each '?' take the first of 'a', 'b', 'c' that differs from the previous character and the next character.",
 "variants": [
  {
   "name": "Pick any of 'a', 'b', 'c' that differs from both neighbours",
   "code": "class Solution:\n    def modifyString(self, s):\n        chars = list(s)\n        for i, c in enumerate(chars):\n            if c == '?':\n                left = chars[i - 1] if i else ''\n                right = chars[i + 1] if i + 1 < len(chars) else ''\n                for ch in 'abc':\n                    if ch != left and ch != right:\n                        chars[i] = ch\n                        break\n        return ''.join(chars)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "At most two neighbours constrain a '?', and three letters are available, so one always works. For each '?' take the first of 'a', 'b', 'c' that differs from the previous character and the next character.",
   "frames": []
  }
 ]
};
