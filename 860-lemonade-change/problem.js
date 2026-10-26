window.PROBLEM = {
 "id": "860",
 "title": "Lemonade Change",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "Customers pay 5, 5, 5, 10, 20: the 10 gets a 5 back; the 20 gets 10 + 5 back. Everyone gets the right change → true.",
 "idea": "Only 5s and 10s are useful as change. For a 10 give one 5. For a 20 give 10 + 5 if possible (keeps the more flexible 5s), otherwise three 5s.",
 "input": "bills = [5,5,5,10,20]",
 "output": "true",
 "notes": [],
 "best": "Only 5s and 10s are useful as change. For a 10 give one 5. For a 20 give 10 + 5 if possible (keeps the more flexible 5s), otherwise three 5s.",
 "variants": [
  {
   "name": "Count the 5s and 10s",
   "code": "class Solution:\n    def lemonadeChange(self, bills):\n        five = ten = 0\n        for b in bills:\n            if b == 5:\n                five += 1\n            elif b == 10:\n                if not five:\n                    return False\n                five -= 1\n                ten += 1\n            else:\n                if ten and five:\n                    ten -= 1\n                    five -= 1\n                elif five >= 3:\n                    five -= 3\n                else:\n                    return False\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Only 5s and 10s are useful as change. For a 10 give one 5. For a 20 give 10 + 5 if possible (keeps the more flexible 5s), otherwise three 5s.",
   "frames": []
  }
 ]
};
