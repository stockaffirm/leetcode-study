window.PROBLEM = {
 "id": "455",
 "title": "Assign Cookies",
 "level": "Easy",
 "topic": "Greedy",
 "question": "Children have greed factors g[i] (the smallest cookie size that satisfies them); cookies have sizes s[j]. Each child gets at most one cookie and each cookie goes to at most one child. Return the maximum number of satisfied children. Example: g [1,2,3], s [1,1] → 1.",
 "why": "g = [1,2,3], cookies [1,1]: the cookie 1 satisfies the child with greed 1; the other 1 is too small for greed 2 → 1 child.",
 "idea": "Sort both lists. Walk through the cookies from the smallest; each cookie goes to the least greedy child still waiting if it is big enough.",
 "input": "g = [1,2,3], s = [1,1]",
 "output": "1",
 "notes": [],
 "best": "Sort both lists. Walk through the cookies from the smallest; each cookie goes to the least greedy child still waiting if it is big enough.",
 "variants": [
  {
   "name": "Smallest enough cookie for the least greedy child",
   "code": "class Solution:\n    def findContentChildren(self, g, s):\n        g.sort()\n        s.sort()\n        i = 0\n        for cookie in s:\n            if i < len(g) and g[i] <= cookie:\n                i += 1\n        return i",
   "time": "O(n log n + m log m)",
   "space": "O(1)",
   "explain": "Sort both lists. Walk through the cookies from the smallest; each cookie goes to the least greedy child still waiting if it is big enough.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every child against every cookie",
   "tag": "Brute force",
   "code": "class Solution:\n    def findContentChildren(self, g, s):\n        used = [False] * len(s)\n        s2 = sorted(range(len(s)), key=lambda i: s[i])\n        res = 0\n        for greed in sorted(g):\n            for i in s2:\n                if not used[i] and s[i] >= greed:\n                    used[i] = True\n                    res += 1\n                    break\n        return res",
   "time": "O(n·m)",
   "space": "O(m)",
   "explain": "For each child (least greedy first) take the smallest unused cookie that is big enough.",
   "frames": [],
   "alt": true
  }
 ]
};
