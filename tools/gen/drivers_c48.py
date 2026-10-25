# Pinterest
S = lambda call: "Solution()." + call
UNORD = set()
D = {
1055: S("shortestWay('abc','abcbc')"),
2302: S("countSubarrays([2,1,4,3,5],10)"),
720: S("longestWord(['a','banana','app','appl','ap','apply','apple'])"),
1723: S("minimumTimeRequired([1,2,4,7,8],2)"),
1580: S("maxBoxesInWarehouse([1,2,2,3,4],[3,4,1,2])"),
1564: S("maxBoxesInWarehouse([4,3,4,1],[5,3,3,4,1])"),
}
D2 = {
1055: (S("shortestWay('abc','acdbc')"), "'d' is not in the source.", "impossible"),
2302: (S("countSubarrays([1,1,1],5)"), "Only windows of length 1 and 2 fit.", "all ones"),
720: (S("longestWord(['w','wo','wor','worl','world'])"), "Every prefix exists.", "single chain"),
1723: (S("minimumTimeRequired([3,2,3],3)"), "One job each.", "one per worker"),
1580: (S("maxBoxesInWarehouse([3,5,5,2],[2,1,3,4,5])"), "Boxes from both ends.", "five rooms"),
1564: (S("maxBoxesInWarehouse([1,2,2,3,4],[3,4,1,2])"), "Only 3 can pass the low room.", "left only"),
}
