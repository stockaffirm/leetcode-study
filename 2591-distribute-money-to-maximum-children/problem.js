window.PROBLEM = {
 "id": "2591",
 "title": "Distribute Money to Maximum Children",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
