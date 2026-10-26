window.PROBLEM = {
 "id": "3085",
 "title": "Minimum Deletions to Make String K-Special",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'aabcaba', k=0: keep a, b with equal frequency 3 → delete 1 c... answer 3.",
 "idea": "A string is k-special if any two letter frequencies differ by at most k. Try each existing frequency f as the lowest kept frequency: letters with frequency below f are deleted entirely, letters above f + k are reduced to f + k. Take the cheapest total deletions.",
 "input": "word = \"aabcaba\", k = 0",
 "output": "3",
 "notes": [],
 "best": "A string is k-special if any two letter frequencies differ by at most k. Try each existing frequency f as the lowest kept frequency: letters with frequency below f are deleted entirely, letters above f + k are reduced to f + k. Take the cheapest total deletions.",
 "variants": [
  {
   "name": "Try each frequency as the smallest kept",
   "code": "class Solution:\n    def minimumDeletions(self, word, k):\n        freqs = list(Counter(word).values())\n        best = len(word)\n        for f in set(freqs):\n            cost = 0\n            for g in freqs:\n                if g < f:\n                    cost += g\n                elif g > f + k:\n                    cost += g - f - k\n            best = min(best, cost)\n        return best",
   "time": "O(26²)",
   "space": "O(26)",
   "explain": "A string is k-special if any two letter frequencies differ by at most k. Try each existing frequency f as the lowest kept frequency: letters with frequency below f are deleted entirely, letters above f + k are reduced to f + k. Take the cheapest total deletions.",
   "frames": []
  }
 ]
};
