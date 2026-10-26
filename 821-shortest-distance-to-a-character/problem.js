window.PROBLEM = {
 "id": "821",
 "title": "Shortest Distance to a Character",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "For every position, how far is the nearest copy of letter c? 'loveleetcode', 'e' → 3,2,1,0,1,0,0,1,2,2,1,0.",
 "idea": "Go left→right remembering the last c (distance back), then right→left remembering the next c, keeping the smaller distance at each position.",
 "input": "s=\"loveleetcode\", c='e'",
 "output": "[3,2,1,0,1,0,0,1,2,2,1,0]",
 "notes": [],
 "best": "Go left→right remembering the last c (distance back), then right→left remembering the next c, keeping the smaller distance at each position.",
 "variants": [
  {
   "name": "Left pass, then right pass",
   "code": "class Solution:\n    def shortestToChar(self, s, c):\n        n = len(s)\n        ans = [n] * n\n        prev = -n\n        for i in range(n):\n            if s[i] == c: prev = i\n            ans[i] = i - prev\n        prev = 2 * n\n        for i in range(n - 1, -1, -1):\n            if s[i] == c: prev = i\n            ans[i] = min(ans[i], prev - i)\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Go left→right remembering the last c (distance back), then right→left remembering the next c, keeping the smaller distance at each position.",
   "frames": []
  }
 ]
};
