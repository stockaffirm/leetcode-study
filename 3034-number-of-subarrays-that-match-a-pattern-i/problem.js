window.PROBLEM = {
 "id": "3034",
 "title": "Number of Subarrays That Match a Pattern I",
 "level": "Medium",
 "topic": "Array / String",
 "question": "You are given a list nums and a pattern made of 1, 0 and −1. A run of m + 1 numbers (neighbouring positions) matches the pattern if for every k from 0 to m−1: pattern[k] = 1 means the next number is bigger, 0 means equal, −1 means smaller than the previous one. Return how many runs in nums match the pattern. Example: nums [1,2,3,4,5,6], pattern [1,1] → every run of three rising numbers matches → 4.",
 "why": "The pattern is a list of 1 (goes up), 0 (stays equal), −1 (goes down). Count runs of the list whose consecutive steps follow the pattern exactly.",
 "idea": "A window of length m+1 matches if for every k the step from nums[i+k] to nums[i+k+1] has the sign pattern[k]. Check each window.",
 "input": "nums [1,2,3,4,5,6], pattern [1,1]",
 "output": "4",
 "notes": [],
 "best": "A window of length m+1 matches if for every k the step from nums[i+k] to nums[i+k+1] has the sign pattern[k]. Check each window.",
 "variants": [
  {
   "name": "Check each window against the pattern",
   "code": "class Solution:\n    def countMatchingSubarrays(self, nums, pattern):\n        m, count = len(pattern), 0\n        for i in range(len(nums) - m):\n            ok = True\n            for k in range(m):\n                a, b = nums[i + k], nums[i + k + 1]\n                want = 1 if b > a else (0 if b == a else -1)\n                if want != pattern[k]:\n                    ok = False\n                    break\n            if ok: count += 1\n        return count",
   "time": "O(n·m)",
   "space": "O(1)",
   "explain": "A window of length m+1 matches if for every k the step from nums[i+k] to nums[i+k+1] has the sign pattern[k]. Check each window.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Turn steps into signs",
   "tag": "Alternative",
   "code": "class Solution:\n    def countMatchingSubarrays(self, nums, pattern):\n        signs = [(b > a) - (b < a) for a, b in zip(nums, nums[1:])]\n        m = len(pattern)\n        return sum(1 for i in range(len(signs) - m + 1) if signs[i:i + m] == pattern)",
   "time": "O(n·m)",
   "space": "O(n)",
   "explain": "Convert the list into its up/same/down signs and look for the pattern as a slice.",
   "frames": [],
   "alt": true
  }
 ]
};
