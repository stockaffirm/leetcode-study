window.PROBLEM = {
 "id": "2535",
 "title": "Difference Between Element Sum and Digit Sum of an Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "[1,15,6,3]: element sum 25, digit sum 1+1+5+6+3 = 16 → 9.",
 "idea": "Compute the sum of the elements and the sum of all digits of all elements; return the absolute difference.",
 "input": "nums = [1,15,6,3]",
 "output": "9",
 "notes": [],
 "best": "Compute the sum of the elements and the sum of all digits of all elements; return the absolute difference.",
 "variants": [
  {
   "name": "Sum the elements, sum the digits, subtract",
   "code": "class Solution:\n    def differenceOfSum(self, nums):\n        element_sum = sum(nums)\n        digit_sum = sum(int(d) for x in nums for d in str(x))\n        return abs(element_sum - digit_sum)",
   "time": "O(n log V)",
   "space": "O(1)",
   "explain": "Compute the sum of the elements and the sum of all digits of all elements; return the absolute difference.",
   "frames": []
  }
 ]
};
