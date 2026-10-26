window.PROBLEM = {
 "id": "2411",
 "title": "Smallest Subarrays With Maximum Bitwise OR",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[1,0,2,1,3] → [3,3,2,2,1].",
 "idea": "For each start i the maximum OR over subarrays starting at i equals the OR of nums[i:]. The shortest subarray achieving it must reach the latest 'first occurrence' of every bit: keep last[b] = nearest index ≥ i containing bit b (scanning from the right) and take max(last) − i + 1.",
 "input": "nums = [1,0,2,1,3]",
 "output": "[3, 3, 2, 2, 1]",
 "notes": [],
 "best": "For each start i the maximum OR over subarrays starting at i equals the OR of nums[i:]. The shortest subarray achieving it must reach the latest 'first occurrence' of every bit: keep last[b] = nearest index ≥ i containing bit b (scanning from the right) and take max(last) − i + 1.",
 "variants": [
  {
   "name": "Last position of each bit, scanning from the right",
   "code": "class Solution:\n    def smallestSubarrays(self, nums):\n        n = len(nums)\n        last = [0] * 31\n        res = [1] * n\n        for i in range(n - 1, -1, -1):\n            for b in range(31):\n                if (nums[i] >> b) & 1:\n                    last[b] = i\n            res[i] = max(1, max(last) - i + 1)\n        return res",
   "time": "O(n·30)",
   "space": "O(30)",
   "explain": "For each start i the maximum OR over subarrays starting at i equals the OR of nums[i:]. The shortest subarray achieving it must reach the latest 'first occurrence' of every bit: keep last[b] = nearest index ≥ i containing bit b (scanning from the right) and take max(last) − i + 1.",
   "frames": []
  }
 ]
};
