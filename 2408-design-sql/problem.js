window.PROBLEM = {
 "id": "2408",
 "title": "Design SQL",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "A tiny database: insert rows (with auto-increment ids), remove rows, read a cell and export a table as text.",
 "idea": "Keep for each table a dictionary id → row and a counter for the next id (ids are never reused). Every operation first checks the table exists and the sizes fit.",
 "input": "ins, sel, ins, exp, rmv, sel, exp on table 'two'",
 "output": "True, third, True, [2 rows], None, fifth, [1 row]",
 "notes": [],
 "best": "Keep for each table a dictionary id → row and a counter for the next id (ids are never reused). Every operation first checks the table exists and the sizes fit.",
 "variants": [
  {
   "name": "Dictionary of tables with row ids",
   "code": "class SQL:\n    def __init__(self, names, columns):\n        self.cols = dict(zip(names, columns))\n        self.rows = {n: {} for n in names}\n        self.next = {n: 1 for n in names}\n    def ins(self, name, row):\n        if name not in self.cols or len(row) != self.cols[name]: return False\n        self.rows[name][self.next[name]] = row\n        self.next[name] += 1\n        return True\n    def rmv(self, name, rowId):\n        if name in self.rows: self.rows[name].pop(rowId, None)\n    def sel(self, name, rowId, columnId):\n        if name not in self.rows or rowId not in self.rows[name] or not 1 <= columnId <= self.cols[name]: return '<null>'\n        return self.rows[name][rowId][columnId - 1]\n    def exp(self, name):\n        if name not in self.rows: return []\n        return [str(i) + ',' + ','.join(r) for i, r in self.rows[name].items()]",
   "time": "O(1) except exp",
   "space": "O(total cells)",
   "explain": "Keep for each table a dictionary id → row and a counter for the next id (ids are never reused). Every operation first checks the table exists and the sizes fit.",
   "frames": []
  }
 ]
};
