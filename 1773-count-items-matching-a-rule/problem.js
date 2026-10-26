window.PROBLEM = {
 "id": "1773",
 "title": "Count Items Matching a Rule",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "Items are [type, color, name]. With ruleKey 'color' and value 'silver' only the computer matches → 1.",
 "idea": "Turn the rule key into a column index (type = 0, color = 1, name = 2) and count the items whose entry in that column equals the value.",
 "input": "items = [[\"phone\",\"blue\",\"pixel\"],[\"computer\",\"silver\",\"lenovo\"],[\"phone\",\"gold\",\"iphone\"]], ruleKey = \"color\", ruleValue = \"silver\"",
 "output": "1",
 "notes": [],
 "best": "Turn the rule key into a column index (type = 0, color = 1, name = 2) and count the items whose entry in that column equals the value.",
 "variants": [
  {
   "name": "Pick the column, then count",
   "code": "class Solution:\n    def countMatches(self, items, ruleKey, ruleValue):\n        idx = {\"type\": 0, \"color\": 1, \"name\": 2}[ruleKey]\n        return sum(item[idx] == ruleValue for item in items)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Turn the rule key into a column index (type = 0, color = 1, name = 2) and count the items whose entry in that column equals the value.",
   "frames": []
  }
 ]
};
