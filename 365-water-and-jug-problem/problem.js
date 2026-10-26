window.PROBLEM = {
 "id": "365",
 "title": "Water and Jug Problem",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "You have two jugs of capacities x and y and unlimited water. Can you measure exactly 'target' litres in the jugs together?",
 "idea": "You can measure any multiple of gcd(x, y) up to x + y. So the answer is target ≤ x + y and target is divisible by gcd(x, y).",
 "input": "x=3, y=5, target=4",
 "output": "True",
 "notes": [],
 "best": "You can measure any multiple of gcd(x, y) up to x + y. So the answer is target ≤ x + y and target is divisible by gcd(x, y).",
 "variants": [
  {
   "name": "gcd rule",
   "code": "class Solution:\n    def canMeasureWater(self, x, y, target):\n        return target <= x + y and target % gcd(x, y) == 0",
   "time": "O(log min(x,y))",
   "space": "O(1)",
   "explain": "You can measure any multiple of gcd(x, y) up to x + y. So the answer is target ≤ x + y and target is divisible by gcd(x, y).",
   "frames": []
  }
 ]
};
