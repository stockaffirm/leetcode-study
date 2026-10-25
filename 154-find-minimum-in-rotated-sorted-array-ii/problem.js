window.PROBLEM = {
 "id": "154",
 "title": "Find Minimum in Rotated Sorted Array II",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "A sorted array (with possible duplicates) was rotated. Return its minimum element. Example: [2,2,2,0,1] → 0.",
 "why": "[2,2,2,0,1] → minimum 0.",
 "idea": "Compare nums[mid] with nums[hi]. If mid is bigger, the minimum is to the right. If smaller, it is at mid or to the left. If equal we cannot tell, so drop one element from the right end.",
 "input": "nums = [2,2,2,0,1]",
 "output": "0",
 "notes": [],
 "best": "Compare nums[mid] with nums[hi]. If mid is bigger, the minimum is to the right. If smaller, it is at mid or to the left. If equal we cannot tell, so drop one element from the right end.",
 "variants": [
  {
   "name": "Binary search, shrink on ties",
   "code": "class Solution:\n    def findMin(self, nums):\n        lo, hi = 0, len(nums) - 1\n        while lo < hi:\n            mid = (lo + hi) // 2\n            if nums[mid] > nums[hi]:\n                lo = mid + 1\n            elif nums[mid] < nums[hi]:\n                hi = mid\n            else:\n                hi -= 1\n        return nums[lo]",
   "time": "O(log n) average, O(n) worst",
   "space": "O(1)",
   "explain": "Compare nums[mid] with nums[hi]. If mid is bigger, the minimum is to the right. If smaller, it is at mid or to the left. If equal we cannot tell, so drop one element from the right end.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare with the right end",
   "tag": "Alternative",
   "code": "class Solution:\n    def findMin(self, nums):\n        for i in range(1, len(nums)):\n            if nums[i] < nums[i - 1]:\n                return nums[i]\n        return nums[0]",
   "time": "O(n) worst",
   "space": "O(1)",
   "explain": "Linear fallback: the minimum is the only place where nums[i] > nums[i+1] breaks the order.",
   "frames": [],
   "alt": true
  }
 ]
};
