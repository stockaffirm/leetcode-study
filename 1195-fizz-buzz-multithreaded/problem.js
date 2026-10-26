window.PROBLEM = {
 "id": "1195",
 "title": "Fizz Buzz Multithreaded",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Four threads each print a different kind of line (Fizz, Buzz, FizzBuzz, or the number). Together they must print 1..n in the right order.",
 "idea": "Share a counter i. Each thread waits until i is a number it is responsible for, prints, increases i and wakes the others. A condition variable (wait / notify_all) coordinates the turns.",
 "input": "n = 15 with 4 threads",
 "output": "[1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz]",
 "notes": [],
 "best": "Share a counter i. Each thread waits until i is a number it is responsible for, prints, increases i and wakes the others. A condition variable (wait / notify_all) coordinates the turns.",
 "variants": [
  {
   "name": "Condition variable: one thread acts per number",
   "code": "import threading\n\nclass FizzBuzz:\n    def __init__(self, n):\n        self.n = n\n        self.i = 1\n        self.cv = threading.Condition()\n    def _run(self, matches, action):\n        while True:\n            with self.cv:\n                while self.i <= self.n and not matches(self.i):\n                    self.cv.wait()\n                if self.i > self.n:\n                    self.cv.notify_all()\n                    return\n                action(self.i)\n                self.i += 1\n                self.cv.notify_all()\n    def fizz(self, printFizz):\n        self._run(lambda i: i % 3 == 0 and i % 5 != 0, lambda i: printFizz())\n    def buzz(self, printBuzz):\n        self._run(lambda i: i % 5 == 0 and i % 3 != 0, lambda i: printBuzz())\n    def fizzbuzz(self, printFizzBuzz):\n        self._run(lambda i: i % 15 == 0, lambda i: printFizzBuzz())\n    def number(self, printNumber):\n        self._run(lambda i: i % 3 != 0 and i % 5 != 0, lambda i: printNumber(i))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Share a counter i. Each thread waits until i is a number it is responsible for, prints, increases i and wakes the others. A condition variable (wait / notify_all) coordinates the turns.",
   "frames": []
  }
 ]
};
