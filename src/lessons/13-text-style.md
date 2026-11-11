# Text, Icon, Image, Button

## Text ба TextStyle

```dart
Text(
  'Сайн байна уу',
  style: TextStyle(
    fontSize: 24,
    fontWeight: FontWeight.bold,
    color: Colors.indigo,
    letterSpacing: 1.2,
  ),
  textAlign: TextAlign.center,
  maxLines: 2,
  overflow: TextOverflow.ellipsis,
)
```

Theme-ээс стиль авах нь илүү сайн арга:

```dart
Text('Гарчиг', style: Theme.of(context).textTheme.headlineMedium)
```

## Icon

```dart
Icon(Icons.favorite, color: Colors.red, size: 32)
```

Бүх icon-ы жагсаалт: [fonts.google.com/icons](https://fonts.google.com/icons)

## Image

```dart
// Интернэтээс
Image.network('https://picsum.photos/300/200')

// Төслийн дотор: pubspec.yaml-д assets бүртгэх шаардлагатай
Image.asset('assets/logo.png', width: 120)
```

`pubspec.yaml`:

```yaml
flutter:
  assets:
    - assets/logo.png
```

> Анхаар: `pubspec.yaml`-д **догол мөр (indent)** маш чухал. 2 зай ашигла.

## Товчнууд

```dart
ElevatedButton(
  onPressed: () => print('Дарлаа'),
  child: const Text('Үндсэн товч'),
)

TextButton(onPressed: () {}, child: const Text('Текст товч'))

OutlinedButton(onPressed: () {}, child: const Text('Хүрээтэй'))

IconButton(onPressed: () {}, icon: const Icon(Icons.add))

FloatingActionButton(onPressed: () {}, child: const Icon(Icons.add))
```

`onPressed: null` өгвөл товч идэвхгүй (саарал) болно.

## Даалгавар

Нэг `Scaffold`-н голд: том гарчиг `Text`, зураг, доор нь "Дарах" товч байрлуул. Товчийг дарахад консолд `print` хийдэг болго.
