window.PROBLEM = {
 "id": "299",
 "title": "Bulls and Cows",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "secret 1807, guess 7810: one bull (8) and three cows (1, 7, 0) → '1A3B'.",
 "idea": "Bulls are positions with the same digit. For the remaining digits count how many of each digit occur in secret and guess; the cows are the sum over digits of the smaller count.",
 "input": "secret = \"1807\", guess = \"7810\"",
 "output": "\"1A3B\"",
 "notes": [],
 "best": "Bulls are positions with the same digit. For the remaining digits count how many of each digit occur in secret and guess; the cows are the sum over digits of the smaller count.",
 "variants": [
  {
   "name": "Count exact matches, then common leftovers",
   "code": "class Solution:\n    def getHint(self, secret, guess):\n        bulls = sum(a == b for a, b in zip(secret, guess))\n        common = sum((Counter(secret) & Counter(guess)).values())\n        return \"%dA%dB\" % (bulls, common - bulls)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Bulls are positions with the same digit. For the remaining digits count how many of each digit occur in secret and guess; the cows are the sum over digits of the smaller count.",
   "frames": []
  }
 ]
};
