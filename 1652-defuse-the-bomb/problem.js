window.PROBLEM = {
 "id": "1652",
 "title": "Defuse the Bomb",
 "level": "Easy",
 "topic": "Sliding Window",
 "question": "",
 "why": "k = 3: every number is replaced by the sum of the next 3 (circularly): 5 → 7+1+4 = 12, 7 → 1+4+5 = 10 …",
 "idea": "For k > 0 sum the next k numbers, for k < 0 the previous |k| numbers, for k = 0 all zeros. Instead of re-adding k numbers for each position, slide a window: subtract the number that leaves and add the one that enters (indices modulo n).",
 "input": "code = [5,7,1,4], k = 3",
 "output": "[12,10,16,13]",
 "notes": [],
 "best": "For k > 0 sum the next k numbers, for k < 0 the previous |k| numbers, for k = 0 all zeros. Instead of re-adding k numbers for each position, slide a window: subtract the number that leaves and add the one that enters (indices modulo n).",
 "variants": [
  {
   "name": "Circular sliding window",
   "code": "class Solution:\n    def decrypt(self, code, k):\n        n = len(code)\n        res = [0] * n\n        if k == 0:\n            return res\n        start, end = (1, k) if k > 0 else (n + k, n - 1)\n        window = sum(code[i % n] for i in range(start, end + 1))\n        for i in range(n):\n            res[i] = window\n            window -= code[start % n]\n            window += code[(end + 1) % n]\n            start += 1\n            end += 1\n        return res",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "For k > 0 sum the next k numbers, for k < 0 the previous |k| numbers, for k = 0 all zeros. Instead of re-adding k numbers for each position, slide a window: subtract the number that leaves and add the one that enters (indices modulo n).",
   "frames": []
  }
 ]
};
