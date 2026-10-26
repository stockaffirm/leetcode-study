window.PROBLEM = {
 "id": "911",
 "title": "Online Election",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "votes at times [0,5,10,15,20] for persons [0,1,1,0,0]: at t=3 the leader is 0, at t=12 it is 1.",
 "idea": "Process the votes once in time order, tracking counts and the current leader (ties go to the most recent voter). Store the leader after each vote. A query q(t) binary searches the last vote time ≤ t and returns the stored leader.",
 "input": "TopVotedCandidate([0,1,1,0,0,1,0], [0,5,10,15,20,25,30]); q(3); q(12); q(25); q(15); q(24); q(8)",
 "output": "[0, 1, 1, 0, 0, 1]",
 "notes": [],
 "best": "Process the votes once in time order, tracking counts and the current leader (ties go to the most recent voter). Store the leader after each vote. A query q(t) binary searches the last vote time ≤ t and returns the stored leader.",
 "variants": [
  {
   "name": "Leader timeline + binary search",
   "code": "class TopVotedCandidate:\n    def __init__(self, persons, times):\n        self.times = times\n        self.lead = []\n        cnt = Counter()\n        best = -1\n        for p in persons:\n            cnt[p] += 1\n            if best == -1 or cnt[p] >= cnt[best]:\n                best = p\n            self.lead.append(best)\n\n    def q(self, t):\n        return self.lead[bisect_right(self.times, t) - 1]",
   "time": "O(log n) per query",
   "space": "O(n)",
   "explain": "Process the votes once in time order, tracking counts and the current leader (ties go to the most recent voter). Store the leader after each vote. A query q(t) binary searches the last vote time ≤ t and returns the stored leader.",
   "frames": []
  }
 ]
};
