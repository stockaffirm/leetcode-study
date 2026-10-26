window.PROBLEM = {
 "id": "1189",
 "title": "Maximum Number of Balloons",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'nlaebolko' → 1 balloon.",
 "idea": "'balloon' needs b, a, n once and l, o twice. Count the letters; the number of words is the minimum of count[b], count[a], count[n], count[l] // 2, count[o] // 2.",
 "input": "text = \"nlaebolko\"",
 "output": "1",
 "notes": [],
 "best": "'balloon' needs b, a, n once and l, o twice. Count the letters; the number of words is the minimum of count[b], count[a], count[n], count[l] // 2, count[o] // 2.",
 "variants": [
  {
   "name": "Limiting letter among b, a, l (twice), o (twice), n",
   "code": "class Solution:\n    def maxNumberOfBalloons(self, text):\n        c = Counter(text)\n        return min(c['b'], c['a'], c['n'], c['l'] // 2, c['o'] // 2)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "'balloon' needs b, a, n once and l, o twice. Count the letters; the number of words is the minimum of count[b], count[a], count[n], count[l] // 2, count[o] // 2.",
   "frames": []
  }
 ]
};
