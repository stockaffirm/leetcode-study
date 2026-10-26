window.PROBLEM = {
 "id": "763",
 "title": "Partition Labels",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "Cut a string into as many pieces as possible so that every letter appears in at most one piece. Return the piece lengths.",
 "idea": "Record the last position of each letter. Walk through; a piece ends when the walk reaches the farthest last position of all letters seen in the piece.",
 "input": "'ababcbacadefegdehijhklij'",
 "output": "[9,7,8]",
 "notes": [],
 "best": "Record the last position of each letter. Walk through; a piece ends when the walk reaches the farthest last position of all letters seen in the piece.",
 "variants": [
  {
   "name": "Greedy with last occurrence",
   "code": "class Solution:\n    def partitionLabels(self, s):\n        last = {ch: i for i, ch in enumerate(s)}\n        res = []\n        start = end = 0\n        for i, ch in enumerate(s):\n            end = max(end, last[ch])\n            if i == end:\n                res.append(end - start + 1)\n                start = i + 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Record the last position of each letter. Walk through; a piece ends when the walk reaches the farthest last position of all letters seen in the piece.",
   "frames": []
  }
 ]
};
