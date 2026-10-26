window.PROBLEM = {
 "id": "3074",
 "title": "Apple Redistribution into Boxes",
 "level": "Easy",
 "topic": "Greedy",
 "question": "apple[i] is the number of apples in pack i, and capacity[j] is how many apples box j can hold. Apples from one pack may be split among several boxes. Return the minimum number of boxes needed to hold all the apples. Example: apple [1,3,2], capacity [4,3,1,5,2] → 2 (the boxes of 5 and 4).",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Prefix sums and bisect",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumBoxes(self, apple, capacity):\n        pre = list(accumulate(sorted(capacity, reverse=True)))\n        return bisect_left(pre, sum(apple)) + 1",
   "time": "O(m log m)",
   "space": "O(m)",
   "explain": "Sort capacities descending, build prefix sums and find the first prefix that holds all apples.",
   "frames": [],
   "alt": true
  }
 ]
};
