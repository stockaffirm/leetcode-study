window.PROBLEM = {
 "id": "264",
 "title": "Ugly Number II",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "An ugly number has only 2, 3 and 5 as prime factors (1 counts as ugly). Return the n-th ugly number. Example: n=10 → 12.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Min-heap with a seen set",
   "tag": "Alternative",
   "code": "class Solution:\n    def nthUglyNumber(self, n):\n        heap = [1]\n        seen = {1}\n        x = 1\n        for _ in range(n):\n            x = heappop(heap)\n            for f in (2, 3, 5):\n                if x * f not in seen:\n                    seen.add(x * f)\n                    heappush(heap, x * f)\n        return x",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Pop the smallest ugly number n times, pushing its multiples by 2, 3 and 5.",
   "frames": [],
   "alt": true
  }
 ]
};
