window.PROBLEM = {
 "id": "698",
 "title": "Partition to K Equal Sum Subsets",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
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
   "frames": []
  }
 ]
};
