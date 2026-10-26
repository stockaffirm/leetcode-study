window.PROBLEM = {
 "id": "3024",
 "title": "Type of Triangle",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
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
   "frames": []
  }
 ]
};
