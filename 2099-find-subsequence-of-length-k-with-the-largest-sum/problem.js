window.PROBLEM = {
 "id": "2099",
 "title": "Find Subsequence of Length K With the Largest Sum",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "[2,1,3,3], k=2: the two largest numbers are the 3s → [3,3].",
 "idea": "The k numbers with the largest values give the largest sum. Find their indices and read the numbers in index order so the subsequence keeps the original order.",
 "input": "nums = [2,1,3,3], k = 2",
 "output": "[3, 3]",
 "notes": [],
 "best": "The k numbers with the largest values give the largest sum. Find their indices and read the numbers in index order so the subsequence keeps the original order.",
 "variants": [
  {
   "name": "Take the k biggest, keep their order",
   "code": "class Solution:\n    def maxSubsequence(self, nums, k):\n        idx = sorted(range(len(nums)), key=lambda i: -nums[i])[:k]\n        return [nums[i] for i in sorted(idx)]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The k numbers with the largest values give the largest sum. Find their indices and read the numbers in index order so the subsequence keeps the original order.",
   "frames": []
  }
 ]
};
