window.PROBLEM = {
 "id": "2537",
 "title": "Count the Number of Good Subarrays",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "A subarray is good if it contains at least k pairs (i<j) of equal values. Return the number of good subarrays. Example: [3,1,4,3,2,2,4], k=2 → 4.",
 "why": "[3,1,4,3,2,2,4], k=2: four subarrays contain at least 2 equal pairs → 4.",
 "idea": "A subarray is good if it has at least k pairs (i<j) with equal values. Maintain the pair count of the window with a frequency map (adding x adds freq[x] pairs; removing x removes freq[x]−1). When the window has ≥ k pairs, every extension to the right is good, so add n − r and shrink from the left.",
 "input": "nums = [3,1,4,3,2,2,4], k = 2",
 "output": "4",
 "notes": [],
 "best": "A subarray is good if it has at least k pairs (i<j) with equal values. Maintain the pair count of the window with a frequency map (adding x adds freq[x] pairs; removing x removes freq[x]−1). When the window has ≥ k pairs, every extension to the right is good, so add n − r and shrink from the left.",
 "variants": [
  {
   "name": "Sliding window counting equal pairs",
   "code": "class Solution:\n    def countGood(self, nums, k):\n        freq = Counter()\n        pairs = l = res = 0\n        n = len(nums)\n        for r, x in enumerate(nums):\n            pairs += freq[x]\n            freq[x] += 1\n            while pairs >= k:\n                res += n - r\n                freq[nums[l]] -= 1\n                pairs -= freq[nums[l]]\n                l += 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A subarray is good if it has at least k pairs (i<j) with equal values. Maintain the pair count of the window with a frequency map (adding x adds freq[x] pairs; removing x removes freq[x]−1). When the window has ≥ k pairs, every extension to the right is good, so add n − r and shrink from the left.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Count pairs for each start",
   "tag": "Brute force",
   "code": "class Solution:\n    def countGood(self, nums, k):\n        n = len(nums)\n        res = 0\n        for l in range(n):\n            freq = Counter()\n            pairs = 0\n            for r in range(l, n):\n                pairs += freq[nums[r]]\n                freq[nums[r]] += 1\n                if pairs >= k:\n                    res += n - r\n                    break\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each left end extend the right end while keeping a running pair count.",
   "frames": [],
   "alt": true
  }
 ]
};
