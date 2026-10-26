window.PROBLEM = {
 "id": "451",
 "title": "Sort Characters By Frequency",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
