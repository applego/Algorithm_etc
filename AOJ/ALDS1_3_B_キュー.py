# -*- coding: utf-8 -*-
from sys import stdin

class Queue:
    def __init__(self, process_list,quontime):
        self.process_list = process_list
        self.quontime = quontime
        self.elapsed_time = 0

    def process_done(self, process):
        process.update_leavetime_mili_seconds(process.leavetime_mili_seconds)
        print("{} {}".format(process.name,self.elapsed_time))

    def execute(self):
        while len(self.process_list) > 0:
            target_process = self.process_list.pop(0)
            if target_process.leavetime_mili_seconds <= self.quontime:
                self.elapsed_time += target_process.leavetime_mili_seconds
                self.process_done(target_process)
            else:
                self.elapsed_time += self.quontime
                target_process.update_leavetime_mili_seconds(self.quontime)
                self.process_list.append(target_process)

class Process:
    def __init__(self, arg_name,leavetime_mili_seconds):
        self.name = arg_name
        self.leavetime_mili_seconds = leavetime_mili_seconds
        # self.is_done = False

    def update_leavetime_mili_seconds(self, shori_time):
        self.leavetime_mili_seconds -= shori_time


n, q = map(int,stdin.readline().rstrip().split())
process_list = []
for i in range(n):
    input_t = stdin.readline().rstrip().split()
    process_list.append(Process(input_t[0], int(input_t[1])))
queue = Queue(process_list, q)
queue.execute()