window.PROBLEM = {
 "id": "1871",
 "title": "Jump Game VII",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "s='011010', jumps of 2–3: 0 → 2 → 5 → reaches the end → true.",
 "idea": "Index j is reachable if s[j] == '0' and some reachable i has j − maxJump ≤ i ≤ j − minJump. Keep a running count of reachable indices inside that window (add the new left edge, remove the one that left).",
 "input": "s = \"011010\", minJump = 2, maxJump = 3",
 "output": "true",
 "notes": [],
 "best": "Index j is reachable if s[j] == '0' and some reachable i has j − maxJump ≤ i ≤ j − minJump. Keep a running count of reachable indices inside that window (add the new left edge, remove the one that left).",
 "variants": [
  {
   "name": "Reachable positions with a sliding window count",
   "code": "class Solution:\n    def canReach(self, s, minJump, maxJump):\n        n = len(s)\n        reach = [False] * n\n        reach[0] = True\n        window = 0\n        for j in range(1, n):\n            if j - minJump >= 0 and reach[j - minJump]:\n                window += 1\n            if j - maxJump - 1 >= 0 and reach[j - maxJump - 1]:\n                window -= 1\n            reach[j] = window > 0 and s[j] == '0'\n        return reach[-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Index j is reachable if s[j] == '0' and some reachable i has j − maxJump ≤ i ≤ j − minJump. Keep a running count of reachable indices inside that window (add the new left edge, remove the one that left).",
   "frames": []
  }
 ]
};
