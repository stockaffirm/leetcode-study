window.PROBLEM = {
 "id": "1208",
 "title": "Get Equal Substrings Within Budget",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'abcd' → 'bcdf' costs 1,1,1,2; with budget 3 the longest affordable window is 3.",
 "idea": "Turning s[i] into t[i] costs |s[i] − t[i]|. Find the longest window whose total cost ≤ maxCost: expand the right end, shrink from the left while the cost is too high.",
 "input": "s = \"abcd\", t = \"bcdf\", maxCost = 3",
 "output": "3",
 "notes": [],
 "best": "Turning s[i] into t[i] costs |s[i] − t[i]|. Find the longest window whose total cost ≤ maxCost: expand the right end, shrink from the left while the cost is too high.",
 "variants": [
  {
   "name": "Window of letters whose total cost fits maxCost",
   "code": "class Solution:\n    def equalSubstring(self, s, t, maxCost):\n        l = cost = best = 0\n        for r in range(len(s)):\n            cost += abs(ord(s[r]) - ord(t[r]))\n            while cost > maxCost:\n                cost -= abs(ord(s[l]) - ord(t[l]))\n                l += 1\n            best = max(best, r - l + 1)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Turning s[i] into t[i] costs |s[i] − t[i]|. Find the longest window whose total cost ≤ maxCost: expand the right end, shrink from the left while the cost is too high.",
   "frames": []
  }
 ]
};
