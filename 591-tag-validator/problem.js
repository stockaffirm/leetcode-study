window.PROBLEM = {
 "id": "591",
 "title": "Tag Validator",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'<DIV>This is the first line <![CDATA[<div>]]></DIV>' → true.",
 "idea": "The code must be one valid closed tag wrapping everything. Scan left to right with a stack: at '<![CDATA[' skip to the matching ']]>' (only inside a tag); at '</' read a name and pop (it must match the stack top); at '<' read an upper-case name of length 1–9 and push; other text is fine inside a tag. The stack must be empty at the end and never empty before the end.",
 "input": "code = \"<DIV>This is the first line <![CDATA[<div>]]></DIV>\"",
 "output": "true",
 "notes": [],
 "best": "The code must be one valid closed tag wrapping everything. Scan left to right with a stack: at '<![CDATA[' skip to the matching ']]>' (only inside a tag); at '</' read a name and pop (it must match the stack top); at '<' read an upper-case name of length 1–9 and push; other text is fine inside a tag. The stack must be empty at the end and never empty before the end.",
 "variants": [
  {
   "name": "Scan with a stack of open tag names",
   "code": "class Solution:\n    def isValid(self, code):\n        stack = []\n        i = 0\n        n = len(code)\n        def name_end(j):\n            k = j\n            while k < n and 'A' <= code[k] <= 'Z':\n                k += 1\n            return k\n        while i < n:\n            if i > 0 and not stack:\n                return False\n            if code.startswith(\"<![CDATA[\", i):\n                j = code.find(\"]]>\", i)\n                if j == -1 or not stack:\n                    return False\n                i = j + 3\n            elif code.startswith(\"</\", i):\n                k = name_end(i + 2)\n                if k >= n or code[k] != '>' or not stack or code[i + 2:k] != stack.pop():\n                    return False\n                i = k + 1\n            elif code[i] == '<':\n                k = name_end(i + 1)\n                if k >= n or code[k] != '>' or not (1 <= k - i - 1 <= 9):\n                    return False\n                stack.append(code[i + 1:k])\n                i = k + 1\n            else:\n                if not stack:\n                    return False\n                i += 1\n        return not stack",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The code must be one valid closed tag wrapping everything. Scan left to right with a stack: at '<![CDATA[' skip to the matching ']]>' (only inside a tag); at '</' read a name and pop (it must match the stack top); at '<' read an upper-case name of length 1–9 and push; other text is fine inside a tag. The stack must be empty at the end and never empty before the end.",
   "frames": []
  }
 ]
};
