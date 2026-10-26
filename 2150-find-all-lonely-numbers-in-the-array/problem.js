window.PROBLEM = {
 "id": "2150",
 "title": "Find All Lonely Numbers in the Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
