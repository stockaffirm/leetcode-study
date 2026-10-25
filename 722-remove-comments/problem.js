window.PROBLEM = {
 "id": "722",
 "title": "Remove Comments",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Source code is given as a list of lines. // starts a comment to the end of the line; /* starts a comment that ends at the next */ (it may span several lines). Remove all comments and return the remaining lines; lines that end up empty are dropped, and if a block comment starts in the middle of one line and ends in the middle of another, the remaining parts join into one line. Example: ['a/*comment','line','more_comment*/b'] → ['ab'].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Regular expression on the whole text",
   "tag": "Pythonic",
   "code": "import re\n\nclass Solution:\n    def removeComments(self, source):\n        text = '\\n'.join(source)\n        text = re.sub(r'//.*|/\\*[\\s\\S]*?\\*/', '', text)\n        return [line for line in text.split('\\n') if line]",
   "time": "O(total chars)",
   "space": "O(total chars)",
   "explain": "Join the lines, delete the comments with one pattern, split again and drop the empty lines.",
   "frames": [],
   "alt": true
  }
 ]
};
