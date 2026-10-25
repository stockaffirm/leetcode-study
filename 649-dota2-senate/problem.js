window.PROBLEM = {
 "id": "649",
 "title": "Dota2 Senate",
 "level": "Medium",
 "topic": "Queue",
 "question": "The Senate has senators from two parties, Radiant (R) and Dire (D); the string senate lists them in voting order. Rounds repeat in that order. On his turn a senator either (a) bans one senator of the OTHER party from voting for the rest of the game, or (b) announces victory if all senators still allowed to vote belong to his own party. Every senator plays in the best way for his own party. Return 'Radiant' or 'Dire', whichever party wins. Example: 'RDD' → the first R bans the first D, the second D bans R, and only D's remain → 'Dire'.",
 "input": "\"RDD\"",
 "output": "\"Dire\"",
 "notes": [
  "Index + n = the senator's slot in the next round.",
  "The queue that empties loses."
 ],
 "best": "Two queues of indices; the smaller index wins and goes to the back (+n).",
 "variants": [
  {
   "name": "Two queues",
   "code": "class Solution:\n    def predictPartyVictory(self, senate):\n        n = len(senate)\n        R = deque(i for i, c in enumerate(senate) if c == 'R')\n        D = deque(i for i, c in enumerate(senate) if c == 'D')\n        while R and D:\n            r, d = R.popleft(), D.popleft()\n            if r < d: R.append(r + n)\n            else: D.append(d + n)\n        return 'Radiant' if R else 'Dire'",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Earlier index acts first, bans the other, and re-queues for the next round.",
   "frames": [
    {
     "title": "Queues",
     "description": "R at 0; D at 1 and 2.",
     "codeLines": [
      4,
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "R",
       "cells": [
        "0"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "D",
       "cells": [
        "1",
        "2"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Round: 0 vs 1",
     "description": "R(0) acts first → bans D(1). R re-queues as 3.",
     "codeLines": [
      7,
      8
     ],
     "facts": {},
     "rows": [
      {
       "name": "R",
       "cells": [
        "3"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      },
      {
       "name": "D",
       "cells": [
        "2"
       ],
       "hot": [],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Round: 3 vs 2",
     "description": "D(2) acts first → bans R(3). D re-queues as 5.",
     "codeLines": [
      7,
      9
     ],
     "facts": {},
     "rows": [
      {
       "name": "R",
       "cells": [
        "·"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "D",
       "cells": [
        "5"
       ],
       "hot": [
        0
       ],
       "marks": {},
       "kind": "list"
      }
     ]
    },
    {
     "title": "Return",
     "description": "R is empty → Dire wins.",
     "codeLines": [
      10
     ],
     "facts": {},
     "rows": [
      {
       "name": "winner",
       "cells": [
        "Dire"
       ],
       "hot": [
        0
       ],
       "marks": {}
      }
     ]
    }
   ],
   "tag": "Optimal"
  },
  {
   "name": "Round-by-round ban counts",
   "tag": "Alternative",
   "code": "class Solution:\n    def predictPartyVictory(self, senate):\n        s = list(senate); ban = {'R': 0, 'D': 0}\n        while True:\n            if 'R' not in s: return 'Dire'\n            if 'D' not in s: return 'Radiant'\n            out = []\n            for c in s:\n                opp = 'D' if c == 'R' else 'R'\n                if ban[c] > 0: ban[c] -= 1; continue\n                ban[opp] += 1; out.append(c)\n            s = out",
   "time": "O(n²) worst",
   "space": "O(n)",
   "explain": "Each senator bans the next opponent; pending bans carry into the next round.",
   "frames": [],
   "alt": true
  }
 ],
 "why": "RDD: R (index 0) bans the first D. The other D (index 2) then bans R. Dire wins.",
 "idea": "Use two queues of positions. The earlier senator acts, then rejoins the line for the next round."
};
