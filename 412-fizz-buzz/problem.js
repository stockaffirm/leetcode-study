window.PROBLEM = {
 "id": "412",
 "title": "Fizz Buzz",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "For 1..n write 'Fizz' if the number divides by 3, 'Buzz' if by 5, 'FizzBuzz' if by both, otherwise the number itself.",
 "idea": "Test the 'both' case (divisible by 15) first, otherwise the Fizz and Buzz checks would swallow it.",
 "input": "n = 15",
 "output": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",…,\"FizzBuzz\"]",
 "notes": [],
 "best": "Test the 'both' case (divisible by 15) first, otherwise the Fizz and Buzz checks would swallow it.",
 "variants": [
  {
   "name": "Check 15, 3, then 5",
   "code": "class Solution:\n    def fizzBuzz(self, n):\n        ans = []\n        for i in range(1, n + 1):\n            if i % 15 == 0: ans.append('FizzBuzz')\n            elif i % 3 == 0: ans.append('Fizz')\n            elif i % 5 == 0: ans.append('Buzz')\n            else: ans.append(str(i))\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Test the 'both' case (divisible by 15) first, otherwise the Fizz and Buzz checks would swallow it.",
   "frames": []
  }
 ]
};
