window.PROBLEM = {
 "id": "2483",
 "title": "Minimum Penalty for a Shop",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "A shop's log says for each hour whether customers came (Y) or not (N). Closing at hour h costs 1 per open hour with no customers plus 1 per closed hour with customers. Which hour is best (earliest)?",
 "idea": "Start with 'closed all day' (penalty = number of Y). Moving the closing hour past an hour changes the penalty by +1 for an N and −1 for a Y. Track the minimum.",
 "input": "\"YYNY\"",
 "output": "2",
 "notes": [],
 "best": "Start with 'closed all day' (penalty = number of Y). Moving the closing hour past an hour changes the penalty by +1 for an N and −1 for a Y. Track the minimum.",
 "variants": [
  {
   "name": "Running penalty as the closing hour moves",
   "code": "class Solution:\n    def bestClosingTime(self, customers):\n        penalty = customers.count('Y')\n        best, hour = penalty, 0\n        for i, ch in enumerate(customers):\n            penalty += 1 if ch == 'N' else -1\n            if penalty < best:\n                best, hour = penalty, i + 1\n        return hour",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Start with 'closed all day' (penalty = number of Y). Moving the closing hour past an hour changes the penalty by +1 for an N and −1 for a Y. Track the minimum.",
   "frames": []
  }
 ]
};
