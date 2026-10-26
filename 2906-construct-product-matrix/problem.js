window.PROBLEM = {
 "id": "2906",
 "title": "Construct Product Matrix",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[[1,2],[3,4]] → each cell = product of all others mod 12345 → [[24,12],[8,6]].",
 "idea": "Flatten the grid in row-major order. The product of all other cells is (product of everything before) × (product of everything after), modulo 12345 (not prime, so no division). Compute running prefix and suffix products.",
 "input": "grid = [[1,2],[3,4]]",
 "output": "[[24, 12], [8, 6]]",
 "notes": [],
 "best": "Flatten the grid in row-major order. The product of all other cells is (product of everything before) × (product of everything after), modulo 12345 (not prime, so no division). Compute running prefix and suffix products.",
 "variants": [
  {
   "name": "Prefix and suffix products over the flattened grid",
   "code": "class Solution:\n    def constructProductMatrix(self, grid):\n        MOD = 12345\n        m, n = len(grid), len(grid[0])\n        flat = [v for row in grid for v in row]\n        size = len(flat)\n        res = [1] * size\n        pref = 1\n        for i in range(size):\n            res[i] = pref\n            pref = pref * flat[i] % MOD\n        suf = 1\n        for i in range(size - 1, -1, -1):\n            res[i] = res[i] * suf % MOD\n            suf = suf * flat[i] % MOD\n        return [res[i * n:(i + 1) * n] for i in range(m)]",
   "time": "O(n·m)",
   "space": "O(n·m)",
   "explain": "Flatten the grid in row-major order. The product of all other cells is (product of everything before) × (product of everything after), modulo 12345 (not prime, so no division). Compute running prefix and suffix products.",
   "frames": []
  }
 ]
};
