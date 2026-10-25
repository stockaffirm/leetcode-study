const {lite}=require("./lib");
const C=s=>s.replace(/^\n/,"").replace(/\n$/,"").split("\n");
const ARR="Array / String",HM="Hash Map / Set",STK="Stack / Monotonic Stack",BT="Binary Tree",GR="Graph",HP="Heap",DP="Dynamic Programming",GD="Greedy",MB="Math / Bit Manipulation",BS="Binary Search",SRT="Sorting",SW="Sliding Window",MX="Matrix",UF="Union Find / Segment Tree",TP="Two Pointers",IV="Intervals",BTK="Backtracking",DS="Design",LL="Linked List",TR="Trie",PS="Prefix Sum";
// ---- Intel
lite({id:2526,slug:"find-consecutive-integers-from-a-data-stream",title:"Find Consecutive Integers from a Data Stream",level:"Medium",topic:DS,name:"Count the current run of the target value",
w:"DataStream(4, 3): after 4, 4, 4 the last three are all 4 → true; a 3 breaks the run.",k:"Keep a counter of how many equal-to-value integers have just arrived in a row: increase it when num == value, reset it to 0 otherwise. consec returns true when the counter is at least k.",
i:"DataStream(4,3); consec(4); consec(4); consec(4); consec(3)",o:"[False, False, True, False]",time:"O(1) per call",space:"O(1)",
code:C(`
class DataStream:
    def __init__(self, value, k):
        self.value = value
        self.k = k
        self.run = 0

    def consec(self, num):
        self.run = self.run + 1 if num == self.value else 0
        return self.run >= self.k
`)});
