window.PROBLEM = {
 "id": "673",
 "title": "Number of Longest Increasing Subsequence",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
