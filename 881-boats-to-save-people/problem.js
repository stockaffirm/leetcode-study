window.PROBLEM = {
 "id": "881",
 "title": "Boats to Save People",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "Each boat carries at most 2 people and a weight limit. Fewest boats for everyone? [3,2,2,1], limit 3 → 3.",
 "idea": "Sort. The heaviest person must take a boat; if the lightest can share it, pair them, otherwise the heaviest goes alone. Two pointers do it in one pass.",
 "input": "[3, 2, 2, 1], limit=3",
 "output": "3",
 "notes": [],
 "best": "Sort. The heaviest person must take a boat; if the lightest can share it, pair them, otherwise the heaviest goes alone. Two pointers do it in one pass.",
 "variants": [
  {
   "name": "Sort, pair heaviest with lightest",
   "code": "class Solution:\n    def numRescueBoats(self, people, limit):\n        people = sorted(people)\n        i, j, boats = 0, len(people) - 1, 0\n        while i <= j:\n            if people[i] + people[j] <= limit: i += 1\n            j -= 1\n            boats += 1\n        return boats",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Sort. The heaviest person must take a boat; if the lightest can share it, pair them, otherwise the heaviest goes alone. Two pointers do it in one pass.",
   "frames": []
  }
 ]
};
