window.PROBLEM = {
 "id": "1282",
 "title": "Group the People Given the Group Size They Belong To",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Person i belongs to a group of exactly groupSizes[i] people. Split the n people into groups so that everyone is in a group of their required size; return the groups (any valid answer; this version returns them in the order they fill up). Example: [3,3,3,3,3,1,3] → [[0,1,2],[5],[3,4,6]].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bucket by size, then chunk",
   "tag": "Alternative",
   "code": "class Solution:\n    def groupThePeople(self, groupSizes):\n        by_size = defaultdict(list)\n        for i, s in enumerate(groupSizes):\n            by_size[s].append(i)\n        groups = []\n        for s, people in by_size.items():\n            for k in range(0, len(people), s):\n                groups.append(people[k:k + s])\n        groups.sort(key=lambda g: g[-1])\n        return groups",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Collect people per size, cut each list into chunks of that size, then order the groups by their last member (the moment they would be completed).",
   "frames": [],
   "alt": true
  }
 ]
};
