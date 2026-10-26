window.PROBLEM = {
 "id": "2559",
 "title": "Count Vowel Strings in Ranges",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "For each query range [l, r] count the words that both start and end with a vowel.",
 "idea": "Mark each word 1 or 0 and take a running total. A range answer is the difference of two running totals.",
 "input": "[\"aba\",\"bcb\",\"ece\",\"aa\",\"e\"], queries [[0,2],[1,4],[1,1]]",
 "output": "[2, 3, 0]",
 "notes": [],
 "best": "Mark each word 1 or 0 and take a running total. A range answer is the difference of two running totals.",
 "variants": [
  {
   "name": "Prefix sums of 'starts and ends with a vowel'",
   "code": "class Solution:\n    def vowelStrings(self, words, queries):\n        pre = [0]\n        for w in words: pre.append(pre[-1] + (w[0] in 'aeiou' and w[-1] in 'aeiou'))\n        return [pre[r + 1] - pre[l] for l, r in queries]",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "Mark each word 1 or 0 and take a running total. A range answer is the difference of two running totals.",
   "frames": []
  }
 ]
};
