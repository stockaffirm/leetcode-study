window.PROBLEM = {
 "id": "846",
 "title": "Hand of Straights",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "[1,2,3,6,2,3,4,7,8], groupSize 3 → [1,2,3], [2,3,4], [6,7,8] → true.",
 "idea": "Count the cards. The smallest remaining card must start a group of consecutive numbers: remove one of each of value, value+1, …, value+groupSize−1. If any is missing, return false.",
 "input": "hand = [1,2,3,6,2,3,4,7,8], groupSize = 3",
 "output": "true",
 "notes": [],
 "best": "Count the cards. The smallest remaining card must start a group of consecutive numbers: remove one of each of value, value+1, …, value+groupSize−1. If any is missing, return false.",
 "variants": [
  {
   "name": "Always start a group at the smallest card",
   "code": "class Solution:\n    def isNStraightHand(self, hand, groupSize):\n        if len(hand) % groupSize:\n            return False\n        cnt = Counter(hand)\n        for x in sorted(cnt):\n            c = cnt[x]\n            if c:\n                for y in range(x, x + groupSize):\n                    if cnt[y] < c:\n                        return False\n                    cnt[y] -= c\n        return True",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Count the cards. The smallest remaining card must start a group of consecutive numbers: remove one of each of value, value+1, …, value+groupSize−1. If any is missing, return false.",
   "frames": []
  }
 ]
};
