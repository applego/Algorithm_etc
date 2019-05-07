# -*- coding: utf-8 -*-

def main():
    while True:
        N = int(input())
        if N == 0:
            break
        A = []
        for _i in range(N):
            A.append(int(input()))
        # print(' '.join(map(str,A)))
        # insertionSort(A,N)
        print(bubbleSort(A))

def bubbleSort(A):
    # print(' '.join(map(str,A)))
    j = len(A)
    bcnt = 0
    while j:
        for i in range(j-1):
            if A[i] > A[i+1]:
                A[i],A[i+1] = A[i+1],A[i]
                bcnt += 1
            else:
                break
        # print(' '.join(map(str,A)))        
        j -= 1
        # if j == 1:
        #     break
    return bcnt
            
def insertionSort(A,N):
    for i in range(1,len(A)):
        v = A[i]
        j = i-1
        while j >= 0 and A[j] > v:
            A[j+1] = A[j]
            j -= 1
        A[j+1] = v
        print(' '.join(map(str,A)))

main()
