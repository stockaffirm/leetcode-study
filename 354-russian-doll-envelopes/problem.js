window.PROBLEM = {
 "id": "354",
 "title": "Russian Doll Envelopes",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "Envelopes are given as [width, height]. One envelope fits inside another only if BOTH its width and its height are strictly smaller (no rotating). Return the maximum number of envelopes you can nest like Russian dolls. Example: [[5,4],[6,4],[6,7],[2,3]] → [2,3] → [5,4] → [6,7] → 3.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Quadratic DP",
   "tag": "Brute force",
   "code": "class Solution:\n    def maxEnvelopes(self, envelopes):\n        envelopes.sort()\n        dp = [1] * len(envelopes)\n        for i in range(len(envelopes)):\n            for j in range(i):\n                if envelopes[j][0] < envelopes[i][0] and envelopes[j][1] < envelopes[i][1]: dp[i] = max(dp[i], dp[j] + 1)\n        return max(dp)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "dp[i] = longest chain ending with envelope i; check every earlier envelope.",
   "frames": [],
   "alt": true
  }
 ]
};
