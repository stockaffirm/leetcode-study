window.PROBLEM = {
 "id": "1343",
 "title": "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Count the groups of k consecutive numbers in the list whose average is at least the threshold. Example: [2,2,2,2,5,5,5,8], k=3, threshold=4 → 3.",
 "why": "Count the windows of k consecutive numbers whose average is at least the threshold.",
 "idea": "Average ≥ threshold is the same as sum ≥ k·threshold. Slide the window by adding the new number and subtracting the old one.",
 "input": "[2,2,2,2,5,5,5,8], k=3, threshold=4",
 "output": "3",
 "notes": [],
 "best": "Average ≥ threshold is the same as sum ≥ k·threshold. Slide the window by adding the new number and subtracting the old one.",
 "variants": [
  {
   "name": "Sliding window sum",
   "code": "class Solution:\n    def numOfSubarrays(self, arr, k, threshold):\n        need = k * threshold\n        s = sum(arr[:k])\n        count = 1 if s >= need else 0\n        for i in range(k, len(arr)):\n            s += arr[i] - arr[i - k]\n            if s >= need: count += 1\n        return count",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Average ≥ threshold is the same as sum ≥ k·threshold. Slide the window by adding the new number and subtracting the old one.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix sums",
   "tag": "Alternative",
   "code": "class Solution:\n    def numOfSubarrays(self, arr, k, threshold):\n        pre = [0]\n        for x in arr: pre.append(pre[-1] + x)\n        return sum(1 for i in range(len(arr) - k + 1) if pre[i + k] - pre[i] >= k * threshold)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Window sum = prefix[i+k] − prefix[i].",
   "frames": [],
   "alt": true
  }
 ]
};
