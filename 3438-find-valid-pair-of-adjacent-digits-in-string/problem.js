window.PROBLEM = {
 "id": "3438",
 "title": "Find Valid Pair of Adjacent Digits in String",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'2523533': 2 appears 2 times and 3 appears 3 times, so the first valid neighbour pair is '23'.",
 "idea": "A pair is valid when its two digits differ and each digit appears in the whole string exactly as many times as its value. Count the digits once, then scan adjacent pairs left to right and return the first valid one.",
 "input": "s = \"2523533\"",
 "output": "\"23\"",
 "notes": [],
 "best": "A pair is valid when its two digits differ and each digit appears in the whole string exactly as many times as its value. Count the digits once, then scan adjacent pairs left to right and return the first valid one.",
 "variants": [
  {
   "name": "Count digits, then scan neighbours",
   "code": "class Solution:\n    def findValidPair(self, s):\n        cnt = Counter(s)\n        for a, b in zip(s, s[1:]):\n            if a != b and cnt[a] == int(a) and cnt[b] == int(b):\n                return a + b\n        return \"\"",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A pair is valid when its two digits differ and each digit appears in the whole string exactly as many times as its value. Count the digits once, then scan adjacent pairs left to right and return the first valid one.",
   "frames": []
  }
 ]
};
