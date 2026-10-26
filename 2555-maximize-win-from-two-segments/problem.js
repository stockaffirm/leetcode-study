window.PROBLEM = {
 "id": "2555",
 "title": "Maximize Win From Two Segments",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
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
   "frames": []
  }
 ]
};
