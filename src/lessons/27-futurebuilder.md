# FutureBuilder: API-г UI-д харуулах

Өгөгдөл ирэхийг хүлээж байх үед ачаалж байна, ирсний дараа жагсаалт, алдаа гарвал алдааны мессеж харуулна.

## FutureBuilder

```dart
class PostsPage extends StatefulWidget {
  const PostsPage({super.key});

  @override
  State<PostsPage> createState() => _PostsPageState();
}

class _PostsPageState extends State<PostsPage> {
  late Future<List<Post>> _future;

  @override
  void initState() {
    super.initState();
    _future = fetchPosts(); // нэг л удаа дуудна
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Нийтлэлүүд')),
      body: FutureBuilder<List<Post>>(
        future: _future,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          }
          if (snapshot.hasError) {
            return Center(child: Text('Алдаа: ${snapshot.error}'));
          }
          final posts = snapshot.data!;
          return ListView.builder(
            itemCount: posts.length,
            itemBuilder: (context, i) => ListTile(
              title: Text(posts[i].title),
              subtitle: Text(posts[i].body, maxLines: 2, overflow: TextOverflow.ellipsis),
            ),
          );
        },
      ),
    );
  }
}
```

## Хамгийн түгээмэл алдаа

```dart
// БУРУУ: build() бүрт шинэ хүсэлт илгээгдэнэ
FutureBuilder(future: fetchPosts(), ...)

// ЗӨВ: initState дотор нэг удаа үүсгэж хадгал
_future = fetchPosts();
FutureBuilder(future: _future, ...)
```

## Pull to refresh

```dart
RefreshIndicator(
  onRefresh: () async {
    setState(() => _future = fetchPosts());
    await _future;
  },
  child: ListView(...),
)
```

## 3 төлөв дандаа бодож бич

1. **Ачаалж байна** (spinner)
2. **Алдаа** (мессеж + "Дахин оролдох" товч)
3. **Амжилттай**, мөн хоосон жагсаалт бол "Мэдээлэл алга"

Дадал болгоход: сүлжээгүй үед ямар харагдахыг заавал шалга.

## Даалгавар

`PostsPage`-д "Дахин оролдох" товч нэм: алдаа гарвал `_future`-ийг дахин үүсгэнэ. Нэг нийтлэл дээр дарахад бүтэн `body`-г харуулах хуудас руу шилж.
