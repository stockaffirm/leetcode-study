window.PROBLEM = {
 "id": "1282",
 "title": "Group the People Given the Group Size They Belong To",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[3,3,3,3,3,1,3] → groups [0,1,2], [5] and [3,4,6].",
 "idea": "Person i must be in a group of exactly groupSizes[i] people. Keep one open group per size; add each person to the open group of their size, and when it reaches that size close it and start a new one.",
 "input": "groupSizes = [3,3,3,3,3,1,3]",
 "output": "[[0, 1, 2], [5], [3, 4, 6]]",
 "notes": [],
 "best": "Person i must be in a group of exactly groupSizes[i] people. Keep one open group per size; add each person to the open group of their size, and when it reaches that size close it and start a new one.",
 "variants": [
  {
   "name": "Fill a bucket per group size",
   "code": "class Solution:\n    def groupThePeople(self, groupSizes):\n        open_groups = defaultdict(list)\n        res = []\n        for i, size in enumerate(groupSizes):\n            open_groups[size].append(i)\n            if len(open_groups[size]) == size:\n                res.append(open_groups.pop(size))\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Person i must be in a group of exactly groupSizes[i] people. Keep one open group per size; add each person to the open group of their size, and when it reaches that size close it and start a new one.",
   "frames": []
  }
 ]
};
