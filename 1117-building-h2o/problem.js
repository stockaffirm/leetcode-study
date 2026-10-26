window.PROBLEM = {
 "id": "1117",
 "title": "Building H2O",
 "level": "Medium",
 "topic": "Design",
 "question": "You have two kinds of threads, hydrogen and oxygen, that call releaseHydrogen() or releaseOxygen() to output an 'H' or an 'O'. Threads start in any order, but water must be formed one molecule at a time: the output must be made of consecutive groups of three letters, each group containing exactly two H and one O (in any order), and a new molecule may start only after the previous three letters are output. Example: threads for H,H,H,H,O,O → outputs two molecules such as 'HHO' 'OHH'.",
 "why": "Hydrogen and oxygen threads arrive in any order; they must leave in groups of 2 hydrogens + 1 oxygen (one water molecule at a time).",
 "idea": "Allow at most 2 hydrogen and 1 oxygen threads into the 'room' (semaphores), and make the three wait for each other at a barrier. They release together, print, and only then let the next molecule's atoms in.",
 "input": "6 hydrogen threads and 3 oxygen threads",
 "output": "every group of three has 2 H and 1 O",
 "notes": [],
 "best": "Allow at most 2 hydrogen and 1 oxygen threads into the 'room' (semaphores), and make the three wait for each other at a barrier. They release together, print, and only then let the next molecule's atoms in.",
 "variants": [
  {
   "name": "Semaphores + a barrier of three",
   "code": "import threading\n\nclass H2O:\n    def __init__(self):\n        self.h = threading.Semaphore(2)\n        self.o = threading.Semaphore(1)\n        self.barrier = threading.Barrier(3)\n    def hydrogen(self, releaseHydrogen):\n        self.h.acquire()\n        self.barrier.wait()\n        releaseHydrogen()\n        self.h.release()\n    def oxygen(self, releaseOxygen):\n        self.o.acquire()\n        self.barrier.wait()\n        releaseOxygen()\n        self.o.release()",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Allow at most 2 hydrogen and 1 oxygen threads into the 'room' (semaphores), and make the three wait for each other at a barrier. They release together, print, and only then let the next molecule's atoms in.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Condition variable counting atoms",
   "tag": "Alternative",
   "code": "import threading\n\nclass H2O:\n    def __init__(self):\n        self.cv = threading.Condition()\n        self.h = self.o = 0\n    def _done(self):\n        if self.h == 2 and self.o == 1:\n            self.h = self.o = 0\n            self.cv.notify_all()\n    def hydrogen(self, releaseHydrogen):\n        with self.cv:\n            while self.h == 2: self.cv.wait()\n            self.h += 1\n            releaseHydrogen()\n            self._done()\n    def oxygen(self, releaseOxygen):\n        with self.cv:\n            while self.o == 1: self.cv.wait()\n            self.o += 1\n            releaseOxygen()\n            self._done()",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "One lock; each thread prints only if its kind's quota (2 H, 1 O) in the current molecule is not yet full, and the quota resets after three atoms.",
   "frames": [],
   "alt": true
  }
 ]
};
