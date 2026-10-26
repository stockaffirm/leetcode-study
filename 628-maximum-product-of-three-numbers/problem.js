window.PROBLEM = {
 "id": "628",
 "title": "Maximum Product of Three Numbers",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Given a list of whole numbers (it may contain negatives) with at least three numbers, choose any three of them and return the LARGEST product they can make. Example: [-10,-10,5,2] → (−10) × (−10) × 5 = 500.",
 "why": "Pick three numbers with the biggest product. Two big negatives multiply to a positive, so [-10,-10,5,2] → 500.",
 "idea": "After sorting, the best triple is either the three largest numbers, or the two smallest (possibly very negative) times the largest.",
 "input": "[-10, -10, 5, 2]",
 "output": "500",
 "notes": [],
 "best": "After sorting, the best triple is either the three largest numbers, or the two smallest (possibly very negative) times the largest.",
 "variants": [
  {
   "name": "Sort, compare two candidates",
   "code": "class Solution:\n    def maximumProduct(self, nums):\n        nums = sorted(nums)\n        return max(nums[-1] * nums[-2] * nums[-3], nums[0] * nums[1] * nums[-1])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "After sorting, the best triple is either the three largest numbers, or the two smallest (possibly very negative) times the largest.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One pass: 3 largest, 2 smallest",
   "tag": "Alternative",
   "code": "class Solution:\n    def maximumProduct(self, nums):\n        big = [float('-inf')] * 3\n        small = [float('inf')] * 2\n        for x in nums:\n            if x > big[0]: big = [x, big[0], big[1]]\n            elif x > big[1]: big = [big[0], x, big[1]]\n            elif x > big[2]: big[2] = x\n            if x < small[0]: small = [x, small[0]]\n            elif x < small[1]: small[1] = x\n        return max(big[0] * big[1] * big[2], small[0] * small[1] * big[0])",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Track the three biggest and two smallest numbers without sorting.",
   "frames": [],
   "alt": true
  }
 ]
};
