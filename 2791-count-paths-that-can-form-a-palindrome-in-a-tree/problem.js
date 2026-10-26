window.PROBLEM = {
 "id": "2791",
 "title": "Count Paths That Can Form a Palindrome in a Tree",
 "level": "Hard",
 "topic": "Hash Map / Set",
 "question": "A tree is rooted at node 0; parent[i] is the parent of node i and s[i] is the letter written on the edge between i and its parent. Count the pairs of nodes (u, v) with u < v such that the letters on the path between them can be rearranged to form a palindrome. Example: parent [−1,0,0,1,1,2], s 'acaabc' → 8.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Walk the path of every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def countPalindromePaths(self, parent, s):\n        n = len(parent)\n        depth = [0] * n\n        for i in range(1, n):\n            d, u = 0, i\n            while u != 0:\n                u = parent[u]\n                d += 1\n            depth[i] = d\n        def path_mask(u, v):\n            m = 0\n            while u != v:\n                if depth[u] >= depth[v]:\n                    m ^= 1 << (ord(s[u]) - 97)\n                    u = parent[u]\n                else:\n                    m ^= 1 << (ord(s[v]) - 97)\n                    v = parent[v]\n            return m\n        return sum(1 for u in range(n) for v in range(u + 1, n) if bin(path_mask(u, v)).count('1') <= 1)",
   "time": "O(n²·h)",
   "space": "O(n)",
   "explain": "For each pair climb to the common ancestor collecting the letters, and test the parity.",
   "frames": [],
   "alt": true
  }
 ]
};
