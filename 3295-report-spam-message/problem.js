window.PROBLEM = {
 "id": "3295",
 "title": "Report Spam Message",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
