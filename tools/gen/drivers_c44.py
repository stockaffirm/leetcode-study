# CrowdStrike
S = lambda call: "Solution()." + call
UNORD = set()
D = {
3815: "a = AuctionSystem()\nRESULT = [a.addBid(1,7,5), a.addBid(2,7,6), a.getHighestBidder(7), a.updateBid(1,7,8), a.getHighestBidder(7), a.removeBid(2,7), a.getHighestBidder(7), a.removeBid(1,7), a.getHighestBidder(7)]",
}
D2 = {
3815: ("a = AuctionSystem()\nRESULT = [a.addBid(1,3,10), a.addBid(5,3,10), a.getHighestBidder(3), a.getHighestBidder(9)]", "Equal bids: the larger user id wins; an item with no bids gives -1.", "tie on amount"),
}
