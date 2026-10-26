window.PROBLEM = {
 "id": "364",
 "title": "Nested List Weight Sum II",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
