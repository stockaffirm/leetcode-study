window.PROBLEM = {
 "id": "3016",
 "title": "Minimum Number of Pushes to Type Word II",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'xyzxyzxyzxyz' → 3 letters on 3 keys, each 1 push → 12.",
 "idea": "There are 8 keys. Each key can hold several letters; the j-th letter on a key costs j pushes. Sort letter frequencies in descending order: the first 8 letters cost 1 push each, the next 8 cost 2, and so on.",
 "input": "word = \"xyzxyzxyzxyz\"",
 "output": "12",
 "notes": [],
 "best": "There are 8 keys. Each key can hold several letters; the j-th letter on a key costs j pushes. Sort letter frequencies in descending order: the first 8 letters cost 1 push each, the next 8 cost 2, and so on.",
 "variants": [
  {
   "name": "Most frequent letters get the cheapest keys",
   "code": "class Solution:\n    def minimumPushes(self, word):\n        freqs = sorted(Counter(word).values(), reverse=True)\n        return sum(f * (i // 8 + 1) for i, f in enumerate(freqs))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "There are 8 keys. Each key can hold several letters; the j-th letter on a key costs j pushes. Sort letter frequencies in descending order: the first 8 letters cost 1 push each, the next 8 cost 2, and so on.",
   "frames": []
  }
 ]
};
