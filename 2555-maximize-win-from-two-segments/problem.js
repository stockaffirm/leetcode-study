window.PROBLEM = {
 "id": "2555",
 "title": "Maximize Win From Two Segments",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "Prizes lie at the sorted positions given. Choose two segments of length k (each covers positions x … x+k, ends included; they may overlap). You win every prize inside at least one segment. Return the maximum number of prizes. Example: positions [1,1,2,2,3,3,5], k=2 → 7.",
 "why": "Prizes lie on a line (sorted positions). Choose two segments of length k (ends included, may overlap); you win every prize inside either. Maximise the number of prizes.",
 "idea": "Slide a window of length k; for every window ending at i add the best window that lies entirely before its start (kept as a running maximum).",
 "input": "[1,1,2,2,3,3,5], k=2",
 "output": "7",
 "notes": [],
 "best": "Slide a window of length k; for every window ending at i add the best window that lies entirely before its start (kept as a running maximum).",
 "variants": [
  {
   "name": "Sliding window + best earlier window",
   "code": "class Solution:\n    def maximizeWin(self, prizePositions, k):\n        p = prizePositions\n        best = [0] * (len(p) + 1)\n        ans = j = 0\n        for i in range(len(p)):\n            while p[i] - p[j] > k: j += 1\n            ans = max(ans, best[j] + i - j + 1)\n            best[i + 1] = max(best[i], i - j + 1)\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Slide a window of length k; for every window ending at i add the best window that lies entirely before its start (kept as a running maximum).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every pair of starting prizes",
   "tag": "Brute force",
   "code": "class Solution:\n    def maximizeWin(self, prizePositions, k):\n        p = prizePositions\n        n = len(p)\n        cnt = [bisect_right(p, p[i] + k) - i for i in range(n)]\n        best = 0\n        for i in range(n):\n            for j in range(i, n):\n                end_i = bisect_right(p, p[i] + k)\n                if j >= end_i: best = max(best, cnt[i] + cnt[j])\n            best = max(best, cnt[i])\n        return best",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "count[i] = prizes in [p[i], p[i]+k]. For each first segment, pair it with the best count that starts after it ends, or the one before.",
   "frames": [],
   "alt": true
  }
 ]
};
