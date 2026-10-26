window.PROBLEM = {
 "id": "1108",
 "title": "Defanging an IP Address",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "'1.1.1.1' becomes '1[.]1[.]1[.]1'.",
 "idea": "Replace every '.' by '[.]'.",
 "input": "address = \"1.1.1.1\"",
 "output": "\"1[.]1[.]1[.]1\"",
 "notes": [],
 "best": "Replace every '.' by '[.]'.",
 "variants": [
  {
   "name": "Replace each dot",
   "code": "class Solution:\n    def defangIPaddr(self, address):\n        return address.replace(\".\", \"[.]\")",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Replace every '.' by '[.]'.",
   "frames": []
  }
 ]
};
