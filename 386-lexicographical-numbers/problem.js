window.PROBLEM = {
 "id": "386",
 "title": "Lexicographical Numbers",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "n=13 → [1,10,11,12,13,2,3,4,5,6,7,8,9].",
 "idea": "Start at 1. Next number: if cur × 10 ≤ n go deeper; otherwise move to cur + 1, first stepping up (cur //= 10) while cur is n or ends in 9. Repeat n times.",
 "input": "n = 13",
 "output": "[1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]",
 "notes": [],
 "best": "Start at 1. Next number: if cur × 10 ≤ n go deeper; otherwise move to cur + 1, first stepping up (cur //= 10) while cur is n or ends in 9. Repeat n times.",
 "variants": [
  {
   "name": "Walk the 10-ary trie in order",
   "code": "class Solution:\n    def lexicalOrder(self, n):\n        res = []\n        cur = 1\n        for _ in range(n):\n            res.append(cur)\n            if cur * 10 <= n:\n                cur *= 10\n            else:\n                while cur % 10 == 9 or cur + 1 > n:\n                    cur //= 10\n                cur += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Start at 1. Next number: if cur × 10 ≤ n go deeper; otherwise move to cur + 1, first stepping up (cur //= 10) while cur is n or ends in 9. Repeat n times.",
   "frames": []
  }
 ]
};
