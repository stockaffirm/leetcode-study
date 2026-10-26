window.PROBLEM = {
 "id": "3414",
 "title": "Maximum Score of Non-overlapping Intervals",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "The first sample: indices [2, 3] (weights 5 and 3) give the best score 8.",
 "idea": "Sort the interval indices by start. f(p, k) = the best (score, index list) using intervals from position p onward with at most k picks left: either skip interval p, or take it and continue at the first interval whose start is after its end (binary search) with k−1 picks. Prefer the higher score and, on equal scores, the lexicographically smaller sorted index list.",
 "input": "intervals = [[1,3,2],[4,5,2],[1,5,5],[6,9,3],[6,7,1],[8,9,1]]",
 "output": "[2, 3]",
 "notes": [],
 "best": "Sort the interval indices by start. f(p, k) = the best (score, index list) using intervals from position p onward with at most k picks left: either skip interval p, or take it and continue at the first interval whose start is after its end (binary search) with k−1 picks. Prefer the higher score and, on equal scores, the lexicographically smaller sorted index list.",
 "variants": [
  {
   "name": "Memoised DP over start-sorted intervals with a 4-pick budget",
   "code": "class Solution:\n    def maximumWeight(self, intervals):\n        n = len(intervals)\n        order = sorted(range(n), key=lambda i: (intervals[i][0], i))\n        starts = [intervals[i][0] for i in order]\n        @lru_cache(None)\n        def f(p, k):\n            if p == n or k == 0:\n                return (0, ())\n            best = f(p + 1, k)\n            i = order[p]\n            l, r, w = intervals[i]\n            sc, idx = f(bisect_right(starts, r), k - 1)\n            cand = (sc + w, tuple(sorted(idx + (i,))))\n            if cand[0] > best[0] or (cand[0] == best[0] and cand[1] < best[1]):\n                best = cand\n            return best\n        return list(f(0, 4)[1])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the interval indices by start. f(p, k) = the best (score, index list) using intervals from position p onward with at most k picks left: either skip interval p, or take it and continue at the first interval whose start is after its end (binary search) with k−1 picks. Prefer the higher score and, on equal scores, the lexicographically smaller sorted index list.",
   "frames": []
  }
 ]
};
