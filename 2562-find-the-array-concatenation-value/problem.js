window.PROBLEM = {
 "id": "2562",
 "title": "Find the Array Concatenation Value",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "The concatenation of two numbers is their digits written one after the other (7 and 52 give 752). Repeatedly take the first and last numbers, add their concatenation to the total and remove them (a single leftover number adds its value). Return the total. Example: [7,52,2,4] → 596.",
 "why": "[7,52,2,4]: 74 + 522 = 596.",
 "idea": "Take the first and last numbers, glue their digits (first then last) and add the result; then move both ends inwards. A middle leftover is added as is.",
 "input": "nums = [7,52,2,4]",
 "output": "596",
 "notes": [],
 "best": "Take the first and last numbers, glue their digits (first then last) and add the result; then move both ends inwards. A middle leftover is added as is.",
 "variants": [
  {
   "name": "Concatenate first and last, move inwards",
   "code": "class Solution:\n    def findTheArrayConcVal(self, nums):\n        i, j = 0, len(nums) - 1\n        total = 0\n        while i < j:\n            total += int(str(nums[i]) + str(nums[j]))\n            i += 1\n            j -= 1\n        if i == j:\n            total += nums[i]\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Take the first and last numbers, glue their digits (first then last) and add the result; then move both ends inwards. A middle leftover is added as is.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Deque from both ends",
   "tag": "Alternative",
   "code": "class Solution:\n    def findTheArrayConcVal(self, nums):\n        q = deque(nums)\n        total = 0\n        while len(q) > 1:\n            total += int(str(q.popleft()) + str(q.pop()))\n        return total + (q[0] if q else 0)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Pop the front and back of a deque and glue the numbers.",
   "frames": [],
   "alt": true
  }
 ]
};
