window.PROBLEM = {
 "id": "556",
 "title": "Next Greater Element III",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "Find the smallest number that uses exactly the same digits and is bigger than n (or −1; also −1 if it does not fit in 32 bits). 12 → 21.",
 "idea": "It is the 'next permutation' of the digits: find the rightmost digit smaller than its right neighbour, swap it with the next-larger digit on its right, and reverse the tail.",
 "input": "n = 12",
 "output": "21",
 "notes": [],
 "best": "It is the 'next permutation' of the digits: find the rightmost digit smaller than its right neighbour, swap it with the next-larger digit on its right, and reverse the tail.",
 "variants": [
  {
   "name": "Next permutation of the digits",
   "code": "class Solution:\n    def nextGreaterElement(self, n):\n        d = list(str(n))\n        i = len(d) - 2\n        while i >= 0 and d[i] >= d[i + 1]: i -= 1\n        if i < 0: return -1\n        j = len(d) - 1\n        while d[j] <= d[i]: j -= 1\n        d[i], d[j] = d[j], d[i]\n        d[i + 1:] = reversed(d[i + 1:])\n        val = int(''.join(d))\n        return val if val < 2 ** 31 else -1",
   "time": "O(digits)",
   "space": "O(digits)",
   "explain": "It is the 'next permutation' of the digits: find the rightmost digit smaller than its right neighbour, swap it with the next-larger digit on its right, and reverse the tail.",
   "frames": []
  }
 ]
};
