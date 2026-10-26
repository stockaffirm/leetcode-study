window.PROBLEM = {
 "id": "287",
 "title": "Find the Duplicate Number",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "A list of n+1 numbers uses only the values 1..n, so one value repeats. Find it without changing the list or using extra memory. [1,3,4,2,2] → 2.",
 "idea": "Treat each value as a pointer to the next position: the repeat creates a loop. A slow and a fast pointer meet inside the loop; restarting one from the start and moving both one step at a time makes them meet at the loop entrance — the duplicate.",
 "input": "[1, 3, 4, 2, 2]",
 "output": "2",
 "notes": [],
 "best": "Treat each value as a pointer to the next position: the repeat creates a loop. A slow and a fast pointer meet inside the loop; restarting one from the start and moving both one step at a time makes them meet at the loop entrance — the duplicate.",
 "variants": [
  {
   "name": "Floyd's cycle detection",
   "code": "class Solution:\n    def findDuplicate(self, nums):\n        slow = fast = nums[0]\n        while True:\n            slow = nums[slow]\n            fast = nums[nums[fast]]\n            if slow == fast: break\n        slow = nums[0]\n        while slow != fast:\n            slow, fast = nums[slow], nums[fast]\n        return slow",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Treat each value as a pointer to the next position: the repeat creates a loop. A slow and a fast pointer meet inside the loop; restarting one from the start and moving both one step at a time makes them meet at the loop entrance — the duplicate.",
   "frames": []
  }
 ]
};
