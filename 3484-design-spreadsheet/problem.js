window.PROBLEM = {
 "id": "3484",
 "title": "Design Spreadsheet",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
