window.PROBLEM = {
 "id": "3583",
 "title": "Count Special Triplets",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[6,3,6]: i=0, j=1, k=2 with 6 = 2·3 on both sides → 1 triplet.",
 "idea": "A special triplet has i<j<k with nums[i] = nums[k] = 2·nums[j]. For every middle j multiply the number of earlier elements equal to 2·nums[j] by the number of later ones. Keep a counter of the left part and a counter of the right part while sweeping. Modulo 1e9+7.",
 "input": "nums = [6,3,6]",
 "output": "1",
 "notes": [],
 "best": "A special triplet has i<j<k with nums[i] = nums[k] = 2·nums[j]. For every middle j multiply the number of earlier elements equal to 2·nums[j] by the number of later ones. Keep a counter of the left part and a counter of the right part while sweeping. Modulo 1e9+7.",
 "variants": [
  {
   "name": "For each middle j, count 2·nums[j] on both sides",
   "code": "class Solution:\n    def specialTriplets(self, nums):\n        MOD = 10**9 + 7\n        left, right = Counter(), Counter(nums)\n        res = 0\n        for x in nums:\n            right[x] -= 1\n            res += left[2 * x] * right[2 * x]\n            left[x] += 1\n        return res % MOD",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A special triplet has i<j<k with nums[i] = nums[k] = 2·nums[j]. For every middle j multiply the number of earlier elements equal to 2·nums[j] by the number of later ones. Keep a counter of the left part and a counter of the right part while sweeping. Modulo 1e9+7.",
   "frames": []
  }
 ]
};
