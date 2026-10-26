window.PROBLEM = {
 "id": "2540",
 "title": "Minimum Common Value",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "nums1 [1,2,3], nums2 [2,4] → 2.",
 "idea": "Both arrays are sorted. Advance the pointer at the smaller value; when the two values are equal that is the smallest common value.",
 "input": "nums1 = [1,2,3], nums2 = [2,4]",
 "output": "2",
 "notes": [],
 "best": "Both arrays are sorted. Advance the pointer at the smaller value; when the two values are equal that is the smallest common value.",
 "variants": [
  {
   "name": "Two pointers on the sorted arrays",
   "code": "class Solution:\n    def getCommon(self, nums1, nums2):\n        i = j = 0\n        while i < len(nums1) and j < len(nums2):\n            if nums1[i] == nums2[j]:\n                return nums1[i]\n            if nums1[i] < nums2[j]:\n                i += 1\n            else:\n                j += 1\n        return -1",
   "time": "O(n + m)",
   "space": "O(1)",
   "explain": "Both arrays are sorted. Advance the pointer at the smaller value; when the two values are equal that is the smallest common value.",
   "frames": []
  }
 ]
};
