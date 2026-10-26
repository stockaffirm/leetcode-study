window.PROBLEM = {
 "id": "260",
 "title": "Single Number III",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[1,2,1,3,2,5]: pairs cancel, leaving 3 XOR (exclusive OR) 5 = 6; the lowest set bit separates them → [3,5].",
 "idea": "XOR of all numbers cancels the pairs and leaves a XOR b of the two singles. Any set bit of that value differs between a and b. Use the lowest set bit to split all numbers into two groups; XOR each group to get a and b.",
 "input": "nums = [1,2,1,3,2,5]",
 "output": "[3, 5]",
 "notes": [],
 "best": "XOR of all numbers cancels the pairs and leaves a XOR b of the two singles. Any set bit of that value differs between a and b. Use the lowest set bit to split all numbers into two groups; XOR each group to get a and b.",
 "variants": [
  {
   "name": "XOR, then split by one differing bit",
   "code": "class Solution:\n    def singleNumber(self, nums):\n        x = 0\n        for v in nums:\n            x ^= v\n        low = x & -x\n        a = 0\n        for v in nums:\n            if v & low:\n                a ^= v\n        return [a, x ^ a]",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "XOR of all numbers cancels the pairs and leaves a XOR b of the two singles. Any set bit of that value differs between a and b. Use the lowest set bit to split all numbers into two groups; XOR each group to get a and b.",
   "frames": []
  }
 ]
};
