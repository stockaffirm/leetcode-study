window.PROBLEM = {
 "id": "157",
 "title": "Read N Characters Given Read4",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A file can only be read with read4(buf4), which copies up to 4 characters into buf4 and returns how many it copied (0 at the end of the file). Implement read(buf, n): read at most n characters of the file into buf and return how many were read. Example: file 'abc', n=4 → returns 3 and buf starts 'abc'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Read everything, then cut",
   "tag": "Alternative",
   "code": "class Solution:\n    def read(self, buf, n):\n        data = []\n        tmp = [''] * 4\n        while True:\n            c = read4(tmp)\n            data += tmp[:c]\n            if c < 4: break\n        take = min(n, len(data))\n        buf[:take] = data[:take]\n        return take",
   "time": "O(file)",
   "space": "O(file)",
   "explain": "Read the entire file with read4 first, then copy n characters.",
   "frames": [],
   "alt": true
  }
 ]
};
