window.PROBLEM = {
 "id": "3815",
 "title": "Design Auction System",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Bids 5 and 6 on item 7: the highest bidder is user 2; user 1 raises to 8 and becomes the highest.",
 "idea": "Keep a dictionary (user, item) → current bid, and for each item a max-heap of (amount, userId). add and update push a new heap entry and overwrite the dictionary; remove deletes the dictionary entry. When asked for the highest bidder, discard heap tops that no longer match the dictionary (stale), then return the top's user (highest user id on ties) or −1.",
 "input": "addBid(1,7,5); addBid(2,7,6); getHighestBidder(7); updateBid(1,7,8); getHighestBidder(7); removeBid(2,7); getHighestBidder(7); removeBid(1,7); getHighestBidder(7)",
 "output": "[None, None, 2, None, 1, None, 1, None, -1]",
 "notes": [],
 "best": "Keep a dictionary (user, item) → current bid, and for each item a max-heap of (amount, userId). add and update push a new heap entry and overwrite the dictionary; remove deletes the dictionary entry. When asked for the highest bidder, discard heap tops that no longer match the dictionary (stale), then return the top's user (highest user id on ties) or −1.",
 "variants": [
  {
   "name": "Per-item max-heap with lazy deletion",
   "code": "class AuctionSystem:\n    def __init__(self):\n        self.bid = {}\n        self.heap = defaultdict(list)\n\n    def addBid(self, userId, itemId, bidAmount):\n        self.bid[(userId, itemId)] = bidAmount\n        heappush(self.heap[itemId], (-bidAmount, -userId))\n\n    def updateBid(self, userId, itemId, newAmount):\n        self.addBid(userId, itemId, newAmount)\n\n    def removeBid(self, userId, itemId):\n        del self.bid[(userId, itemId)]\n\n    def getHighestBidder(self, itemId):\n        h = self.heap[itemId]\n        while h:\n            amount, user = h[0]\n            if self.bid.get((-user, itemId)) == -amount:\n                return -user\n            heappop(h)\n        return -1",
   "time": "O(log n) per call",
   "space": "O(n)",
   "explain": "Keep a dictionary (user, item) → current bid, and for each item a max-heap of (amount, userId). add and update push a new heap entry and overwrite the dictionary; remove deletes the dictionary entry. When asked for the highest bidder, discard heap tops that no longer match the dictionary (stale), then return the top's user (highest user id on ties) or −1.",
   "frames": []
  }
 ]
};
