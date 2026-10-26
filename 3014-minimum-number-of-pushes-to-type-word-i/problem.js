window.PROBLEM = {
 "id": "3014",
 "title": "Minimum Number of Pushes to Type Word I",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "'abcde' has five distinct letters: all on separate keys (8 keys), 1 push each → 5.",
 "idea": "Keys 2–9 give 8 first-position slots (1 push), then 8 second-position slots (2 pushes) and so on. Assign the most frequent letters to the cheapest slots: sort letter frequencies descending and letter number r (from 0) costs (r // 8 + 1) pushes per occurrence.",
 "input": "word = \"abcde\"",
 "output": "5",
 "notes": [],
 "best": "Keys 2–9 give 8 first-position slots (1 push), then 8 second-position slots (2 pushes) and so on. Assign the most frequent letters to the cheapest slots: sort letter frequencies descending and letter number r (from 0) costs (r // 8 + 1) pushes per occurrence.",
 "variants": [
  {
   "name": "Most frequent letters get the cheapest slots",
   "code": "class Solution:\n    def minimumPushes(self, word):\n        freqs = sorted(Counter(word).values(), reverse=True)\n        return sum(f * (r // 8 + 1) for r, f in enumerate(freqs))",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "Keys 2–9 give 8 first-position slots (1 push), then 8 second-position slots (2 pushes) and so on. Assign the most frequent letters to the cheapest slots: sort letter frequencies descending and letter number r (from 0) costs (r // 8 + 1) pushes per occurrence.",
   "frames": []
  }
 ]
};
