window.PROBLEM = {
 "id": "158",
 "title": "Read N Characters Given read4 II - Call Multiple Times",
 "level": "Hard",
 "topic": "Design",
 "question": "A file can only be read through read4(buf4), which copies up to 4 characters from the file into buf4 and returns how many it copied (fewer than 4 means the file ended). Build read(buf, n) that reads up to n characters of the file into buf and returns how many were read. read may be called many times on the same file and must continue where the last call stopped, even if read4 already fetched characters that the last call did not return. Example: file 'abcdefg': read(3) gives 'abc'; then read(5) gives 'defg' (4 characters, the file ends).",
 "why": "You can only read a file 4 characters at a time (read4). Build read(buf, n) that can be called again and again, never losing characters it read but didn't hand out.",
 "idea": "read4 may fetch more than you need. Keep the extra characters in a small queue and serve the next read() from the queue first.",
 "input": "file = \"abcdefg\"; read(3), read(5)",
 "output": "3 → \"abc\", 4 → \"defg\"",
 "notes": [],
 "best": "read4 may fetch more than you need. Keep the extra characters in a small queue and serve the next read() from the queue first.",
 "variants": [
  {
   "name": "Queue of leftover characters",
   "code": "class Solution:\n    def __init__(self):\n        self.q = deque()\n    def read(self, buf, n):\n        while len(self.q) < n:\n            tmp = [''] * 4\n            k = read4(tmp)\n            self.q.extend(tmp[:k])\n            if k < 4: break\n        cnt = min(n, len(self.q))\n        for i in range(cnt):\n            buf[i] = self.q.popleft()\n        return cnt",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "read4 may fetch more than you need. Keep the extra characters in a small queue and serve the next read() from the queue first.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Buffer with a read pointer",
   "tag": "Alternative",
   "code": "class Solution:\n    def __init__(self):\n        self.buf4 = [''] * 4\n        self.i = self.k = 0\n    def read(self, buf, n):\n        out = 0\n        while out < n:\n            if self.i == self.k:\n                self.k = read4(self.buf4)\n                self.i = 0\n                if self.k == 0: break\n            buf[out] = self.buf4[self.i]\n            out += 1\n            self.i += 1\n        return out",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Keep the 4-character buffer, an index into it and how many characters it holds.",
   "frames": [],
   "alt": true
  }
 ]
};
