window.PROBLEM = {
 "id": "631",
 "title": "Design Excel Sum Formula",
 "level": "Hard",
 "topic": "Design",
 "question": "Design an Excel sheet: Excel(height, width) creates a sheet with rows 1..height and columns 'A'..width, all cells 0. set(row, column, val) writes a number; get(row, column) reads a cell; sum(row, column, numbers) turns that cell into a SUM FORMULA of the given cells or ranges (like 'A1' or 'A1:B2', a cell listed twice counts twice), returns the current sum, and from now on the cell always shows the up-to-date sum. Example: set(1,'A',2); sum(3,'C',['A1','A1:B2']) → 4; set(2,'B',2); get(3,'C') → 6.",
 "why": "A spreadsheet where a cell can hold a plain number or a SUM formula over other cells/ranges, and updates automatically when those change.",
 "idea": "Store plain values and, for formula cells, the list of cells they add up. get() computes a formula cell by recursively summing the cells it depends on, so changes show up automatically.",
 "input": "set(1,'A',2); sum(3,'C',['A1','A1:B2']); set(2,'B',2); get(3,'C')",
 "output": "4, then 6",
 "notes": [],
 "best": "Store plain values and, for formula cells, the list of cells they add up. get() computes a formula cell by recursively summing the cells it depends on, so changes show up automatically.",
 "variants": [
  {
   "name": "Cells that remember their formula",
   "code": "class Excel:\n    def __init__(self, height, width):\n        self.h, self.w = height, width\n        self.val = {}\n        self.formula = {}\n    def _cell(self, s):\n        return (int(s[1:]), ord(s[0]) - 64)\n    def set(self, row, column, val):\n        key = (row, ord(column) - 64)\n        self.formula.pop(key, None)\n        self.val[key] = val\n    def get(self, row, column):\n        return self._value((row, ord(column) - 64))\n    def _value(self, key):\n        if key in self.formula:\n            return sum(self._value(k) for k in self.formula[key])\n        return self.val.get(key, 0)\n    def sum(self, row, column, numbers):\n        cells = []\n        for s in numbers:\n            if ':' in s:\n                a, b = s.split(':')\n                (r1, c1), (r2, c2) = self._cell(a), self._cell(b)\n                for r in range(r1, r2 + 1):\n                    for c in range(c1, c2 + 1): cells.append((r, c))\n            else:\n                cells.append(self._cell(s))\n        key = (row, ord(column) - 64)\n        self.formula[key] = cells\n        return self._value(key)",
   "time": "depends on the formula depth",
   "space": "O(cells)",
   "explain": "Store plain values and, for formula cells, the list of cells they add up. get() computes a formula cell by recursively summing the cells it depends on, so changes show up automatically.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Formulas as cell counts",
   "tag": "Alternative",
   "code": "class Excel:\n    def __init__(self, height, width):\n        self.val = {}\n        self.deps = {}\n    def set(self, row, column, val):\n        key = (row, ord(column) - 64)\n        self.deps.pop(key, None)\n        self.val[key] = val\n    def get(self, row, column):\n        return self._get((row, ord(column) - 64))\n    def _get(self, key):\n        if key in self.deps:\n            return sum(m * self._get(k) for k, m in self.deps[key].items())\n        return self.val.get(key, 0)\n    def sum(self, row, column, numbers):\n        counts = Counter()\n        for s in numbers:\n            a, _, b = s.partition(':')\n            r1, c1 = int(a[1:]), ord(a[0]) - 64\n            r2, c2 = (int(b[1:]), ord(b[0]) - 64) if b else (r1, c1)\n            for r in range(r1, r2 + 1):\n                for c in range(c1, c2 + 1): counts[(r, c)] += 1\n        key = (row, ord(column) - 64)\n        self.deps[key] = counts\n        return self._get(key)",
   "time": "depends on the formula depth",
   "space": "O(cells)",
   "explain": "A formula remembers how many times each cell is added (so 'A1' and 'A1:B2' both counting A1 gives 2).",
   "frames": [],
   "alt": true
  }
 ]
};
