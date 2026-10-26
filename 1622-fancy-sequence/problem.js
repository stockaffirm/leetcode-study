window.PROBLEM = {
 "id": "1622",
 "title": "Fancy Sequence",
 "level": "Hard",
 "topic": "Design",
 "question": "",
 "why": "append 2, addAll 3, append 7, multAll 2, getIndex(0) → 10.",
 "idea": "Every element ends up as value·mul + add after all addAll / multAll calls. Keep the global (mul, add) and, for each appended value, store the value that will give the right result after the current global transform: x' = (x − add) · mul⁻¹ (modular inverse via pow). getIndex(i) returns stored[i]·mul + add, modulo 1e9+7.",
 "input": "Fancy(); append(2); addAll(3); append(7); multAll(2); getIndex(0); addAll(3); append(10); multAll(2); getIndex(0); getIndex(1); getIndex(2)",
 "output": "[None, None, None, None, 10, None, None, None, 26, 34, 20]",
 "notes": [],
 "best": "Every element ends up as value·mul + add after all addAll / multAll calls. Keep the global (mul, add) and, for each appended value, store the value that will give the right result after the current global transform: x' = (x − add) · mul⁻¹ (modular inverse via pow). getIndex(i) returns stored[i]·mul + add, modulo 1e9+7.",
 "variants": [
  {
   "name": "Lazy affine transform with a modular inverse",
   "code": "class Fancy:\n    MOD = 10**9 + 7\n\n    def __init__(self):\n        self.vals = []\n        self.mul = 1\n        self.add = 0\n\n    def append(self, val):\n        inv = pow(self.mul, self.MOD - 2, self.MOD)\n        self.vals.append((val - self.add) * inv % self.MOD)\n\n    def addAll(self, inc):\n        self.add = (self.add + inc) % self.MOD\n\n    def multAll(self, m):\n        self.mul = self.mul * m % self.MOD\n        self.add = self.add * m % self.MOD\n\n    def getIndex(self, idx):\n        if idx >= len(self.vals):\n            return -1\n        return (self.vals[idx] * self.mul + self.add) % self.MOD",
   "time": "O(log MOD) per append",
   "space": "O(n)",
   "explain": "Every element ends up as value·mul + add after all addAll / multAll calls. Keep the global (mul, add) and, for each appended value, store the value that will give the right result after the current global transform: x' = (x − add) · mul⁻¹ (modular inverse via pow). getIndex(i) returns stored[i]·mul + add, modulo 1e9+7.",
   "frames": []
  }
 ]
};
