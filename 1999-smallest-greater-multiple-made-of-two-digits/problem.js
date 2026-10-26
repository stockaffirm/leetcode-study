window.PROBLEM = {
 "id": "1999",
 "title": "Smallest Greater Multiple Made of Two Digits",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "Return the smallest integer that is larger than k, a multiple of k, and written using only the digits digit1 and digit2 (both allowed to be used), or −1 if none fits in a signed 32-bit integer. Example: k=2, digits 0 and 2 → 20.",
 "why": "k=2 with digits 0 and 2: 2, 20, 22 … the first number > 2 divisible by 2 is 20.",
 "idea": "Generate numbers that use only the two digits in increasing order with a queue: start from the non-zero digits and append the digits in ascending order. The first generated number that is greater than k and divisible by k is the answer; stop with −1 once the numbers exceed the 32-bit limit.",
 "input": "k = 2, digit1 = 0, digit2 = 2",
 "output": "20",
 "notes": [],
 "best": "Generate numbers that use only the two digits in increasing order with a queue: start from the non-zero digits and append the digits in ascending order. The first generated number that is greater than k and divisible by k is the answer; stop with −1 once the numbers exceed the 32-bit limit.",
 "variants": [
  {
   "name": "Generate numbers in increasing order",
   "code": "class Solution:\n    def findInteger(self, k, digit1, digit2):\n        ds = sorted({digit1, digit2})\n        q = deque(d for d in ds if d > 0)\n        while q:\n            x = q.popleft()\n            if x > 2**31 - 1:\n                return -1\n            if x > k and x % k == 0:\n                return x\n            for d in ds:\n                q.append(x * 10 + d)\n        return -1",
   "time": "O(2^len)",
   "space": "O(2^len)",
   "explain": "Generate numbers that use only the two digits in increasing order with a queue: start from the non-zero digits and append the digits in ascending order. The first generated number that is greater than k and divisible by k is the answer; stop with −1 once the numbers exceed the 32-bit limit.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk through multiples of k",
   "tag": "Brute force",
   "code": "class Solution:\n    def findInteger(self, k, digit1, digit2):\n        allowed = set(str(digit1)) | set(str(digit2))\n        x = 2 * k\n        while x <= 2**31 - 1:\n            if set(str(x)) <= allowed:\n                return x\n            x += k\n        return -1",
   "time": "O(2³¹/k)",
   "space": "O(1)",
   "explain": "Check 2k, 3k, 4k … until the digits of a multiple use only the two allowed digits.",
   "frames": [],
   "alt": true
  }
 ]
};
