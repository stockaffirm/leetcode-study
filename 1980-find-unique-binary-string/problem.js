window.PROBLEM = {
 "id": "1980",
 "title": "Find Unique Binary String",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "['01','10'] → flip the diagonal bits to get '11', which differs from both.",
 "idea": "Build a string whose i-th character is the opposite of the i-th character of the i-th given string. It differs from each given string in at least one position.",
 "input": "nums = [\"01\",\"10\"]",
 "output": "\"11\"",
 "notes": [],
 "best": "Build a string whose i-th character is the opposite of the i-th character of the i-th given string. It differs from each given string in at least one position.",
 "variants": [
  {
   "name": "Cantor's diagonal",
   "code": "class Solution:\n    def findDifferentBinaryString(self, nums):\n        return ''.join('1' if nums[i][i] == '0' else '0' for i in range(len(nums)))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Build a string whose i-th character is the opposite of the i-th character of the i-th given string. It differs from each given string in at least one position.",
   "frames": []
  }
 ]
};
