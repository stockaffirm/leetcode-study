window.PROBLEM = {
 "id": "679",
 "title": "24 Game",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "Four cards with numbers 1–9: can +, −, ×, ÷ and parentheses make 24?",
 "idea": "Pick any two numbers, replace them by the result of one operation, and recurse until one number remains. Compare with 24 allowing a tiny error for fractions.",
 "input": "[4,1,8,7]",
 "output": "True",
 "notes": [],
 "best": "Pick any two numbers, replace them by the result of one operation, and recurse until one number remains. Compare with 24 allowing a tiny error for fractions.",
 "variants": [
  {
   "name": "Combine two numbers at a time",
   "code": "class Solution:\n    def judgePoint24(self, cards):\n        def go(nums):\n            if len(nums) == 1: return abs(nums[0] - 24) < 1e-6\n            for i in range(len(nums)):\n                for j in range(len(nums)):\n                    if i == j: continue\n                    rest = [nums[k] for k in range(len(nums)) if k != i and k != j]\n                    a, b = nums[i], nums[j]\n                    results = [a + b, a - b, a * b]\n                    if abs(b) > 1e-9: results.append(a / b)\n                    for r in results:\n                        if go(rest + [r]): return True\n            return False\n        return go([float(c) for c in cards])",
   "time": "O(1) (fixed size)",
   "space": "O(1)",
   "explain": "Pick any two numbers, replace them by the result of one operation, and recurse until one number remains. Compare with 24 allowing a tiny error for fractions.",
   "frames": []
  }
 ]
};
