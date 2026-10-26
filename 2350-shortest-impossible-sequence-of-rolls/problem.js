window.PROBLEM = {
 "id": "2350",
 "title": "Shortest Impossible Sequence of Rolls",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "rolls [4,2,1,2,3,3,2,4,1], k=4 → the first full set ends at index 3, the second at 6 → every length-2 sequence exists, a length-3 one does not → 3.",
 "idea": "Scan the rolls collecting distinct faces. Each time all k faces have been seen, one 'round' is complete (every sequence of that many rolls can be formed) and the set resets. If c rounds are complete, every sequence of length c exists, and some sequence of length c + 1 does not. Return c + 1.",
 "input": "rolls = [4,2,1,2,3,3,2,4,1], k = 4",
 "output": "3",
 "notes": [],
 "best": "Scan the rolls collecting distinct faces. Each time all k faces have been seen, one 'round' is complete (every sequence of that many rolls can be formed) and the set resets. If c rounds are complete, every sequence of length c exists, and some sequence of length c + 1 does not. Return c + 1.",
 "variants": [
  {
   "name": "Greedy: count how many full sets of k faces you can complete",
   "code": "class Solution:\n    def shortestSequence(self, rolls, k):\n        seen = set()\n        rounds = 0\n        for r in rolls:\n            seen.add(r)\n            if len(seen) == k:\n                rounds += 1\n                seen = set()\n        return rounds + 1",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Scan the rolls collecting distinct faces. Each time all k faces have been seen, one 'round' is complete (every sequence of that many rolls can be formed) and the set resets. If c rounds are complete, every sequence of length c exists, and some sequence of length c + 1 does not. Return c + 1.",
   "frames": []
  }
 ]
};
