window.PROBLEM = {
 "id": "873",
 "title": "Length of Longest Fibonacci Subsequence",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Return the length of the longest subsequence of the strictly increasing array that follows x[i] = x[i−1] + x[i−2] (length at least 3), or 0 if none. Example: [1,2,3,4,5,6,7,8] → 5.",
 "why": "[1,2,3,4,5,6,7,8] → 1,2,3,5,8 has length 5.",
 "idea": "dp[(j,k)] is the length of the longest Fibonacci-like subsequence ending in arr[j], arr[k]. For a pair, look for the previous term arr[k] − arr[j] (must be smaller than arr[j] and present) and extend its chain by one. Answer is the best length ≥ 3, else 0.",
 "input": "arr = [1,2,3,4,5,6,7,8]",
 "output": "5",
 "notes": [],
 "best": "dp[(j,k)] is the length of the longest Fibonacci-like subsequence ending in arr[j], arr[k]. For a pair, look for the previous term arr[k] − arr[j] (must be smaller than arr[j] and present) and extend its chain by one. Answer is the best length ≥ 3, else 0.",
 "variants": [
  {
   "name": "DP on the last two elements",
   "code": "class Solution:\n    def lenLongestFibSubseq(self, arr):\n        idx = {v: i for i, v in enumerate(arr)}\n        dp = {}\n        best = 0\n        for k in range(len(arr)):\n            for j in range(k):\n                i = idx.get(arr[k] - arr[j])\n                if i is not None and i < j:\n                    dp[(j, k)] = dp.get((i, j), 2) + 1\n                    best = max(best, dp[(j, k)])\n        return best",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "dp[(j,k)] is the length of the longest Fibonacci-like subsequence ending in arr[j], arr[k]. For a pair, look for the previous term arr[k] − arr[j] (must be smaller than arr[j] and present) and extend its chain by one. Answer is the best length ≥ 3, else 0.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every starting pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def lenLongestFibSubseq(self, arr):\n        s = set(arr)\n        best = 0\n        for i in range(len(arr)):\n            for j in range(i + 1, len(arr)):\n                a, b, length = arr[i], arr[j], 2\n                while a + b in s:\n                    a, b = b, a + b\n                    length += 1\n                best = max(best, length)\n        return best if best >= 3 else 0",
   "time": "O(n²·log)",
   "space": "O(n)",
   "explain": "Extend each starting pair as far as the set allows.",
   "frames": [],
   "alt": true
  }
 ]
};
