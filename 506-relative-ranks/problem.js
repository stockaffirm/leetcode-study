window.PROBLEM = {
 "id": "506",
 "title": "Relative Ranks",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Athletes have distinct scores. Return each athlete's rank: 'Gold Medal', 'Silver Medal', 'Bronze Medal' for the top 3, otherwise their place as a string. Example: [5,4,3,2,1] → ['Gold Medal','Silver Medal','Bronze Medal','4','5'].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Heap of scores",
   "tag": "Alternative",
   "code": "class Solution:\n    def findRelativeRanks(self, score):\n        heap = [(-s, i) for i, s in enumerate(score)]\n        heapify(heap)\n        res = [\"\"] * len(score)\n        place = 1\n        while heap:\n            _, i = heappop(heap)\n            res[i] = [\"Gold Medal\", \"Silver Medal\", \"Bronze Medal\"][place - 1] if place <= 3 else str(place)\n            place += 1\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Pop the scores from a max-heap to assign places.",
   "frames": [],
   "alt": true
  }
 ]
};
