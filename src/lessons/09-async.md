# Async, Future, await

Сүлжээнээс өгөгдөл татах, файл унших зэрэг ажил хугацаа шаарддаг. Тэр хооронд апп **гацах ёсгүй**. Үүний тулд Dart `Future` ашиглана.

## Future

`Future<T>` гэдэг нь "дараа нь T төрлийн утга ирнэ" гэсэн амлалт.

```dart
Future<String> fetchName() async {
  await Future.delayed(const Duration(seconds: 2));
  return 'Болд';
}

void main() async {
  print('Эхэллээ');
  final name = await fetchName();
  print('Нэр: $name');
  print('Дууслаа');
}
```

- `async`: функц дотор `await` ашиглахыг зөвшөөрнө.
- `await`: Future дуустал хүлээнэ (бусад зүйлийг гацаахгүйгээр).

## try / catch

```dart
Future<int> divideLater(int a, int b) async {
  await Future.delayed(const Duration(milliseconds: 500));
  if (b == 0) throw Exception('0-д хуваах боломжгүй');
  return a ~/ b;
}

void main() async {
  try {
    print(await divideLater(10, 2));
    print(await divideLater(5, 0));
  } catch (e) {
    print('Алдаа: $e');
  } finally {
    print('Дууслаа');
  }
}
```

## Stream (товчоор)

`Future` нэг утга өгнө, `Stream` олон утгыг цаг хугацаанд нь өгнө:

```dart
Stream<int> countdown() async* {
  for (int i = 3; i >= 1; i--) {
    await Future.delayed(const Duration(seconds: 1));
    yield i;
  }
}

void main() async {
  await for (final n in countdown()) {
    print(n);
  }
}
```

## Flutter-д хаана тааралдах вэ?

HTTP хүсэлт, мэдээллийн сан, `FutureBuilder` widget. Хичээл 27-д дахин уулзана.

## Даалгавар

`Future<int> slowSquare(int n)` функц бич: 1 секунд хүлээгээд `n * n` буцаа. `main`-д `await`-ээр дуудаад хариуг хэвлэ.
