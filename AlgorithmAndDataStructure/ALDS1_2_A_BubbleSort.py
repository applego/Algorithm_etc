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

def bubbleSort(list):
    # print(' '.join(map(str,list)))
    j = len(list)-1
    bcnt = 0
    while j:
        for i in range(j):
            if list[i] > list[i+1]:
                list[i],list[i+1] = list[i+1],list[i]
                bcnt += 1
            else:
                break
        # print(' '.join(map(str,A)))        
        j -= 1
        # if j == 1:
        #     break
    return bcnt


#↓これはOK why?
# def bSort(list):
#   j = len(list) - 1
#   bcnt = 0
#   while j:
#     for i in range(j):
#       if list[i] > list[i + 1]:
#         list[i], list[i + 1] = list[i + 1], list[i]
#         bcnt += 1
#     j -= 1
#   return bcnt
  
# while True:
#   n = int(input())
#   if n == 0:
#     break
#   A = []
#   for _ in range(n):
#     A.append(int(input()))
#   print(bSort(A))
#↑これはOK

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
