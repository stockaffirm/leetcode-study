window.PROBLEM = {
 "id": "792",
 "title": "Number of Matching Subsequences",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
