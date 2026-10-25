window.PROBLEM = {
 "id": "2552",
 "title": "Count Increasing Quadruplets",
 "level": "Hard",
 "topic": "Prefix Sum",
 "question": "Count the index quadruples i<j<k<l with nums[i] < nums[k] < nums[j] < nums[l] (nums is a permutation of 1…n). Example: [1,3,2,4,5] → 2.",
 "why": "[1,3,2,4,5]: (1,3,2,4) and (1,3,2,5) fit nums[i] < nums[k] < nums[j] < nums[l] → 2.",
 "idea": "We need i<j<k<l with nums[i] < nums[k] < nums[j] < nums[l]. For each pair j<k with nums[j] > nums[k], the count is (how many i<j are smaller than nums[k]) × (how many l>k are larger than nums[j]). Keep less[k] = number of earlier elements below nums[k] updated as j moves right, and count larger elements to the right of k while scanning k from the end.",
 "input": "nums = [1,3,2,4,5]",
 "output": "2",
 "notes": [],
 "best": "We need i<j<k<l with nums[i] < nums[k] < nums[j] < nums[l]. For each pair j<k with nums[j] > nums[k], the count is (how many i<j are smaller than nums[k]) × (how many l>k are larger than nums[j]). Keep less[k] = number of earlier elements below nums[k] updated as j moves right, and count larger elements to the right of k while scanning k from the end.",
 "variants": [
  {
   "name": "For each (j, k) multiply smaller-left by larger-right",
   "code": "class Solution:\n    def countQuadruplets(self, nums):\n        n = len(nums)\n        less = [0] * n\n        res = 0\n        for j in range(n):\n            great = 0\n            for k in range(n - 1, j, -1):\n                if nums[k] > nums[j]:\n                    great += 1\n                elif nums[k] < nums[j]:\n                    res += less[k] * great\n            for k in range(j + 1, n):\n                if nums[j] < nums[k]:\n                    less[k] += 1\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "We need i<j<k<l with nums[i] < nums[k] < nums[j] < nums[l]. For each pair j<k with nums[j] > nums[k], the count is (how many i<j are smaller than nums[k]) × (how many l>k are larger than nums[j]). Keep less[k] = number of earlier elements below nums[k] updated as j moves right, and count larger elements to the right of k while scanning k from the end.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every four indices",
   "tag": "Brute force",
   "code": "class Solution:\n    def countQuadruplets(self, nums):\n        return sum(1 for i, j, k, l in combinations(range(len(nums)), 4)\n                   if nums[i] < nums[k] < nums[j] < nums[l])",
   "time": "O(n⁴)",
   "space": "O(1)",
   "explain": "Check all index quadruples i<j<k<l against the condition.",
   "frames": [],
   "alt": true
  }
 ]
};
