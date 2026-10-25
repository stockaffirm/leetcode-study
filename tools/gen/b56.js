const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- CrowdStrike
lite({id:3815,slug:"design-auction-system",title:"Design Auction System",level:"Medium",topic:DS,name:"Per-item max-heap with lazy deletion",
w:"Bids 5 and 6 on item 7: the highest bidder is user 2; user 1 raises to 8 and becomes the highest.",k:"Keep a dictionary (user, item) → current bid, and for each item a max-heap of (amount, userId). add and update push a new heap entry and overwrite the dictionary; remove deletes the dictionary entry. When asked for the highest bidder, discard heap tops that no longer match the dictionary (stale), then return the top's user (highest user id on ties) or −1.",
i:"addBid(1,7,5); addBid(2,7,6); getHighestBidder(7); updateBid(1,7,8); getHighestBidder(7); removeBid(2,7); getHighestBidder(7); removeBid(1,7); getHighestBidder(7)",o:"[None, None, 2, None, 1, None, 1, None, -1]",time:"O(log n) per call",space:"O(n)",
code:C(`
class AuctionSystem:
    def __init__(self):
        self.bid = {}
        self.heap = defaultdict(list)

    def addBid(self, userId, itemId, bidAmount):
        self.bid[(userId, itemId)] = bidAmount
        heappush(self.heap[itemId], (-bidAmount, -userId))

    def updateBid(self, userId, itemId, newAmount):
        self.addBid(userId, itemId, newAmount)

    def removeBid(self, userId, itemId):
        del self.bid[(userId, itemId)]

    def getHighestBidder(self, itemId):
        h = self.heap[itemId]
        while h:
            amount, user = h[0]
            if self.bid.get((-user, itemId)) == -amount:
                return -user
            heappop(h)
        return -1
`)});
