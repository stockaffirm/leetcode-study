window.PROBLEM = {
 "id": "3371",
 "title": "Identify the Largest Outlier in an Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "The array has n numbers: n − 2 'special' numbers, one number that equals the SUM of the special numbers, and one outlier (different positions, equal values are allowed). Return the largest number that could be the outlier. Example: [2,3,5,10] → 10 (specials 2 and 3, sum 5, outlier 10).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every pair of sum element and outlier",
   "tag": "Brute force",
   "code": "class Solution:\n    def getLargestOutlier(self, nums):\n        total = sum(nums)\n        best = -inf\n        for i in range(len(nums)):\n            for j in range(len(nums)):\n                if i != j and total - nums[i] - nums[j] == nums[i]:\n                    best = max(best, nums[j])\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For every choice of two positions (sum, outlier) check that the remaining numbers add up to the sum element.",
   "frames": [],
   "alt": true
  }
 ]
};
