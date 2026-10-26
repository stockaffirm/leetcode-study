window.PROBLEM = {
 "id": "1208",
 "title": "Get Equal Substrings Within Budget",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Changing s[i] to t[i] costs |s[i] − t[i]| (alphabet distance). Return the length of the longest substring of s that can be changed into the matching substring of t with total cost at most maxCost. Example: 'abcd', 'bcdf', 3 → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix costs and binary search",
   "tag": "Alternative",
   "code": "class Solution:\n    def equalSubstring(self, s, t, maxCost):\n        pre = [0]\n        for a, b in zip(s, t):\n            pre.append(pre[-1] + abs(ord(a) - ord(b)))\n        best = 0\n        for r in range(1, len(pre)):\n            l = bisect_left(pre, pre[r] - maxCost)\n            best = max(best, r - l)\n        return best",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "With prefix sums of costs, for each right end binary search the leftmost start that is still affordable.",
   "frames": [],
   "alt": true
  }
 ]
};
