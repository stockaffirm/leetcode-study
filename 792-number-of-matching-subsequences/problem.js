window.PROBLEM = {
 "id": "792",
 "title": "Number of Matching Subsequences",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Count how many words in the list are subsequences of the string s (letters in order, not necessarily next to each other; duplicates in the list count separately). Example: s 'abcde', words ['a','bb','acd','ace'] → 3.",
 "why": "How many of the words are subsequences of s?",
 "idea": "Put every word in a bucket under the letter it is waiting for. Walk through s once: for each letter move that bucket's words forward one letter (words that finish are counted).",
 "input": "s 'abcde', words ['a','bb','acd','ace']",
 "output": "3",
 "notes": [],
 "best": "Put every word in a bucket under the letter it is waiting for. Walk through s once: for each letter move that bucket's words forward one letter (words that finish are counted).",
 "variants": [
  {
   "name": "Waiting lists by next needed letter",
   "code": "class Solution:\n    def numMatchingSubseq(self, s, words):\n        waiting = defaultdict(list)\n        for w in words: waiting[w[0]].append(iter(w[1:]))\n        count = 0\n        for ch in s:\n            bucket, waiting[ch] = waiting[ch], []\n            for it in bucket:\n                nxt = next(it, None)\n                if nxt is None: count += 1\n                else: waiting[nxt].append(it)\n        return count",
   "time": "O(|s| + Σ|word|)",
   "space": "O(Σ|word|)",
   "explain": "Put every word in a bucket under the letter it is waiting for. Walk through s once: for each letter move that bucket's words forward one letter (words that finish are counted).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Check every word with find",
   "tag": "Brute force",
   "code": "class Solution:\n    def numMatchingSubseq(self, s, words):\n        count = 0\n        for w in words:\n            pos = -1\n            for ch in w:\n                pos = s.find(ch, pos + 1)\n                if pos < 0: break\n            else: count += 1\n        return count",
   "time": "O(Σ|word|·|s|)",
   "space": "O(1)",
   "explain": "Look for the letters of each word in s one after another.",
   "frames": [],
   "alt": true
  }
 ]
};
