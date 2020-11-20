using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Common
{
	public class Sort
	{
		public class QuickSort_1
		{
			/// <summary>
			/// http://neue.cc/2009/09/30_206.html
			/// </summary>
			/// <typeparam name="T"></typeparam>
			/// <param name="source"></param>
			/// <returns></returns>
			public static IEnumerable<T> QuickSort<T>(IEnumerable<T> source)
				where T : IComparable<T>
			{
				var enumerator = source.GetEnumerator();
				if (!enumerator.MoveNext()) yield break;

				var pivot = enumerator.Current;
				var less = new List<T>();
				var equal = new List<T>();
				var greater = new List<T>();
				do
				{
					switch (enumerator.Current.CompareTo(pivot))
					{
						case -1: less.Add(enumerator.Current); break;
						case 0: equal.Add(enumerator.Current); break;
						case 1: greater.Add(enumerator.Current); break;
					}
				} while (enumerator.MoveNext());

				foreach (var item in QuickSort(less)) yield return item;
				foreach (var item in equal) yield return item;
				foreach (var item in QuickSort(greater)) yield return item;
			}
			/// <summary>
			/// LinqでHaskell風のクイックソート
			/// </summary>
			/// <typeparam name="T"></typeparam>
			/// <param name="source"></param>
			/// <returns></returns>
			public static IEnumerable<T> QuickSort_<T>(IEnumerable<T> source)
				where T : IComparable<T>
			{
				if (!source.Any()) return source;
				var pivot = source.First();
				return source
					.GroupBy(x => x.CompareTo(pivot))
					.OrderBy(g => g.Key) // OrderBy使うのはどうかなー、というところはある
					.SelectMany(g => (g.Key == 0) ? g : QuickSort_(g));
			}
		}
		/// <summary>
		/// 基本
		/// </summary>
		public class QuickSort_2
		{
			public static void QuickSort<T>(T[] array,int left,int right)where T : IComparable<T>
			{
				if (left < right)
				{
					//ピボット決定（配列の先頭、真ん中、末尾の3つの値の中央値とする
					T pivot = Median(array[left], array[(left + (right - left) / 2)], array[right]);

					int l = left;
					int r = right;

					//ピボットを中心に、分ける
					while (true)
					{
						//ピボットより小さいデータのインデックスを見つける
						while (array[l].CompareTo(pivot) < 0) l++;
						//ピボットより大きいデータのインデックスを見つける
						while (array[r].CompareTo(pivot) > 0) r--;
						//見つかったインデックスの大小が逆転していれば、終了
						if (l >= r) break;

						//見つかった要素を交換
						Swap(ref array[l], ref array[r]);

						l++;r--;
					}
					//左右に分けた配列を再帰的にソート
					QuickSort(array, left, l - 1);
					QuickSort(array, r + 1, right);
				}
			}

			//3つの値の中央値を返す
			public static T Median<T>(T x,T y,T z)where T : IComparable<T>
			{
				if (x.CompareTo(y) < 0)
				{
					return x.CompareTo(z) < 0 ? (y.CompareTo(z) < 0 ? y : z) : x;
				}
				else
				{
					return y.CompareTo(z) < 0 ? (x.CompareTo(z) < 0 ? x : z) : y;
				}
			}

			public static void Swap<T>(ref T a,ref T b)
			{
				var tmp = a;
				a = b;
				b = tmp;
			}
		}

		public class BucketSort
		{
			/// <summary>
			/// // 整数値(0～max)のバケットソート
			/// </summary>
			/// <param name="array"></param>
			/// <param name="max"></param>
			public static void BucketSort_(int[] array)
            {
                int max = array.Max();

                // 整数値のソートなので、数値を入れるのではなく
                // データの個数をカウントする用のバケツを用意
                int[] bucket = new int[max + 1];

                // バケツに値を入れます
                for (int i = 0; i < array.Length; i++)
                {
                    // 対象のバケツの個数をカウントアップ
                    bucket[array[i]]++;
                }

                // バケツ中の値を結合します
                for (int j = 0, i = 0; j < bucket.Length; j++)
                {
                    for (int k = bucket[j]; k != 0; k--, i++)
                    {
                        array[i] = j;
                    }
                }
            }
			///<summary>整数値をキー(0～max)とする任意の型に対するバケットソート</summary>
			public static void BucketSort_<T>(T[]array,Func<T,int>getKey,int max)
			{
				//バケット作成
				var buckets = new List<T>[max + 1];

				//バケットに値を入れる
				foreach(var item in array)
				{
					//ソート対象データのキー（整数値）を取得
					int key = getKey(item);
					if (buckets[key] == null) buckets[key] = new List<T>();
					buckets[key].Add(item);
				}

				//バケット内の値の結合
				int i = 0;
				foreach(var bucket in buckets)
				{
					if (bucket != null)
					{
						foreach(T val in bucket)
						{
							array[i++] = val;
						}
					}
				}
			}
		}
	}
}
