window.PROBLEM = {
 "id": "1108",
 "title": "Defanging an IP Address",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Replace every '.' of an IP address by '[.]'. Example: '1.1.1.1' → '1[.]1[.]1[.]1'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Split and join",
   "tag": "Alternative",
   "code": "class Solution:\n    def defangIPaddr(self, address):\n        return \"[.]\".join(address.split(\".\"))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Cut the address at the dots and join the parts with '[.]'.",
   "frames": [],
   "alt": true
  }
 ]
};
