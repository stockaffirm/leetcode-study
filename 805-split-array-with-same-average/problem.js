window.PROBLEM = {
 "id": "805",
 "title": "Split Array With Same Average",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "[1,2,3,4,5,6,7,8] → {1,4,5,8} and {2,3,6,7} both average 4.5 → true.",
 "idea": "Two parts have the same average as the whole, so a part of size k must have sum k·total/n, which has to be an integer. Compute, for each size k up to n/2, the set of reachable subset sums, and check whether k·total/n is reachable for some 1 ≤ k ≤ n/2.",
 "input": "nums = [1,2,3,4,5,6,7,8]",
 "output": "true",
 "notes": [],
 "best": "Two parts have the same average as the whole, so a part of size k must have sum k·total/n, which has to be an integer. Compute, for each size k up to n/2, the set of reachable subset sums, and check whether k·total/n is reachable for some 1 ≤ k ≤ n/2.",
 "variants": [
  {
   "name": "Subset sums by size (bitset DP)",
   "code": "class Solution:\n    def splitArraySameAverage(self, nums):\n        n, total = len(nums), sum(nums)\n        sums = [set() for _ in range(n // 2 + 1)]\n        sums[0].add(0)\n        for x in nums:\n            for k in range(n // 2, 0, -1):\n                for s in sums[k - 1]:\n                    sums[k].add(s + x)\n        return any(total * k % n == 0 and total * k // n in sums[k] for k in range(1, n // 2 + 1))",
   "time": "O(n²·S)",
   "space": "O(n·S)",
   "explain": "Two parts have the same average as the whole, so a part of size k must have sum k·total/n, which has to be an integer. Compute, for each size k up to n/2, the set of reachable subset sums, and check whether k·total/n is reachable for some 1 ≤ k ≤ n/2.",
   "frames": []
  }
 ]
};
