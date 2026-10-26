window.PROBLEM = {
 "id": "670",
 "title": "Maximum Swap",
 "level": "Medium",
 "topic": "Greedy",
 "question": "You may swap two digits of a number at most once. Return the largest number you can obtain. Example: 2736 → 7236 (swap 2 and 7); 9973 → 9973.",
 "why": "You may swap two digits of a number at most once. Return the largest number you can make.",
 "idea": "Record the last position of every digit. Scan from the left; at the first digit for which a bigger digit exists later, swap it with the LAST occurrence of the biggest such digit.",
 "input": "2736",
 "output": "7236",
 "notes": [],
 "best": "Record the last position of every digit. Scan from the left; at the first digit for which a bigger digit exists later, swap it with the LAST occurrence of the biggest such digit.",
 "variants": [
  {
   "name": "Swap with the last occurrence of a bigger digit",
   "code": "class Solution:\n    def maximumSwap(self, num):\n        s = list(str(num))\n        last = {int(c): i for i, c in enumerate(s)}\n        for i, c in enumerate(s):\n            for d in range(9, int(c), -1):\n                if last.get(d, -1) > i:\n                    s[i], s[last[d]] = s[last[d]], s[i]\n                    return int(''.join(s))\n        return num",
   "time": "O(d)",
   "space": "O(1)",
   "explain": "Record the last position of every digit. Scan from the left; at the first digit for which a bigger digit exists later, swap it with the LAST occurrence of the biggest such digit.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every swap",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximumSwap(self, num):\n        s = list(str(num))\n        best = num\n        for i in range(len(s)):\n            for j in range(i + 1, len(s)):\n                s[i], s[j] = s[j], s[i]\n                best = max(best, int(''.join(s)))\n                s[i], s[j] = s[j], s[i]\n        return best",
   "time": "O(d³)",
   "space": "O(d)",
   "explain": "Swap every pair of digits and take the maximum.",
   "frames": [],
   "alt": true
  }
 ]
};
