window.PROBLEM = {
 "id": "895",
 "title": "Maximum Frequency Stack",
 "level": "Hard",
 "topic": "Design",
 "question": "",
 "why": "A stack whose pop removes the most frequent element (the most recently pushed one among ties).",
 "idea": "Keep the frequency of every value and, for each frequency level f, a stack of the values that reached frequency f. Pop takes from the highest level.",
 "input": "push 5,7,5,7,4,5; pop ×4",
 "output": "5, 7, 5, 4",
 "notes": [],
 "best": "Keep the frequency of every value and, for each frequency level f, a stack of the values that reached frequency f. Pop takes from the highest level.",
 "variants": [
  {
   "name": "Stack per frequency level",
   "code": "class FreqStack:\n    def __init__(self):\n        self.freq = defaultdict(int)\n        self.group = defaultdict(list)\n        self.top = 0\n    def push(self, val):\n        self.freq[val] += 1\n        f = self.freq[val]\n        self.top = max(self.top, f)\n        self.group[f].append(val)\n    def pop(self):\n        val = self.group[self.top].pop()\n        self.freq[val] -= 1\n        if not self.group[self.top]: self.top -= 1\n        return val",
   "time": "O(1) per call",
   "space": "O(n)",
   "explain": "Keep the frequency of every value and, for each frequency level f, a stack of the values that reached frequency f. Pop takes from the highest level.",
   "frames": []
  }
 ]
};
