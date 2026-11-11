# Flutter суулгах, анхны апп

## Суулгалт

1. [docs.flutter.dev/get-started/install](https://docs.flutter.dev/get-started/install) дээр өөрийн үйлдлийн системээ сонго.
2. Редактор: **VS Code** (Flutter + Dart extension) эсвэл Android Studio.
3. Терминалд шалга:

```bash
flutter doctor
```

Улаан ✗ тэмдэгтэй зүйл байвал `flutter doctor` яг юу хийхийг хэлж өгнө.

## Шинэ төсөл үүсгэх

```bash
flutter create my_first_app
cd my_first_app
flutter run
```

`flutter run` нь холбогдсон төхөөрөмж, эмулятор эсвэл Chrome-д сонгож ажиллуулна. Web-д шууд харахыг хүсвэл:

```bash
flutter run -d chrome
```

## Төслийн бүтэц

| Зам | Юу вэ |
|---|---|
| `lib/main.dart` | **Таны код энд бичигдэнэ** |
| `pubspec.yaml` | Package, зураг, фонтын тохиргоо |
| `android/`, `ios/`, `web/` | Платформын тусгай файл (ихэвчлэн хөндөхгүй) |
| `test/` | Тест |

## Hot reload

Код өөрчлөөд **`r`** (терминалд) эсвэл Save дарахад апп дахин эхлэхгүйгээр шууд шинэчлэгдэнэ. Энэ нь Flutter-ийн хамгийн том давуу тал.

- `r`: hot reload (state хадгалагдана)
- `R`: hot restart (state арилна)

## Даалгавар

1. `flutter create` хийж апп ажиллуул.
2. `lib/main.dart` дахь `Colors.deepPurple` өнгийг `Colors.teal` болгоод hot reload хий.
3. Counter-ийн `+` товчийг дарж ажиллаж байгааг шалга.
