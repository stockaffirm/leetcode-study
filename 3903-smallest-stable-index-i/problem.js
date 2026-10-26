window.PROBLEM = {
 "id": "3903",
 "title": "Smallest Stable Index I",
 "level": "Easy",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[5,0,1,4], k=3 → index 3: max 5, min 4 → 1 ≤ 3 → 3.",
 "idea": "The instability of index i is max(nums[0..i]) − min(nums[i..]). Precompute the suffix minimum, sweep with a running prefix maximum, and return the first index with instability ≤ k.",
 "input": "nums = [5,0,1,4], k = 3",
 "output": "3",
 "notes": [],
 "best": "The instability of index i is max(nums[0..i]) − min(nums[i..]). Precompute the suffix minimum, sweep with a running prefix maximum, and return the first index with instability ≤ k.",
 "variants": [
  {
   "name": "Prefix maximum and suffix minimum",
   "code": "class Solution:\n    def firstStableIndex(self, nums, k):\n        n = len(nums)\n        suf = nums[:]\n        for i in range(n - 2, -1, -1):\n            suf[i] = min(suf[i], suf[i + 1])\n        top = float('-inf')\n        for i in range(n):\n            top = max(top, nums[i])\n            if top - suf[i] <= k:\n                return i\n        return -1",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The instability of index i is max(nums[0..i]) − min(nums[i..]). Precompute the suffix minimum, sweep with a running prefix maximum, and return the first index with instability ≤ k.",
   "frames": []
  }
 ]
};
