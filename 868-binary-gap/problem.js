window.PROBLEM = {
 "id": "868",
 "title": "Binary Gap",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "22 = 10110 → 1s at positions 4, 2, 1 → largest gap 2.",
 "idea": "Scan the bits of n from the lowest. Remember the position of the last 1 seen; each new 1 gives a gap of (position − last). Track the maximum.",
 "input": "n = 22",
 "output": "2",
 "notes": [],
 "best": "Scan the bits of n from the lowest. Remember the position of the last 1 seen; each new 1 gives a gap of (position − last). Track the maximum.",
 "variants": [
  {
   "name": "Distance between consecutive 1 bits",
   "code": "class Solution:\n    def binaryGap(self, n):\n        last = None\n        best = 0\n        pos = 0\n        while n:\n            if n & 1:\n                if last is not None:\n                    best = max(best, pos - last)\n                last = pos\n            n >>= 1\n            pos += 1\n        return best",
   "time": "O(log n)",
   "space": "O(1)",
   "explain": "Scan the bits of n from the lowest. Remember the position of the last 1 seen; each new 1 gives a gap of (position − last). Track the maximum.",
   "frames": []
  }
 ]
};
