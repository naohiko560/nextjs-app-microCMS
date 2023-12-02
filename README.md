![ヘッダー画像](/docs/images/header.png)

<br>

## 制作物のURL

https://nhackblog.com/

<br>

## 制作の動機

- Next.jsの新機能であるappディレクトリの理解を深めるため、この技術を用いての制作を決定しました。
- 自身が慣れ親しんでいるサイト制作をテーマにすることで、より理解が早く、深くなると考えました。
- 日々調べごとなどインプットの機会が多いので、今後アウトプットしていく媒体として活用する予定です。

<br>

## 制作物のイメージ
![制作物のイメージ](/docs/images/app_view.gif)

<br>

## 機能一覧
| トップ画面 |　記事詳細画面 |
| ---- | ---- |
| ![トップ画面](/docs/images/design_top.png) | ![記事詳細画面](/docs/images/design_detail.png) |
| 投稿した記事一覧が表示されるブログによく見られるデザインを採用しました。 | microCMSで投稿した更新日・タイトル・記事内容が反映されるように実装しました。 |

| コードのハイライト機能 |　記事投稿画面（microCMS） |
| ---- | ---- |
| ![コードのハイライト機能](/docs/images/design_highlight.png) | ![　記事投稿画面（microCMS）](/docs/images/design_posts.png) |
| 技術ブログを想定している為、コードを投稿するとハイライト表示される機能を実装しました。 | 日本製のヘッドレスCMSを採用して使いやすさを考慮しました。記事投稿すると「webhook通知 → Github Actions」によりサイトが自動更新されます。 |

<br>

## 使用技術

| カテゴリ          | 技術スタック                                     |
| ----------------- | --------------------------------------------------   |
| フロントエンド          | TypeScript, Next.js, tailwind CSS                       |
| インフラ    | firebase                          |
| CI/CD             | GitHub Actions                                       |
| デザイン            | Figma                                         |
| その他              | Git, GitHub, microCMS, ESLint, Prettier |

<br>

<!-- ## システム構成図

![システム構成図](/docs/images/system_architecture.png)

<br> -->

<!-- ## ER図

![ER図](/docs/images/entity-relationship-diagram.png)

<br> -->

## 今後の展望

- 現在は使用した言語やフレームワークの使用感を試しつつ、ブログの作成・投稿機能の開発を完了しました。
- これからインプットした知識を定着させる為の技術ブログとして活用しつつ、訪問者が問題解決できるサイトを目指します。
- 今後は記事詳細ページにコメント投稿・いいね機能など、動的な機能の実装を充実させていく予定です。
