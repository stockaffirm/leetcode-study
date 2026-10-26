window.PROBLEM = {
 "id": "2845",
 "title": "Count of Interesting Subarrays",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[3,2,4], modulo 2, k 1: the subarrays with an odd number of odd-remainder elements.",
 "idea": "Mark an element 1 if nums[i] % modulo == k. A subarray is interesting if its number of marked elements c satisfies c % modulo == k. With prefix counts p, we need p[r] − p[l] ≡ k (mod modulo), i.e. p[l] ≡ p[r] − k. Keep a Counter of earlier prefix remainders.",
 "input": "nums = [3,2,4], modulo = 2, k = 1",
 "output": "3",
 "notes": [],
 "best": "Mark an element 1 if nums[i] % modulo == k. A subarray is interesting if its number of marked elements c satisfies c % modulo == k. With prefix counts p, we need p[r] − p[l] ≡ k (mod modulo), i.e. p[l] ≡ p[r] − k. Keep a Counter of earlier prefix remainders.",
 "variants": [
  {
   "name": "Prefix count modulo, with a hash map of earlier remainders",
   "code": "class Solution:\n    def countInterestingSubarrays(self, nums, modulo, k):\n        seen = Counter({0: 1})\n        pref = 0\n        res = 0\n        for x in nums:\n            if x % modulo == k:\n                pref += 1\n            res += seen[(pref - k) % modulo]\n            seen[pref % modulo] += 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Mark an element 1 if nums[i] % modulo == k. A subarray is interesting if its number of marked elements c satisfies c % modulo == k. With prefix counts p, we need p[r] − p[l] ≡ k (mod modulo), i.e. p[l] ≡ p[r] − k. Keep a Counter of earlier prefix remainders.",
   "frames": []
  }
 ]
};
