window.PROBLEM = {
 "id": "349",
 "title": "Intersection of Two Arrays",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
