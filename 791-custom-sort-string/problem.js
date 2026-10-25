window.PROBLEM = {
 "id": "791",
 "title": "Custom Sort String",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "order is a string of different letters. Rearrange the letters of s so that they follow the order of `order`: if x comes before y in order, x must come before y in the result. Letters of s that are not in order may be placed anywhere (this version puts them last). Example: order 'cba', s 'abcd' → 'cbad'.",
 "why": "order 'cba': c comes first, then b, then a. s = 'abcd' → 'cba' and the letter d, which is not in the order, goes at the end.",
 "idea": "Count the letters of s. Write each letter of `order` as many times as it was counted, in that order, then append whatever letters are left over.",
 "input": "order = \"cba\", s = \"abcd\"",
 "output": "\"cbad\"",
 "notes": [],
 "best": "Count the letters of s. Write each letter of `order` as many times as it was counted, in that order, then append whatever letters are left over.",
 "variants": [
  {
   "name": "Count letters, emit in the custom order",
   "code": "class Solution:\n    def customSortString(self, order, s):\n        cnt = Counter(s)\n        res = [ch * cnt.pop(ch, 0) for ch in order]\n        res += [ch * c for ch, c in cnt.items()]\n        return \"\".join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count the letters of s. Write each letter of `order` as many times as it was counted, in that order, then append whatever letters are left over.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort with a rank key",
   "tag": "Pythonic",
   "code": "class Solution:\n    def customSortString(self, order, s):\n        rank = {ch: i for i, ch in enumerate(order)}\n        return \"\".join(sorted(s, key=lambda c: rank.get(c, len(order))))",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort the letters by their position in order; letters not in order get the last rank (a stable sort keeps their order).",
   "frames": [],
   "alt": true
  }
 ]
};
