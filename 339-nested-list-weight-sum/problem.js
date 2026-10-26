window.PROBLEM = {
 "id": "339",
 "title": "Nested List Weight Sum",
 "level": "Medium",
 "topic": "Graph",
 "question": "A list may contain numbers and further lists, to any depth. A number's depth is how many lists it is inside (the outer list is depth 1). Return the sum of number × depth. Example: [[1,1],2,[1,1]] → 10 (four 1s at depth 2 plus the 2 at depth 1).",
 "why": "A list contains numbers and further lists. Each number counts (number × how deep it is), the outer level having depth 1. Return the total.",
 "idea": "Recurse into every inner list with depth + 1 and multiply each number by the current depth.",
 "input": "[[1,1],2,[1,1]]",
 "output": "10",
 "notes": [],
 "best": "Recurse into every inner list with depth + 1 and multiply each number by the current depth.",
 "variants": [
  {
   "name": "DFS carrying the depth",
   "code": "class Solution:\n    def depthSum(self, nestedList):\n        def dfs(lst, d):\n            total = 0\n            for ni in lst:\n                if ni.isInteger(): total += ni.getInteger() * d\n                else: total += dfs(ni.getList(), d + 1)\n            return total\n        return dfs(nestedList, 1)",
   "time": "O(n)",
   "space": "O(depth)",
   "explain": "Recurse into every inner list with depth + 1 and multiply each number by the current depth.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "BFS level by level",
   "tag": "Alternative",
   "code": "class Solution:\n    def depthSum(self, nestedList):\n        total, depth = 0, 1\n        level = nestedList\n        while level:\n            nxt = []\n            for ni in level:\n                if ni.isInteger(): total += ni.getInteger() * depth\n                else: nxt.extend(ni.getList())\n            level = nxt\n            depth += 1\n        return total",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Process one level at a time, multiplying the level's numbers by the depth.",
   "frames": [],
   "alt": true
  }
 ]
};
