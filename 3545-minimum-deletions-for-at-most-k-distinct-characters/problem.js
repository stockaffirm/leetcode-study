window.PROBLEM = {
 "id": "3545",
 "title": "Minimum Deletions for At Most K Distinct Characters",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "'abc' with k = 2: three different letters, only two allowed → delete one whole letter (they all appear once) → 1 deletion.",
 "idea": "To lower the number of distinct letters you must delete ALL copies of some letters. It is cheapest to remove the letters with the smallest counts, so sort the counts and add up the smallest (distinct − k) of them.",
 "input": "s = \"abc\", k = 2",
 "output": "1",
 "notes": [],
 "best": "To lower the number of distinct letters you must delete ALL copies of some letters. It is cheapest to remove the letters with the smallest counts, so sort the counts and add up the smallest (distinct − k) of them.",
 "variants": [
  {
   "name": "Delete the rarest letters completely",
   "code": "class Solution:\n    def minDeletion(self, s, k):\n        freq = sorted(Counter(s).values())\n        return sum(freq[:max(0, len(freq) - k)])",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "To lower the number of distinct letters you must delete ALL copies of some letters. It is cheapest to remove the letters with the smallest counts, so sort the counts and add up the smallest (distinct − k) of them.",
   "frames": []
  }
 ]
};
