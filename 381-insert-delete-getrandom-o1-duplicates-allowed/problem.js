window.PROBLEM = {
 "id": "381",
 "title": "Insert Delete GetRandom O(1) - Duplicates allowed",
 "level": "Hard",
 "topic": "Design",
 "question": "",
 "why": "A bag of numbers (duplicates allowed) with insert, remove one copy, and getRandom (each stored copy equally likely), all in O(1) on average.",
 "idea": "Keep the values in an array (for random picks) and, for every value, the set of its positions. To remove, move the LAST array element into the freed slot and fix both position sets.",
 "input": "insert 1, 1, 2; remove 1",
 "output": "True, False, True; True",
 "notes": [],
 "best": "Keep the values in an array (for random picks) and, for every value, the set of its positions. To remove, move the LAST array element into the freed slot and fix both position sets.",
 "variants": [
  {
   "name": "Array + value → set of positions",
   "code": "class RandomizedCollection:\n    def __init__(self):\n        self.a = []\n        self.pos = defaultdict(set)\n    def insert(self, val):\n        self.pos[val].add(len(self.a))\n        self.a.append(val)\n        return len(self.pos[val]) == 1\n    def remove(self, val):\n        if not self.pos[val]: return False\n        i = self.pos[val].pop()\n        last = self.a[-1]\n        self.a[i] = last\n        self.pos[last].add(i)\n        self.pos[last].discard(len(self.a) - 1)\n        self.a.pop()\n        return True\n    def getRandom(self):\n        return random.choice(self.a)",
   "time": "O(1) average",
   "space": "O(n)",
   "explain": "Keep the values in an array (for random picks) and, for every value, the set of its positions. To remove, move the LAST array element into the freed slot and fix both position sets.",
   "frames": []
  }
 ]
};
