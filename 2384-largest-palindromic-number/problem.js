window.PROBLEM = {
 "id": "2384",
 "title": "Largest Palindromic Number",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'444947137' → '7449447'.",
 "idea": "Count the digits. Use as many pairs as possible, the largest digits on the outside (digit pairs of 9s, then 8s, …). Pairs of 0 may only be used when some other digit pair exists (no leading zeros). The middle is the largest digit with a leftover copy. If no non-zero digit exists the answer is '0'.",
 "input": "num = \"444947137\"",
 "output": "\"7449447\"",
 "notes": [],
 "best": "Count the digits. Use as many pairs as possible, the largest digits on the outside (digit pairs of 9s, then 8s, …). Pairs of 0 may only be used when some other digit pair exists (no leading zeros). The middle is the largest digit with a leftover copy. If no non-zero digit exists the answer is '0'.",
 "variants": [
  {
   "name": "Pairs of digits outwards, best single digit in the middle",
   "code": "class Solution:\n    def largestPalindromic(self, num):\n        cnt = Counter(num)\n        half = []\n        for d in '9876543210':\n            half.append(d * (cnt[d] // 2))\n        left = ''.join(half).lstrip('0')\n        middle = ''\n        for d in '9876543210':\n            if cnt[d] % 2:\n                middle = d\n                break\n        if not left:\n            return middle or '0'\n        return left + middle + left[::-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count the digits. Use as many pairs as possible, the largest digits on the outside (digit pairs of 9s, then 8s, …). Pairs of 0 may only be used when some other digit pair exists (no leading zeros). The middle is the largest digit with a leftover copy. If no non-zero digit exists the answer is '0'.",
   "frames": []
  }
 ]
};
