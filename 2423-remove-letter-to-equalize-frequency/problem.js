window.PROBLEM = {
 "id": "2423",
 "title": "Remove Letter To Equalize Frequency",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'abcc': removing one 'c' leaves a, b, c once each → true.",
 "idea": "For each distinct letter remove one occurrence and check whether all remaining letters have the same count.",
 "input": "word = \"abcc\"",
 "output": "true",
 "notes": [],
 "best": "For each distinct letter remove one occurrence and check whether all remaining letters have the same count.",
 "variants": [
  {
   "name": "Try removing one copy of each letter",
   "code": "class Solution:\n    def equalFrequency(self, word):\n        cnt = Counter(word)\n        for c in list(cnt):\n            cnt[c] -= 1\n            vals = {v for v in cnt.values() if v}\n            cnt[c] += 1\n            if len(vals) == 1:\n                return True\n        return False",
   "time": "O(26·n)",
   "space": "O(1)",
   "explain": "For each distinct letter remove one occurrence and check whether all remaining letters have the same count.",
   "frames": []
  }
 ]
};
