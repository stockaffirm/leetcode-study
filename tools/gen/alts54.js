module.exports=({alt})=>{
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
// ---- Intel
alt(2526,{name:"Keep the last k numbers",tag:"Alternative",time:"O(k) per call",space:"O(k)",explain:"Store the last k integers in a deque and check that all of them equal value.",code:C(`
class DataStream:
    def __init__(self, value, k):
        self.value = value
        self.k = k
        self.window = deque(maxlen=k)

    def consec(self, num):
        self.window.append(num)
        return len(self.window) == self.k and all(x == self.value for x in self.window)
`)});
};
