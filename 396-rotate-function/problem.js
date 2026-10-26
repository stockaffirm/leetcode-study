window.PROBLEM = {
 "id": "396",
 "title": "Rotate Function",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "F(k) = 0·a₀ + 1·a₁ + … + (n−1)·a_{n−1} for the array rotated k positions. Return the maximum F(k). Example: [4,3,2,6] → 26.",
 "why": "[4,3,2,6]: F(0)=25, F(1)=16, F(2)=23, F(3)=26 → 26.",
 "idea": "F(k) = Σ i · arr_k[i] for the array rotated k times. Going from F(k−1) to F(k): F(k) = F(k−1) + sum(nums) − n · nums[n − k]. Compute F(0), update n−1 times and keep the maximum.",
 "input": "nums = [4,3,2,6]",
 "output": "26",
 "notes": [],
 "best": "F(k) = Σ i · arr_k[i] for the array rotated k times. Going from F(k−1) to F(k): F(k) = F(k−1) + sum(nums) − n · nums[n − k]. Compute F(0), update n−1 times and keep the maximum.",
 "variants": [
  {
   "name": "Update F(k) from F(k−1) in O(1)",
   "code": "class Solution:\n    def maxRotateFunction(self, nums):\n        n, total = len(nums), sum(nums)\n        f = sum(i * x for i, x in enumerate(nums))\n        best = f\n        for k in range(1, n):\n            f += total - n * nums[n - k]\n            best = max(best, f)\n        return best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "F(k) = Σ i · arr_k[i] for the array rotated k times. Going from F(k−1) to F(k): F(k) = F(k−1) + sum(nums) − n · nums[n − k]. Compute F(0), update n−1 times and keep the maximum.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compute every rotation",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxRotateFunction(self, nums):\n        n = len(nums)\n        return max(sum(i * nums[(i - k) % n] for i in range(n)) for k in range(n))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Evaluate F(k) directly for each rotation.",
   "frames": [],
   "alt": true
  }
 ]
};
