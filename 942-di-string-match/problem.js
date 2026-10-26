window.PROBLEM = {
 "id": "942",
 "title": "DI String Match",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "A string of 'I' (increase) and 'D' (decrease) of length n describes a permutation of 0…n: perm[i] < perm[i+1] for 'I', > for 'D'. Return any valid permutation (this solution returns a specific one). Example: 'IDID' → [0,4,1,3,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Deque of unused numbers",
   "tag": "Alternative",
   "code": "class Solution:\n    def diStringMatch(self, s):\n        q = deque(range(len(s) + 1))\n        return [q.popleft() if c == 'I' else q.pop() for c in s] + [q.pop()]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Pop from the left for I and from the right for D.",
   "frames": [],
   "alt": true
  }
 ]
};
