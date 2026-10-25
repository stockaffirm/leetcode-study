window.PROBLEM = {
 "id": "398",
 "title": "Random Pick Index",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a class that stores an integer array that may contain duplicates. pick(target) returns the index of a random occurrence of target; all occurrences must be equally likely. The target is always present. Example: [1,2,3,3,3], pick(3) → 2, 3 or 4.",
 "why": "[1,2,3,3,3]: pick(3) must return 2, 3 or 4 with equal chance (1/3 each).",
 "idea": "Scan the array. For the c-th occurrence of the target, replace the current answer with its index with probability 1/c. After the scan every occurrence is equally likely, and no extra memory is needed.",
 "input": "Solution([1,2,3,3,3]); pick(3)",
 "output": "2, 3 or 4 (each 1/3)",
 "notes": [],
 "best": "Scan the array. For the c-th occurrence of the target, replace the current answer with its index with probability 1/c. After the scan every occurrence is equally likely, and no extra memory is needed.",
 "variants": [
  {
   "name": "Reservoir sampling",
   "code": "class Solution:\n    def __init__(self, nums):\n        self.nums = nums\n    def pick(self, target):\n        res, cnt = -1, 0\n        for i, x in enumerate(self.nums):\n            if x == target:\n                cnt += 1\n                if random.randrange(cnt) == 0:\n                    res = i\n        return res",
   "time": "pick O(n)",
   "space": "O(1)",
   "explain": "Scan the array. For the c-th occurrence of the target, replace the current answer with its index with probability 1/c. After the scan every occurrence is equally likely, and no extra memory is needed.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Index lists per value",
   "tag": "Alternative",
   "code": "class Solution:\n    def __init__(self, nums):\n        self.pos = defaultdict(list)\n        for i, x in enumerate(nums):\n            self.pos[x].append(i)\n    def pick(self, target):\n        return random.choice(self.pos[target])",
   "time": "pick O(1)",
   "space": "O(n)",
   "explain": "Remember the indices of every value once and pick a random one from the list.",
   "frames": [],
   "alt": true
  }
 ]
};
