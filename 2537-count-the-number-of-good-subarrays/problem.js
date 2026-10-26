window.PROBLEM = {
 "id": "2537",
 "title": "Count the Number of Good Subarrays",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
