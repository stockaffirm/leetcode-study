window.PROBLEM = {
 "id": "1460",
 "title": "Make Two Arrays Equal by Reversing Subarrays",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "In one step you may reverse any sub-array of arr. Return true if arr can be made equal to target. Example: target [1,2,3,4], arr [2,4,1,3] → true.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compare letter counts",
   "tag": "Alternative",
   "code": "class Solution:\n    def canBeEqual(self, target, arr):\n        return Counter(target) == Counter(arr)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Two arrays hold the same numbers when their counters are equal.",
   "frames": [],
   "alt": true
  }
 ]
};
