window.PROBLEM = {
 "id": "2966",
 "title": "Divide Array Into Arrays With Max Difference",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "[1,3,4,8,7,9,3,5,1], k=2 → [[1,1,3],[3,4,5],[7,8,9]].",
 "idea": "Sort the array and cut it into consecutive groups of three; each group must have max − min ≤ k, otherwise no valid division exists (return []).",
 "input": "nums = [1,3,4,8,7,9,3,5,1], k = 2",
 "output": "[[1, 1, 3], [3, 4, 5], [7, 8, 9]]",
 "notes": [],
 "best": "Sort the array and cut it into consecutive groups of three; each group must have max − min ≤ k, otherwise no valid division exists (return []).",
 "variants": [
  {
   "name": "Sort and cut into triples",
   "code": "class Solution:\n    def divideArray(self, nums, k):\n        nums = sorted(nums)\n        res = []\n        for i in range(0, len(nums), 3):\n            g = nums[i:i + 3]\n            if g[2] - g[0] > k:\n                return []\n            res.append(g)\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the array and cut it into consecutive groups of three; each group must have max − min ≤ k, otherwise no valid division exists (return []).",
   "frames": []
  }
 ]
};
