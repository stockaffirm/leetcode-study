window.PROBLEM = {
 "id": "2423",
 "title": "Remove Letter To Equalize Frequency",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Remove exactly one letter from the word. Return true if the remaining letters can all occur the same number of times. Example: 'abcc' → true.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Remove each position",
   "tag": "Brute force",
   "code": "class Solution:\n    def equalFrequency(self, word):\n        for i in range(len(word)):\n            rest = word[:i] + word[i + 1:]\n            if len(set(Counter(rest).values())) == 1:\n                return True\n        return False",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Delete every character in turn and test the rest.",
   "frames": [],
   "alt": true
  }
 ]
};
