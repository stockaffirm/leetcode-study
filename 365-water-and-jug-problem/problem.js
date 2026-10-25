window.PROBLEM = {
 "id": "365",
 "title": "Water and Jug Problem",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Two jugs hold up to x and y litres and there is an unlimited water supply. You may fill a jug, empty a jug, or pour from one into the other until one is full or empty. Can you end up with exactly target litres in total in the two jugs? Example: x=3, y=5, target=4 → True; x=2, y=6, target=5 → False.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS over jug states",
   "tag": "Brute force",
   "code": "class Solution:\n    def canMeasureWater(self, x, y, target):\n        seen = {(0, 0)}\n        q = deque([(0, 0)])\n        while q:\n            a, b = q.popleft()\n            if target in (a, b, a + b): return True\n            pour_ab = min(a, y - b)\n            pour_ba = min(b, x - a)\n            for nxt in ((x, b), (a, y), (0, b), (a, 0), (a - pour_ab, b + pour_ab), (a + pour_ba, b - pour_ba)):\n                if nxt not in seen:\n                    seen.add(nxt)\n                    q.append(nxt)\n        return False",
   "time": "O(x·y)",
   "space": "O(x·y)",
   "explain": "Explore all (a, b) fill levels reachable by filling, emptying and pouring.",
   "frames": [],
   "alt": true
  }
 ]
};
