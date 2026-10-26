window.PROBLEM = {
 "id": "1701",
 "title": "Average Waiting Time",
 "level": "Medium",
 "topic": "Array / String",
 "question": "customers[i] = [arrival, cookTime]. One chef cooks the orders in order, one at a time, starting each as soon as the customer has arrived and the chef is free. A customer waits from arrival until their food is ready. Return the average waiting time. Example: [[1,2],[2,5],[4,3]] → 5.0.",
 "why": "[[1,2],[2,5],[4,3]]: waits 2, 5, 8 → average 15 / 3 = 5.",
 "idea": "One chef serves customers in arrival order. Keep the time the chef becomes free: a customer starts at max(free, arrival), finishes after their cooking time, and waited finish − arrival. Average the waits.",
 "input": "customers = [[1,2],[2,5],[4,3]]",
 "output": "5.0",
 "notes": [],
 "best": "One chef serves customers in arrival order. Keep the time the chef becomes free: a customer starts at max(free, arrival), finishes after their cooking time, and waited finish − arrival. Average the waits.",
 "variants": [
  {
   "name": "Simulate the single chef",
   "code": "class Solution:\n    def averageWaitingTime(self, customers):\n        t = total = 0\n        for arrive, cook in customers:\n            t = max(t, arrive) + cook\n            total += t - arrive\n        return total / len(customers)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "One chef serves customers in arrival order. Keep the time the chef becomes free: a customer starts at max(free, arrival), finishes after their cooking time, and waited finish − arrival. Average the waits.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Start and finish lists",
   "tag": "Alternative",
   "code": "class Solution:\n    def averageWaitingTime(self, customers):\n        finish = []\n        t = 0\n        for a, c in customers:\n            t = max(t, a) + c\n            finish.append(t)\n        return sum(f - a for f, (a, _) in zip(finish, customers)) / len(customers)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "First compute every finishing time, then average finish − arrival.",
   "frames": [],
   "alt": true
  }
 ]
};
