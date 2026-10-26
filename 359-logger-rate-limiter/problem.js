window.PROBLEM = {
 "id": "359",
 "title": "Logger Rate Limiter",
 "level": "Easy",
 "topic": "Design",
 "question": "",
 "why": "A message may be printed only if the same message was not printed in the last 10 seconds.",
 "idea": "Keep a dictionary message → time it was last printed. Print (and update) only when there is no entry or at least 10 seconds have passed.",
 "input": "foo@1, bar@2, foo@3, bar@8, foo@10, foo@11",
 "output": "T, T, F, F, F, T",
 "notes": [],
 "best": "Keep a dictionary message → time it was last printed. Print (and update) only when there is no entry or at least 10 seconds have passed.",
 "variants": [
  {
   "name": "Remember the last print time",
   "code": "class Logger:\n    def __init__(self):\n        self.last = {}\n    def shouldPrintMessage(self, timestamp, message):\n        if message in self.last and timestamp - self.last[message] < 10: return False\n        self.last[message] = timestamp\n        return True",
   "time": "O(1)",
   "space": "O(messages)",
   "explain": "Keep a dictionary message → time it was last printed. Print (and update) only when there is no entry or at least 10 seconds have passed.",
   "frames": []
  }
 ]
};
