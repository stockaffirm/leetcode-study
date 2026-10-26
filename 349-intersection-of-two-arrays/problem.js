window.PROBLEM = {
 "id": "349",
 "title": "Intersection of Two Arrays",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Given two lists of numbers, return the numbers that appear in BOTH of them, each listed only once, in any order. Example: [1,2,2,1] and [2,2] → [2]; [4,9,5] and [9,4,9,8,4] → [9,4].",
 "why": "Which numbers appear in both lists (each reported once)?",
 "idea": "Put the first list in a set; scan the second list and collect numbers found in it, removing them from the set so they are reported only once.",
 "input": "[1,2,2,1], [2,2]",
 "output": "[2]",
 "notes": [],
 "best": "Put the first list in a set; scan the second list and collect numbers found in it, removing them from the set so they are reported only once.",
 "variants": [
  {
   "name": "Set of the first list",
   "code": "class Solution:\n    def intersection(self, nums1, nums2):\n        seen = set(nums1)\n        out = []\n        for x in nums2:\n            if x in seen:\n                out.append(x)\n                seen.discard(x)\n        return out",
   "time": "O(n + m)",
   "space": "O(n)",
   "explain": "Put the first list in a set; scan the second list and collect numbers found in it, removing them from the set so they are reported only once.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort + two pointers",
   "tag": "Alternative",
   "code": "class Solution:\n    def intersection(self, nums1, nums2):\n        a, b = sorted(nums1), sorted(nums2)\n        i = j = 0\n        out = []\n        while i < len(a) and j < len(b):\n            if a[i] < b[j]: i += 1\n            elif a[i] > b[j]: j += 1\n            else:\n                if not out or out[-1] != a[i]: out.append(a[i])\n                i += 1\n                j += 1\n        return out",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort both lists and walk them together.",
   "frames": [],
   "alt": true
  }
 ]
};
