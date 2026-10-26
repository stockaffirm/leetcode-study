window.PROBLEM = {
 "id": "1700",
 "title": "Number of Students Unable to Eat Lunch",
 "level": "Easy",
 "topic": "Queue",
 "question": "Students stand in a queue and sandwiches lie in a stack (0 = circular, 1 = square). The front student takes the top sandwich if they prefer its type, otherwise goes to the back of the queue. Return the number of students who never get a sandwich. Example: students [1,1,0,0], sandwiches [0,1,0,1] → 0.",
 "why": "students [1,1,0,0], sandwiches [0,1,0,1] → everyone eats → 0.",
 "idea": "Students rotate until someone takes the top sandwich. Only the counts matter: while the top sandwich has a remaining student who wants that type, serve it; when none do, the rest of the students are stuck.",
 "input": "students = [1,1,0,0], sandwiches = [0,1,0,1]",
 "output": "0",
 "notes": [],
 "best": "Students rotate until someone takes the top sandwich. Only the counts matter: while the top sandwich has a remaining student who wants that type, serve it; when none do, the rest of the students are stuck.",
 "variants": [
  {
   "name": "Count preferences; stop when the top sandwich is unwanted",
   "code": "class Solution:\n    def countStudents(self, students, sandwiches):\n        cnt = Counter(students)\n        for s in sandwiches:\n            if cnt[s] == 0:\n                return sum(cnt.values())\n            cnt[s] -= 1\n        return 0",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Students rotate until someone takes the top sandwich. Only the counts matter: while the top sandwich has a remaining student who wants that type, serve it; when none do, the rest of the students are stuck.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate with a queue",
   "tag": "Brute force",
   "code": "class Solution:\n    def countStudents(self, students, sandwiches):\n        q = deque(students)\n        i = 0\n        stuck = 0\n        while q and stuck < len(q) and i < len(sandwiches):\n            if q[0] == sandwiches[i]:\n                q.popleft()\n                i += 1\n                stuck = 0\n            else:\n                q.append(q.popleft())\n                stuck += 1\n        return len(q)",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Rotate the queue until nobody wants the top sandwich.",
   "frames": [],
   "alt": true
  }
 ]
};
