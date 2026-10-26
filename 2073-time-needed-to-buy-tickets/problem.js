window.PROBLEM = {
 "id": "2073",
 "title": "Time Needed to Buy Tickets",
 "level": "Easy",
 "topic": "Queue",
 "question": "",
 "why": "tickets [2,3,2], k=2: 2 + 2 + 2 → the last person finishes after 6 seconds.",
 "idea": "People in front of k (and k) buy at most tickets[k] tickets before k finishes; people behind k buy at most tickets[k] − 1. Sum min(tickets[i], limit).",
 "input": "tickets = [2,3,2], k = 2",
 "output": "6",
 "notes": [],
 "best": "People in front of k (and k) buy at most tickets[k] tickets before k finishes; people behind k buy at most tickets[k] − 1. Sum min(tickets[i], limit).",
 "variants": [
  {
   "name": "Each person buys at most tickets[k] (or one less if behind k)",
   "code": "class Solution:\n    def timeRequiredToBuy(self, tickets, k):\n        return sum(min(t, tickets[k] if i <= k else tickets[k] - 1) for i, t in enumerate(tickets))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "People in front of k (and k) buy at most tickets[k] tickets before k finishes; people behind k buy at most tickets[k] − 1. Sum min(tickets[i], limit).",
   "frames": []
  }
 ]
};
