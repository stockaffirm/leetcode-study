window.PROBLEM = {
 "id": "690",
 "title": "Employee Importance",
 "level": "Medium",
 "topic": "Graph",
 "question": "Each employee is [id, importance, list of direct subordinate ids]. Return the total importance of the employee with the given id plus all employees below them (direct and indirect). Example: [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id=1 → 11.",
 "why": "Each employee has an importance value and a list of direct subordinates. Return the total importance of one employee and all their (indirect) subordinates.",
 "idea": "Put the employees in a dictionary by id and add up importance with a DFS through the subordinate lists.",
 "input": "[[1,5,[2,3]],[2,3,[]],[3,3,[]]], id=1",
 "output": "11",
 "notes": [],
 "best": "Put the employees in a dictionary by id and add up importance with a DFS through the subordinate lists.",
 "variants": [
  {
   "name": "DFS over subordinates",
   "code": "class Solution:\n    def getImportance(self, employees, id):\n        by_id = {e[0]: e for e in employees}\n        def dfs(i):\n            _, imp, subs = by_id[i]\n            return imp + sum(dfs(s) for s in subs)\n        return dfs(id)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put the employees in a dictionary by id and add up importance with a DFS through the subordinate lists.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def getImportance(self, employees, id):\n        by_id = {e[0]: e for e in employees}\n        total, q = 0, deque([id])\n        while q:\n            e = by_id[q.popleft()]\n            total += e[1]\n            q.extend(e[2])\n        return total",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Process the employees level by level with a queue.",
   "frames": [],
   "alt": true
  }
 ]
};
