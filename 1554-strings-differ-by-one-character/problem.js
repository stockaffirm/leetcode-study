window.PROBLEM = {
 "id": "1554",
 "title": "Strings Differ by One Character",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Do two strings in the list differ at exactly one position?",
 "idea": "For each string and each position, replace that letter by '*' to make a key ('abcd' → '*bcd', 'a*cd', …). Two strings that differ in one position share a key.",
 "input": "[\"abcd\",\"acbd\",\"aacd\"]",
 "output": "True",
 "notes": [],
 "best": "For each string and each position, replace that letter by '*' to make a key ('abcd' → '*bcd', 'a*cd', …). Two strings that differ in one position share a key.",
 "variants": [
  {
   "name": "Wildcard keys in a set",
   "code": "class Solution:\n    def differByOne(self, dict):\n        seen = set()\n        for w in dict:\n            for i in range(len(w)):\n                key = w[:i] + '*' + w[i + 1:]\n                if key in seen: return True\n                seen.add(key)\n        return False",
   "time": "O(n·L)",
   "space": "O(n·L)",
   "explain": "For each string and each position, replace that letter by '*' to make a key ('abcd' → '*bcd', 'a*cd', …). Two strings that differ in one position share a key.",
   "frames": []
  }
 ]
};
