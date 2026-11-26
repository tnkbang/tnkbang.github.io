# CSV Editor

<div align="center">

![Version](https://img.shields.io/badge/Version-3.1.0.0-2563eb)
![.NET 8](https://img.shields.io/badge/.NET-8.0-512bd4)
![Platform](https://img.shields.io/badge/Platform-Windows%2010%2F11-0ea5e9)
![License](https://img.shields.io/badge/License-CSVEditor%20v1.0-059669)

**Windows向けの正確で快適なCSV・TSV・区切りテキスト専用エディタ**

[公式サイト](https://tnkbang.github.io/CSVEditor/) · [ドキュメント](https://tnkbang.github.io/CSVEditor/docs.html) · [更新履歴](https://tnkbang.github.io/CSVEditor/changelog.html) · [問題を報告](https://github.com/tnkbang/CSVEditor/issues)

[English](README.md) | [Tiếng Việt](README_Vi.md) | 日本語

</div>

---

## 概要

**CSV Editor**は、**.NET 8**と**Windows Forms**で構築された（**外部NuGet依存なし**の）Windowsデスクトップアプリケーションです。先頭ゼロ・日付・文字コード・行単位の改行コードを損なうことなく、快適な表計算操作を提供します。

## 主な機能（v3.1.0.0）

- **HyperSheetグリッド**: 複数範囲選択（`Ctrl`/`Shift`）、セル内改行編集（`Alt+Enter`）、入力候補（Auto-Suggest）、行列固定、非表示/再表示、自動幅調整、ズーム（50%〜500%）。
- **Excel風オートフィル**: フィルハンドルのドラッグ・ダブルクリックに対応。和暦・日本語日付（全角正規化対応）を含む9種の入力戦略と連続データ/コピー切替を搭載。
- **検索・置換・ソート・フィルタ**: 部分一致・完全一致・前方/後方一致・正規表現・**SQL `WHERE`**（一致行フィルタ対応）の6検索モード、複数列値フィルタ、4種ソート（昇順・降順・自然順・シャッフル）。
- **リアルタイムデータ検証**: 引用符不整合・末尾スペース・未クォート改行/区切り文字・先頭ゼロなど8つの設定可能ルールと、エラーパネル＆クイック修正。
- **64文字コード＆改行コード管理**: 14グループ（Unicode、日本語、中国語、韓国語、欧州、ベトナム語5種、タイ語）の自動判定、行ごとの改行管理（`CR LF`/`LF`/`CR`）、オプションの改行コード表示列。
- **データ構造と安全性**: チャンク格納（`DataChunk`）、`StringPool` + `Utf8ByteArena`、仮想行列マッピング、操作前メモリ保護（`MemoryManager`）、安全なアトミック保存（`SafeFileWriter`）、メモリ上限管理付きUndo/Redo。
- **内蔵ツール＆カスタマイズ**: マルチタブ、URLから開く、Excel不要のOpenXML `.xlsx`出力、ファイル結合、AES-128-CBC暗号化、ビューポート画像コピー、独立ストップウォッチ、ライト/ダークテーマ、ライブプレビュー付き8ページ設定画面。
- **多言語UI**: **ベトナム語**・**英語**・**日本語**を即時切替。

## ダウンロードと動作環境

- **OS**: Windows 10 / 11
- **ランタイム**: [.NET 8.0 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/8.0)
- **ダウンロード**:
  - [ポータブル版 (.zip)](https://tnkbang.github.io/CSVEditor/data/CSVEditor-portable.zip) — インストール不要
  - [インストーラー版 (.exe)](https://tnkbang.github.io/CSVEditor/data/CSVEditor%20Setup.exe) — 標準セットアップ

## ドキュメント

詳細な操作手順・ショートカット一覧・文字コード仕様・トラブルシューティングは公式サイトをご覧ください：

- **製品紹介**: https://tnkbang.github.io/CSVEditor/
- **ユーザーガイド**: https://tnkbang.github.io/CSVEditor/docs.html
- **更新履歴**: https://tnkbang.github.io/CSVEditor/changelog.html

## ソースからのビルド

```bash
git clone https://github.com/tnkbang/CSVEditor.git
cd CSVEditor
dotnet build CSVEditor.sln -c ReleasePortable
```

## ライセンス

**CSVEditor Software License v1.0** — 個人・教育・社内業務利用は無料、出力ファイルの権利はすべてユーザーに帰属します。ソフトウェアの商用販売・商用再配布は禁止されています。詳細は [LICENSE](LICENSE) をご覧ください。

## 連絡先

- GitHub: [@tnkbang](https://github.com/tnkbang)
- Email: tnkbang.dev@gmail.com
