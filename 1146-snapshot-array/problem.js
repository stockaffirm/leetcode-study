window.PROBLEM = {
 "id": "1146",
 "title": "Snapshot Array",
 "level": "Medium",
 "topic": "Design",
 "question": "Design an array that supports snapshots. SnapshotArray(length) starts with all zeros. set(index, val) changes one element. snap() takes a snapshot of the whole array and returns its number (0 for the first snapshot, then 1, 2, …). get(index, snap_id) returns the value at that index as it was when that snapshot was taken. Example: length 3; set(0,5); snap() → 0; set(0,6); get(0,0) → 5 (the value at snapshot 0, not the newer 6).",
 "why": "An array you can 'snapshot' and later read as it was at that snapshot. Copying the whole array every time would be wasteful.",
 "idea": "Store only changes: for each index keep a list of (snapshot id, value). A read at snapshot s binary-searches for the last change made at or before s.",
 "input": "SnapshotArray(3); set(0,5); snap(); set(0,6); get(0,0)",
 "output": "5",
 "notes": [],
 "best": "Store only changes: for each index keep a list of (snapshot id, value). A read at snapshot s binary-searches for the last change made at or before s.",
 "variants": [
  {
   "name": "History per index + binary search",
   "code": "class SnapshotArray:\n    def __init__(self, length):\n        self.hist = [[(-1, 0)] for _ in range(length)]\n        self.sid = 0\n    def set(self, index, val):\n        h = self.hist[index]\n        if h[-1][0] == self.sid: h[-1] = (self.sid, val)\n        else: h.append((self.sid, val))\n    def snap(self):\n        self.sid += 1\n        return self.sid - 1\n    def get(self, index, snap_id):\n        h = self.hist[index]\n        i = bisect_right(h, (snap_id, float('inf'))) - 1\n        return h[i][1]",
   "time": "O(log n) get",
   "space": "O(changes)",
   "explain": "Store only changes: for each index keep a list of (snapshot id, value). A read at snapshot s binary-searches for the last change made at or before s.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Copy the array on every snap",
   "tag": "Brute force",
   "code": "class SnapshotArray:\n    def __init__(self, length):\n        self.cur = [0] * length\n        self.snaps = []\n    def set(self, index, val):\n        self.cur[index] = val\n    def snap(self):\n        self.snaps.append(self.cur[:])\n        return len(self.snaps) - 1\n    def get(self, index, snap_id):\n        return self.snaps[snap_id][index]",
   "time": "O(length) snap",
   "space": "O(length · snaps)",
   "explain": "Store a full copy of the array at each snap.",
   "frames": [],
   "alt": true
  }
 ]
};
