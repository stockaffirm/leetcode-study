window.PROBLEM = {
 "id": "704",
 "title": "Binary Search",
 "level": "Easy",
 "topic": "Binary Search",
 "question": "",
 "why": "Find a target in a sorted list and return its index, or −1.",
 "idea": "Look at the middle element and discard the half that cannot contain the target.",
 "input": "[-1,0,3,5,9,12], target 9",
 "output": "4",
 "notes": [],
 "best": "Look at the middle element and discard the half that cannot contain the target.",
 "variants": [
  {
   "name": "Classic binary search",
   "code": "class Solution:\n    def search(self, nums, target):\n        lo, hi = 0, len(nums) - 1\n        while lo <= hi:\n            mid = (lo + hi) // 2\n            if nums[mid] == target: return mid\n            if nums[mid] < target: lo = mid + 1\n            else: hi = mid - 1\n        return -1",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Look at the middle element and discard the half that cannot contain the target.",
   "frames": []
  }
 ]
};
