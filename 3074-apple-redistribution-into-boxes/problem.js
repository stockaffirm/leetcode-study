window.PROBLEM = {
 "id": "3074",
 "title": "Apple Redistribution into Boxes",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "Several packs of apples must be re-packed into boxes of given capacities (apples from a pack can be split among boxes). Use as few boxes as possible.",
 "idea": "Total apples is all that matters. Sort capacities from big to small and take boxes until the total fits.",
 "input": "apple [1,3,2], capacity [4,3,1,5,2]",
 "output": "2",
 "notes": [],
 "best": "Total apples is all that matters. Sort capacities from big to small and take boxes until the total fits.",
 "variants": [
  {
   "name": "Biggest boxes first",
   "code": "class Solution:\n    def minimumBoxes(self, apple, capacity):\n        need = sum(apple)\n        for i, c in enumerate(sorted(capacity, reverse=True), 1):\n            need -= c\n            if need <= 0: return i",
   "time": "O(m log m)",
   "space": "O(1)",
   "explain": "Total apples is all that matters. Sort capacities from big to small and take boxes until the total fits.",
   "frames": []
  }
 ]
};
