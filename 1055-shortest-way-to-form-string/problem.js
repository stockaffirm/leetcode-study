window.PROBLEM = {
 "id": "1055",
 "title": "Shortest Way to Form String",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "source 'abc', target 'abcbc': 'abc' then 'bc' (a subsequence of 'abc') → 2.",
 "idea": "Each piece is a subsequence of source. Walk through the target with a pointer; scan source from the start, matching as many target characters as possible in one pass, then start a new pass. If a pass matches nothing, some target letter is missing from source: return −1.",
 "input": "source = \"abc\", target = \"abcbc\"",
 "output": "2",
 "notes": [],
 "best": "Each piece is a subsequence of source. Walk through the target with a pointer; scan source from the start, matching as many target characters as possible in one pass, then start a new pass. If a pass matches nothing, some target letter is missing from source: return −1.",
 "variants": [
  {
   "name": "Greedy: scan the source as many times as needed",
   "code": "class Solution:\n    def shortestWay(self, source, target):\n        i = 0\n        passes = 0\n        while i < len(target):\n            start = i\n            for ch in source:\n                if i < len(target) and target[i] == ch:\n                    i += 1\n            if i == start:\n                return -1\n            passes += 1\n        return passes",
   "time": "O(|source|·passes)",
   "space": "O(1)",
   "explain": "Each piece is a subsequence of source. Walk through the target with a pointer; scan source from the start, matching as many target characters as possible in one pass, then start a new pass. If a pass matches nothing, some target letter is missing from source: return −1.",
   "frames": []
  }
 ]
};
