window.PROBLEM = {
 "id": "2408",
 "title": "Design SQL",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a tiny SQL database. SQL(names, columns) creates tables; table names[i] has columns[i] columns. ins(name, row) adds a row (a list of strings) with an id 1, 2, 3, … that is never reused, returns true, or returns false if the table does not exist or the row has the wrong number of cells. rmv(name, rowId) deletes a row. sel(name, rowId, columnId) returns the cell value, or '<null>' if the table, row or column does not exist. exp(name) returns all rows as 'id,cell1,cell2,…' (empty list if the table doesn't exist). Example: insert a row into table 'two', select a cell, insert another, export, remove the first, select, export. (A tree written as a list reads level by level, top to bottom and left to right; null means there is no node in that spot.)",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Rows in a list with removed markers",
   "tag": "Alternative",
   "code": "class SQL:\n    def __init__(self, names, columns):\n        self.t = {n: {'cols': c, 'rows': [], 'removed': set()} for n, c in zip(names, columns)}\n    def ins(self, name, row):\n        t = self.t.get(name)\n        if t is None or len(row) != t['cols']: return False\n        t['rows'].append(row)\n        return True\n    def rmv(self, name, rowId):\n        t = self.t.get(name)\n        if t is not None and 1 <= rowId <= len(t['rows']): t['removed'].add(rowId)\n    def sel(self, name, rowId, columnId):\n        t = self.t.get(name)\n        if t is None or not 1 <= rowId <= len(t['rows']) or rowId in t['removed'] or not 1 <= columnId <= t['cols']: return '<null>'\n        return t['rows'][rowId - 1][columnId - 1]\n    def exp(self, name):\n        t = self.t.get(name)\n        if t is None: return []\n        return [str(i + 1) + ',' + ','.join(r) for i, r in enumerate(t['rows']) if i + 1 not in t['removed']]",
   "time": "O(1) except exp",
   "space": "O(total cells)",
   "explain": "Append rows to a list and remember which ids were removed.",
   "frames": [],
   "alt": true
  }
 ]
};
