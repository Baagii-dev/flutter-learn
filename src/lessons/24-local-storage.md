# Утга хадгалах (shared_preferences)

Апп хаагдаад дахин нээгдэхэд өгөгдөл үлдэх хэрэгтэй. Жижиг утгад (тохиргоо, нэр, тоо) `shared_preferences` хамгийн хялбар.

```bash
flutter pub add shared_preferences
```

## Хадгалах, унших

```dart
import 'package:shared_preferences/shared_preferences.dart';

Future<void> saveName(String name) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString('name', name);
}

Future<String> loadName() async {
  final prefs = await SharedPreferences.getInstance();
  return prefs.getString('name') ?? 'Зочин';
}
```

Төрлүүд: `setString`, `setInt`, `setBool`, `setDouble`, `setStringList`.

## Widget-д ашиглах

`initState` нь widget-ийг үүсгэхэд **нэг л удаа** дуудагдана:

```dart
class _CounterState extends State<Counter> {
  int count = 0;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final prefs = await SharedPreferences.getInstance();
    setState(() => count = prefs.getInt('count') ?? 0);
  }

  Future<void> _increment() async {
    setState(() => count++);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('count', count);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('$count'),
        ElevatedButton(onPressed: _increment, child: const Text('+')),
      ],
    );
  }
}
```

## Жагсаалт / объект хадгалах

JSON болгон хөрвүүлж `String` болгоно:

```dart
import 'dart:convert';

final todos = [
  {'title': 'Сурах', 'done': false},
];
await prefs.setString('todos', jsonEncode(todos));

final raw = prefs.getString('todos');
final List decoded = raw == null ? [] : jsonDecode(raw);
```

## Хэзээ юуг хэрэглэх вэ?

| Хэмжээ | Сонголт |
|---|---|
| Тохиргоо, жижиг утга | `shared_preferences` |
| Олон бичлэг, хайлт | `sqflite`, `drift`, `isar`, `hive` |
| Нууц мэдээлэл (token) | `flutter_secure_storage` |
| Олон төхөөрөмжөөр хуваалцах | Firebase / өөрийн сервер |

## Даалгавар

Хичээл 17-ийн Counter-ийг апп хаагдсаны дараа ч утгаа санадаг болго.
