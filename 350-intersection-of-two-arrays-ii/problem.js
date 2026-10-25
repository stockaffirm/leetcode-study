window.PROBLEM = {
 "id": "350",
 "title": "Intersection of Two Arrays II",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Return the intersection of two arrays: every number appears in the result as many times as it appears in BOTH arrays (any order). Example: [1,2,2,1] and [2,2] → [2,2].",
 "why": "[1,2,2,1] and [2,2]: 2 appears twice in both → [2,2].",
 "idea": "Count the numbers of the first array. Walk through the second array; when a number still has a positive count, add it to the answer and decrease the count — so each number is used as often as it appears in both.",
 "input": "nums1 = [1,2,2,1], nums2 = [2,2]",
 "output": "[2, 2]",
 "notes": [],
 "best": "Count the numbers of the first array. Walk through the second array; when a number still has a positive count, add it to the answer and decrease the count — so each number is used as often as it appears in both.",
 "variants": [
  {
   "name": "Count one array, consume with the other",
   "code": "class Solution:\n    def intersect(self, nums1, nums2):\n        cnt = Counter(nums1)\n        res = []\n        for x in nums2:\n            if cnt[x] > 0:\n                res.append(x)\n                cnt[x] -= 1\n        return res",
   "time": "O(m + n)",
   "space": "O(min(m, n))",
   "explain": "Count the numbers of the first array. Walk through the second array; when a number still has a positive count, add it to the answer and decrease the count — so each number is used as often as it appears in both.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort and two pointers",
   "tag": "Alternative",
   "code": "class Solution:\n    def intersect(self, nums1, nums2):\n        a, b = sorted(nums1), sorted(nums2)\n        i = j = 0\n        res = []\n        while i < len(a) and j < len(b):\n            if a[i] < b[j]:\n                i += 1\n            elif a[i] > b[j]:\n                j += 1\n            else:\n                res.append(a[i])\n                i += 1\n                j += 1\n        return res",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort both arrays and walk them together, keeping equal numbers.",
   "frames": [],
   "alt": true
  }
 ]
};
