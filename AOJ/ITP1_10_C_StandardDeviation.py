# -*- coding: utf-8 -*-
from sys import stdin
import math

while True:
    n = int(stdin.readline().rstrip())
    if n == 0:
        break
    l = list(map(int, stdin.readline().split()))
    s = 0
    for i in l:
        s += i
    m = s / n
    a = 0
    for i in l:
       a += math.pow((i - m),2)
    variance = a / n
    stdev = math.sqrt(variance)
    print('{0:.8f}'.format(stdev))

# ? question
    #TODO: TODO
    #!alert
    #//nana;sldkfjh
    #*aaaaaaaaaaaaa
