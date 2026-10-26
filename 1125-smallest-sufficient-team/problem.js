window.PROBLEM = {
 "id": "1125",
 "title": "Smallest Sufficient Team",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "A project needs the skills in req_skills. Each person in people has a list of skills. A team is 'sufficient' if every required skill is known by at least one team member. Return the INDEXES of the people on one smallest sufficient team (any answer is accepted if several exist). Example: skills [java, nodejs, reactjs], people [[java],[nodejs],[nodejs,reactjs]] → people 0 and 2 → [0,2].",
 "why": "Pick the fewest people so that every required skill is covered by someone on the team.",
 "idea": "A set of covered skills is a bitmask. For each person, update the best (smallest) team known for every skill set reachable by adding them.",
 "input": "skills [java, nodejs, reactjs], people [[java],[nodejs],[nodejs,reactjs]]",
 "output": "[0, 2]",
 "notes": [],
 "best": "A set of covered skills is a bitmask. For each person, update the best (smallest) team known for every skill set reachable by adding them.",
 "variants": [
  {
   "name": "Bitmask DP over covered skills",
   "code": "class Solution:\n    def smallestSufficientTeam(self, req_skills, people):\n        idx = {s: i for i, s in enumerate(req_skills)}\n        full = (1 << len(req_skills)) - 1\n        dp = {0: []}\n        for i, p in enumerate(people):\n            mask = 0\n            for s in p: mask |= 1 << idx[s]\n            if mask == 0: continue\n            for state, team in list(dp.items()):\n                nm = state | mask\n                if nm not in dp or len(dp[nm]) > len(team) + 1:\n                    dp[nm] = team + [i]\n        return dp[full]",
   "time": "O(people · 2^skills)",
   "space": "O(2^skills)",
   "explain": "A set of covered skills is a bitmask. For each person, update the best (smallest) team known for every skill set reachable by adding them.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS over skill masks",
   "tag": "Alternative",
   "code": "class Solution:\n    def smallestSufficientTeam(self, req_skills, people):\n        idx = {s: i for i, s in enumerate(req_skills)}\n        masks = []\n        for p in people:\n            m = 0\n            for s in p: m |= 1 << idx[s]\n            masks.append(m)\n        full = (1 << len(req_skills)) - 1\n        best = {0: []}\n        q = deque([0])\n        while q:\n            state = q.popleft()\n            for i, m in enumerate(masks):\n                nm = state | m\n                if nm not in best:\n                    best[nm] = best[state] + [i]\n                    q.append(nm)\n        return best[full]",
   "time": "O(people · 2^skills)",
   "space": "O(2^skills)",
   "explain": "BFS from 'no skills'; the first time a mask is reached it uses the fewest people.",
   "frames": [],
   "alt": true
  }
 ]
};
