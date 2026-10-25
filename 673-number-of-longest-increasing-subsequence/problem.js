window.PROBLEM = {
 "id": "673",
 "title": "Number of Longest Increasing Subsequence",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "Return the NUMBER of longest strictly increasing subsequences of the array. Example: [1,3,5,4,7] → 2 (1,3,5,7 and 1,3,4,7).",
 "why": "[1,3,5,4,7]: the longest increasing subsequences have length 4: 1,3,5,7 and 1,3,4,7 → 2.",
 "idea": "For each i keep the length of the longest increasing subsequence ending there and how many such subsequences exist. A previous smaller number j extends it: if it gives a longer length replace the count, if it ties add the counts.",
 "input": "nums = [1,3,5,4,7]",
 "output": "2",
 "notes": [],
 "best": "For each i keep the length of the longest increasing subsequence ending there and how many such subsequences exist. A previous smaller number j extends it: if it gives a longer length replace the count, if it ties add the counts.",
 "variants": [
  {
   "name": "DP of (length, count)",
   "code": "class Solution:\n    def findNumberOfLIS(self, nums):\n        n = len(nums)\n        length = [1] * n\n        count = [1] * n\n        for i in range(n):\n            for j in range(i):\n                if nums[j] < nums[i]:\n                    if length[j] + 1 > length[i]:\n                        length[i] = length[j] + 1\n                        count[i] = count[j]\n                    elif length[j] + 1 == length[i]:\n                        count[i] += count[j]\n        best = max(length)\n        return sum(c for l, c in zip(length, count) if l == best)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each i keep the length of the longest increasing subsequence ending there and how many such subsequences exist. A previous smaller number j extends it: if it gives a longer length replace the count, if it ties add the counts.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Memoized recursion from each start",
   "tag": "Alternative",
   "code": "class Solution:\n    def findNumberOfLIS(self, nums):\n        n = len(nums)\n        @lru_cache(None)\n        def go(i):\n            best, cnt = 1, 1\n            for j in range(i + 1, n):\n                if nums[j] > nums[i]:\n                    l, c = go(j)\n                    if l + 1 > best:\n                        best, cnt = l + 1, c\n                    elif l + 1 == best:\n                        cnt += c\n            return best, cnt\n        res = [go(i) for i in range(n)]\n        m = max(l for l, c in res)\n        return sum(c for l, c in res if l == m)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "go(i) returns (longest length, how many) of increasing subsequences starting at i.",
   "frames": [],
   "alt": true
  }
 ]
};
