window.PROBLEM = {
 "id": "1780",
 "title": "Check if Number is a Sum of Powers of Three",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "12 = 3 + 9 → true; 21 has a base-3 digit 2 → false.",
 "idea": "Each power of three can be used at most once, so n is such a sum exactly when its base-3 representation has only 0s and 1s.",
 "input": "n = 12",
 "output": "true",
 "notes": [],
 "best": "Each power of three can be used at most once, so n is such a sum exactly when its base-3 representation has only 0s and 1s.",
 "variants": [
  {
   "name": "Base-3 digits must be 0 or 1",
   "code": "class Solution:\n    def checkPowersOfThree(self, n):\n        while n:\n            if n % 3 == 2:\n                return False\n            n //= 3\n        return True",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Each power of three can be used at most once, so n is such a sum exactly when its base-3 representation has only 0s and 1s.",
   "frames": []
  }
 ]
};
