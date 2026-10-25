module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- CrowdStrike
alt(3815,{name:"Dictionary per item, scan for the best",tag:"Brute force",time:"O(bids on item) per query",space:"O(n)",explain:"Keep item → {user: amount} and take the maximum on every query.",code:C(`
class AuctionSystem:
    def __init__(self):
        self.items = defaultdict(dict)

    def addBid(self, userId, itemId, bidAmount):
        self.items[itemId][userId] = bidAmount

    def updateBid(self, userId, itemId, newAmount):
        self.items[itemId][userId] = newAmount

    def removeBid(self, userId, itemId):
        del self.items[itemId][userId]

    def getHighestBidder(self, itemId):
        d = self.items[itemId]
        if not d:
            return -1
        return max(d, key=lambda u: (d[u], u))
`)});
};
