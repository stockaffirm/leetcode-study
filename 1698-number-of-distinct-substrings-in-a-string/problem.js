window.PROBLEM = {
 "id": "1698",
 "title": "Number of Distinct Substrings in a String",
 "level": "Medium",
 "topic": "Trie",
 "question": "",
 "why": "'aabbaba' has 28 substrings in total, but 7 of them are repeats, leaving 21 different ones.",
 "idea": "Every substring is a prefix of some suffix. Insert all suffixes into a trie: each NEW node created is one new distinct substring.",
 "input": "s = \"aabbaba\"",
 "output": "21",
 "notes": [],
 "best": "Every substring is a prefix of some suffix. Insert all suffixes into a trie: each NEW node created is one new distinct substring.",
 "variants": [
  {
   "name": "Insert every suffix into a trie",
   "code": "class Solution:\n    def countDistinct(self, s):\n        root = {}\n        cnt = 0\n        for i in range(len(s)):\n            node = root\n            for ch in s[i:]:\n                if ch not in node:\n                    node[ch] = {}\n                    cnt += 1\n                node = node[ch]\n        return cnt",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Every substring is a prefix of some suffix. Insert all suffixes into a trie: each NEW node created is one new distinct substring.",
   "frames": []
  }
 ]
};
