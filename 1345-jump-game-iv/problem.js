window.PROBLEM = {
 "id": "1345",
 "title": "Jump Game IV",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "[100,-23,-23,404,100,23,23,23,3,404]: 0 → 4 → 3 → 9 takes 3 jumps.",
 "idea": "From index i you can step to i±1 or to any index with the same value. BFS (Breadth-First Search) from index 0. Group indices by value; the first time a value is used, jump to all its indices at once and clear that list so each value is expanded only once.",
 "input": "arr = [100,-23,-23,404,100,23,23,23,3,404]",
 "output": "3",
 "notes": [],
 "best": "From index i you can step to i±1 or to any index with the same value. BFS (Breadth-First Search) from index 0. Group indices by value; the first time a value is used, jump to all its indices at once and clear that list so each value is expanded only once.",
 "variants": [
  {
   "name": "BFS with a value → indices map",
   "code": "class Solution:\n    def minJumps(self, arr):\n        n = len(arr)\n        same = defaultdict(list)\n        for i, v in enumerate(arr):\n            same[v].append(i)\n        seen = {0}\n        q = deque([0])\n        steps = 0\n        while q:\n            for _ in range(len(q)):\n                i = q.popleft()\n                if i == n - 1:\n                    return steps\n                for j in same[arr[i]] + [i - 1, i + 1]:\n                    if 0 <= j < n and j not in seen:\n                        seen.add(j)\n                        q.append(j)\n                same[arr[i]] = []\n            steps += 1\n        return steps",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "From index i you can step to i±1 or to any index with the same value. BFS (Breadth-First Search) from index 0. Group indices by value; the first time a value is used, jump to all its indices at once and clear that list so each value is expanded only once.",
   "frames": []
  }
 ]
};
