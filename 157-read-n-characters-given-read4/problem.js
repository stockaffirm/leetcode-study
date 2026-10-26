window.PROBLEM = {
 "id": "157",
 "title": "Read N Characters Given Read4",
 "level": "Easy",
 "topic": "Array / String",
 "question": "",
 "why": "A file can only be read 4 characters at a time with read4(buf4). Implement read(buf, n) that reads up to n characters into buf and returns how many were read.",
 "idea": "Call read4 repeatedly, copy only as many characters as are still needed, and stop at n or at the end of the file.",
 "input": "file 'abc', n = 4",
 "output": "3 ('abc')",
 "notes": [],
 "best": "Call read4 repeatedly, copy only as many characters as are still needed, and stop at n or at the end of the file.",
 "variants": [
  {
   "name": "Loop over read4 chunks",
   "code": "class Solution:\n    def read(self, buf, n):\n        total = 0\n        tmp = [''] * 4\n        while total < n:\n            c = read4(tmp)\n            if c == 0: break\n            take = min(c, n - total)\n            buf[total:total + take] = tmp[:take]\n            total += take\n        return total",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Call read4 repeatedly, copy only as many characters as are still needed, and stop at n or at the end of the file.",
   "frames": []
  }
 ]
};
