window.PROBLEM = {
 "id": "1136",
 "title": "Parallel Courses",
 "level": "Medium",
 "topic": "Graph",
 "question": "There are n courses numbered 1 to n. relations[i] = [a, b] means you must finish course a BEFORE you start course b. In each semester you may take any number of courses, as long as all their prerequisites were completed in EARLIER semesters. Return the minimum number of semesters needed to finish all courses, or -1 if it is impossible. Example: n=3, relations [[1,3],[2,3]] → semester 1: courses 1 and 2; semester 2: course 3 → 2.",
 "why": "Courses have prerequisites; you can take any number of available courses per semester. Fewest semesters to finish all (−1 if there is a loop)?",
 "idea": "Repeatedly take every course with no remaining prerequisites (one semester per round) using a queue of zero-indegree courses. If not all courses get taken, there is a cycle.",
 "input": "n=3, relations [[1,3],[2,3]]",
 "output": "2",
 "notes": [],
 "best": "Repeatedly take every course with no remaining prerequisites (one semester per round) using a queue of zero-indegree courses. If not all courses get taken, there is a cycle.",
 "variants": [
  {
   "name": "Topological order by semester (Kahn)",
   "code": "class Solution:\n    def minimumSemesters(self, n, relations):\n        g = defaultdict(list)\n        indeg = [0] * (n + 1)\n        for a, b in relations:\n            g[a].append(b)\n            indeg[b] += 1\n        q = deque(i for i in range(1, n + 1) if indeg[i] == 0)\n        sem = taken = 0\n        while q:\n            sem += 1\n            for _ in range(len(q)):\n                u = q.popleft()\n                taken += 1\n                for v in g[u]:\n                    indeg[v] -= 1\n                    if indeg[v] == 0: q.append(v)\n        return sem if taken == n else -1",
   "time": "O(n + E)",
   "space": "O(n + E)",
   "explain": "Repeatedly take every course with no remaining prerequisites (one semester per round) using a queue of zero-indegree courses. If not all courses get taken, there is a cycle.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS longest chain with cycle check",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumSemesters(self, n, relations):\n        g = defaultdict(list)\n        for a, b in relations: g[a].append(b)\n        state = {}\n        def depth(u):\n            if u in state: return state[u] if state[u] else -1\n            state[u] = 0\n            best = 1\n            for v in g[u]:\n                d = depth(v)\n                if d == -1: return -1\n                best = max(best, d + 1)\n            state[u] = best\n            return best\n        longest = 0\n        for u in range(1, n + 1):\n            d = depth(u)\n            if d == -1: return -1\n            longest = max(longest, d)\n        return longest",
   "time": "O(n + E)",
   "space": "O(n)",
   "explain": "The answer is the longest chain of prerequisites; a loop found while searching means −1.",
   "frames": [],
   "alt": true
  }
 ]
};
