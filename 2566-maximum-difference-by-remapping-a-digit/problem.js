window.PROBLEM = {
 "id": "2566",
 "title": "Maximum Difference by Remapping a Digit",
 "level": "Easy",
 "topic": "Greedy",
 "question": "You may pick one digit d1 of a number and replace EVERY occurrence of it by some digit d2 (possibly the same). Return the largest possible difference between the biggest and the smallest number you can get this way. Example: 11891 → 99009.",
 "why": "11891: map 1 → 9 gives 99899 (biggest); map 1 → 0 gives 00890 = 890 (smallest); the difference is 99009.",
 "idea": "For the largest value replace every copy of the first digit that is not 9 by 9. For the smallest value replace every copy of the first digit by 0. Subtract.",
 "input": "num = 11891",
 "output": "99009",
 "notes": [],
 "best": "For the largest value replace every copy of the first digit that is not 9 by 9. For the smallest value replace every copy of the first digit by 0. Subtract.",
 "variants": [
  {
   "name": "Make it biggest and smallest",
   "code": "class Solution:\n    def minMaxDifference(self, num):\n        s = str(num)\n        hi = s\n        for ch in s:\n            if ch != \"9\":\n                hi = s.replace(ch, \"9\")\n                break\n        lo = s.replace(s[0], \"0\")\n        return int(hi) - int(lo)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For the largest value replace every copy of the first digit that is not 9 by 9. For the smallest value replace every copy of the first digit by 0. Subtract.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every remapping",
   "tag": "Brute force",
   "code": "class Solution:\n    def minMaxDifference(self, num):\n        s = str(num)\n        vals = [int(s.replace(str(a), str(b))) for a in range(10) for b in range(10)]\n        return max(vals) - min(vals)",
   "time": "O(100 · n)",
   "space": "O(n)",
   "explain": "Replace each digit a by each digit b and take the largest and smallest results.",
   "frames": [],
   "alt": true
  }
 ]
};
