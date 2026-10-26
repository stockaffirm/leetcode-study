window.PROBLEM = {
 "id": "3170",
 "title": "Lexicographically Minimum String After Removing Stars",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "'aaba*': the star removes the smallest letter to its left; remove the last 'a' (index 3) → 'aab'.",
 "idea": "Each '*' deletes the smallest character on its left. To keep the final string smallest, among equal smallest letters delete the RIGHTMOST one. Use a min-heap of (letter, −index); pop on '*', mark that index removed, and rebuild the string from the remaining letters.",
 "input": "s = \"aaba*\"",
 "output": "\"aab\"",
 "notes": [],
 "best": "Each '*' deletes the smallest character on its left. To keep the final string smallest, among equal smallest letters delete the RIGHTMOST one. Use a min-heap of (letter, −index); pop on '*', mark that index removed, and rebuild the string from the remaining letters.",
 "variants": [
  {
   "name": "Heap of smallest letters, latest index first",
   "code": "class Solution:\n    def clearStars(self, s):\n        heap = []\n        gone = set()\n        for i, c in enumerate(s):\n            if c == '*':\n                _, neg = heappop(heap)\n                gone.add(-neg)\n            else:\n                heappush(heap, (c, -i))\n        return ''.join(c for i, c in enumerate(s) if c != '*' and i not in gone)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Each '*' deletes the smallest character on its left. To keep the final string smallest, among equal smallest letters delete the RIGHTMOST one. Use a min-heap of (letter, −index); pop on '*', mark that index removed, and rebuild the string from the remaining letters.",
   "frames": []
  }
 ]
};
