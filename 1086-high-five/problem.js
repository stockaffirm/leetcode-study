window.PROBLEM = {
 "id": "1086",
 "title": "High Five",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Student 1 has scores 91, 92, 60, 65, 87, 100 → top five 100, 92, 91, 87, 65 → average 87.",
 "idea": "Group scores by student id, sort each group descending, average the top five (integer division), and output students in increasing id order.",
 "input": "items = [[1,91],[1,92],[2,93],[2,97],[1,60],[2,77],[1,65],[1,87],[1,100],[2,100],[2,76]]",
 "output": "[[1, 87], [2, 88]]",
 "notes": [],
 "best": "Group scores by student id, sort each group descending, average the top five (integer division), and output students in increasing id order.",
 "variants": [
  {
   "name": "Average of each student's five best scores",
   "code": "class Solution:\n    def highFive(self, items):\n        scores = defaultdict(list)\n        for sid, s in items:\n            scores[sid].append(s)\n        return [[sid, sum(sorted(v, reverse=True)[:5]) // 5] for sid, v in sorted(scores.items())]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Group scores by student id, sort each group descending, average the top five (integer division), and output students in increasing id order.",
   "frames": []
  }
 ]
};
