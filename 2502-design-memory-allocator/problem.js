window.PROBLEM = {
 "id": "2502",
 "title": "Design Memory Allocator",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a memory Allocator for n memory cells numbered from 0. allocate(size, mID) finds the LEFTMOST run of `size` consecutive free cells, marks them as owned by mID, and returns the index of the first cell (or -1 if no such run exists). freeMemory(mID) releases every cell owned by mID and returns how many cells that was. Example: n=10; allocate(1,1) → 0, allocate(1,2) → 1, allocate(1,3) → 2, freeMemory(2) → 1, allocate(3,4) → 3, … , allocate(10,2) → -1 (not enough room).",
 "why": "A strip of n memory cells. allocate(size, id) reserves the LEFTMOST run of `size` free cells for that id; freeMemory(id) releases all cells held by that id.",
 "idea": "Keep the cells in an array (0 = free, otherwise the owner's id). Allocate by scanning for the first run of free cells long enough; free by clearing every cell with that id.",
 "input": "Allocator(10); allocate(1,1) … freeMemory(7)",
 "output": "[0,1,2,1,3,1,6,3,-1,0]",
 "notes": [],
 "best": "Keep the cells in an array (0 = free, otherwise the owner's id). Allocate by scanning for the first run of free cells long enough; free by clearing every cell with that id.",
 "variants": [
  {
   "name": "Scan a memory array for a free run",
   "code": "class Allocator:\n    def __init__(self, n):\n        self.mem = [0] * n\n    def allocate(self, size, mID):\n        run = 0\n        for i, v in enumerate(self.mem):\n            run = run + 1 if v == 0 else 0\n            if run == size:\n                for j in range(i - size + 1, i + 1): self.mem[j] = mID\n                return i - size + 1\n        return -1\n    def freeMemory(self, mID):\n        count = 0\n        for i, v in enumerate(self.mem):\n            if v == mID:\n                self.mem[i] = 0\n                count += 1\n        return count",
   "time": "O(n) per op",
   "space": "O(n)",
   "explain": "Keep the cells in an array (0 = free, otherwise the owner's id). Allocate by scanning for the first run of free cells long enough; free by clearing every cell with that id.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sorted list of blocks",
   "tag": "Alternative",
   "code": "class Allocator:\n    def __init__(self, n):\n        self.n = n\n        self.blocks = []\n    def allocate(self, size, mID):\n        prev_end = 0\n        for idx, (s, sz, m) in enumerate(self.blocks):\n            if s - prev_end >= size:\n                self.blocks.insert(idx, (prev_end, size, mID))\n                return prev_end\n            prev_end = s + sz\n        if self.n - prev_end >= size:\n            self.blocks.append((prev_end, size, mID))\n            return prev_end\n        return -1\n    def freeMemory(self, mID):\n        freed = sum(sz for s, sz, m in self.blocks if m == mID)\n        self.blocks = [b for b in self.blocks if b[2] != mID]\n        return freed",
   "time": "O(blocks)",
   "space": "O(blocks)",
   "explain": "Store only the used blocks (start, size, id) in order and look for a gap that is big enough.",
   "frames": [],
   "alt": true
  }
 ]
};
