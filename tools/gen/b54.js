const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Mastercard
lite({id:749,slug:"contain-virus",title:"Contain Virus",level:"Hard",topic:MX,name:"Each night wall off the region that threatens the most",
w:"Two infected columns in a 4×8 grid: quarantining each costs 5 walls, total 10.",k:"Simulate night by night. Find every connected infected region (4-directional) and, for each, the set of uninfected cells it could spread to (its frontier) and the number of walls needed (region cell – uninfected neighbour pairs). Wall off the region with the biggest frontier (mark it quarantined and add its walls); every other region spreads into its frontier. Stop when no region threatens any cell.",
i:"isInfected = [[0,1,0,0,0,0,0,1],[0,1,0,0,0,0,0,1],[0,0,0,0,0,0,0,1],[0,0,0,0,0,0,0,0]]",o:"10",time:"O((m·n)²)",space:"O(m·n)",
code:C(`
class Solution:
    def containVirus(self, isInfected):
        g = isInfected
        m, n = len(g), len(g[0])
        walls = 0
        while True:
            seen = set()
            regions = []
            for i in range(m):
                for j in range(n):
                    if g[i][j] == 1 and (i, j) not in seen:
                        cells, front, perim = [], set(), 0
                        seen.add((i, j))
                        q = deque([(i, j)])
                        while q:
                            a, b = q.popleft()
                            cells.append((a, b))
                            for x, y in ((a + 1, b), (a - 1, b), (a, b + 1), (a, b - 1)):
                                if 0 <= x < m and 0 <= y < n:
                                    if g[x][y] == 1 and (x, y) not in seen:
                                        seen.add((x, y))
                                        q.append((x, y))
                                    elif g[x][y] == 0:
                                        front.add((x, y))
                                        perim += 1
                        regions.append((cells, front, perim))
            if not regions:
                break
            k = max(range(len(regions)), key=lambda t: len(regions[t][1]))
            if not regions[k][1]:
                break
            walls += regions[k][2]
            for a, b in regions[k][0]:
                g[a][b] = -1
            for t, (cells, front, perim) in enumerate(regions):
                if t != k:
                    for a, b in front:
                        g[a][b] = 1
        return walls
`)});
