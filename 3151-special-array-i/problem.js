window.PROBLEM = {
 "id": "3151",
 "title": "Special Array I",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[2,1,4] alternates even/odd → true; [4,3,1,6] has 3,1 both odd → false.",
 "idea": "An array is special if every two adjacent elements have different parity.",
 "input": "nums = [2,1,4]",
 "output": "true",
 "notes": [],
 "best": "An array is special if every two adjacent elements have different parity.",
 "variants": [
  {
   "name": "Neighbours must alternate parity",
   "code": "class Solution:\n    def isArraySpecial(self, nums):\n        return all((a + b) % 2 == 1 for a, b in zip(nums, nums[1:]))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "An array is special if every two adjacent elements have different parity.",
   "frames": []
  }
 ]
};
