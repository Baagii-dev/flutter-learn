# StatelessWidget ба StatefulWidget

## StatelessWidget

Өөрчлөгддөггүй UI. Өгөгдөл нь гаднаас орж ирнэ, дотроо ямар ч өөрчлөлт хийхгүй.

```dart
class Greeting extends StatelessWidget {
  final String name;
  const Greeting({super.key, required this.name});

  @override
  Widget build(BuildContext context) {
    return Text('Сайн уу, $name!');
  }
}

// Ашиглах:
// Greeting(name: 'Болд')
```

## StatefulWidget

Дотроо өөрчлөгддөг өгөгдөл (state)-тэй UI: тоолуур, checkbox, form гэх мэт.

```dart
class Counter extends StatefulWidget {
  const Counter({super.key});

  @override
  State<Counter> createState() => _CounterState();
}

class _CounterState extends State<Counter> {
  int count = 0;

  void increment() {
    setState(() {
      count++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text('$count', style: const TextStyle(fontSize: 48)),
        ElevatedButton(onPressed: increment, child: const Text('+1')),
      ],
    );
  }
}
```

## setState() яагаад хэрэгтэй вэ?

`count++` ганцаараа хувьсагчийг өөрчилнө, гэхдээ UI шинэчлэгдэхгүй. `setState(() { ... })` нь Flutter-д **"state өөрчлөгдлөө, build()-ийг дахин дууд"** гэж хэлнэ.

## Хэзээ аль нь вэ?

| Нөхцөл | Сонголт |
|---|---|
| Зөвхөн харуулах, параметрээр дамжуулах | `StatelessWidget` |
| Хэрэглэгч товчлоход өөрчлөгдөх | `StatefulWidget` |
| Form талбар, checkbox, switch | `StatefulWidget` |

## Түгээмэл алдаа

```dart
// БУРУУ: UI шинэчлэгдэхгүй
onPressed: () { count++; }

// ЗӨВ
onPressed: () { setState(() { count++; }); }
```

## Даалгавар

Counter-т `-1` товч нэм. Тоо 0-ээс доош орохгүй байхаар шалга. 10-аас дээш болбол тоог улаанаар харуул.
