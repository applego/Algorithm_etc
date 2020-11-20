using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace paiza3.Common
{
	class FileControl
	{

		public static string ConvertEncoding(string src, System.Text.Encoding destEnc)
		{
			byte[] src_temp = System.Text.Encoding.ASCII.GetBytes(src);
			byte[] dest_temp = System.Text.Encoding.Convert(System.Text.Encoding.ASCII, destEnc, src_temp);
			string ret = destEnc.GetString(dest_temp);
			return ret;
		}
		public static void ExecConvertEncoding()
		{
			try
			{


				string filepathSrc = @"D:\workDdrive\タスク\サントリー指標化\20190711_キー指定入替、インポートテスト\CampaignAnalyze_UserMaster_20190711.csv";
				string filepathDest = @"D:\workDdrive\タスク\サントリー指標化\20190711_キー指定入替、インポートテスト\CampaignAnalyze_UserMaster_20190711_shiftJIS.csv";

				Encoding encSrc = Encoding.UTF8;
				Encoding encDest = Encoding.GetEncoding("Shift_JIS");

				string str = "";
				using (StreamReader sr = new StreamReader(filepathSrc, encSrc))
				{
					str = sr.ReadToEnd();
				}

				using (StreamWriter sw = new StreamWriter(filepathDest, true, encDest))
				{
					sw.Write(str);
				}
			}
			catch (Exception ex)
			{
				Console.WriteLine("ex");
			}
		}

		public static void ExecConvertEncodingByFileStream()
		{
			string filepathSrc = @"D:\workDdrive\タスク\サントリー指標化\20190711_キー指定入替、インポートテスト\CampaignAnalyze_UserMaster_20190711.csv";
			string filepathDest = @"D:\workDdrive\タスク\サントリー指標化\20190711_キー指定入替、インポートテスト\CampaignAnalyze_UserMaster_20190711_shiftJIS.csv";

			Encoding encSrc = Encoding.UTF8;
			Encoding encDest = Encoding.GetEncoding("Shift_JIS");

			encsrcToencdest(filepathSrc, filepathDest, encSrc, encDest);
		}

		// 分割サイズ
		private const int DIV_BYTE = 1024 * 1024 * 1024;
		//private const int DIV_BYTE = 20971520;//20MB

		// 読込バッファサイズ
		private const int READ_BYTE = DIV_BYTE / 10;
		private const string FILE_NAME = @"D:\workDdrive\タスク\サントリー指標化\20190711_キー指定入替、インポートテスト\CampaignAnalyze_UserMaster_20190711.csv";
		public static void button1_Click()
		{
			// 分割元ファイルを開く
			using (FileStream rf = new FileStream(FILE_NAME, FileMode.Open, FileAccess.Read))
			{
				int readByte = 0;
				int divCount = 0;
				long leftByte = rf.Length;
				byte[] readBuf = new byte[READ_BYTE];
				// 分割バイト数と読込バイト数から読込マップを作成
				List<int> readMap = new List<int>();
				for (int i = 0; i < DIV_BYTE / READ_BYTE; i++)
				{
					readMap.Add(READ_BYTE);
				}
				if (DIV_BYTE % READ_BYTE > 0)
				{
					readMap.Add(DIV_BYTE % READ_BYTE);
				}
				// 読込が終わるまで繰り返す
				while (leftByte > 0)
				{
					// 分割ファイル名を取得
					string divNm = FILE_NAME + (++divCount).ToString();
					// 分割ファイルを開く
					using (FileStream wf = new FileStream(divNm, FileMode.Create, FileAccess.Write))
					{
						foreach (int mapByte in readMap)
						{
							// 分割元ファイルから読み込む
							readByte = rf.Read(readBuf, 0, (int)Math.Min(mapByte, leftByte));

							//UTF-8⇒Sjis
							Encoding utf8Enc = Encoding.GetEncoding("UTF-8");
							string utf8str = utf8Enc.GetString(readBuf);
							readBuf =
								System.Text.Encoding.GetEncoding("Shift_JIS").GetBytes(utf8str);


							// 分割ファイルに書きこむ
							wf.Write(readBuf, 0, readByte);
							// 読込情報の設定
							leftByte -= readByte;
							if (leftByte == 0) break;
						}
					}
				}
			}
		}
		// 分割ファイルを結合
		private void button2_Click(object sender, EventArgs e)
		{
			// 分割ファイルをリストアップ
			List<string> divFiles = new List<string>();
			divFiles.Add(@"C:\hoge.bin1");
			divFiles.Add(@"C:\hoge.bin2");
			divFiles.Add(@"C:\hoge.bin3");
			// 結合先ファイルを開く
			using (FileStream wf = new FileStream(FILE_NAME + "_new", FileMode.Create, FileAccess.Write))
			{
				int readByte = 0;
				long leftByte = 0;
				byte[] readBuf = new byte[READ_BYTE];
				foreach (string divFile in divFiles)
				{
					// 分割ファイルを開く
					using (FileStream rf = new FileStream(divFile, FileMode.Open, FileAccess.Read))
					{
						leftByte = rf.Length;
						while (leftByte > 0)
						{
							// 分割ファイルから読み込む
							readByte = rf.Read(readBuf, 0, (int)Math.Min(READ_BYTE, leftByte));
							// 結合先ファイルに書きこむ
							wf.Write(readBuf, 0, readByte);
							// 読込情報の設定
							leftByte -= readByte;
						}
					}
				}
			}
		}

		// UTF8 -> Shift-JIS 変換
		public static int encsrcToencdest(string fname1, string fname2, Encoding encsrc, Encoding encdest)
		{
			// ※既存ファイルへの上書きチェック等は別途行ってください

			readSplit(fname1);

			// ファイルをbyte形で全て読み込み
			FileStream fs1 = new FileStream(fname1, FileMode.Open);
			byte[] data = new byte[fs1.Length];
			fs1.Read(data, 0, data.Length);
			fs1.Close();

			// UTF-8 -> Shift-JIS 変換（byte形）
			//Encoding utf8Enc = Encoding.GetEncoding("UTF-8");
			string utf8str = encsrc.GetString(data);
			byte[] bytesData =
				System.Text.Encoding.GetEncoding("Shift_JIS").GetBytes(utf8str);

			// string型に変換したい場合はこんな感じに
			// Encoding sjisEnc = Encoding.GetEncoding("Shift-JIS");
			// string sjis = sjisEnc.GetString(bytesData);
			// Console.WriteLine(sjis);

			// 出力ファイルオープン（バイナリ形式）
			FileStream fs2 = new FileStream(fname2, FileMode.Create);
			// 書き込み設定（Shift-JIS）
			BinaryWriter bw = new
				BinaryWriter(fs2, encdest);

			// 出力ファイルへ全て書き込み
			bw.Write(bytesData);
			bw.Close();
			fs2.Close();

			return 0;
		}
		public static void readSplit(string filepathSrc)
		{
			//ファイルを開く
			System.IO.FileStream fs = new System.IO.FileStream(
				filepathSrc,
				System.IO.FileMode.Open,
				System.IO.FileAccess.Read);
			//ファイルを一時的に読み込むバイト型配列を作成する
			byte[] bs = new byte[0x1000];
			//ファイルをすべて読み込む
			for (; ; )
			{
				//ファイルの一部を読み込む
				int readSize = fs.Read(bs, 0, bs.Length);
				//ファイルをすべて読み込んだときは終了する
				if (readSize == 0)
					break;

				//部分的に読み込んだデータを使用したコードをここに記述する

			}
			//閉じる
			fs.Close();
		}
		//2019.07.18
		//解凍
		public static void CreateZip()
		{
			//ZIP書庫を作成
			System.IO.Compression.ZipFile.CreateFromDirectory(
				@"D:\workDdrive\タスク\サントリー指標化\20190711_キー指定入替、インポートテスト\CampaignAnalyze_UserMaster_20190711.csv",
				@"D:\workDdrive\タスク\サントリー指標化\20190711_キー指定入替、インポートテスト\CampaignAnalyze_UserMaster_20190711_2.zip",
				System.IO.Compression.CompressionLevel.Optimal,
				false,
				System.Text.Encoding.GetEncoding("shift_jis"));
		}
		public static void test()
		{
			string zipPath = @"c:\data\test.zip";
			zipPath = @"D:\workDdrive\タスク\サントリー指標化\20190711_キー指定入替、インポートテスト\CampaignAnalyze_UserMaster_20190711.zip";

			using (ZipArchive archive = ZipFile.OpenRead(zipPath))
			{
				foreach (ZipArchiveEntry entry in archive.Entries)
				{
					if (entry.FullName.EndsWith(".csv", StringComparison.OrdinalIgnoreCase))
					{
						Console.WriteLine(entry.FullName);

						System.Data.DataTable dataTable = new System.Data.DataTable();

						int intStart;

						string strBuff;

						System.Data.DataColumn objCol;


						using (StreamReader reader = new StreamReader(entry.Open()))
						{
							while (reader.Peek() > -1)
							{
								Console.WriteLine(reader.ReadLine());
							}
						}
					}
				}
			}

			Console.WriteLine("Please press any key to continue");
			Console.ReadKey();
		}
	}
}
