# -*- coding: utf-8 -*-
import bisect
a=[1,3,5,7,9,11,13,15,17,19]
x=4

insert_index = bisect.bisect_left(a,x)

"""
insert_index=2
"""

a.insert(insert_index,x)

print(a)
"""
Out[1]:[1,3,4,5,7,9,11,13,15,17,19]
"""

listA = [1,2,5,2,4,6,7,8,6,56,3,56,76,34,32,2,6,0,32,6,0,...] 
listA.sort()
zeroindex=bisect.bisect_right(listA,0) #ソートされたリスト内で0の場所を探し、右側Indexを返す
clearlistA=listA[zeroindex:]#0以下が存在しないリストを得る
