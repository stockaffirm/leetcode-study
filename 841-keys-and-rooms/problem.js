window.PROBLEM = {
 "id": "841",
 "title": "Keys and Rooms",
 "level": "Medium",
 "topic": "Graphs - DFS",
 "question": "There are n rooms numbered 0 to n−1, and all are locked except room 0. rooms[i] is the list of keys lying in room i; each key opens one specific room. Starting in room 0, you can enter any room whose key you have collected. Return true if you can eventually visit every room, otherwise false. Example: [[1,3],[3,0,1],[2],[0]] → you can get into rooms 0, 1 and 3, but the only key to room 2 is inside room 2 itself, so you can never enter it → false.",
 "input": "[[1,3],[3,0,1],[2],[0]]",
 "output": "False",
 "notes": [
  "Rooms are nodes, keys are directed edges.",
  "Unreached room → False."
 ],
 "best": "Plain DFS with a visited set; compare the count at the end.",
 "variants": [
  {
   "name": "DFS with a stack",
   "code": "class Solution:\n    def canVisitAllRooms(self, rooms):\n        seen, stack = {0}, [0]\n        while stack:\n            r = stack.pop()\n            for k in rooms[r]:\n                if k not in seen:\n                    seen.add(k); stack.append(k)\n        return len(seen) == len(rooms)",
   "time": "O(n+keys)",
   "space": "O(n)",
   "explain": "DFS from room 0 over keys.",
   "frames": [
    {
     "title": "Rooms",
     "description": "Keys per room.",
     "codeLines": [
      2
     ],
     "facts": {},
     "rows": [
      {
       "name": "room: keys",
       "cells": [
        "0:13",
        "1:301",
        "2:2",
        "3:0"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Start",
     "description": "Open room 0.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "room: keys",
       "cells": [
        "0:13",
        "1:301",
        "2:2",
        "3:0"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "visited",
       "cells": [
        "0"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "0"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Enter room 0",
     "description": "New keys → rooms 1, 3.",
     "codeLines": [
      5,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "room: keys",
       "cells": [
        "0:13",
        "1:301",
        "2:2",
        "3:0"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "3"
       ],
       "hot": [
        1,
        2
       ],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "1",
        "3"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Enter room 3",
     "description": "No new rooms.",
     "codeLines": [
      5,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "room: keys",
       "cells": [
        "0:13",
        "1:301",
        "2:2",
        "3:0"
       ],
       "hot": [
        3
       ],
       "marks": {}
      },
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Enter room 1",
     "description": "No new rooms.",
     "codeLines": [
      5,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "room: keys",
       "cells": [
        "0:13",
        "1:301",
        "2:2",
        "3:0"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "3"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "stack",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "Visited 3 of 4 rooms — room 2 is never reachable.",
     "codeLines": [
      9
     ],
     "facts": {
      "result": "False"
     },
     "rows": [
      {
       "name": "visited",
       "cells": [
        "0",
        "1",
        "✗",
        "3"
       ],
       "hot": [
        2
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "BFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def canVisitAllRooms(self, rooms):\n        seen, q = {0}, deque([0])\n        while q:\n            r = q.popleft()\n            for k in rooms[r]:\n                if k not in seen: seen.add(k); q.append(k)\n        return len(seen) == len(rooms)",
   "time": "O(n+keys)",
   "space": "O(n)",
   "explain": "Same traversal with a queue.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Recursive DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def canVisitAllRooms(self, rooms):\n        seen = set()\n        def go(r):\n            seen.add(r)\n            for k in rooms[r]:\n                if k not in seen: go(k)\n        go(0)\n        return len(seen) == len(rooms)",
   "time": "O(n+keys)",
   "space": "O(n)",
   "explain": "Enter each unvisited room recursively.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "The only key to room 2 is inside room 2 itself, so you can never reach it → False.",
 "idea": "DFS from room 0, following keys."
};
