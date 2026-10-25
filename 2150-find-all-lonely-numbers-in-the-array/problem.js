window.PROBLEM = {
 "id": "2150",
 "title": "Find All Lonely Numbers in the Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A number x is 'lonely' if it appears exactly once in the list and neither x − 1 nor x + 1 appears at all. Return all the lonely numbers (any order). Example: [10,6,5,8] → [10,8].",
 "why": "A number is lonely if it appears exactly once and neither x−1 nor x+1 appears. List all lonely numbers.",
 "idea": "Count everything once; then check each number's count and its two neighbours.",
 "input": "[10,6,5,8]",
 "output": "[10,8]",
 "notes": [],
 "best": "Count everything once; then check each number's count and its two neighbours.",
 "variants": [
  {
   "name": "Counter lookups",
   "code": "class Solution:\n    def findLonely(self, nums):\n        cnt = Counter(nums)\n        return [x for x in nums if cnt[x] == 1 and cnt[x - 1] == 0 and cnt[x + 1] == 0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count everything once; then check each number's count and its two neighbours.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort and compare neighbours",
   "tag": "Alternative",
   "code": "class Solution:\n    def findLonely(self, nums):\n        a = sorted(nums)\n        res = []\n        for i, x in enumerate(a):\n            if i > 0 and x - a[i - 1] <= 1: continue\n            if i + 1 < len(a) and a[i + 1] - x <= 1: continue\n            res.append(x)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "After sorting, a number is lonely when it differs from both neighbours by more than 1.",
   "frames": [],
   "alt": true
  }
 ]
};
