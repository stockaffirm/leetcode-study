window.PROBLEM = {
 "id": "1497",
 "title": "Check If Array Pairs Are Divisible by k",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,3,4,5,10,6,7,8,9], k=5 → true.",
 "idea": "Pairs add up to a multiple of k when remainders r and k − r match up. Count the remainders: the count of remainder r must equal the count of k − r; remainder 0 (and k/2 for even k) must appear an even number of times.",
 "input": "arr = [1,2,3,4,5,10,6,7,8,9], k = 5",
 "output": "true",
 "notes": [],
 "best": "Pairs add up to a multiple of k when remainders r and k − r match up. Count the remainders: the count of remainder r must equal the count of k − r; remainder 0 (and k/2 for even k) must appear an even number of times.",
 "variants": [
  {
   "name": "Remainder counts must mirror each other",
   "code": "class Solution:\n    def canArrange(self, arr, k):\n        cnt = Counter(x % k for x in arr)\n        if cnt[0] % 2:\n            return False\n        for r in range(1, k):\n            if r == k - r:\n                if cnt[r] % 2:\n                    return False\n            elif cnt[r] != cnt[k - r]:\n                return False\n        return True",
   "time": "O(n)",
   "space": "O(k)",
   "explain": "Pairs add up to a multiple of k when remainders r and k − r match up. Count the remainders: the count of remainder r must equal the count of k − r; remainder 0 (and k/2 for even k) must appear an even number of times.",
   "frames": []
  }
 ]
};
