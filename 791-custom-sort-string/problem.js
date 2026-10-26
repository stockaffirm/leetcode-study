window.PROBLEM = {
 "id": "791",
 "title": "Custom Sort String",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
