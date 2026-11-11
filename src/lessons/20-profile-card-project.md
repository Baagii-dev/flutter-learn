# Төсөл 1: Профайл карт

Хичээл 11-19-ийн мэдлэгээ нэгтгэнэ. Доорх апп-ыг **өөрөө** хий.

## Зорилго

- Дээр нь AppBar
- Голд нь дугуй зураг (`CircleAvatar`), нэр, мэргэжил
- Доор нь холбоо барих 3 мөр (утас, и-мэйл, хаяг) `ListTile`-ээр
- "Дагах" товч: дарахад "Дагасан ✓" болж өнгө нь солигдоно (`StatefulWidget`)
- Дагагчдын тоо: дагахад +1, дахин дарахад -1

## Жишиг код

Эхлээд өөрөө хийж үз. Түгжигдвэл доорхыг ашигла.

```dart
import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        useMaterial3: true,
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
      ),
      home: const ProfilePage(),
    );
  }
}

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  bool following = false;
  int followers = 120;

  void toggle() {
    setState(() {
      following = !following;
      followers += following ? 1 : -1;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Профайл')),
      body: Padding(
        padding: const EdgeInsets.all(24),
        child: Column(
          children: [
            const CircleAvatar(radius: 48, child: Icon(Icons.person, size: 48)),
            const SizedBox(height: 16),
            Text('Болд', style: Theme.of(context).textTheme.headlineSmall),
            const Text('Flutter хөгжүүлэгч'),
            const SizedBox(height: 8),
            Text('$followers дагагч'),
            const SizedBox(height: 16),
            FilledButton(
              onPressed: toggle,
              child: Text(following ? 'Дагасан ✓' : 'Дагах'),
            ),
            const SizedBox(height: 24),
            const ListTile(leading: Icon(Icons.phone), title: Text('+976 9911 0000')),
            const ListTile(leading: Icon(Icons.email), title: Text('bold@example.com')),
            const ListTile(leading: Icon(Icons.location_on), title: Text('Улаанбаатар')),
          ],
        ),
      ),
    );
  }
}
```

## Өргөтгөл (заавал хий)

1. Профайлын мэдээллийг `Map`/класс болгож, `ListView.builder`-ээр хэд хэдэн хүний карт харуул.
2. Карт болгоныг тусдаа `ProfileCard` widget болгож салга.
3. Dark mode-д зөв харагдаж байгааг шалга.

> Widget салгах дадал чухал: **widget том болбол жижиг widget-үүд болгон хуваа.**
