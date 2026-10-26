window.PROBLEM = {
 "id": "2956",
 "title": "Find Common Elements Between Two Arrays",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "nums1 [4,3,2,3,1], nums2 [2,2,5,2,3,6] → [3, 4].",
 "idea": "answer1 is the number of indices in nums1 whose value occurs in nums2; answer2 likewise for nums2 in nums1. Use sets for membership.",
 "input": "nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]",
 "output": "[3, 4]",
 "notes": [],
 "best": "answer1 is the number of indices in nums1 whose value occurs in nums2; answer2 likewise for nums2 in nums1. Use sets for membership.",
 "variants": [
  {
   "name": "Count elements present in the other array",
   "code": "class Solution:\n    def findIntersectionValues(self, nums1, nums2):\n        s1, s2 = set(nums1), set(nums2)\n        return [sum(x in s2 for x in nums1), sum(x in s1 for x in nums2)]",
   "time": "O(n + m)",
   "space": "O(n + m)",
   "explain": "answer1 is the number of indices in nums1 whose value occurs in nums2; answer2 likewise for nums2 in nums1. Use sets for membership.",
   "frames": []
  }
 ]
};
