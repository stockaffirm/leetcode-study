window.PROBLEM = {
 "id": "3295",
 "title": "Report Spam Message",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A message (list of words) is spam if at least two of its words appear exactly in the bannedWords list. Return true if it is spam. Example: message ['hello','world','leetcode'], banned ['world','hello'] → true.",
 "why": "['hello','world','leetcode'] with banned ['world','hello']: two words match → true.",
 "idea": "Put the banned words in a set. A message is spam when at least two of its words are in that set (repeated words count each time).",
 "input": "message = [\"hello\",\"world\",\"leetcode\"], bannedWords = [\"world\",\"hello\"]",
 "output": "true",
 "notes": [],
 "best": "Put the banned words in a set. A message is spam when at least two of its words are in that set (repeated words count each time).",
 "variants": [
  {
   "name": "Count words found in the banned set",
   "code": "class Solution:\n    def reportSpam(self, message, bannedWords):\n        banned = set(bannedWords)\n        return sum(w in banned for w in message) >= 2",
   "time": "O(n + m)",
   "space": "O(m)",
   "explain": "Put the banned words in a set. A message is spam when at least two of its words are in that set (repeated words count each time).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Loop with early exit",
   "tag": "Alternative",
   "code": "class Solution:\n    def reportSpam(self, message, bannedWords):\n        banned = set(bannedWords)\n        hits = 0\n        for w in message:\n            if w in banned:\n                hits += 1\n                if hits == 2:\n                    return True\n        return False",
   "time": "O(n + m)",
   "space": "O(m)",
   "explain": "Count matches while scanning and stop as soon as two are found.",
   "frames": [],
   "alt": true
  }
 ]
};
