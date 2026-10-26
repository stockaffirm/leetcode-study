window.PROBLEM = {
 "id": "249",
 "title": "Group Shifted Strings",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Shifting a string means replacing every letter by the next letter in the alphabet ('z' becomes 'a'). Two strings belong to the same group if one can be shifted (any number of times) into the other. Group the given strings (any order of groups). Example: ['abc','bcd','acef','xyz','az','ba','a','z'] → [['abc','bcd','xyz'],['acef'],['az','ba'],['a','z']].",
 "why": "Two strings are in the same group if shifting every letter of one by the same amount (z wraps to a) gives the other. Group the strings.",
 "idea": "Strings in a group share the same differences between neighbouring letters (mod 26). Use that tuple as the dictionary key.",
 "input": "['abc','bcd','acef','xyz','az','ba','a','z']",
 "output": "[['abc','bcd','xyz'],['acef'],['az','ba'],['a','z']]",
 "notes": [],
 "best": "Strings in a group share the same differences between neighbouring letters (mod 26). Use that tuple as the dictionary key.",
 "variants": [
  {
   "name": "Group by the pattern of letter gaps",
   "code": "class Solution:\n    def groupStrings(self, strings):\n        groups = defaultdict(list)\n        for s in strings:\n            key = tuple((ord(s[i]) - ord(s[i - 1])) % 26 for i in range(1, len(s)))\n            groups[key].append(s)\n        return list(groups.values())",
   "time": "O(total letters)",
   "space": "O(total letters)",
   "explain": "Strings in a group share the same differences between neighbouring letters (mod 26). Use that tuple as the dictionary key.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Normalise by shifting the first letter to 'a'",
   "tag": "Alternative",
   "code": "class Solution:\n    def groupStrings(self, strings):\n        groups = defaultdict(list)\n        for s in strings:\n            shift = ord(s[0]) - 97\n            key = ''.join(chr((ord(c) - 97 - shift) % 26 + 97) for c in s)\n            groups[key].append(s)\n        return list(groups.values())",
   "time": "O(total letters)",
   "space": "O(total letters)",
   "explain": "Shift each string so it starts with 'a'; strings in the same group give the same text.",
   "frames": [],
   "alt": true
  }
 ]
};
