window.PROBLEM = {
 "id": "1700",
 "title": "Number of Students Unable to Eat Lunch",
 "level": "Easy",
 "topic": "Queue",
 "question": "",
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
   "frames": []
  }
 ]
};
