window.PROBLEM = {
 "id": "384",
 "title": "Shuffle an Array",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Design a class that returns the original array on reset() and a uniformly random shuffle on shuffle().",
 "idea": "Fisher–Yates: go from the end to the start and swap each position with a random position at or before it. Every permutation is equally likely.",
 "input": "[1,2,3]: shuffle, reset",
 "output": "a permutation, then [1,2,3]",
 "notes": [],
 "best": "Fisher–Yates: go from the end to the start and swap each position with a random position at or before it. Every permutation is equally likely.",
 "variants": [
  {
   "name": "Fisher–Yates shuffle",
   "code": "class Solution:\n    def __init__(self, nums):\n        self.orig = nums[:]\n        self.a = nums[:]\n    def reset(self):\n        self.a = self.orig[:]\n        return self.a[:]\n    def shuffle(self):\n        for i in range(len(self.a) - 1, 0, -1):\n            j = random.randint(0, i)\n            self.a[i], self.a[j] = self.a[j], self.a[i]\n        return self.a[:]",
   "time": "O(n) per shuffle",
   "space": "O(n)",
   "explain": "Fisher–Yates: go from the end to the start and swap each position with a random position at or before it. Every permutation is equally likely.",
   "frames": []
  }
 ]
};
