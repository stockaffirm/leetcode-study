window.PROBLEM = {
 "id": "3211",
 "title": "Generate Binary Strings Without Adjacent Zeros",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "n=3 → '010','011','101','110','111'.",
 "idea": "Build the string left to right. After a '0' only '1' may follow; after a '1' either digit. Collect the strings of length n and return them sorted.",
 "input": "n = 3",
 "output": "['010', '011', '101', '110', '111']",
 "notes": [],
 "best": "Build the string left to right. After a '0' only '1' may follow; after a '1' either digit. Collect the strings of length n and return them sorted.",
 "variants": [
  {
   "name": "Build strings, never place 0 after 0",
   "code": "class Solution:\n    def validStrings(self, n):\n        res = []\n        def go(cur):\n            if len(cur) == n:\n                res.append(cur)\n                return\n            go(cur + '1')\n            if not cur or cur[-1] == '1':\n                go(cur + '0')\n        go(\"\")\n        return sorted(res)",
   "time": "O(2ⁿ)",
   "space": "O(n)",
   "explain": "Build the string left to right. After a '0' only '1' may follow; after a '1' either digit. Collect the strings of length n and return them sorted.",
   "frames": []
  }
 ]
};
