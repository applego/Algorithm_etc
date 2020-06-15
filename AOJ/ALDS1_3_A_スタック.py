# -*- coding: utf-8 -*-
from sys import stdin

inp = stdin.readline().rstrip().split()
stack = []

for i in inp:
    if i == '+':
        stack.append(stack.pop() + stack.pop())
    elif i == '-':
        stack.append((stack.pop() * -1) + stack.pop())
    elif i == '*':
        stack.append(stack.pop() * stack.pop())
    else:
        stack.append(int(i))
else:
    print(stack.pop())

#ALDS1_3_A_スタック

class Stack:
    def __init__(self, arg_size):
        self.size = arg_size
        self.stack = [None] * self.size
        self.head = 0
        self.tail = 0

    def is_empty(self):
        return self.tail == self.head

    def push(self, arg_obj):
        self.stack[self.tail] = arg_obj
        self.tail += 1

    def pop(self):
        self.tail -= 1
        return self.stack[self.tail]

    def top(self):
        return self.stack[self.head]

SIZE = 105
NUM = Stack(SIZE)

input_str = list(map(str, input().split()))

for i in range(len(input_str)):
    ch = input_str[i]
    if ch in ['+', '-', '*']:
        num_2 = NUM.pop()
        num_1 = NUM.pop()
        num = 0
        if ch == '+':
            num = num_1 + num_2
        elif ch == '-':
            num = num_1 - num_2
        elif ch == '*':
            num = num_1 * num_2
        NUM.push(num)
    else:
        NUM.push(int(ch))

print("%d"%(NUM.top()))