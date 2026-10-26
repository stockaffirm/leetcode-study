window.PROBLEM = {
 "id": "631",
 "title": "Design Excel Sum Formula",
 "level": "Hard",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
