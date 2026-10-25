window.PROBLEM = {
 "id": "451",
 "title": "Sort Characters By Frequency",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Sort the characters of a string by how often they appear, most frequent first; equal characters stay together and letters with the same count may be in any order. Upper and lower case are different. Example: 'tree' → 'eetr' (or 'eert').",
 "why": "'tree': e appears twice, so it goes first: 'ee' then 't' and 'r' → 'eetr' ('eert' is also accepted).",
 "idea": "Count the characters and write each one repeated by its count, from the most frequent to the least.",
 "input": "s = \"tree\"",
 "output": "\"eetr\" (or \"eert\")",
 "notes": [],
 "best": "Count the characters and write each one repeated by its count, from the most frequent to the least.",
 "variants": [
  {
   "name": "Count, then write the most frequent first",
   "code": "class Solution:\n    def frequencySort(self, s):\n        return \"\".join(ch * c for ch, c in Counter(s).most_common())",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Count the characters and write each one repeated by its count, from the most frequent to the least.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bucket by count",
   "tag": "Alternative",
   "code": "class Solution:\n    def frequencySort(self, s):\n        cnt = Counter(s)\n        buckets = defaultdict(list)\n        for ch, c in cnt.items():\n            buckets[c].append(ch * c)\n        res = []\n        for c in range(len(s), 0, -1):\n            res += buckets.get(c, [])\n        return \"\".join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Put each letter into the bucket of its count and read the buckets from the largest down.",
   "frames": [],
   "alt": true
  }
 ]
};
