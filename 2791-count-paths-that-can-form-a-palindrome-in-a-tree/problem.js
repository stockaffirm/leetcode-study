window.PROBLEM = {
 "id": "2791",
 "title": "Count Paths That Can Form a Palindrome in a Tree",
 "level": "Hard",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "A tree's edges carry letters. Count the pairs of nodes (u, v) whose path's letters can be rearranged into a palindrome.",
 "idea": "A word can be rearranged into a palindrome when at most one letter has an odd count. Give every node a 26-bit mask of letter parities on its root path; the path mask of (u, v) is mask[u] XOR mask[v]. Count earlier nodes whose mask equals it or differs by one bit.",
 "input": "parent [-1,0,0,1,1,2], s 'acaabc'",
 "output": "8",
 "notes": [],
 "best": "A word can be rearranged into a palindrome when at most one letter has an odd count. Give every node a 26-bit mask of letter parities on its root path; the path mask of (u, v) is mask[u] XOR mask[v]. Count earlier nodes whose mask equals it or differs by one bit.",
 "variants": [
  {
   "name": "Bitmask of letter parity from the root",
   "code": "class Solution:\n    def countPalindromePaths(self, parent, s):\n        n = len(parent)\n        children = defaultdict(list)\n        for i in range(1, n): children[parent[i]].append(i)\n        mask = [0] * n\n        order, q = [], deque([0])\n        while q:\n            u = q.popleft()\n            order.append(u)\n            for v in children[u]:\n                mask[v] = mask[u] ^ (1 << (ord(s[v]) - 97))\n                q.append(v)\n        cnt = defaultdict(int)\n        ans = 0\n        for u in order:\n            m = mask[u]\n            ans += cnt[m]\n            for b in range(26): ans += cnt[m ^ (1 << b)]\n            cnt[m] += 1\n        return ans",
   "time": "O(26·n)",
   "space": "O(n)",
   "explain": "A word can be rearranged into a palindrome when at most one letter has an odd count. Give every node a 26-bit mask of letter parities on its root path; the path mask of (u, v) is mask[u] XOR mask[v]. Count earlier nodes whose mask equals it or differs by one bit.",
   "frames": []
  }
 ]
};
