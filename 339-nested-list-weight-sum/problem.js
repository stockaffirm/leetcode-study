window.PROBLEM = {
 "id": "339",
 "title": "Nested List Weight Sum",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
