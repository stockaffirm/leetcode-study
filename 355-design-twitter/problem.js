window.PROBLEM = {
 "id": "355",
 "title": "Design Twitter",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Users post tweets, follow/unfollow others, and see a news feed of the 10 most recent tweets from themselves and the people they follow.",
 "idea": "Store each user's tweets with a global timestamp. For a feed, merge the newest tweets of all followees with a max-heap, pulling the next older tweet of whoever was just used, until 10 are found.",
 "input": "post, feed, follow, post, feed, unfollow, feed",
 "output": "[5], [6,5], [5]",
 "notes": [],
 "best": "Store each user's tweets with a global timestamp. For a feed, merge the newest tweets of all followees with a max-heap, pulling the next older tweet of whoever was just used, until 10 are found.",
 "variants": [
  {
   "name": "Heap merge of followees' tweets",
   "code": "class Twitter:\n    def __init__(self):\n        self.t = 0\n        self.tweets = defaultdict(list)\n        self.follows = defaultdict(set)\n    def postTweet(self, userId, tweetId):\n        self.t += 1\n        self.tweets[userId].append((self.t, tweetId))\n    def getNewsFeed(self, userId):\n        heap = []\n        for f in self.follows[userId] | {userId}:\n            if self.tweets[f]:\n                i = len(self.tweets[f]) - 1\n                t, tid = self.tweets[f][i]\n                heap.append((-t, tid, f, i))\n        heapify(heap)\n        res = []\n        while heap and len(res) < 10:\n            _, tid, f, i = heappop(heap)\n            res.append(tid)\n            if i > 0:\n                t2, tid2 = self.tweets[f][i - 1]\n                heappush(heap, (-t2, tid2, f, i - 1))\n        return res\n    def follow(self, followerId, followeeId):\n        self.follows[followerId].add(followeeId)\n    def unfollow(self, followerId, followeeId):\n        self.follows[followerId].discard(followeeId)",
   "time": "feed O(f + 10 log f)",
   "space": "O(n)",
   "explain": "Store each user's tweets with a global timestamp. For a feed, merge the newest tweets of all followees with a max-heap, pulling the next older tweet of whoever was just used, until 10 are found.",
   "frames": []
  }
 ]
};
