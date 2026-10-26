window.PROBLEM = {
 "id": "3371",
 "title": "Identify the Largest Outlier in an Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[2,3,5,10]: if 5 is the sum of the specials 2 and 3, the outlier is 10. The total is 20 = 2·5 + 10.",
 "idea": "If s is the sum element and o the outlier, the total of the array is (special numbers) + s + o = 2s + o. So for every candidate s the outlier must be total − 2s. Check that this number exists (at a different position) and keep the biggest.",
 "input": "nums = [2,3,5,10]",
 "output": "10",
 "notes": [],
 "best": "If s is the sum element and o the outlier, the total of the array is (special numbers) + s + o = 2s + o. So for every candidate s the outlier must be total − 2s. Check that this number exists (at a different position) and keep the biggest.",
 "variants": [
  {
   "name": "Try every value as the sum element",
   "code": "class Solution:\n    def getLargestOutlier(self, nums):\n        total = sum(nums)\n        cnt = Counter(nums)\n        best = -inf\n        for s in cnt:\n            o = total - 2 * s\n            if o in cnt and (o != s or cnt[s] > 1):\n                best = max(best, o)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "If s is the sum element and o the outlier, the total of the array is (special numbers) + s + o = 2s + o. So for every candidate s the outlier must be total − 2s. Check that this number exists (at a different position) and keep the biggest.",
   "frames": []
  }
 ]
};
