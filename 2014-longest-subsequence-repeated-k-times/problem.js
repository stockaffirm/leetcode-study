window.PROBLEM = {
 "id": "2014",
 "title": "Longest Subsequence Repeated k Times",
 "level": "Hard",
 "topic": "Backtracking",
 "question": "",
 "why": "'letsleetcode', k=2: the subsequence 'let' repeated twice ('letlet') is a subsequence of the string, and it is the longest/largest such.",
 "idea": "Only letters that occur at least k times can be used, and the answer has at most n / k letters. Grow candidates letter by letter (BFS), keep those whose k-fold repetition is still a subsequence of s, and remember the longest (largest alphabetically on ties).",
 "input": "s = \"letsleetcode\", k = 2",
 "output": "\"let\"",
 "notes": [],
 "best": "Only letters that occur at least k times can be used, and the answer has at most n / k letters. Grow candidates letter by letter (BFS), keep those whose k-fold repetition is still a subsequence of s, and remember the longest (largest alphabetically on ties).",
 "variants": [
  {
   "name": "BFS over candidate strings",
   "code": "class Solution:\n    def longestSubsequenceRepeatedK(self, s, k):\n        cnt = Counter(s)\n        chars = sorted((c for c in cnt if cnt[c] >= k), reverse=True)\n        def is_sub(t):\n            it = iter(s)\n            return all(any(c == x for x in it) for c in t * k)\n        best = \"\"\n        q = deque([\"\"])\n        while q:\n            cur = q.popleft()\n            for c in chars:\n                nxt = cur + c\n                if is_sub(nxt):\n                    q.append(nxt)\n                    if len(nxt) > len(best) or (len(nxt) == len(best) and nxt > best):\n                        best = nxt\n        return best",
   "time": "O(n · 26^(n/k))",
   "space": "O(26^(n/k))",
   "explain": "Only letters that occur at least k times can be used, and the answer has at most n / k letters. Grow candidates letter by letter (BFS), keep those whose k-fold repetition is still a subsequence of s, and remember the longest (largest alphabetically on ties).",
   "frames": []
  }
 ]
};
