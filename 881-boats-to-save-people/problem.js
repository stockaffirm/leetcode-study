window.PROBLEM = {
 "id": "881",
 "title": "Boats to Save People",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "people[i] is the weight of the i-th person, and every boat can carry at most 2 people at once with a total weight of at most limit. Return the smallest number of boats needed to carry everyone. Example: people [3,2,2,1], limit 3 → boats (1,2), (2) and (3) → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Deque of sorted weights",
   "tag": "Alternative",
   "code": "class Solution:\n    def numRescueBoats(self, people, limit):\n        dq = deque(sorted(people))\n        boats = 0\n        while dq:\n            heavy = dq.pop()\n            if dq and dq[0] + heavy <= limit: dq.popleft()\n            boats += 1\n        return boats",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Pop the heaviest; take the lightest with it if both fit.",
   "frames": [],
   "alt": true
  }
 ]
};
