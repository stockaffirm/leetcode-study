window.PROBLEM = {
 "id": "893",
 "title": "Groups of Special-Equivalent Strings",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A move swaps two letters at EVEN positions or two letters at ODD positions of a word. Words are special-equivalent if one can become the other with some moves. Return the number of groups of special-equivalent words. Example: ['abcd','cdab','cbad','xyzz','zzxy','zzyx'] → 3.",
 "why": "'abcd' and 'cdab' can be turned into each other by swapping letters at even positions and at odd positions, so they are in one group; the words fall into 3 groups.",
 "idea": "A swap of two letters at positions of the same parity keeps the multiset of even-position letters and of odd-position letters. So two words are equivalent exactly when these two sorted lists are equal — count the distinct signatures.",
 "input": "words = [\"abcd\",\"cdab\",\"cbad\",\"xyzz\",\"zzxy\",\"zzyx\"]",
 "output": "3",
 "notes": [],
 "best": "A swap of two letters at positions of the same parity keeps the multiset of even-position letters and of odd-position letters. So two words are equivalent exactly when these two sorted lists are equal — count the distinct signatures.",
 "variants": [
  {
   "name": "Signature = sorted even letters + sorted odd letters",
   "code": "class Solution:\n    def numSpecialEquivGroups(self, words):\n        return len({(\"\".join(sorted(w[0::2])), \"\".join(sorted(w[1::2]))) for w in words})",
   "time": "O(n·L log L)",
   "space": "O(n·L)",
   "explain": "A swap of two letters at positions of the same parity keeps the multiset of even-position letters and of odd-position letters. So two words are equivalent exactly when these two sorted lists are equal — count the distinct signatures.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Group words by their signature",
   "tag": "Alternative",
   "code": "class Solution:\n    def numSpecialEquivGroups(self, words):\n        groups = defaultdict(list)\n        for w in words:\n            key = (tuple(sorted(w[0::2])), tuple(sorted(w[1::2])))\n            groups[key].append(w)\n        return len(groups)",
   "time": "O(n·L log L)",
   "space": "O(n·L)",
   "explain": "Put words with equal (even letters, odd letters) signatures into the same bucket and count the buckets.",
   "frames": [],
   "alt": true
  }
 ]
};
