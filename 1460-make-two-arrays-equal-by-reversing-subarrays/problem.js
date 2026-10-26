window.PROBLEM = {
 "id": "1460",
 "title": "Make Two Arrays Equal by Reversing Subarrays",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Reversals can sort any array, so [1,2,3,4] and [2,4,1,3] can be made equal: they hold the same numbers.",
 "idea": "Reversing sub-arrays can reorder the array in any way (adjacent swaps are reversals of length 2). So the two arrays can be made equal exactly when they contain the same numbers.",
 "input": "target = [1,2,3,4], arr = [2,4,1,3]",
 "output": "true",
 "notes": [],
 "best": "Reversing sub-arrays can reorder the array in any way (adjacent swaps are reversals of length 2). So the two arrays can be made equal exactly when they contain the same numbers.",
 "variants": [
  {
   "name": "Same numbers, any order",
   "code": "class Solution:\n    def canBeEqual(self, target, arr):\n        return sorted(target) == sorted(arr)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Reversing sub-arrays can reorder the array in any way (adjacent swaps are reversals of length 2). So the two arrays can be made equal exactly when they contain the same numbers.",
   "frames": []
  }
 ]
};
