# -*- coding: utf-8 -*-

def ans(km):
    if km < 0.1:
        print("00")
    elif 0.1 <= km and km <= 5:
        val = km * 10
        printVV(val)
    elif 6 <= km and km <= 30:
        printVV(km+50)
    elif 35 <= km and km <= 70:
        val = (km - 30) / 5 + 80
        printVV(val)
    elif 70 < km:
        print("89")

def printVV(val):
    sval = str(int(val))
    print(sval.zfill(2))

if __name__ == '__main__':
    m = float(input())
    km = m / 1000
    ans(km)