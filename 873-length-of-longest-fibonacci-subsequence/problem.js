window.PROBLEM = {
 "id": "873",
 "title": "Length of Longest Fibonacci Subsequence",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
