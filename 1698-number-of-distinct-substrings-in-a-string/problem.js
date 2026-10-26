window.PROBLEM = {
 "id": "1698",
 "title": "Number of Distinct Substrings in a String",
 "level": "Medium",
 "topic": "Trie",
 "question": "Return the number of different non-empty substrings of a string. Example: 'aabbaba' → 21.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Set of every substring",
   "tag": "Brute force",
   "code": "class Solution:\n    def countDistinct(self, s):\n        n = len(s)\n        return len({s[i:j] for i in range(n) for j in range(i + 1, n + 1)})",
   "time": "O(n³)",
   "space": "O(n³)",
   "explain": "Slice every substring and count the different ones.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Sorted suffixes minus common prefixes",
   "tag": "Alternative",
   "code": "class Solution:\n    def countDistinct(self, s):\n        n = len(s)\n        suf = sorted(s[i:] for i in range(n))\n        total = n * (n + 1) // 2\n        for a, b in zip(suf, suf[1:]):\n            l = 0\n            while l < len(a) and l < len(b) and a[l] == b[l]:\n                l += 1\n            total -= l\n        return total",
   "time": "O(n² log n)",
   "space": "O(n²)",
   "explain": "All substrings minus the ones repeated: neighbours in the sorted suffix list share their common prefix.",
   "frames": [],
   "alt": true
  }
 ]
};
