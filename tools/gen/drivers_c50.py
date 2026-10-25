# Roblox
S = lambda call: "Solution()." + call
UNORD = set()
D = {
1434: S("numberWays([[3,4],[4,5],[5]])"),
1282: S("groupThePeople([3,3,3,3,3,1,3])"),
811: S("subdomainVisits(['9001 discuss.leetcode.com'])"),
1419: S("minNumberOfFrogs('crcoakroak')"),
1878: S("getBiggestThree([[3,4,5,1,3],[3,3,4,2,3],[20,30,200,40,10],[1,5,5,4,1],[4,3,2,2,5]])"),
}
D2 = {
1434: (S("numberWays([[3,5,1],[3,5]])"), "Four ways.", "overlapping hats"),
1282: (S("groupThePeople([2,1,3,3,3,2])"), "Three groups.", "mixed sizes"),
811: (S("subdomainVisits(['900 google.mail.com','50 yahoo.com','1 intel.mail.com','5 wiki.org'])"), "Counts add up on shared parents.", "several domains"),
1419: (S("minNumberOfFrogs('croakcroak')"), "One frog croaks twice.", "one frog"),
1878: (S("getBiggestThree([[7,7,7]])"), "Only one distinct sum.", "single value"),
}
