window.PROBLEM = {
 "id": "2515",
 "title": "Shortest Distance to Target String in a Circular Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "words is a circular list (the last word is next to the first). Starting at startIndex, you may step one place left or right per move. Return the fewest moves to reach a word equal to target, or −1 if there is none. Example: ['hello','i','am','leetcode','hello'], target 'hello', start 1 → 1.",
 "why": "['hello','i','am','leetcode','hello'], target hello, start 1: index 0 is one step left → 1.",
 "idea": "For each index holding target, the walking distance is the smaller of the direct gap and the way around the circle (n − gap). Return the minimum, or −1 if the target is absent.",
 "input": "words = [\"hello\",\"i\",\"am\",\"leetcode\",\"hello\"], target = \"hello\", startIndex = 1",
 "output": "1",
 "notes": [],
 "best": "For each index holding target, the walking distance is the smaller of the direct gap and the way around the circle (n − gap). Return the minimum, or −1 if the target is absent.",
 "variants": [
  {
   "name": "Min circular distance to any match",
   "code": "class Solution:\n    def closestTarget(self, words, target, startIndex):\n        n = len(words)\n        best = n\n        for i, w in enumerate(words):\n            if w == target:\n                gap = abs(i - startIndex)\n                best = min(best, gap, n - gap)\n        return best if best < n else -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For each index holding target, the walking distance is the smaller of the direct gap and the way around the circle (n − gap). Return the minimum, or −1 if the target is absent.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk outwards step by step",
   "tag": "Alternative",
   "code": "class Solution:\n    def closestTarget(self, words, target, startIndex):\n        n = len(words)\n        for s in range(n):\n            if words[(startIndex + s) % n] == target or words[(startIndex - s) % n] == target:\n                return s\n        return -1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Look at the word s steps to the right and s steps to the left of the start for s = 0, 1, 2 …; the first hit is the answer.",
   "frames": [],
   "alt": true
  }
 ]
};
