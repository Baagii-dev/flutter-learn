# State management: Provider

`setState` нэг widget дотор л ажилладаг. Апп томрохоор **олон хуудас нэг өгөгдөл хуваалцах** хэрэгтэй болно (жишээ нь сагс). Тэр үед state management хэрэглэнэ.

## Асуудал

Өгөгдлийг widget мод даган дамжуулбал (`A → B → C → D`) завсрын widget-үүд хэрэггүй параметр авч явах болно ("prop drilling").

## Provider

```bash
flutter pub add provider
```

### 1. Model (ChangeNotifier)

```dart
import 'package:flutter/foundation.dart';

class CartModel extends ChangeNotifier {
  final List<String> _items = [];

  List<String> get items => List.unmodifiable(_items);
  int get count => _items.length;

  void add(String item) {
    _items.add(item);
    notifyListeners(); // сонсогчдод мэдэгдэнэ
  }

  void remove(String item) {
    _items.remove(item);
    notifyListeners();
  }
}
```

### 2. Мод дээр суулгах

```dart
void main() {
  runApp(
    ChangeNotifierProvider(
      create: (_) => CartModel(),
      child: const MyApp(),
    ),
  );
}
```

### 3. Уншиж, дуудах

```dart
// Өөрчлөлтийг ХАРУУЛАХ (UI шинэчлэгдэнэ)
final count = context.watch<CartModel>().count;
Text('Сагс: $count')

// Зөвхөн ДУУДАХ (UI шинэчлэх шаардлагагүй, onPressed дотор)
ElevatedButton(
  onPressed: () => context.read<CartModel>().add('Алим'),
  child: const Text('Нэмэх'),
)
```

Өөрийн widget-ийн зөвхөн жижиг хэсгийг дахин зурахад `Consumer`:

```dart
Consumer<CartModel>(
  builder: (context, cart, child) => Text('${cart.count}'),
)
```

## Дүрэм

| Хаана | Юу |
|---|---|
| `build()` дотор | `context.watch` |
| `onPressed` гэх мэт callback дотор | `context.read` |

> `build()` дотор `context.read` ашиглавал UI шинэчлэгдэхгүй. `onPressed` дотор `context.watch` ашиглавал алдаа гарна.

## Дараа нь юу сурах вэ?

**Riverpod** (Provider-ийн дараагийн үеийн хувилбар) эсвэл **Bloc**. Үндсэн ойлголт (state-ийг UI-аас салгах) нь адил.

## Даалгавар

Counter-ийг Provider ашиглан дахин бич: `CounterModel` (`value`, `increment`, `decrement`). Хоёр өөр хуудсан дээр ижил тоог харуул, нэг дээрээс нь өөрчлөхөд хоёулаа шинэчлэгдэхийг шалга.
