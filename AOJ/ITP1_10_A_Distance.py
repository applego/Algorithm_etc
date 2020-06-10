# -*- coding: utf-8 -*-
from sys import stdin
import math
# 0 0 1 1

A = list(map(float, stdin.readline().split()))
x1, y1, x2, y2 = A[0], A[1], A[2], A[3]

distance = math.sqrt(math.pow(x2-x1, 2) + math.pow(y2-y1,2))
print(format(distance,'.8f'))


# ? question
    #TODO: TODO
    #!alert
    #//nana;sldkfjh
    #*aaaaaaaaaaaaa
