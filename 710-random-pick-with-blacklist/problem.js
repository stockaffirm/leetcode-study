window.PROBLEM = {
 "id": "710",
 "title": "Random Pick with Blacklist",
 "level": "Hard",
 "topic": "Design",
 "question": "Design a class: given n and a blacklist of numbers in [0, n), pick() returns a random integer in [0, n) that is not blacklisted, with every allowed number equally likely (using as few random-number calls as possible). Example: n=7, blacklist [2,3,5] → picks are among 0, 1, 4, 6.",
 "why": "Pick a random integer in [0, n) that is NOT in the blacklist, each allowed number equally likely, with few random calls.",
 "idea": "There are k = n − len(blacklist) allowed numbers. Pick uniformly from [0, k); if the pick is blacklisted, replace it by an allowed number from [k, n) that was assigned to it in advance.",
 "input": "n=7, blacklist [2,3,5]",
 "output": "one of 0, 1, 4, 6",
 "notes": [],
 "best": "There are k = n − len(blacklist) allowed numbers. Pick uniformly from [0, k); if the pick is blacklisted, replace it by an allowed number from [k, n) that was assigned to it in advance.",
 "variants": [
  {
   "name": "Remap blacklisted numbers in the small range",
   "code": "class Solution:\n    def __init__(self, n, blacklist):\n        self.k = n - len(blacklist)\n        bl = set(blacklist)\n        free = iter(x for x in range(self.k, n) if x not in bl)\n        self.map = {b: next(free) for b in blacklist if b < self.k}\n    def pick(self):\n        r = random.randrange(self.k)\n        return self.map.get(r, r)",
   "time": "O(b) setup, O(1) pick",
   "space": "O(b)",
   "explain": "There are k = n − len(blacklist) allowed numbers. Pick uniformly from [0, k); if the pick is blacklisted, replace it by an allowed number from [k, n) that was assigned to it in advance.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "List of allowed numbers",
   "tag": "Brute force",
   "code": "class Solution:\n    def __init__(self, n, blacklist):\n        bl = set(blacklist)\n        self.allowed = [x for x in range(n) if x not in bl]\n    def pick(self):\n        return random.choice(self.allowed)",
   "time": "O(n) setup",
   "space": "O(n)",
   "explain": "Build the list of allowed numbers and pick from it.",
   "frames": [],
   "alt": true
  }
 ]
};
