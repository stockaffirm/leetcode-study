window.PROBLEM = {
 "id": "1904",
 "title": "The Number of Full Rounds You Have Played",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "login '09:31', logout '10:14' → 09:45 and 10:00 are full rounds → 1.",
 "idea": "Rounds start every 15 minutes. Convert to minutes; if logout < login add 24 hours. Round the login up to the next multiple of 15 and the logout down; the number of full rounds is (end − start) // 15 (never negative).",
 "input": "loginTime = \"09:31\", logoutTime = \"10:14\"",
 "output": "1",
 "notes": [],
 "best": "Rounds start every 15 minutes. Convert to minutes; if logout < login add 24 hours. Round the login up to the next multiple of 15 and the logout down; the number of full rounds is (end − start) // 15 (never negative).",
 "variants": [
  {
   "name": "Round the start up and the end down to a quarter hour",
   "code": "class Solution:\n    def numberOfRounds(self, loginTime, logoutTime):\n        def minutes(t):\n            return int(t[:2]) * 60 + int(t[3:])\n        start, end = minutes(loginTime), minutes(logoutTime)\n        if end < start:\n            end += 24 * 60\n        start = (start + 14) // 15 * 15\n        end = end // 15 * 15\n        return max(0, (end - start) // 15)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Rounds start every 15 minutes. Convert to minutes; if logout < login add 24 hours. Round the login up to the next multiple of 15 and the logout down; the number of full rounds is (end − start) // 15 (never negative).",
   "frames": []
  }
 ]
};
