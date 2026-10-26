window.PROBLEM = {
 "id": "2974",
 "title": "Minimum Number Game",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "[5,4,2,3] → sorted [2,3,4,5] → arr [3,2,5,4].",
 "idea": "Alice removes the smallest, Bob the next smallest, but Bob appends first. After sorting, swap each neighbouring pair.",
 "input": "nums = [5,4,2,3]",
 "output": "[3, 2, 5, 4]",
 "notes": [],
 "best": "Alice removes the smallest, Bob the next smallest, but Bob appends first. After sorting, swap each neighbouring pair.",
 "variants": [
  {
   "name": "Sort and swap each pair",
   "code": "class Solution:\n    def numberGame(self, nums):\n        a = sorted(nums)\n        for i in range(0, len(a) - 1, 2):\n            a[i], a[i + 1] = a[i + 1], a[i]\n        return a",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Alice removes the smallest, Bob the next smallest, but Bob appends first. After sorting, swap each neighbouring pair.",
   "frames": []
  }
 ]
};
