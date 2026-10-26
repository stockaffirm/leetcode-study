window.PROBLEM = {
 "id": "205",
 "title": "Isomorphic Strings",
 "level": "Easy",
 "topic": "Hashmap",
 "question": "Two strings s and t are isomorphic if you can replace the letters of s to get t, where every occurrence of a letter is replaced by the SAME letter, and two different letters never become the same letter. Return true or false. Example: 'egg' → 'add' works (e→a, g→d) → true; 'foo' → 'bar' fails because o would have to be both a and r.",
 "why": "egg → add: e→a, g→d works → True.",
 "idea": "Keep two maps (s→t and t→s); any conflict means False.",
 "input": "s=\"egg\", t=\"add\"",
 "output": "True",
 "notes": [],
 "best": "Keep two maps (s→t and t→s); any conflict means False.",
 "variants": [
  {
   "name": "Two maps",
   "code": "class Solution:\n    def isIsomorphic(self, s, t):\n        m1, m2 = {}, {}\n        for a, b in zip(s, t):\n            if m1.setdefault(a, b) != b or m2.setdefault(b, a) != a: return False\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep two maps (s→t and t→s); any conflict means False.",
   "frames": [
    {
     "title": "Start",
     "description": "Compare letter by letter.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "e",
        "g",
        "g"
       ],
       "hot": [],
       "marks": {}
      },
      {
       "name": "t",
       "cells": [
        "a",
        "d",
        "d"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "e → a",
     "description": "New pair.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "e",
        "g",
        "g"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "t",
       "cells": [
        "a",
        "d",
        "d"
       ],
       "hot": [
        0
       ],
       "marks": {}
      },
      {
       "name": "map",
       "cells": [
        "e→a"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "g → d",
     "description": "New pair.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "e",
        "g",
        "g"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "t",
       "cells": [
        "a",
        "d",
        "d"
       ],
       "hot": [
        1
       ],
       "marks": {}
      },
      {
       "name": "map",
       "cells": [
        "e→a",
        "g→d"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "g → d again",
     "description": "Same as before → consistent.",
     "codeLines": [
      5
     ],
     "facts": {},
     "rows": [
      {
       "name": "s",
       "cells": [
        "e",
        "g",
        "g"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "t",
       "cells": [
        "a",
        "d",
        "d"
       ],
       "hot": [
        2
       ],
       "marks": {}
      },
      {
       "name": "map",
       "cells": [
        "e→a",
        "g→d"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Return",
     "description": "No conflicts → True.",
     "codeLines": [
      6
     ],
     "facts": {},
     "rows": [
      {
       "name": "answer",
       "cells": [
        "True"
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
   "name": "Compare first-occurrence patterns",
   "tag": "Pythonic",
   "code": "class Solution:\n    def isIsomorphic(self, s, t):\n        return [s.index(c) for c in s] == [t.index(c) for c in t]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Two strings are isomorphic if each letter's first-seen index list matches.",
   "frames": [],
   "alt": true
  },
  {
   "name": "One map + used set",
   "tag": "Alternative",
   "code": "class Solution:\n    def isIsomorphic(self, s, t):\n        m = {}; used = set()\n        for a, b in zip(s, t):\n            if a in m:\n                if m[a] != b: return False\n            else:\n                if b in used: return False\n                m[a] = b; used.add(b)\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Map s→t and remember which t letters are already taken.",
   "frames": [],
   "alt": true
  }
 ]
};
