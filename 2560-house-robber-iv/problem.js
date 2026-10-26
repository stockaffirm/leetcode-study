window.PROBLEM = {
 "id": "2560",
 "title": "House Robber IV",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "A robber steals from at least k houses, never from two adjacent ones; his capability is the largest amount stolen from a single house. Return the minimum possible capability. Example: [2,3,5,9], k=2 → 5.",
 "why": "nums [2,3,5,9], k=2: rob 2 and 5 → capability 5.",
 "idea": "Guess the capability c (the largest amount you may take from one house). Greedily rob every house with money ≤ c that is not adjacent to the last robbed one and count; if the count reaches k, c is enough. Binary search the smallest c.",
 "input": "nums = [2,3,5,9], k = 2",
 "output": "5",
 "notes": [],
 "best": "Guess the capability c (the largest amount you may take from one house). Greedily rob every house with money ≤ c that is not adjacent to the last robbed one and count; if the count reaches k, c is enough. Binary search the smallest c.",
 "variants": [
  {
   "name": "Binary search the capability",
   "code": "class Solution:\n    def minCapability(self, nums, k):\n        def enough(c):\n            cnt = 0\n            i = 0\n            while i < len(nums):\n                if nums[i] <= c:\n                    cnt += 1\n                    i += 2\n                else:\n                    i += 1\n            return cnt >= k\n        lo, hi = min(nums), max(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if enough(mid):\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(1)",
   "explain": "Guess the capability c (the largest amount you may take from one house). Greedily rob every house with money ≤ c that is not adjacent to the last robbed one and count; if the count reaches k, c is enough. Binary search the smallest c.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Dynamic programming for each guess (small)",
   "tag": "Alternative",
   "code": "class Solution:\n    def minCapability(self, nums, k):\n        def best(c):\n            take = skip = 0\n            for x in nums:\n                take, skip = (skip + 1 if x <= c else 0), max(take, skip)\n            return max(take, skip)\n        lo, hi = min(nums), max(nums)\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if best(mid) >= k:\n                hi = mid\n            else:\n                lo = mid + 1\n        return lo",
   "time": "O(n log max)",
   "space": "O(n)",
   "explain": "For each capability guess compute the best count with a robber DP (Dynamic Programming).",
   "frames": [],
   "alt": true
  }
 ]
};
