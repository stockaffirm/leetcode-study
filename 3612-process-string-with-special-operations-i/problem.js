window.PROBLEM = {
 "id": "3612",
 "title": "Process String with Special Operations I",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "'a#b%*' → a, aa, aab, baa, ba.",
 "idea": "Keep the result in a list: a letter appends, '*' removes the last letter if any, '#' doubles the list, '%' reverses it.",
 "input": "s = \"a#b%*\"",
 "output": "\"ba\"",
 "notes": [],
 "best": "Keep the result in a list: a letter appends, '*' removes the last letter if any, '#' doubles the list, '%' reverses it.",
 "variants": [
  {
   "name": "Simulate with a list",
   "code": "class Solution:\n    def processStr(self, s):\n        res = []\n        for c in s:\n            if c == '*':\n                if res:\n                    res.pop()\n            elif c == '#':\n                res = res + res\n            elif c == '%':\n                res.reverse()\n            else:\n                res.append(c)\n        return ''.join(res)",
   "time": "O(n·2ⁿ) worst",
   "space": "O(result)",
   "explain": "Keep the result in a list: a letter appends, '*' removes the last letter if any, '#' doubles the list, '%' reverses it.",
   "frames": []
  }
 ]
};
