window.PROBLEM = {
 "id": "1863",
 "title": "Sum of All Subset XOR Totals",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "For every subset of nums compute the XOR (exclusive OR) of its elements (empty subset gives 0) and return the sum over all subsets. Example: [5,1,6] → 28.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Enumerate every subset",
   "tag": "Brute force",
   "code": "class Solution:\n    def subsetXORSum(self, nums):\n        total = 0\n        n = len(nums)\n        for mask in range(1 << n):\n            x = 0\n            for i in range(n):\n                if mask >> i & 1:\n                    x ^= nums[i]\n            total += x\n        return total",
   "time": "O(2ⁿ·n)",
   "space": "O(n)",
   "explain": "Compute the XOR (exclusive OR) of each subset (bitmask) and add them up.",
   "frames": [],
   "alt": true
  }
 ]
};
