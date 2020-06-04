https://qiita.com/_-_-_-_-_/items/34f933adc7be875e61d0

Pythonで使う競技プログラミング用チートシート
Python
Python3
競技プログラミング
Pythonのカンニングペーパー
こんばんは。しゃもじです。
競技プログラミングでPythonメモを作成することにはまっているので、続々と投下していきます。
二番煎じですが、自分の辞書は自分で作らないと気が済まないタイプなのと、もっと詳しい人が追加でコメントしてくれることを期待して書いています。
忘れたらここをみてカンニングすべし

(追記) Pythonで競プロするときの注意点
未だにこの記事を読んでくださってる方もいらっしゃるようなので注意喚起すると、
基本的にPythonはバチクソ重いので、通らないときはC++で同じアルゴリズムを実装するとアッサリ通ることが多めです。
でもPython書きたいときは同じコードでpypy3で通すとかなり早く行くのでおすすめです。
詳細はこちら

入力
まず基本的なところから。input()は1行だけを取ってこれます(python2ではraw_input()らしい)

1行だけ取る
Input	script	結果
abcde	s=input()	s='abcde'
abcde	s=list(input())	s=['a', 'b', 'c', 'd', 'e']
5(1つだけ)	a=int(input())	a=5
1 2	x,y = map(int,input().split())	x=1,y=2
1 2 3 4 5 ... n 　	li = input().split()	li=['1','2','3',...,'n']
1 2 3 4 5 ... n 　	li = list(map(int,input().split()))	li=[1,2,3,4,5,...,n]
FFFTFTTFF 　	li = input().split('T')	li=['FFF', 'F', '', 'FF']
split(',')は,で区切ってリスト化の意味です。何も入れないとたぶんsplit(' ')と同じ効果だと思う ->split()は、スペース区切りのものを、スペース重複があっても空要素""を追加しない効果があります。
ちなみに、mapとかの組み込み系関数は、めっちゃ遅い場合があるので、調子に乗ってモリモリするとすぐTLE行きます

複数行を取る
パターン1
行数指定されるパターン

input.txt
3
hoge
foo
bar

input.py
n=int(input())
string_list=[input() for i in range(n)]
#string_list<-['hoge','foo','bar']
パターン2
行数指定されないパターン(AOJとかで見るやつ)

input.txt
1 2 2 3 1
4 5 3 4 1 2 3 4
2 3 5 6 0 2
C++だと軽くパニック起こしそうなレベルですが・・・try-exceptで解決しましょう。
tryと保険をかけておいて、Inputが読めなくて死んだ場合exceptに直行します。

1行だけで処理できるなら

input.py
while True:
    try:
        listA=list(map(int,input().split()))
        #listA<-[1,2,2,3,1]
        #ここに逐次処理を書けばいいと思う。
    except:
        break;
        #または、quit(),os.exit()をして止める。
複数行すべてあつめて処理したいなら

input.py
listA=[] #appendのために宣言が必要
while True:
    try:
        listA.append(list(map(int,input().split())))

    except:
        break;
        #または、quit(),os.exit()をして止める。

print(listA)
#[[1, 2, 2, 3, 1], [4, 5, 3, 4, 1, 2, 3, 4], [2, 3, 5, 6, 0, 2]]

出力
\nは改行の意味

Input	script	OutPut
s<-'hogehoge'	print(s)	hogehoge\n
s<-'hogehoge'	print(s,end='')	hogehoge
a<-1,b<-2	print(a/b)	0.5\n
a<-1,b<-2	print("%lf" % (a/b))	0.500000\n
a<-1,b<-2	print("%.1lf" % (a/b))	0.5\n
a<-1,b<-2	print(str(a/b)+'くらいかな')	0.5くらいかな\n
http://www.lifewithpython.com/2017/06/python-3-print.html
Python 3 の print() 関数の使い方

Strクラスそのものの機能でいろいろできるらしい。もっと詳しい説明はこちらのブログが良いかと。

小数点表示
format関数を使うと小数点表示をすることもできます。

a = 0.364364

print(a) #0.364364
print("{:.6f}".format(a)) #0.364364
print("{:.4f}".format(a)) #0.3644 小数点第4位に丸めることもできる。

b = 810

print("{:b}".format(b)) #1100101010  2進数表記 
print("{:o}".format(b)) #1452        8進数表記
print("{:x}".format(b)) #32a         16進数小文字表記
print("{:X}".format(b)) #32A         16進数大文字表記

ゼロ埋め・幅寄せ
稀にゼロ埋めを要求される場合があります。でもPythonならその対策も万全です。stringクラスのメソッドを使用します。

print("python".ljust(15,'-')) # 左詰め
#python---------
print("python".center(15,'-'))# 中央寄せ
#-----python----
print("python".rjust(15,'-')) # 右詰め
#---------python

print(str(29).rjust(10,'0')) #10桁ゼロ埋め
#0000000029
速攻テクニック
めっちゃ簡単な問題で我々は足踏みをしている暇などないのです。

二分探索
109109も二分探索しちゃえばO(30)程度です。

https://qiita.com/shamoji101/items/89e966df1c1764f70690

詳しくはこちら。

巨大なリストに存在する0以下の数字をすべて簡単に消す必要があるとき

input.py
import bisect
listA=[1,2,5,2,4,6,7,8,6,56,3,56,76,34,32,2,6,0,32,6,0,...] 
listA.sort()
zeroindex=bisect.bisect_right(listA,0) #ソートされたリスト内で0の場所を探し、右側Indexを返す
clearlistA=listA[zeroindex:]#0以下が存在しないリストを得る
このような形で、適宜二分探索することで、O(log2N)O(log2⁡N)の恩恵を受けましょう。

文字列操作
Pythonでやれば、複雑な文字列操作も速攻で突き崩せます。

基本
string.py
'abc123def'[:] #すべての文字列が取れる
#'abc123def'

'abc123def'[-1:] #終端文字がとれる
#'f'

'abc123def'[:-1] #最後の1文字以外のものがとれる。
#'abc123de'

'abc123def'[::-1] #文字が逆転する
#'fed321cba'


あと、細かいところは

https://qiita.com/tomotaka_ito/items/594ee1396cf982ba9887
Python文字列マスター(python2の記事)

なりで確認できます。（Python3で書き直してもいい気はする。)

正規表現
文字列検索における最強ツールといえば、やはり正規表現。

import re

s='hoge6hoge21foo:bar'
re.findall(r'[a-z]+',s) #['hoge', 'hoge', 'foo', 'bar']
re.findall(r'[a-z0-9]+',s) # ['hoge6hoge21foo', 'bar']

他にも使用例はいくらでもあるので、検索してみてください。（今後更新する予定）

リスト操作
基本
編集リクエスト

ストック

556
