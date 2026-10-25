window.PROBLEM = {
 "id": "3024",
 "title": "Type of Triangle",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "Given three side lengths, return 'equilateral' (all equal), 'isosceles' (exactly two equal), 'scalene' (all different) or 'none' if they cannot form a triangle. Example: [3,4,5] → 'scalene'.",
 "why": "[3,4,5] → all sides different → scalene; [8,4,4] → 4 + 4 is not more than 8 → none.",
 "idea": "Sort the sides; a triangle exists only if the two smaller add up to more than the largest. Then 1 distinct length means equilateral, 2 isosceles, 3 scalene.",
 "input": "nums = [3,4,5]",
 "output": "\"scalene\"",
 "notes": [],
 "best": "Sort the sides; a triangle exists only if the two smaller add up to more than the largest. Then 1 distinct length means equilateral, 2 isosceles, 3 scalene.",
 "variants": [
  {
   "name": "Triangle inequality, then count equal sides",
   "code": "class Solution:\n    def triangleType(self, nums):\n        a, b, c = sorted(nums)\n        if a + b <= c:\n            return \"none\"\n        return [\"equilateral\", \"isosceles\", \"scalene\"][len(set(nums)) - 1]",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Sort the sides; a triangle exists only if the two smaller add up to more than the largest. Then 1 distinct length means equilateral, 2 isosceles, 3 scalene.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Explicit comparisons",
   "tag": "Alternative",
   "code": "class Solution:\n    def triangleType(self, nums):\n        a, b, c = nums\n        if a + b <= c or a + c <= b or b + c <= a:\n            return \"none\"\n        if a == b == c:\n            return \"equilateral\"\n        if a == b or b == c or a == c:\n            return \"isosceles\"\n        return \"scalene\"",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Check the triangle inequality for every side, then equality of sides.",
   "frames": [],
   "alt": true
  }
 ]
};
