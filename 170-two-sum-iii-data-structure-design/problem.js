window.PROBLEM = {
 "id": "170",
 "title": "Two Sum III - Data structure design",
 "level": "Easy",
 "topic": "Design",
 "question": "",
 "why": "A structure with add(number) and find(value): is there a pair of stored numbers adding up to value?",
 "idea": "Keep a count of every number. For find, for each stored x look for value − x (if it equals x itself, we need at least two copies).",
 "input": "add 1, 3, 5; find 4",
 "output": "True",
 "notes": [],
 "best": "Keep a count of every number. For find, for each stored x look for value − x (if it equals x itself, we need at least two copies).",
 "variants": [
  {
   "name": "Counts in a hash map",
   "code": "class TwoSum:\n    def __init__(self):\n        self.cnt = defaultdict(int)\n    def add(self, number):\n        self.cnt[number] += 1\n    def find(self, value):\n        for x in self.cnt:\n            y = value - x\n            if y in self.cnt and (y != x or self.cnt[x] > 1): return True\n        return False",
   "time": "add O(1), find O(n)",
   "space": "O(n)",
   "explain": "Keep a count of every number. For find, for each stored x look for value − x (if it equals x itself, we need at least two copies).",
   "frames": []
  }
 ]
};
