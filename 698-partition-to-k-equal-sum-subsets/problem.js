window.PROBLEM = {
 "id": "698",
 "title": "Partition to K Equal Sum Subsets",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Can the list of integers be divided into k non-empty groups whose sums are all equal? Every number must be used exactly once. Example: [4,3,2,3,5,2,1], k=4 → True (groups {5}, {1,4}, {2,3}, {2,3}).",
 "why": "Can the numbers be split into k groups that all have the same sum?",
 "idea": "Each group must sum to total/k. Place the numbers (biggest first) one by one into buckets, skipping buckets that would overflow and buckets whose current sum was already tried.",
 "input": "[4,3,2,3,5,2,1], k=4",
 "output": "True",
 "notes": [],
 "best": "Each group must sum to total/k. Place the numbers (biggest first) one by one into buckets, skipping buckets that would overflow and buckets whose current sum was already tried.",
 "variants": [
  {
   "name": "Backtracking into k buckets",
   "code": "class Solution:\n    def canPartitionKSubsets(self, nums, k):\n        total = sum(nums)\n        if total % k: return False\n        target = total // k\n        nums = sorted(nums, reverse=True)\n        if nums[0] > target: return False\n        buckets = [0] * k\n        def go(i):\n            if i == len(nums): return True\n            seen = set()\n            for j in range(k):\n                if buckets[j] + nums[i] <= target and buckets[j] not in seen:\n                    seen.add(buckets[j])\n                    buckets[j] += nums[i]\n                    if go(i + 1): return True\n                    buckets[j] -= nums[i]\n            return False\n        return go(0)",
   "time": "O(k^n) worst case",
   "space": "O(n + k)",
   "explain": "Each group must sum to total/k. Place the numbers (biggest first) one by one into buckets, skipping buckets that would overflow and buckets whose current sum was already tried.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bitmask DP over used numbers",
   "tag": "Alternative",
   "code": "class Solution:\n    def canPartitionKSubsets(self, nums, k):\n        total = sum(nums)\n        if total % k: return False\n        target = total // k\n        n = len(nums)\n        dp = [-1] * (1 << n)\n        dp[0] = 0\n        for mask in range(1 << n):\n            if dp[mask] < 0: continue\n            for i in range(n):\n                if not mask >> i & 1 and dp[mask] + nums[i] <= target:\n                    dp[mask | 1 << i] = (dp[mask] + nums[i]) % target\n        return dp[-1] == 0",
   "time": "O(2^n · n)",
   "space": "O(2^n)",
   "explain": "dp[mask] = sum of the partly filled bucket after using exactly the numbers in mask (or −1 if impossible).",
   "frames": [],
   "alt": true
  }
 ]
};
