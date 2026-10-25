# Citadel
S = lambda call: "Solution()." + call
UNORD = set()
D = {
1801: S("getNumberOfBacklogOrders([[10,5,0],[15,2,1],[25,1,1],[30,4,0]])"),
1515: S("getMinDistSum([[0,1],[1,0],[1,2],[2,1]])"),
2361: S("minimumCosts([1,6,9,5],[5,2,3,10],8)"),
3186: S("maximumTotalDamage([1,1,3,4])"),
2661: S("firstCompleteIndex([1,3,4,2],[[1,4],[2,3]])"),
4069: S("maxProfit([1,5,3],1,[0,1,2])"),
1632: S("matrixRankTransform([[1,2],[3,4]])"),
2958: S("maxSubarrayLength([1,2,3,1,2,3,1,2],2)"),
1155: S("numRollsToTarget(2,6,7)"),
935: S("knightDialer(2)"),
}
D2 = {
1801: (S("getNumberOfBacklogOrders([[7,1000000000,1],[15,3,0],[5,999999995,0],[5,1,1]])"), "Large amounts, taken modulo 1e9+7.", "huge amounts"),
1515: (S("getMinDistSum([[1,1],[3,3]])"), "Any point on the segment: 2.82843.", "two points"),
2361: (S("minimumCosts([11,5,13],[7,10,6],3)"), "Express pays off after the first stop.", "second sample"),
3186: (S("maximumTotalDamage([7,1,6,6])"), "Cast 1, 6, 6 = 13.", "repeated value"),
2661: (S("firstCompleteIndex([2,8,7,4,1,3,5,6,9],[[3,2,5],[1,4,6],[8,7,9]])"), "Column 1 completes at index 3.", "3×3"),
4069: (S("maxProfit([1,2,3,4],0,[0,1,2,3])"), "Buy-sell pairs are limited by the fees.", "fees"),
1632: (S("matrixRankTransform([[7,7],[7,7]])"), "All equal → all rank 1.", "all equal"),
2958: (S("maxSubarrayLength([5,5,5,5,5,5,5],4)"), "At most four 5s.", "one value"),
1155: (S("numRollsToTarget(30,30,500)"), "Large DP.", "large"),
935: (S("knightDialer(3131)"), "Large n.", "large n"),
}
