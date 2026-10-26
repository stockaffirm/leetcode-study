window.PROBLEM = {
 "id": "1590",
 "title": "Make Sum Divisible by P",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[3,1,4,2], p=6: remove [4] → remaining sum 6 → 1.",
 "idea": "Let r = total % p. We need to remove a subarray whose sum has remainder r, as short as possible (but not the whole array). Walk prefix remainders and store the latest index of each; at prefix remainder cur look for the earlier prefix with remainder (cur − r) mod p.",
 "input": "nums = [3,1,4,2], p = 6",
 "output": "1",
 "notes": [],
 "best": "Let r = total % p. We need to remove a subarray whose sum has remainder r, as short as possible (but not the whole array). Walk prefix remainders and store the latest index of each; at prefix remainder cur look for the earlier prefix with remainder (cur − r) mod p.",
 "variants": [
  {
   "name": "Shortest subarray with the right remainder",
   "code": "class Solution:\n    def minSubarray(self, nums, p):\n        r = sum(nums) % p\n        if r == 0:\n            return 0\n        last = {0: -1}\n        cur = 0\n        best = len(nums)\n        for i, x in enumerate(nums):\n            cur = (cur + x) % p\n            need = (cur - r) % p\n            if need in last:\n                best = min(best, i - last[need])\n            last[cur] = i\n        return best if best < len(nums) else -1",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Let r = total % p. We need to remove a subarray whose sum has remainder r, as short as possible (but not the whole array). Walk prefix remainders and store the latest index of each; at prefix remainder cur look for the earlier prefix with remainder (cur − r) mod p.",
   "frames": []
  }
 ]
};
