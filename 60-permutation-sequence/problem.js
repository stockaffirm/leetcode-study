window.PROBLEM = {
 "id": "60",
 "title": "Permutation Sequence",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=3, k=3 → permutations 123, 132, 213, ... the 3rd is '213'.",
 "idea": "Each leading digit accounts for (n−1)! permutations. Convert k−1 to the factorial number system: at each position divide by (remaining−1)! to pick which unused digit comes next, and take the remainder.",
 "input": "n = 3, k = 3",
 "output": "\"213\"",
 "notes": [],
 "best": "Each leading digit accounts for (n−1)! permutations. Convert k−1 to the factorial number system: at each position divide by (remaining−1)! to pick which unused digit comes next, and take the remainder.",
 "variants": [
  {
   "name": "Factorial number system",
   "code": "class Solution:\n    def getPermutation(self, n, k):\n        digits = list(range(1, n + 1))\n        k -= 1\n        res = []\n        for i in range(n, 0, -1):\n            f = factorial(i - 1)\n            idx, k = divmod(k, f)\n            res.append(str(digits.pop(idx)))\n        return ''.join(res)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Each leading digit accounts for (n−1)! permutations. Convert k−1 to the factorial number system: at each position divide by (remaining−1)! to pick which unused digit comes next, and take the remainder.",
   "frames": []
  }
 ]
};
