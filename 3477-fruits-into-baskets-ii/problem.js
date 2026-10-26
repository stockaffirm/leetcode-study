window.PROBLEM = {
 "id": "3477",
 "title": "Fruits Into Baskets II",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
