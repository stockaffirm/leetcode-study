window.PROBLEM = {
 "id": "942",
 "title": "DI String Match",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
 "why": "'IDID' → [0,4,1,3,2].",
 "idea": "Keep the smallest and largest unused numbers. For an 'I' place the smallest (so the next is larger), for a 'D' place the largest; the last position gets the remaining number.",
 "input": "s = \"IDID\"",
 "output": "[0, 4, 1, 3, 2]",
 "notes": [],
 "best": "Keep the smallest and largest unused numbers. For an 'I' place the smallest (so the next is larger), for a 'D' place the largest; the last position gets the remaining number.",
 "variants": [
  {
   "name": "Take from the ends of 0…n",
   "code": "class Solution:\n    def diStringMatch(self, s):\n        lo, hi = 0, len(s)\n        res = []\n        for c in s:\n            if c == 'I':\n                res.append(lo)\n                lo += 1\n            else:\n                res.append(hi)\n                hi -= 1\n        res.append(lo)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep the smallest and largest unused numbers. For an 'I' place the smallest (so the next is larger), for a 'D' place the largest; the last position gets the remaining number.",
   "frames": []
  }
 ]
};
