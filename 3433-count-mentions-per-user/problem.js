window.PROBLEM = {
 "id": "3433",
 "title": "Count Mentions Per User",
 "level": "Medium",
 "topic": "Array / String",
 "question": "numberOfUsers users start online. An event is either ['MESSAGE', time, mentions] where mentions is 'ALL', 'HERE' (online users) or a list like 'id1 id0' (duplicates count), or ['OFFLINE', time, id] which takes that user offline for 60 time units (back online at time+60). At equal times OFFLINE events are processed first. Return the number of mentions of each user. Example: 2 users, [['MESSAGE','10','id1 id0'],['OFFLINE','11','0'],['MESSAGE','71','HERE']] → [2,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Replay with explicit online flags",
   "tag": "Alternative",
   "code": "class Solution:\n    def countMentions(self, numberOfUsers, events):\n        cnt = [0] * numberOfUsers\n        online = [True] * numberOfUsers\n        wake = {}\n        for typ, ts, s in sorted(events, key=lambda e: (int(e[1]), e[0] == \"MESSAGE\")):\n            t = int(ts)\n            for u in list(wake):\n                if wake[u] <= t:\n                    online[u] = True\n                    del wake[u]\n            if typ == \"OFFLINE\":\n                u = int(s)\n                online[u] = False\n                wake[u] = t + 60\n            elif s == \"ALL\":\n                cnt = [c + 1 for c in cnt]\n            elif s == \"HERE\":\n                cnt = [c + 1 if online[u] else c for u, c in enumerate(cnt)]\n            else:\n                for tok in s.split():\n                    cnt[int(tok[2:])] += 1\n        return cnt",
   "time": "O(e·n)",
   "space": "O(n)",
   "explain": "Process events in order; before each message restore users whose 60 minutes are over.",
   "frames": [],
   "alt": true
  }
 ]
};
