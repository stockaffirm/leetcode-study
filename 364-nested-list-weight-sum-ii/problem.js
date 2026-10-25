window.PROBLEM = {
 "id": "364",
 "title": "Nested List Weight Sum II",
 "level": "Medium",
 "topic": "Graph",
 "question": "A list may contain numbers and further lists, to any depth. Give each number a weight: the deepest numbers weigh 1, and every level closer to the outside adds 1 (weight = maxDepth − depth + 1). Return the sum of number × weight. Example: [[1,1],2,[1,1]] → 8 (the four 1s weigh 1, the 2 weighs 2).",
 "why": "A list contains numbers and further lists. A number's weight is (maxDepth − its depth + 1): the DEEPEST numbers weigh 1. Return the weighted sum.",
 "idea": "Go level by level. Keep a running sum of all numbers seen so far and add it to the total after each level: shallow numbers get added once per extra level, which is exactly their weight.",
 "input": "[[1,1],2,[1,1]]",
 "output": "8",
 "notes": [],
 "best": "Go level by level. Keep a running sum of all numbers seen so far and add it to the total after each level: shallow numbers get added once per extra level, which is exactly their weight.",
 "variants": [
  {
   "name": "Level by level, re-adding the running sum",
   "code": "class Solution:\n    def depthSumInverse(self, nestedList):\n        unweighted = total = 0\n        level = nestedList\n        while level:\n            nxt = []\n            for ni in level:\n                if ni.isInteger(): unweighted += ni.getInteger()\n                else: nxt.extend(ni.getList())\n            total += unweighted\n            level = nxt\n        return total",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Go level by level. Keep a running sum of all numbers seen so far and add it to the total after each level: shallow numbers get added once per extra level, which is exactly their weight.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Find the depth first, then weigh",
   "tag": "Alternative",
   "code": "class Solution:\n    def depthSumInverse(self, nestedList):\n        def depth(lst):\n            return 1 + max([depth(ni.getList()) for ni in lst if not ni.isInteger()], default=0)\n        D = depth(nestedList)\n        def dfs(lst, d):\n            total = 0\n            for ni in lst:\n                if ni.isInteger(): total += ni.getInteger() * (D - d + 1)\n                else: total += dfs(ni.getList(), d + 1)\n            return total\n        return dfs(nestedList, 1)",
   "time": "O(n)",
   "space": "O(depth)",
   "explain": "One pass finds the maximum depth, a second pass multiplies each number by maxDepth − depth + 1.",
   "frames": [],
   "alt": true
  }
 ]
};
