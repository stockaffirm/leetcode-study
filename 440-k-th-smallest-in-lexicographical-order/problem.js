window.PROBLEM = {
 "id": "440",
 "title": "K-th Smallest in Lexicographical Order",
 "level": "Hard",
 "topic": "Trie",
 "question": "",
 "why": "n=13: order is 1, 10, 11, 12, 13, 2, 3 … so the 2nd is 10.",
 "idea": "Think of the numbers as a 10-ary trie. Start at prefix 1 with k−1 steps left. For the current prefix count how many numbers ≤ n lie in its subtree; if that count is ≤ the steps left, skip the entire subtree (move to prefix+1), otherwise go one level down (prefix × 10, one step used).",
 "input": "n = 13, k = 2",
 "output": "10",
 "notes": [],
 "best": "Think of the numbers as a 10-ary trie. Start at prefix 1 with k−1 steps left. For the current prefix count how many numbers ≤ n lie in its subtree; if that count is ≤ the steps left, skip the entire subtree (move to prefix+1), otherwise go one level down (prefix × 10, one step used).",
 "variants": [
  {
   "name": "Skip whole prefixes by counting their subtree sizes",
   "code": "class Solution:\n    def findKthNumber(self, n, k):\n        cur = 1\n        k -= 1\n        while k > 0:\n            count, a, b = 0, cur, cur + 1\n            while a <= n:\n                count += min(n + 1, b) - a\n                a *= 10\n                b *= 10\n            if count <= k:\n                cur += 1\n                k -= count\n            else:\n                cur *= 10\n                k -= 1\n        return cur",
   "time": "O(log²n)",
   "space": "O(1)",
   "explain": "Think of the numbers as a 10-ary trie. Start at prefix 1 with k−1 steps left. For the current prefix count how many numbers ≤ n lie in its subtree; if that count is ≤ the steps left, skip the entire subtree (move to prefix+1), otherwise go one level down (prefix × 10, one step used).",
   "frames": []
  }
 ]
};
