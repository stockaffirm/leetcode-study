window.PROBLEM = {
 "id": "1863",
 "title": "Sum of All Subset XOR Totals",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "[5,1,6]: OR = 7, 7 × 2² = 28.",
 "idea": "Look at one bit: if some number has it set, exactly half of the 2ⁿ subsets have it set in their XOR (2ⁿ⁻¹ of them). So the total is (OR of all numbers) × 2ⁿ⁻¹.",
 "input": "nums = [5,1,6]",
 "output": "28",
 "notes": [],
 "best": "Look at one bit: if some number has it set, exactly half of the 2ⁿ subsets have it set in their XOR (2ⁿ⁻¹ of them). So the total is (OR of all numbers) × 2ⁿ⁻¹.",
 "variants": [
  {
   "name": "OR of all numbers times 2^(n−1)",
   "code": "class Solution:\n    def subsetXORSum(self, nums):\n        acc = 0\n        for x in nums:\n            acc |= x\n        return acc << (len(nums) - 1)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Look at one bit: if some number has it set, exactly half of the 2ⁿ subsets have it set in their XOR (2ⁿ⁻¹ of them). So the total is (OR of all numbers) × 2ⁿ⁻¹.",
   "frames": []
  }
 ]
};
