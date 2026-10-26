window.PROBLEM = {
 "id": "3484",
 "title": "Design Spreadsheet",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a Spreadsheet with rows 1..n and 26 columns A–Z (all cells start at 0). setCell(cell, value) sets e.g. 'A1'; resetCell(cell) sets it back to 0; getValue(formula) evaluates a formula '=X+Y' where X and Y are each either a cell name or a non-negative whole number. Example: getValue('=5+7') → 12; setCell('A1',10); getValue('=A1+6') → 16; setCell('B2',15); getValue('=A1+B2') → 25; resetCell('A1'); getValue('=A1+B2') → 15.",
 "why": "A spreadsheet with cells like A1…Z999; set, reset and evaluate a simple formula '=X+Y' where X and Y are cells or plain numbers.",
 "idea": "Store only the cells that were set (dictionary); an unset cell is 0. To evaluate a formula, split it on '+' and add each part (a number, or the cell's value).",
 "input": "getValue(=5+7), setCell(A1,10), getValue(=A1+6), setCell(B2,15), getValue(=A1+B2), resetCell(A1), getValue(=A1+B2)",
 "output": "12, 16, 25, 15",
 "notes": [],
 "best": "Store only the cells that were set (dictionary); an unset cell is 0. To evaluate a formula, split it on '+' and add each part (a number, or the cell's value).",
 "variants": [
  {
   "name": "Dictionary of cells, parse '=A+B'",
   "code": "class Spreadsheet:\n    def __init__(self, rows):\n        self.cells = {}\n    def setCell(self, cell, value):\n        self.cells[cell] = value\n    def resetCell(self, cell):\n        self.cells.pop(cell, None)\n    def getValue(self, formula):\n        total = 0\n        for part in formula[1:].split('+'):\n            total += int(part) if part.isdigit() else self.cells.get(part, 0)\n        return total",
   "time": "O(1)",
   "space": "O(set cells)",
   "explain": "Store only the cells that were set (dictionary); an unset cell is 0. To evaluate a formula, split it on '+' and add each part (a number, or the cell's value).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "2D grid of cells",
   "tag": "Alternative",
   "code": "class Spreadsheet:\n    def __init__(self, rows):\n        self.grid = [[0] * 26 for _ in range(rows + 1)]\n    def setCell(self, cell, value):\n        self.grid[int(cell[1:])][ord(cell[0]) - 65] = value\n    def resetCell(self, cell):\n        self.grid[int(cell[1:])][ord(cell[0]) - 65] = 0\n    def getValue(self, formula):\n        total = 0\n        for part in formula[1:].split('+'):\n            total += int(part) if part.isdigit() else self.grid[int(part[1:])][ord(part[0]) - 65]\n        return total",
   "time": "O(1)",
   "space": "O(rows·26)",
   "explain": "Store cells in a rows×26 grid indexed by row number and column letter.",
   "frames": [],
   "alt": true
  }
 ]
};
