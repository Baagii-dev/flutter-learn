# HTTP ба JSON

Интернэтийн API-аас өгөгдөл татахыг сурна.

```bash
flutter pub add http
```

## JSON гэж юу вэ?

API ихэвчлэн JSON хэлбэрээр хариу өгнө:

```json
{ "id": 1, "title": "Сайн уу", "completed": false }
```

Dart-д `Map<String, dynamic>` болж хөрвөнө.

## Класс руу хөрвүүлэх

```dart
class Post {
  final int id;
  final String title;
  final String body;

  const Post({required this.id, required this.title, required this.body});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      id: json['id'] as int,
      title: json['title'] as String,
      body: json['body'] as String,
    );
  }
}
```

## GET хүсэлт

Үнэгүй туршилтын API: `jsonplaceholder.typicode.com`

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;

Future<List<Post>> fetchPosts() async {
  final uri = Uri.parse('https://jsonplaceholder.typicode.com/posts');
  final response = await http.get(uri);

  if (response.statusCode != 200) {
    throw Exception('Алдаа: ${response.statusCode}');
  }

  final List data = jsonDecode(response.body);
  return data.map((e) => Post.fromJson(e)).toList();
}
```

## POST хүсэлт

```dart
Future<void> createPost(String title) async {
  final response = await http.post(
    Uri.parse('https://jsonplaceholder.typicode.com/posts'),
    headers: {'Content-Type': 'application/json'},
    body: jsonEncode({'title': title, 'body': 'тест', 'userId': 1}),
  );
  print(response.statusCode); // 201
}
```

## Android/iOS нэмэлт тохиргоо

- **Android**: `android/app/src/main/AndroidManifest.xml` дотор `<uses-permission android:name="android.permission.INTERNET"/>` нэм (debug-д ихэвчлэн аль хэдийн байдаг).
- **macOS апп**: `macos/Runner/*.entitlements`-д `com.apple.security.network.client` = `true`.

## Түгээмэл статус кодууд

| Код | Утга |
|---|---|
| 200 | Амжилттай |
| 201 | Үүссэн |
| 400 | Буруу хүсэлт |
| 401/403 | Нэвтрээгүй / эрхгүй |
| 404 | Олдсонгүй |
| 500 | Серверийн алдаа |

## Даалгавар

`fetchPosts()`-ийг `main()`-д дуудаад эхний 5 гарчгийг `print` хий. UI-д гаргахыг дараагийн хичээлд хийнэ.
