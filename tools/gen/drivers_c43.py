# Cisco
S = lambda call: "Solution()." + call
UNORD = set()
RT = "r = Router(3)\nRESULT = [r.addPacket(1,4,90), r.addPacket(2,5,90), r.addPacket(1,4,90), r.addPacket(3,5,95), r.addPacket(4,5,105), r.forwardPacket(), r.addPacket(5,2,110), r.getCount(5,100,110)]"
D = {
3508: RT,
2081: S("kMirror(2,5)"),
2067: S("equalCountSubstrings('aaabcbbcc',3)"),
3047: S("largestSquareArea([[1,1],[2,2],[3,1]],[[3,3],[4,4],[6,6]])"),
1784: S("checkOnesSegment('1001')"),
3648: S("minSensors(5,5,1)"),
2016: S("maximumDifference([7,1,5,4])"),
486: S("predictTheWinner([1,5,2])"),
646: S("findLongestChain([[1,2],[2,3],[3,4]])"),
}
D2 = {
3508: ("r = Router(2)\nRESULT = [r.addPacket(7,4,90), r.forwardPacket(), r.forwardPacket()]", "Forward returns the only packet, then an empty list.", "forward from empty"),
2081: (S("kMirror(3,7)"), "The seven smallest sum to 499.", "base 3"),
2067: (S("equalCountSubstrings('abcd',2)"), "No letter appears twice.", "none"),
3047: (S("largestSquareArea([[1,1],[2,2],[1,2]],[[3,3],[4,4],[3,4]])"), "The overlap is 2 wide but only 1 tall, so the square has side 1.", "bigger square"),
1784: (S("checkOnesSegment('110')"), "One segment.", "single segment"),
3648: (S("minSensors(2,2,2)"), "One sensor covers all.", "big k"),
2016: (S("maximumDifference([9,4,3,2])"), "Strictly decreasing.", "no pair"),
486: (S("predictTheWinner([1,5,233,7])"), "Player 1 takes 1 then 233.", "player 1 wins"),
646: (S("findLongestChain([[1,2],[7,8],[4,5]])"), "All three can be chained.", "unsorted"),
}
