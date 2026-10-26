window.PROBLEM = {
 "id": "2591",
 "title": "Distribute Money to Maximum Children",
 "level": "Easy",
 "topic": "Greedy",
 "question": "You have money dollars to give to children children. Rules: all the money must be used; everyone gets at least $1; nobody gets exactly $4. Return the largest number of children who can get EXACTLY $8, or -1 if the money cannot be distributed legally. Example: money 20, children 3 → give $8, $8 and $4 is not allowed; the best is one child with $8 (e.g. 8, 9, 3) → 1.",
 "why": "Give money to children: everyone gets at least $1, nobody gets exactly $4, all money is used. Maximise the children who get exactly $8.",
 "idea": "Give each child $1 first, then upgrade as many as possible to $8 (7 more each). Fix the traps: leftover money with no child left to take it, or the last child ending up with exactly $4.",
 "input": "money=20, children=3",
 "output": "1",
 "notes": [],
 "best": "Give each child $1 first, then upgrade as many as possible to $8 (7 more each). Fix the traps: leftover money with no child left to take it, or the last child ending up with exactly $4.",
 "variants": [
  {
   "name": "Greedy with two special cases",
   "code": "class Solution:\n    def distMoney(self, money, children):\n        if money < children: return -1\n        money -= children\n        eights = min(money // 7, children)\n        money -= eights * 7\n        left = children - eights\n        if (left == 0 and money > 0) or (left == 1 and money == 3): eights -= 1\n        return eights",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Give each child $1 first, then upgrade as many as possible to $8 (7 more each). Fix the traps: leftover money with no child left to take it, or the last child ending up with exactly $4.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try eights from the most",
   "tag": "Brute force",
   "code": "class Solution:\n    def distMoney(self, money, children):\n        if money < children: return -1\n        for k in range(children, -1, -1):\n            rest, left = money - 8 * k, children - k\n            if rest < left: continue\n            if left == 0 and rest > 0: continue\n            if left == 1 and rest == 4: continue\n            return k\n        return -1",
   "time": "O(children)",
   "space": "O(1)",
   "explain": "Try k children with $8, from the maximum down, and check the rest can be handed out legally.",
   "frames": [],
   "alt": true
  }
 ]
};
