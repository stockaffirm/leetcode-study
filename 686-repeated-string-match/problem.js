window.PROBLEM = {
 "id": "686",
 "title": "Repeated String Match",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Return the minimum number of times the string a must be repeated (written one after another) so that the string b becomes a substring of the result, or −1 if that is impossible. Example: a 'abcd', b 'cdabcdab' → 3 ('abcdabcdabcd').",
 "why": "How many times must string a be repeated so that b is a substring of the result? (−1 if never)",
 "idea": "b needs at least ceil(len(b)/len(a)) copies; one more copy may be needed because b can start in the middle of a. If neither works, no number works.",
 "input": "a 'abcd', b 'cdabcdab'",
 "output": "3",
 "notes": [],
 "best": "b needs at least ceil(len(b)/len(a)) copies; one more copy may be needed because b can start in the middle of a. If neither works, no number works.",
 "variants": [
  {
   "name": "Repeat just enough times",
   "code": "class Solution:\n    def repeatedStringMatch(self, a, b):\n        times = -(-len(b) // len(a))\n        for k in (times, times + 1):\n            if b in a * k: return k\n        return -1",
   "time": "O(|a|·|b|)",
   "space": "O(|a|+|b|)",
   "explain": "b needs at least ceil(len(b)/len(a)) copies; one more copy may be needed because b can start in the middle of a. If neither works, no number works.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Grow until long enough, then test",
   "tag": "Brute force",
   "code": "class Solution:\n    def repeatedStringMatch(self, a, b):\n        s, k = a, 1\n        while len(s) < len(b):\n            s += a\n            k += 1\n        if b in s: return k\n        if b in s + a: return k + 1\n        return -1",
   "time": "O(|a|·|b|)",
   "space": "O(|a|+|b|)",
   "explain": "Add copies of a until the text is at least as long as b, then try one more.",
   "frames": [],
   "alt": true
  }
 ]
};
