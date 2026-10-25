window.PROBLEM = {
 "id": "383",
 "title": "Ransom Note",
 "level": "Easy",
 "topic": "Hashmap",
 "question": "You want to write a ransom note using letters cut out of a magazine. Given strings ransomNote and magazine, return true if ransomNote can be built from magazine's letters, using each magazine letter at most once. Example: ransomNote='aa', magazine='aab' → the magazine has two a's → true; magazine='ab' would be false.",
 "why": "note 'aa', magazine 'aab' → the magazine has two a's → True.",
 "idea": "Count letters in both; the note's counts must fit inside the magazine's.",
 "input": "ransomNote=\"aa\", magazine=\"aab\"",
 "output": "True",
 "notes": [],
 "best": "Count letters in both; the note's counts must fit inside the magazine's.",
 "variants": [
  {
   "name": "Counter subtraction",
   "code": "class Solution:\n    def canConstruct(self, ransomNote, magazine):\n        return not (Counter(ransomNote) - Counter(magazine))",
   "time": "O(n+m)",
   "space": "O(1)",
   "explain": "Count letters in both; the note's counts must fit inside the magazine's.",
   "frames": [
    {
     "title": "Count note",
     "description": "a:2",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "note",
       "cells": [
        "a:2"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Count magazine",
     "description": "a:2, b:1",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "magazine",
       "cells": [
        "a:2",
        "b:1"
       ],
       "hot": [],
       "marks": {}
      }
     ]
    },
    {
     "title": "Subtract",
     "description": "note − magazine = nothing left over.",
     "codeLines": [
      3
     ],
     "facts": {},
     "rows": [
      {
       "name": "left over",
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
     "description": "True",
     "codeLines": [
      3
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
   "name": "Count with str.count",
   "tag": "Alternative",
   "code": "class Solution:\n    def canConstruct(self, ransomNote, magazine):\n        for c in set(ransomNote):\n            if ransomNote.count(c) > magazine.count(c): return False\n        return True",
   "time": "O(n·m)",
   "space": "O(1)",
   "explain": "For each distinct needed letter compare counts directly.",
   "frames": [],
   "alt": true
  },
  {
   "name": "26-slot counts",
   "tag": "Alternative",
   "code": "class Solution:\n    def canConstruct(self, ransomNote, magazine):\n        cnt = [0] * 26\n        for c in magazine: cnt[ord(c) - 97] += 1\n        for c in ransomNote:\n            cnt[ord(c) - 97] -= 1\n            if cnt[ord(c) - 97] < 0: return False\n        return True",
   "time": "O(n+m)",
   "space": "O(1)",
   "explain": "Count the magazine, then spend letters for the note.",
   "frames": [],
   "alt": true
  }
 ]
};
