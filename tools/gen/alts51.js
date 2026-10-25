module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Mastercard
alt(749,{name:"Iterative DFS for each region",tag:"Alternative",time:"O((m·n)²)",space:"O(m·n)",explain:"Same night-by-night simulation, with a stack to explore each region and a per-region wall counter.",code:C(`
class Solution:
    def containVirus(self, isInfected):
        g = isInfected
        m, n = len(g), len(g[0])
        total = 0
        while True:
            visited = [[False] * n for _ in range(m)]
            info = []
            for i in range(m):
                for j in range(n):
                    if g[i][j] == 1 and not visited[i][j]:
                        visited[i][j] = True
                        st = [(i, j)]
                        cells, front, walls = [], set(), 0
                        while st:
                            a, b = st.pop()
                            cells.append((a, b))
                            for x, y in ((a - 1, b), (a + 1, b), (a, b - 1), (a, b + 1)):
                                if 0 <= x < m and 0 <= y < n:
                                    if g[x][y] == 0:
                                        walls += 1
                                        front.add((x, y))
                                    elif g[x][y] == 1 and not visited[x][y]:
                                        visited[x][y] = True
                                        st.append((x, y))
                        info.append((len(front), walls, cells, front))
            if not info:
                break
            best = max(range(len(info)), key=lambda t: info[t][0])
            if info[best][0] == 0:
                break
            total += info[best][1]
            for a, b in info[best][2]:
                g[a][b] = -1
            for t, item in enumerate(info):
                if t != best:
                    for a, b in item[3]:
                        g[a][b] = 1
        return total
`)});
};
