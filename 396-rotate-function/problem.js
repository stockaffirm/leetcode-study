window.PROBLEM = {
 "id": "396",
 "title": "Rotate Function",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
