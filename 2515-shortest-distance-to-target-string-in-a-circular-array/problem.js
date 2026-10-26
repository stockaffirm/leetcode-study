window.PROBLEM = {
 "id": "2515",
 "title": "Shortest Distance to Target String in a Circular Array",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
