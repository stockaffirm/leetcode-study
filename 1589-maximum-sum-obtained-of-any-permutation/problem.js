window.PROBLEM = {
 "id": "1589",
 "title": "Maximum Sum Obtained of Any Permutation",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "nums [1,2,3,4,5], requests [1,3] and [0,1]: slot 1 is asked twice, slots 0,2,3 once → best sum 19.",
 "idea": "A permutation changes where each number goes, not how often each slot is requested. Count how many requests cover each index with a difference array, then pair the largest request counts with the largest numbers (sort both) and sum the products.",
 "input": "nums = [1,2,3,4,5], requests = [[1,3],[0,1]]",
 "output": "19",
 "notes": [],
 "best": "A permutation changes where each number goes, not how often each slot is requested. Count how many requests cover each index with a difference array, then pair the largest request counts with the largest numbers (sort both) and sum the products.",
 "variants": [
  {
   "name": "Give the biggest numbers to the most requested slots",
   "code": "class Solution:\n    def maxSumRangeQuery(self, nums, requests):\n        n = len(nums)\n        diff = [0] * (n + 1)\n        for l, r in requests:\n            diff[l] += 1\n            diff[r + 1] -= 1\n        freq = list(accumulate(diff[:n]))\n        freq.sort()\n        nums.sort()\n        return sum(a * b for a, b in zip(freq, nums)) % (10**9 + 7)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "A permutation changes where each number goes, not how often each slot is requested. Count how many requests cover each index with a difference array, then pair the largest request counts with the largest numbers (sort both) and sum the products.",
   "frames": []
  }
 ]
};
