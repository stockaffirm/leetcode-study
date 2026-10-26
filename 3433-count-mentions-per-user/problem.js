window.PROBLEM = {
 "id": "3433",
 "title": "Count Mentions Per User",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "Users 0,1: message mentions both, user 0 goes offline for a minute, then HERE at time 71 reaches both → [2,2].",
 "idea": "Sort events by time; at the same time OFFLINE events come before MESSAGE events. Remember the time each user comes back online (offline time + 60). A message with 'id…' tokens increases each mentioned id (duplicates count), 'ALL' increases everyone, 'HERE' increases only users who are online at that time.",
 "input": "numberOfUsers = 2, events = [[\"MESSAGE\",\"10\",\"id1 id0\"],[\"OFFLINE\",\"11\",\"0\"],[\"MESSAGE\",\"71\",\"HERE\"]]",
 "output": "[2, 2]",
 "notes": [],
 "best": "Sort events by time; at the same time OFFLINE events come before MESSAGE events. Remember the time each user comes back online (offline time + 60). A message with 'id…' tokens increases each mentioned id (duplicates count), 'ALL' increases everyone, 'HERE' increases only users who are online at that time.",
 "variants": [
  {
   "name": "Process events in time order, offline first",
   "code": "class Solution:\n    def countMentions(self, numberOfUsers, events):\n        cnt = [0] * numberOfUsers\n        back = [0] * numberOfUsers\n        for typ, ts, s in sorted(events, key=lambda e: (int(e[1]), e[0] == \"MESSAGE\")):\n            t = int(ts)\n            if typ == \"OFFLINE\":\n                back[int(s)] = t + 60\n            elif s == \"ALL\":\n                for u in range(numberOfUsers):\n                    cnt[u] += 1\n            elif s == \"HERE\":\n                for u in range(numberOfUsers):\n                    if back[u] <= t:\n                        cnt[u] += 1\n            else:\n                for tok in s.split():\n                    cnt[int(tok[2:])] += 1\n        return cnt",
   "time": "O(e log e + e·n)",
   "space": "O(n)",
   "explain": "Sort events by time; at the same time OFFLINE events come before MESSAGE events. Remember the time each user comes back online (offline time + 60). A message with 'id…' tokens increases each mentioned id (duplicates count), 'ALL' increases everyone, 'HERE' increases only users who are online at that time.",
   "frames": []
  }
 ]
};
