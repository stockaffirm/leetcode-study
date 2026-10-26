window.PROBLEM = {
 "id": "1195",
 "title": "Fizz Buzz Multithreaded",
 "level": "Medium",
 "topic": "Design",
 "question": "A class FizzBuzz(n) has four methods, each run by its own thread at the same time: fizz(printFizz), buzz(printBuzz), fizzbuzz(printFizzBuzz) and number(printNumber). Together the four threads must output the numbers 1 to n in order, but each position is printed by only ONE thread: 'Fizz' for multiples of 3 only, 'Buzz' for multiples of 5 only, 'FizzBuzz' for multiples of both, and the plain number for the rest. The threads must take turns so that the output order is correct. Example: n=15 → 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Semaphores that pass the baton",
   "tag": "Alternative",
   "code": "import threading\n\nclass FizzBuzz:\n    def __init__(self, n):\n        self.n = n\n        self.i = 1\n        self.sem = {k: threading.Semaphore(0) for k in ('fizz', 'buzz', 'fizzbuzz')}\n        self.num = threading.Semaphore(1)\n        self.done = threading.Event()\n    def _kind(self, i):\n        return 'fizzbuzz' if i % 15 == 0 else 'fizz' if i % 3 == 0 else 'buzz' if i % 5 == 0 else 'num'\n    def _advance(self):\n        self.i += 1\n        if self.i > self.n:\n            self.done.set()\n            for s in self.sem.values(): s.release()\n            self.num.release()\n            return\n        k = self._kind(self.i)\n        (self.num if k == 'num' else self.sem[k]).release()\n    def fizz(self, printFizz):\n        while True:\n            self.sem['fizz'].acquire()\n            if self.done.is_set(): return\n            printFizz()\n            self._advance()\n    def buzz(self, printBuzz):\n        while True:\n            self.sem['buzz'].acquire()\n            if self.done.is_set(): return\n            printBuzz()\n            self._advance()\n    def fizzbuzz(self, printFizzBuzz):\n        while True:\n            self.sem['fizzbuzz'].acquire()\n            if self.done.is_set(): return\n            printFizzBuzz()\n            self._advance()\n    def number(self, printNumber):\n        while True:\n            self.num.acquire()\n            if self.done.is_set(): return\n            printNumber(self.i)\n            self._advance()",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Instead of one shared condition, give each thread a semaphore; the 'number' thread coordinates and wakes exactly the thread whose turn it is.",
   "frames": [],
   "alt": true
  }
 ]
};
