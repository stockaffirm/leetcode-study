window.PROBLEM = {
 "id": "3477",
 "title": "Fruits Into Baskets II",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Fruit types fruits[i] must each be placed in the leftmost still-empty basket whose capacity is at least fruits[i]; every basket holds one fruit type. Return how many fruit types cannot be placed. Example: fruits [4,2,5], baskets [3,5,4] → 1.",
 "why": "Fruits [4,2,5], baskets [3,5,4]: 4 → basket 5, 2 → basket 3, 5 finds no free basket of size ≥ 5 → 1 fruit type stays unplaced.",
 "idea": "Simulate it: for every fruit scan the baskets from the left and take the first unused one that is big enough; otherwise count the fruit as unplaced.",
 "input": "fruits = [4,2,5], baskets = [3,5,4]",
 "output": "1",
 "notes": [],
 "best": "Simulate it: for every fruit scan the baskets from the left and take the first unused one that is big enough; otherwise count the fruit as unplaced.",
 "variants": [
  {
   "name": "Place each fruit in the leftmost fitting basket",
   "code": "class Solution:\n    def numOfUnplacedFruits(self, fruits, baskets):\n        used = [False] * len(baskets)\n        unplaced = 0\n        for f in fruits:\n            for j, b in enumerate(baskets):\n                if not used[j] and b >= f:\n                    used[j] = True\n                    break\n            else:\n                unplaced += 1\n        return unplaced",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Simulate it: for every fruit scan the baskets from the left and take the first unused one that is big enough; otherwise count the fruit as unplaced.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remove used baskets from a list",
   "tag": "Alternative",
   "code": "class Solution:\n    def numOfUnplacedFruits(self, fruits, baskets):\n        rest = list(baskets)\n        unplaced = 0\n        for f in fruits:\n            idx = next((i for i, b in enumerate(rest) if b >= f), None)\n            if idx is None:\n                unplaced += 1\n            else:\n                rest.pop(idx)\n        return unplaced",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Keep the unused baskets in a list; each fruit takes the first big enough one.",
   "frames": [],
   "alt": true
  }
 ]
};
