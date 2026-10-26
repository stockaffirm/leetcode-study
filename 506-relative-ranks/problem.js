window.PROBLEM = {
 "id": "506",
 "title": "Relative Ranks",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "[5,4,3,2,1] → ['Gold Medal','Silver Medal','Bronze Medal','4','5'].",
 "idea": "Sort the scores in descending order and give the first three medals and the rest their place number. Map every score back to its label.",
 "input": "score = [5,4,3,2,1]",
 "output": "['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5']",
 "notes": [],
 "best": "Sort the scores in descending order and give the first three medals and the rest their place number. Map every score back to its label.",
 "variants": [
  {
   "name": "Sort scores, map to medals",
   "code": "class Solution:\n    def findRelativeRanks(self, score):\n        labels = {}\n        medals = [\"Gold Medal\", \"Silver Medal\", \"Bronze Medal\"]\n        for rank, s in enumerate(sorted(score, reverse=True)):\n            labels[s] = medals[rank] if rank < 3 else str(rank + 1)\n        return [labels[s] for s in score]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the scores in descending order and give the first three medals and the rest their place number. Map every score back to its label.",
   "frames": []
  }
 ]
};
