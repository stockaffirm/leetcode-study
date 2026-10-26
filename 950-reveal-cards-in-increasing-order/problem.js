window.PROBLEM = {
 "id": "950",
 "title": "Reveal Cards In Increasing Order",
 "level": "Medium",
 "topic": "Queue",
 "question": "",
 "why": "[17,13,11,2,3,5,7] → [2,13,3,11,5,17,7].",
 "idea": "Simulate the reveal on indices: take the first index (it gets the smallest card), move the next index to the end, repeat. Assign the sorted cards to the revealed indices in order.",
 "input": "deck = [17,13,11,2,3,5,7]",
 "output": "[2, 13, 3, 11, 5, 17, 7]",
 "notes": [],
 "best": "Simulate the reveal on indices: take the first index (it gets the smallest card), move the next index to the end, repeat. Assign the sorted cards to the revealed indices in order.",
 "variants": [
  {
   "name": "Simulate the reveal process on positions",
   "code": "class Solution:\n    def deckRevealedIncreasing(self, deck):\n        n = len(deck)\n        res = [0] * n\n        q = deque(range(n))\n        for card in sorted(deck):\n            res[q.popleft()] = card\n            if q:\n                q.append(q.popleft())\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Simulate the reveal on indices: take the first index (it gets the smallest card), move the next index to the end, repeat. Assign the sorted cards to the revealed indices in order.",
   "frames": []
  }
 ]
};
