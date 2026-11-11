# Navigation: хуудас хооронд шилжих

## Navigator.push / pop

Хуудас бүр нэг widget. Шинэ хуудас руу орохдоо `push`, буцахдаа `pop`:

```dart
// Нүүр хуудас
ElevatedButton(
  onPressed: () {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const DetailPage()),
    );
  },
  child: const Text('Дэлгэрэнгүй'),
)

// Дэлгэрэнгүй хуудас
class DetailPage extends StatelessWidget {
  const DetailPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Дэлгэрэнгүй')), // ← буцах сум автоматаар гарна
      body: Center(
        child: ElevatedButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Буцах'),
        ),
      ),
    );
  }
}
```

## Өгөгдөл дамжуулах

Constructor-оор дамжуулна:

```dart
class DetailPage extends StatelessWidget {
  final String title;
  const DetailPage({super.key, required this.title});

  @override
  Widget build(BuildContext context) =>
      Scaffold(appBar: AppBar(title: Text(title)));
}

// Дуудах:
Navigator.push(
  context,
  MaterialPageRoute(builder: (_) => DetailPage(title: 'Болд')),
);
```

## Өгөгдөл буцаах

```dart
// Дуудагч тал
final result = await Navigator.push<String>(
  context,
  MaterialPageRoute(builder: (_) => const PickPage()),
);
print(result); // 'Сонгосон'

// PickPage дотор
Navigator.pop(context, 'Сонгосон');
```

## Нэрлэсэн route

Жижиг апп-д:

```dart
MaterialApp(
  initialRoute: '/',
  routes: {
    '/': (context) => const HomePage(),
    '/settings': (context) => const SettingsPage(),
  },
)

// Шилжих:
Navigator.pushNamed(context, '/settings');
```

## go_router (том апп-д)

Web URL, deep link хэрэгтэй бол `go_router` package-ийг хэрэглэнэ:

```bash
flutter pub add go_router
```

```dart
final router = GoRouter(routes: [
  GoRoute(path: '/', builder: (_, __) => const HomePage()),
  GoRoute(
    path: '/user/:id',
    builder: (_, state) => UserPage(id: state.pathParameters['id']!),
  ),
]);

// MaterialApp.router(routerConfig: router)
// context.go('/user/5');
```

## Даалгавар

Оюутны жагсаалтыг (`ListView.builder`) харуулаад нэгэн дээр дарахад тухайн оюутны нэр, оноог харуулсан хуудас руу шилжүүл.
