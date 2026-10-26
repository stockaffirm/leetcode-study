window.PROBLEM = {
 "id": "3640",
 "title": "Trionic Array II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,4,2,7] → 1,4 up; 4,2 down; 2,7 up → sum 14.",
 "idea": "A trionic subarray is increasing, then decreasing, then increasing. Keep the best sum of a subarray ending at i in each phase: inc1[i] (first rise, ≥ 2 elements), dec[i], inc2[i]. When nums[i−1] < nums[i] extend a rise: inc1[i] = max(inc1[i−1], nums[i−1]) + nums[i], inc2[i] = max(inc2[i−1], dec[i−1]) + nums[i]; when nums[i−1] > nums[i], dec[i] = max(dec[i−1], inc1[i−1]) + nums[i]. The answer is the best inc2.",
 "input": "nums = [1,4,2,7]",
 "output": "14",
 "notes": [],
 "best": "A trionic subarray is increasing, then decreasing, then increasing. Keep the best sum of a subarray ending at i in each phase: inc1[i] (first rise, ≥ 2 elements), dec[i], inc2[i]. When nums[i−1] < nums[i] extend a rise: inc1[i] = max(inc1[i−1], nums[i−1]) + nums[i], inc2[i] = max(inc2[i−1], dec[i−1]) + nums[i]; when nums[i−1] > nums[i], dec[i] = max(dec[i−1], inc1[i−1]) + nums[i]. The answer is the best inc2.",
 "variants": [
  {
   "name": "Three-phase DP: up, down, up",
   "code": "class Solution:\n    def maxSumTrionic(self, nums):\n        n = len(nums)\n        NEG = float('-inf')\n        inc1 = [NEG] * n\n        dec = [NEG] * n\n        inc2 = [NEG] * n\n        for i in range(1, n):\n            if nums[i - 1] < nums[i]:\n                inc1[i] = max(inc1[i - 1], nums[i - 1]) + nums[i]\n                inc2[i] = max(inc2[i - 1], dec[i - 1]) + nums[i]\n            elif nums[i - 1] > nums[i]:\n                dec[i] = max(dec[i - 1], inc1[i - 1]) + nums[i]\n        return max(inc2)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A trionic subarray is increasing, then decreasing, then increasing. Keep the best sum of a subarray ending at i in each phase: inc1[i] (first rise, ≥ 2 elements), dec[i], inc2[i]. When nums[i−1] < nums[i] extend a rise: inc1[i] = max(inc1[i−1], nums[i−1]) + nums[i], inc2[i] = max(inc2[i−1], dec[i−1]) + nums[i]; when nums[i−1] > nums[i], dec[i] = max(dec[i−1], inc1[i−1]) + nums[i]. The answer is the best inc2.",
   "frames": []
  }
 ]
};
