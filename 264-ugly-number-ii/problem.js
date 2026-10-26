window.PROBLEM = {
 "id": "264",
 "title": "Ugly Number II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "The first 10 ugly numbers are 1,2,3,4,5,6,8,9,10,12 → the 10th is 12.",
 "idea": "Ugly numbers have only the prime factors 2, 3 and 5. Each is an earlier ugly number times 2, 3 or 5. Keep three pointers into the list built so far; the next ugly number is the smallest of the three candidates, and every pointer whose candidate equals it advances.",
 "input": "n = 10",
 "output": "12",
 "notes": [],
 "best": "Ugly numbers have only the prime factors 2, 3 and 5. Each is an earlier ugly number times 2, 3 or 5. Keep three pointers into the list built so far; the next ugly number is the smallest of the three candidates, and every pointer whose candidate equals it advances.",
 "variants": [
  {
   "name": "Merge three multiples with pointers",
   "code": "class Solution:\n    def nthUglyNumber(self, n):\n        ugly = [1]\n        i2 = i3 = i5 = 0\n        while len(ugly) < n:\n            nxt = min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5)\n            ugly.append(nxt)\n            if nxt == ugly[i2] * 2:\n                i2 += 1\n            if nxt == ugly[i3] * 3:\n                i3 += 1\n            if nxt == ugly[i5] * 5:\n                i5 += 1\n        return ugly[-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Ugly numbers have only the prime factors 2, 3 and 5. Each is an earlier ugly number times 2, 3 or 5. Keep three pointers into the list built so far; the next ugly number is the smallest of the three candidates, and every pointer whose candidate equals it advances.",
   "frames": []
  }
 ]
};
