window.PROBLEM = {
 "id": "3171",
 "title": "Find Subarray With Bitwise OR Closest to K",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "Return the minimum value of |k − (bitwise OR of a subarray)| over all non-empty subarrays of nums. Example: [1,2,4,5], k=3 → 0 (the subarray [1,2] has OR 3).",
 "why": "[1,2,4,5], k=3: the subarray [1,2] has OR 3 → difference 0.",
 "idea": "OR only ever adds bits, so the subarrays ending at a position have at most ~30 distinct OR values. Keep that set, update it with each new number (OR every old value, add the number itself) and track the smallest |value − k|.",
 "input": "nums = [1,2,4,5], k = 3",
 "output": "0",
 "notes": [],
 "best": "OR only ever adds bits, so the subarrays ending at a position have at most ~30 distinct OR values. Keep that set, update it with each new number (OR every old value, add the number itself) and track the smallest |value − k|.",
 "variants": [
  {
   "name": "Keep the few distinct ORs ending here",
   "code": "class Solution:\n    def minimumDifference(self, nums, k):\n        best = float('inf')\n        cur = set()\n        for x in nums:\n            cur = {x | a for a in cur}\n            cur.add(x)\n            for v in cur:\n                best = min(best, abs(v - k))\n        return best",
   "time": "O(n log max)",
   "space": "O(log max)",
   "explain": "OR only ever adds bits, so the subarrays ending at a position have at most ~30 distinct OR values. Keep that set, update it with each new number (OR every old value, add the number itself) and track the smallest |value − k|.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every subarray",
   "tag": "Brute force",
   "code": "class Solution:\n    def minimumDifference(self, nums, k):\n        best = float('inf')\n        for i in range(len(nums)):\n            cur = 0\n            for j in range(i, len(nums)):\n                cur |= nums[j]\n                best = min(best, abs(cur - k))\n                if cur > k:\n                    break\n        return best",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For every start extend to the right, keep the running OR and the best difference; stop early once the OR exceeds k.",
   "frames": [],
   "alt": true
  }
 ]
};
