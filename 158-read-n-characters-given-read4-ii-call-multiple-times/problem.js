window.PROBLEM = {
 "id": "158",
 "title": "Read N Characters Given read4 II - Call Multiple Times",
 "level": "Hard",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
