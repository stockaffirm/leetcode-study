window.PROBLEM = {
 "id": "1248",
 "title": "Count Number of Nice Subarrays",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[1,1,2,1,1] with k = 3: the subarrays [1,1,2,1] and [1,2,1,1] contain exactly three odd numbers → 2.",
 "idea": "Keep a running count of odd numbers and how many times each count was seen as a prefix. A subarray ending here has exactly k odds if an earlier prefix had (odd − k) odd numbers.",
 "input": "nums = [1,1,2,1,1], k = 3",
 "output": "2",
 "notes": [],
 "best": "Keep a running count of odd numbers and how many times each count was seen as a prefix. A subarray ending here has exactly k odds if an earlier prefix had (odd − k) odd numbers.",
 "variants": [
  {
   "name": "Prefix count of odd numbers",
   "code": "class Solution:\n    def numberOfSubarrays(self, nums, k):\n        cnt = defaultdict(int)\n        cnt[0] = 1\n        odd = res = 0\n        for x in nums:\n            odd += x % 2\n            res += cnt[odd - k]\n            cnt[odd] += 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a running count of odd numbers and how many times each count was seen as a prefix. A subarray ending here has exactly k odds if an earlier prefix had (odd − k) odd numbers.",
   "frames": []
  }
 ]
};
