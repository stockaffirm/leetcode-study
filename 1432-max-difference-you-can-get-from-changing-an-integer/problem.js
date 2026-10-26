window.PROBLEM = {
 "id": "1432",
 "title": "Max Difference You Can Get From Changing an Integer",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "num=555: biggest 999, smallest 111 → 888.",
 "idea": "To get the largest number replace every copy of the first digit that is not 9 by 9. To get the smallest replace the first digit by 1 (if it is not 1), otherwise replace the first digit after it that is not 0 or 1 by 0 (never creating a leading zero). Return the difference.",
 "input": "num = 555",
 "output": "888",
 "notes": [],
 "best": "To get the largest number replace every copy of the first digit that is not 9 by 9. To get the smallest replace the first digit by 1 (if it is not 1), otherwise replace the first digit after it that is not 0 or 1 by 0 (never creating a leading zero). Return the difference.",
 "variants": [
  {
   "name": "Make the biggest and smallest versions greedily",
   "code": "class Solution:\n    def maxDiff(self, num):\n        s = str(num)\n        big = s\n        for c in s:\n            if c != '9':\n                big = s.replace(c, '9')\n                break\n        small = s\n        if s[0] != '1':\n            small = s.replace(s[0], '1')\n        else:\n            for c in s[1:]:\n                if c not in '01':\n                    small = s.replace(c, '0')\n                    break\n        return int(big) - int(small)",
   "time": "O(d)",
   "space": "O(d)",
   "explain": "To get the largest number replace every copy of the first digit that is not 9 by 9. To get the smallest replace the first digit by 1 (if it is not 1), otherwise replace the first digit after it that is not 0 or 1 by 0 (never creating a leading zero). Return the difference.",
   "frames": []
  }
 ]
};
