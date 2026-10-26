window.PROBLEM = {
 "id": "1636",
 "title": "Sort Array by Increasing Frequency",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Sort the numbers by how often they appear, least frequent first; numbers with the same frequency go in decreasing order. Example: [1,1,2,2,2,3] → [3,1,1,2,2,2].",
 "why": "[1,1,2,2,2,3]: 3 once, 1 twice, 2 three times → [3,1,1,2,2,2].",
 "idea": "Sort with a key of (frequency ascending, value descending) so equal-frequency values come out biggest first.",
 "input": "nums = [1,1,2,2,2,3]",
 "output": "[3, 1, 1, 2, 2, 2]",
 "notes": [],
 "best": "Sort with a key of (frequency ascending, value descending) so equal-frequency values come out biggest first.",
 "variants": [
  {
   "name": "Sort by (count, −value)",
   "code": "class Solution:\n    def frequencySort(self, nums):\n        cnt = Counter(nums)\n        return sorted(nums, key=lambda x: (cnt[x], -x))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort with a key of (frequency ascending, value descending) so equal-frequency values come out biggest first.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Group by frequency",
   "tag": "Alternative",
   "code": "class Solution:\n    def frequencySort(self, nums):\n        cnt = Counter(nums)\n        groups = defaultdict(list)\n        for v, c in cnt.items():\n            groups[c].append(v)\n        res = []\n        for c in sorted(groups):\n            for v in sorted(groups[c], reverse=True):\n                res.extend([v] * c)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Bucket values by count, then output buckets in increasing count with values descending.",
   "frames": [],
   "alt": true
  }
 ]
};
