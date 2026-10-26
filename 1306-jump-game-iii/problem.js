window.PROBLEM = {
 "id": "1306",
 "title": "Jump Game III",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "arr [4,2,3,0,3,1,2], start 5 → 5 → 4 → 1 → 3 (value 0) → true.",
 "idea": "From index i you can jump to i + arr[i] or i − arr[i]. Search from start with a BFS (Breadth-First Search), marking visited indices; return true as soon as an index holding 0 is reached.",
 "input": "arr = [4,2,3,0,3,1,2], start = 5",
 "output": "true",
 "notes": [],
 "best": "From index i you can jump to i + arr[i] or i − arr[i]. Search from start with a BFS (Breadth-First Search), marking visited indices; return true as soon as an index holding 0 is reached.",
 "variants": [
  {
   "name": "BFS (Breadth-First Search) from start over index ± arr[i]",
   "code": "class Solution:\n    def canReach(self, arr, start):\n        seen = {start}\n        q = deque([start])\n        while q:\n            i = q.popleft()\n            if arr[i] == 0:\n                return True\n            for j in (i + arr[i], i - arr[i]):\n                if 0 <= j < len(arr) and j not in seen:\n                    seen.add(j)\n                    q.append(j)\n        return False",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "From index i you can jump to i + arr[i] or i − arr[i]. Search from start with a BFS (Breadth-First Search), marking visited indices; return true as soon as an index holding 0 is reached.",
   "frames": []
  }
 ]
};
