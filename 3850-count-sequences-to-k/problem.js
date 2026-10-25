window.PROBLEM = {
 "id": "3850",
 "title": "Count Sequences to K",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "Start with val = 1 and go through nums left to right. For each number you choose exactly one action: multiply val by it, divide val by it (exact fraction, not integer division) or leave val unchanged. Count the choice sequences that end with val equal to k. Example: nums [2,3,2], k=6 → 2.",
 "why": "Start with val = 1. For each number choose: multiply val by it, divide val by it (exactly, as a fraction), or leave val. Count the choice sequences that end with val = k.",
 "idea": "Keep a dictionary {value: number of ways} of every fraction reachable so far; each number sends every entry to three new values. The answer is the count stored for k.",
 "input": "nums [2,3,2], k=6",
 "output": "2",
 "notes": [],
 "best": "Keep a dictionary {value: number of ways} of every fraction reachable so far; each number sends every entry to three new values. The answer is the count stored for k.",
 "variants": [
  {
   "name": "DP over reachable exact fractions",
   "code": "from fractions import Fraction\n\nclass Solution:\n    def countSequences(self, nums, k):\n        states = {Fraction(1): 1}\n        for x in nums:\n            new = defaultdict(int)\n            for v, c in states.items():\n                new[v] += c\n                new[v * x] += c\n                new[v / x] += c\n            states = new\n        return states.get(Fraction(k), 0)",
   "time": "O(3^n) worst, much smaller in practice",
   "space": "O(states)",
   "explain": "Keep a dictionary {value: number of ways} of every fraction reachable so far; each number sends every entry to three new values. The answer is the count stored for k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try all 3ⁿ sequences",
   "tag": "Brute force",
   "code": "from fractions import Fraction\n\nclass Solution:\n    def countSequences(self, nums, k):\n        count = 0\n        for choice in product((0, 1, 2), repeat=len(nums)):\n            v = Fraction(1)\n            for c, x in zip(choice, nums):\n                if c == 1: v *= x\n                elif c == 2: v /= x\n            if v == k: count += 1\n        return count",
   "time": "O(3^n)",
   "space": "O(n)",
   "explain": "Enumerate every choice sequence and check whether the final value equals k.",
   "frames": [],
   "alt": true
  }
 ]
};
