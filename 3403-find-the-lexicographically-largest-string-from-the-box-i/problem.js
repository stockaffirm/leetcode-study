window.PROBLEM = {
 "id": "3403",
 "title": "Find the Lexicographically Largest String From the Box I",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "'dbca' with 2 friends → splits give 'd','bca' / 'db','ca' / 'dbc','a' → largest is 'dbc'.",
 "idea": "With f friends, a piece can have at most n − f + 1 letters. Any piece is a substring starting at some index, so try every start and take the longest allowed piece from it; the answer is the maximum of those. For one friend the whole word is the only split.",
 "input": "word = \"dbca\", numFriends = 2",
 "output": "\"dbc\"",
 "notes": [],
 "best": "With f friends, a piece can have at most n − f + 1 letters. Any piece is a substring starting at some index, so try every start and take the longest allowed piece from it; the answer is the maximum of those. For one friend the whole word is the only split.",
 "variants": [
  {
   "name": "Best start index, longest allowed length",
   "code": "class Solution:\n    def answerString(self, word, numFriends):\n        if numFriends == 1:\n            return word\n        n = len(word)\n        m = n - numFriends + 1\n        return max(word[i:i + m] for i in range(n))",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "With f friends, a piece can have at most n − f + 1 letters. Any piece is a substring starting at some index, so try every start and take the longest allowed piece from it; the answer is the maximum of those. For one friend the whole word is the only split.",
   "frames": []
  }
 ]
};
