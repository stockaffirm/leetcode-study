window.PROBLEM = {
 "id": "2483",
 "title": "Minimum Penalty for a Shop",
 "level": "Medium",
 "topic": "Array / String",
 "question": "A shop's log is a string customers where customers[i] is 'Y' if customers came in hour i and 'N' if not. If the shop closes at hour j (it is open for hours 0 to j−1), the penalty is 1 for every open hour with no customers plus 1 for every closed hour with customers. Return the EARLIEST hour j (0 to n) with the smallest penalty. Example: 'YYNY' → closing at hour 2 costs 1 (hour 3 had a customer) → 2.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Compute each closing hour's penalty",
   "tag": "Brute force",
   "code": "class Solution:\n    def bestClosingTime(self, customers):\n        n = len(customers)\n        def pen(h): return customers[:h].count('N') + customers[h:].count('Y')\n        return min(range(n + 1), key=lambda h: (pen(h), h))",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "For every hour count the open-with-no-customers hours before and the closed-with-customers hours after.",
   "frames": [],
   "alt": true
  }
 ]
};
