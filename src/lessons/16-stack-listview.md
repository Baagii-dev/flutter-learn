# ListView, GridView, Stack

## ListView

Гүйлгэдэг жагсаалт. Нэгдүгээр арга нь тогтмол бага элементтэй үед:

```dart
ListView(
  children: const [
    ListTile(leading: Icon(Icons.person), title: Text('Болд')),
    ListTile(leading: Icon(Icons.person), title: Text('Сараа')),
  ],
)
```

## ListView.builder

Олон элементтэй (мянга мянган) үед **заавал** энийг хэрэглэ. Зөвхөн дэлгэц дээр харагдаж буйг л зурдаг тул хурдан:

```dart
final names = ['Болд', 'Сараа', 'Тэмүүлэн', 'Номин'];

ListView.builder(
  itemCount: names.length,
  itemBuilder: (context, index) {
    return ListTile(
      leading: CircleAvatar(child: Text('${index + 1}')),
      title: Text(names[index]),
      subtitle: const Text('Оюутан'),
      trailing: const Icon(Icons.chevron_right),
      onTap: () => print(names[index]),
    );
  },
)
```

## ListView.separated

```dart
ListView.separated(
  itemCount: names.length,
  separatorBuilder: (_, __) => const Divider(),
  itemBuilder: (context, i) => ListTile(title: Text(names[i])),
)
```

## GridView

```dart
GridView.count(
  crossAxisCount: 2,
  crossAxisSpacing: 8,
  mainAxisSpacing: 8,
  padding: const EdgeInsets.all(12),
  children: List.generate(6, (i) {
    return Container(
      color: Colors.primaries[i],
      child: Center(child: Text('$i')),
    );
  }),
)
```

## Stack

Widget-үүдийг бие биен дээр давхарлана:

```dart
Stack(
  alignment: Alignment.center,
  children: [
    Image.network('https://picsum.photos/300/200'),
    Positioned(
      bottom: 8,
      right: 8,
      child: Container(
        padding: const EdgeInsets.all(6),
        color: Colors.black54,
        child: const Text('Шошго', style: TextStyle(color: Colors.white)),
      ),
    ),
  ],
)
```

## Даалгавар

`List<String>` дэх 20 нэрийг `ListView.builder`-ээр харуул. Нэг дээр дарахад `print` хийдэг болго.
