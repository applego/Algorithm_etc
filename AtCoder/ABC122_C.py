# -*- coding: utf-8 -*-

def main():
    N, Q = map(int,input().split())
    S = input()

    for i in range(Q):
        l, r = map(int,input().split())
        slicestr = S[l-1:r]
        print(slicestr.count('AC'))

main()