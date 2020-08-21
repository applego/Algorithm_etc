# -*- coding: utf-8 -*-
from sys import stdin

class DoublyLinkedList:
    def __init__(self):
        self.doubly_linked_list = []

    def execute(self,cmd, key):
        if cmd == 'insert':
            self.insert(key)
        elif cmd == 'delete':
            self.delete(key)
        elif cmd == 'deleteFirst':
            self.delete_by_index(0)
        elif cmd == 'deleteLast':
            self.delete_by_index(-1)
        else:
            print("invalid cmd")

    def insert(self, x):
        self.doubly_linked_list.insert(0, x)

    def delete(self, x):
        if x in self.doubly_linked_list:
            self.doubly_linked_list.remove(x)

    def delete_by_index(self, index):
        self.doubly_linked_list.pop(index)


# n = int(stdin.readline().rstrip())
# obj_dll = DoublyLinkedList()
# for i in range(n):
#     input_str=stdin.readline().rstrip().split()
#     cmd = input_str[0]
#     x = input_str[1] if len(input_str)>1 else None
#     obj_dll.execute(cmd,x)
# else:
#     print(*obj_dll.doubly_linked_list)

#listは先頭の養鱒対する削除や追加は処理速度が遅いらしい
#dequeは両端以外の要素へのアクセスは遅い

# -*- coding: utf-8 -*-
from sys import stdin
import collections

class DoublyLinkedList_deque:
    def __init__(self):
        self.doubly_linked_list = collections.deque()

    def execute(self,cmd, key):
        if cmd == 'insert':
            self.doubly_linked_list.appendleft(key)
        elif cmd == 'delete':
            try:
                self.doubly_linked_list.remove(key)
            except:
                pass
        elif cmd == 'deleteFirst':
            self.doubly_linked_list.popleft()
        elif cmd == 'deleteLast':
            self.doubly_linked_list.pop()
        else:
            print("invalid cmd")

n = int(stdin.readline().rstrip())
obj_dll = DoublyLinkedList_deque()
for i in range(n):
    input_str=stdin.readline().rstrip().split()
    cmd = input_str[0]
    x = input_str[1] if len(input_str)>1 else None
    obj_dll.execute(cmd,x)
else:
    print(*obj_dll.doubly_linked_list)
