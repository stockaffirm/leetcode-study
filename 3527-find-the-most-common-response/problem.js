window.PROBLEM = {
 "id": "3527",
 "title": "Find the Most Common Response",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "responses[i] is the list of survey answers of day i. Remove duplicates within each day, then return the answer that appears on the most days (if tied, the alphabetically smallest). Example: [['good','ok','good','ok'],['ok','bad','good','ok','ok'],['good'],['bad']] → 'good'.",
 "why": "'good' appears on 3 different days, 'ok' and 'bad' on 2 → 'good'. If there is a tie the alphabetically smaller response wins.",
 "idea": "Turn every day's list into a set (duplicates within a day count once), count the responses over all days, and take the highest count, breaking ties by the smaller string.",
 "input": "responses = [[\"good\",\"ok\",\"good\",\"ok\"],[\"ok\",\"bad\",\"good\",\"ok\",\"ok\"],[\"good\"],[\"bad\"]]",
 "output": "\"good\"",
 "notes": [],
 "best": "Turn every day's list into a set (duplicates within a day count once), count the responses over all days, and take the highest count, breaking ties by the smaller string.",
 "variants": [
  {
   "name": "Count each response once per day",
   "code": "class Solution:\n    def findCommonResponse(self, responses):\n        cnt = Counter(r for day in responses for r in set(day))\n        best = max(cnt.values())\n        return min(r for r, c in cnt.items() if c == best)",
   "time": "O(total responses)",
   "space": "O(total responses)",
   "explain": "Turn every day's list into a set (duplicates within a day count once), count the responses over all days, and take the highest count, breaking ties by the smaller string.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort the pairs",
   "tag": "Alternative",
   "code": "class Solution:\n    def findCommonResponse(self, responses):\n        cnt = Counter(r for day in responses for r in set(day))\n        return sorted(cnt, key=lambda r: (-cnt[r], r))[0]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort responses by (−count, text) and take the first.",
   "frames": [],
   "alt": true
  }
 ]
};
