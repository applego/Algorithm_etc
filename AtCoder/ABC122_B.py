# -*- coding: utf-8 -*-

def main():
    b = input()

    maxcnt = 0
    scnt = 0
    for c in b:
        if(c=='A' or c=='C' or c=='G' or c=='T'):
            scnt += 1
        else:
            if(maxcnt<scnt):
                maxcnt=scnt
            scnt = 0

    print(max(scnt,maxcnt))

main()