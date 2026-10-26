window.PROBLEM = {
 "id": "1117",
 "title": "Building H2O",
 "level": "Medium",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
