window.PROBLEM = {
 "id": "3850",
 "title": "Count Sequences to K",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
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
   "frames": []
  }
 ]
};
