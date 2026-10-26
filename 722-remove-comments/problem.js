window.PROBLEM = {
 "id": "722",
 "title": "Remove Comments",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Source code lines may contain // line comments and /* … */ block comments (which can span lines). Return the code with all comments removed (empty lines are dropped).",
 "idea": "Scan character by character with a flag 'inside a block comment'. Outside a block: '/*' starts one, '//' ends the line, otherwise keep the character. Emit a line when the scan of a line ends outside a block and the line is not empty.",
 "input": "['a/*comment','line','more_comment*/b']",
 "output": "['ab']",
 "notes": [],
 "best": "Scan character by character with a flag 'inside a block comment'. Outside a block: '/*' starts one, '//' ends the line, otherwise keep the character. Emit a line when the scan of a line ends outside a block and the line is not empty.",
 "variants": [
  {
   "name": "Line scanner with a block-comment state",
   "code": "class Solution:\n    def removeComments(self, source):\n        res, buf, block = [], [], False\n        for line in source:\n            i = 0\n            while i < len(line):\n                two = line[i:i + 2]\n                if block:\n                    if two == '*/':\n                        block = False\n                        i += 1\n                elif two == '/*':\n                    block = True\n                    i += 1\n                elif two == '//': break\n                else: buf.append(line[i])\n                i += 1\n            if not block and buf:\n                res.append(''.join(buf))\n                buf = []\n        return res",
   "time": "O(total chars)",
   "space": "O(total chars)",
   "explain": "Scan character by character with a flag 'inside a block comment'. Outside a block: '/*' starts one, '//' ends the line, otherwise keep the character. Emit a line when the scan of a line ends outside a block and the line is not empty.",
   "frames": []
  }
 ]
};
