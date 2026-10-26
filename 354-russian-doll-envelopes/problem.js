window.PROBLEM = {
 "id": "354",
 "title": "Russian Doll Envelopes",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "An envelope fits inside another only if BOTH width and height are strictly smaller. How many can be nested?",
 "idea": "Sort by width ascending (and height DESCENDING for equal widths, so equal widths can't chain). Then the answer is the longest strictly increasing subsequence of heights, found with binary search in O(n log n).",
 "input": "[[5,4],[6,4],[6,7],[2,3]]",
 "output": "3",
 "notes": [],
 "best": "Sort by width ascending (and height DESCENDING for equal widths, so equal widths can't chain). Then the answer is the longest strictly increasing subsequence of heights, found with binary search in O(n log n).",
 "variants": [
  {
   "name": "Sort by width, LIS on heights",
   "code": "class Solution:\n    def maxEnvelopes(self, envelopes):\n        envelopes.sort(key=lambda e: (e[0], -e[1]))\n        tails = []\n        for _, h in envelopes:\n            i = bisect_left(tails, h)\n            if i == len(tails): tails.append(h)\n            else: tails[i] = h\n        return len(tails)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort by width ascending (and height DESCENDING for equal widths, so equal widths can't chain). Then the answer is the longest strictly increasing subsequence of heights, found with binary search in O(n log n).",
   "frames": []
  }
 ]
};
