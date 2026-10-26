window.PROBLEM = {
 "id": "869",
 "title": "Reordered Power of 2",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "n=46 can be rearranged to 64 = 2⁶ → true.",
 "idea": "Two numbers are rearrangements of each other if their sorted digits are equal. Precompute the sorted digit strings of 2⁰ … 2³⁰ and check whether n's sorted digits appear among them.",
 "input": "n = 46",
 "output": "true",
 "notes": [],
 "best": "Two numbers are rearrangements of each other if their sorted digits are equal. Precompute the sorted digit strings of 2⁰ … 2³⁰ and check whether n's sorted digits appear among them.",
 "variants": [
  {
   "name": "Compare digit multisets with powers of two",
   "code": "class Solution:\n    def reorderedPowerOf2(self, n):\n        key = sorted(str(n))\n        return any(sorted(str(1 << i)) == key for i in range(31))",
   "time": "O(31·d)",
   "space": "O(31)",
   "explain": "Two numbers are rearrangements of each other if their sorted digits are equal. Precompute the sorted digit strings of 2⁰ … 2³⁰ and check whether n's sorted digits appear among them.",
   "frames": []
  }
 ]
};
