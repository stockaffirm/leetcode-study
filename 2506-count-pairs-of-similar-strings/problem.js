window.PROBLEM = {
 "id": "2506",
 "title": "Count Pairs Of Similar Strings",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "['aba','aabb','abcd','bac','aabc']: 'aba' & 'aabb' share {a,b}; 'bac' & 'aabc' share {a,b,c} → 2.",
 "idea": "Two words are similar when they use the same set of letters. Turn each word into a bitmask of its letters, count equal masks, and add c·(c−1)/2 for each group.",
 "input": "words = [\"aba\",\"aabb\",\"abcd\",\"bac\",\"aabc\"]",
 "output": "2",
 "notes": [],
 "best": "Two words are similar when they use the same set of letters. Turn each word into a bitmask of its letters, count equal masks, and add c·(c−1)/2 for each group.",
 "variants": [
  {
   "name": "Group words by their letter set",
   "code": "class Solution:\n    def similarPairs(self, words):\n        cnt = Counter()\n        res = 0\n        for w in words:\n            mask = 0\n            for c in w:\n                mask |= 1 << (ord(c) - 97)\n            res += cnt[mask]\n            cnt[mask] += 1\n        return res",
   "time": "O(total length)",
   "space": "O(n)",
   "explain": "Two words are similar when they use the same set of letters. Turn each word into a bitmask of its letters, count equal masks, and add c·(c−1)/2 for each group.",
   "frames": []
  }
 ]
};
